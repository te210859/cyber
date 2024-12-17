'use strict';
/*座標、幅、高さを持つクラス*/ 
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
/*当たり判定*/
    hitTest(other) {
        const horizontal = (other.x < this.x + this.width) &&
            (this.x < other.x + other.width);
        const vertical = (other.y < this.y + this.height) &&
            (this.y < other.y + other.height);
        return (horizontal && vertical);
    }
}
/*2D画像*/
class Sprite {
    constructor(image, rectangle) {
        this.image = image;
        this.rectangle = rectangle;
    }
}
/*画像を読み込むクラス*/
class AssetLoader {
    constructor() {
        this._promises = [];
        this._assets = new Map();
    }

    addImage(name, url) {
        const img = new Image();
        img.src = url;

        const promise = new Promise((resolve, reject) =>
            img.addEventListener('load', (e) => {
                this._assets.set(name, img);
                resolve(img);
            }));

        this._promises.push(promise);
    }
    
    loadAll() {
        return Promise.all(this._promises).then((p) => this._assets);
    }
    /*読み込んだ画像の取り出し*/
    get(name) {
        return this._assets.get(name);
    }
}

const assets = new AssetLoader();


/*コールバック関数を登録し、イベントが起こった際にコールバック関数を実行する*/
class EventDispatcher {
    constructor() {
        this._eventListeners = {};
    }

    addEventListener(type, callback) {
        if(this._eventListeners[type] == undefined) {
            this._eventListeners[type] = [];
        }

        this._eventListeners[type].push(callback);
    }

    dispatchEvent(type, event) {
        const listeners = this._eventListeners[type];
        if(listeners != undefined) listeners.forEach((callback) => callback(event));
    }
}


class GameEvent {
    constructor(target) {
        this.target = target;
    }
}




/**EventDispatcherクラスを継承したゲームキャラクターの集合 */
class Actor extends EventDispatcher {
    constructor(x, y, hitArea, tags = []) {
        super();
        this.hitArea = hitArea;
        this._hitAreaOffsetX = hitArea.x;
        this._hitAreaOffsetY = hitArea.y;
        this.tags = tags;

        this.x = x;
        this.y = y;
    }
    
    update(gameInfo, input) {}

    render(target) {}

    hasTag(tagName) {
        return this.tags.includes(tagName);
    }

    spawnActor(actor) {
        this.dispatchEvent('spawnactor', new GameEvent(actor));
    }

    destroy() {
        this.dispatchEvent('destroy', new GameEvent(this));
    }
    
    get x() {
        return this._x;
    }
    
    set x(value) {
        this._x = value;
        this.hitArea.x = value + this._hitAreaOffsetX;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
        this.hitArea.y = value + this._hitAreaOffsetY;
    }
}

/**spriteごとの幅・高さを持つことと、具体的なrenderメソッドを記述できること */
class SpriteActor extends Actor {
    constructor(x, y, sprite, hitArea, tags=[]) {
        super(x, y, hitArea, tags);
        this.sprite = sprite;
        this.width = sprite.rectangle.width;
        this.height = sprite.rectangle.height;
    }
    
    render(target) {
        const context = target.getContext('2d');
        const rect = this.sprite.rectangle;
        context.drawImage(this.sprite.image,
            rect.x, rect.y,
            rect.width, rect.height,
            this.x, this.y,
            rect.width, rect.height);
    }
    
    isOutOfBounds(boundRect) {
        const actorLeft = this.x;
        const actorRight = this.x + this.width;
        const actorTop = this.y;
        const actorBottom = this.y + this.height;

        const horizontal = (actorRight < boundRect.x || actorLeft > boundRect.width);
        const vertical = (actorBottom < boundRect.y || actorTop > boundRect.height);

        return (horizontal || vertical);
    }
}

class Input {
    constructor(keyMap, prevKeyMap) {
        this.keyMap = keyMap;
        this.prevKeyMap = prevKeyMap;
    }

    _getKeyFromMap(keyName, map) {
        if(map.has(keyName)) {
            return map.get(keyName);
        } else {
            return false;
        }
    }

    _getPrevKey(keyName) {
        return this._getKeyFromMap(keyName, this.prevKeyMap);
    }
    /**今キーを押しているかどうか */
    getKey(keyName) {
        return this._getKeyFromMap(keyName, this.keyMap);
    }
    /**キーを押し込んだかどうかを判定する */
    getKeyDown(keyName) {
        const prevDown = this._getPrevKey(keyName);
        const currentDown = this.getKey(keyName);
        return (!prevDown && currentDown);
    }
    /**キーを離したかどうか */
    getKeyUp(keyName) {
        const prevDown = this._getPrevKey(keyName);
        const currentDown = this.getKey(keyName);
        return (prevDown && !currentDown);
    }
}
/**キー入力を検知してinputクラスを生成するクラス */
class InputReceiver {
    constructor() {
        this._keyMap = new Map();
        this._prevKeyMap = new Map();

        addEventListener('keydown', (ke) => this._keyMap.set(ke.key, true));
        addEventListener('keyup', (ke) => this._keyMap.set(ke.key, false));
    }

    getInput() {
        const keyMap = new Map(this._keyMap);
        const prevKeyMap = new Map(this._prevKeyMap);
        this._prevKeyMap = new Map(this._keyMap);
        return new Input(keyMap, prevKeyMap);
    }
}
/*actorたちを保持（削除、追加）、actorの更新、当たり判定の処理、actorのイベント処理 */
class Scene extends EventDispatcher {
    constructor(name, backgroundColor, renderingTarget) {
        super();

        this.name = name;
        this.backgroundColor = backgroundColor;
        this.actors = [];
        this.renderingTarget = renderingTarget;

        this._destroyedActors = [];
    }
    /**actorの追加 */
    add(actor) {
        this.actors.push(actor);
        actor.addEventListener('spawnactor', (e) => this.add(e.target));
        actor.addEventListener('destroy', (e) => this._addDestroyedActor(e.target));
    }

    remove(actor) {
        const index = this.actors.indexOf(actor);
        this.actors.splice(index, 1);
    }
    
    changeScene(newScene) {
        const event = new GameEvent(newScene);
        this.dispatchEvent('changescene', event);
    }

    update(gameInfo, input) {
        this._updateAll(gameInfo, input);
        this._hitTest();
        this._disposeDestroyedActors();
        this._clearScreen(gameInfo);
        this._renderAll();
    }

    _updateAll(gameInfo, input) {
        this.actors.forEach((actor) => actor.update(gameInfo, input));
    }
    /**actorは100個までの制限 */
    _hitTest() {
        const length = this.actors.length;
        for(let i=0; i < length - 1; i++) {
            for(let j=i+1; j < length; j++) {
                const obj1 = this.actors[i];
                const obj2 = this.actors[j];
                const hit = obj1.hitArea.hitTest(obj2.hitArea);
                if(hit) {
                    obj1.dispatchEvent('hit', new GameEvent(obj2));
                    obj2.dispatchEvent('hit', new GameEvent(obj1));
                }
            }
        }
    }

    _clearScreen(gameInfo) {
        const context = this.renderingTarget.getContext('2d');
        const width = gameInfo.screenRectangle.width;
        const height = gameInfo.screenRectangle.height;
        context.fillStyle = this.backgroundColor;
        context.fillRect(0, 0, width, height);
    }

    _renderAll() {
        this.actors.forEach((obj) => obj.render(this.renderingTarget));
    }

    _addDestroyedActor(actor) {
        this._destroyedActors.push(actor);
    }

    _disposeDestroyedActors() {
        this._destroyedActors.forEach((actor) => this.remove(actor));
        this._destroyedActors = [];
    }
}
/**ActorやSceneのupdateに渡すゲーム情報クラスを作りましょう。 */
/**情報は適宜増やしたり減らしてりしてください。 */
class GameInformation {
    constructor(title, screenRectangle, maxFps, currentFps) {
        this.title = title;
        this.screenRectangle = screenRectangle;
        this.maxFps = maxFps;
        this.currentFps = currentFps;
    }
}

/*Gameクラスのループが始まるとSceneのupdateメソッドが呼びだされます。*/
/*そしてSceneは各Actorのupdateを呼び出し……という仕組みでゲーム全体が動きます。*/
class Game {
    constructor(title, width, height, maxFps) {
        this.title = title;
        this.width = width;
        this.height = height;
        this.maxFps = maxFps;
        this.currentFps = 0;

        this.screenCanvas = document.createElement('canvas');
        this.screenCanvas.height = height;
        this.screenCanvas.width = width;

        this._inputReceiver = new InputReceiver();
        this._prevTimestamp = 0;

        console.log(`${title}が初期化されました。`);
    }

    changeScene(newScene) {
        this.currentScene = newScene;
        this.currentScene.addEventListener('changescene', (e) => this.changeScene(e.target));
        console.log(`シーンが${newScene.name}に切り替わりました。`);
    }

    start() {
        requestAnimationFrame(this._loop.bind(this));
    }

    _loop(timestamp) {
        const elapsedSec = (timestamp - this._prevTimestamp) / 1000;
        const accuracy = 0.9; // あまり厳密にするとフレームが飛ばされることがあるので
        const frameTime = 1 / this.maxFps * accuracy; // 精度を落とす
        if(elapsedSec <= frameTime) {
            requestAnimationFrame(this._loop.bind(this));
            return;
        }

        this._prevTimestamp = timestamp;
        this.currentFps = 1 / elapsedSec;

        const screenRectangle = new Rectangle(0, 0, this.width, this.height);
        const info = new GameInformation(this.title, screenRectangle,
                                         this.maxFps, this.currentFps);
        const input = this._inputReceiver.getInput();
        this.currentScene.update(info, input);

        requestAnimationFrame(this._loop.bind(this));
    }
}