'use strict';

class TextLabel extends Actor {
    constructor(x, y, text) {
        const hitArea = new Rectangle(0, 0, 0, 0);
        super(x, y, hitArea);
        
        this.text = text;
    }

    render(target) {
        const context = target.getContext('2d');
        context.font = '25px sans-serif';
        context.fillStyle = 'white';
        context.fillText(this.text, this.x, this.y);
    }
}

class Bullet extends SpriteActor {
    constructor(x, y) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(0, 16, 16, 16));
        const hitArea = new Rectangle(4, 0, 8, 16);
        super(x, y, sprite, hitArea, ['playerBullet']);

        this._speed = 6;

        // 敵に当たったら消える
        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('enemy')) { this.destroy(); } 
        });
    }

    update(gameInfo, input) {
        this.y -= this._speed;
        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}

class Fighter extends SpriteActor {
    constructor(x, y) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(0, 0, 16, 16));
        const hitArea = new Rectangle(8, 8, 2, 2);
        super(x, y, sprite, hitArea);

        this._interval = 5;
        this._timeCount = 0;
        this._speed = 3;
        this._velocityX = 0;
        this._velocityY = 0;
        
        // 敵の弾に当たったらdestroyする
        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('enemyBullet')) {
               this.destroy();
           } 
        });
    }
    
    update(gameInfo, input) {
        // キーを押されたら移動する
        this._velocityX = 0;
        this._velocityY = 0;

        if(input.getKey('ArrowUp')) { this._velocityY = -this._speed; }
        if(input.getKey('ArrowDown')) { this._velocityY = this._speed; }
        if(input.getKey('ArrowRight')) { this._velocityX = this._speed; }
        if(input.getKey('ArrowLeft')) { this._velocityX = -this._speed; }
        
        this.x += this._velocityX;
        this.y += this._velocityY;

        // 画面外に行ってしまったら押し戻す
        const boundWidth = gameInfo.screenRectangle.width - this.width;
        const boundHeight = gameInfo.screenRectangle.height - this.height;
        const bound = new Rectangle(this.width, this.height, boundWidth, boundHeight);
        
        if(this.isOutOfBounds(bound)) {
            this.x -= this._velocityX;
            this.y -= this._velocityY;
        }

        // スペースキーで弾を打つ
        this._timeCount++;
        const isFireReady = this._timeCount > this._interval;
        if(isFireReady && input.getKey(' ')) {
            const bullet = new Bullet(this.x, this.y);
            this.spawnActor(bullet);
            this._timeCount = 0;
        }
    }
}

class EnemyBullet extends SpriteActor {
    constructor(x, y, velocityX, velocityY) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(0, 32, 16, 16));
        const hitArea = new Rectangle(4, 4, 8, 8);
        super(x, y, sprite, hitArea, ['enemyBullet']);

        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    update(gameInfo, input) {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}

class EnemyBullet2 extends SpriteActor {
    constructor(x, y, velocityX, velocityY) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(0, 32, 16, 16));
        super(x, y, sprite, null, ['enemyBullet']); // hitArea を null に設定

        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    update(gameInfo, input) {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}


class Enemy extends SpriteActor {
    constructor(x, y) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(16, 0, 128, 128));
        const hitArea = new Rectangle(16, 0, 128, 128);
        super(x, y, sprite, hitArea, ['enemy']);

        this.maxHp = 150;
        this.currentHp = this.maxHp;

        this._interval = 120;
        this._timeCount = 0;
        this._velocityX = 0.3;
        //this.velocityY = velocityY;
        //this.duration = duration; // 持続時間
        //this.timeAlive = 0; // 現在の生存時間

        // プレイヤーの弾に当たったらHPを減らす
        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('playerBullet')) {
               this.currentHp--;
               this.dispatchEvent('changehp', new GameEvent(this));
           }
        });
    }

    // degree度の方向にspeedの速さで弾を発射する
    shootBullet(degree, speed) {
        const rad = degree / 180 * Math.PI;
        const velocityX = Math.cos(rad) * speed;
        const velocityY = Math.sin(rad) * speed;
        
        const bullet = new EnemyBullet(this.x, this.y, velocityX, velocityY);
        this.spawnActor(bullet);
    }


    // ジグザグ軌道の弾を発射する
    shootZigzagBullet(degree, speed, amplitude, frequency) {
    const rad = degree / 180 * Math.PI;
    const baseVelocityX = Math.cos(rad) * speed;
    const baseVelocityY = Math.sin(rad) * speed;
    let time = 0;

    const bullet = new EnemyBullet(this.x, this.y, baseVelocityX, baseVelocityY);
    bullet.update = function() {
        time += 1;
        this.x += this.velocityX;
        this.y += this.velocityY + Math.sin(time * frequency) * amplitude;
    };
    this.spawnActor(bullet);
    }

    // degree度の方向にspeedの速さで、2秒間持続するレーザーを発射する
    shootLaser(degree, speed) {
        const rad = degree / 180 * Math.PI;
        const velocityX = Math.cos(rad) * speed;
        const velocityY = Math.sin(rad) * speed;
    
        const laser = new Laser(this.x, this.y, velocityX, velocityY, 2); // 2秒の持続時間
        this.spawnActor(laser);
    }


    // num個の弾を円形に発射する
    shootCircularBullets(num, speed) {
        const degree = 360 / num;
        for(let i = 0; i < num; i++) {
            this.shootBullet(degree * i, speed);
        }
    }

    // 追尾弾
    shootHomingBullet(target) {
        const bullet = new HomingBullet(this.x, this.y, 0, -1, target);
        this.spawnActor(bullet);
    }
    
    // 吹き出しを表示するメソッド
showSpeechBubble(comment) {
    // 吹き出しの要素を作成
    const bubble = document.createElement("div");
    bubble.textContent = comment;

    // 吹き出しの位置を画面中央上部に固定
    bubble.style.position = "absolute";
    bubble.style.left = "50%"; // 水平方向で中央
    bubble.style.top = "300px"; // 画面上部の余白
    bubble.style.transform = "translateX(-50%)"; // 中央揃え
    bubble.style.zIndex = "1000"; // 他の要素より前面に表示

    // 吹き出しのドット風デザイン
    bubble.style.padding = "30px";
    bubble.style.backgroundColor = "black"; // 吹き出し背景色
    bubble.style.color = "red"; // テキスト色
    bubble.style.border = "2px solid white"; // ドット枠
    bubble.style.borderRadius = "4px"; // 四角に近い形
    bubble.style.fontSize = "16px"; // ドット風の文字サイズ
    bubble.style.fontFamily = "'Press Start 2P', monospace"; // ドット風フォント
    bubble.style.boxShadow = "2px 2px 0px white"; // ドット風の影
    bubble.style.whiteSpace = "nowrap"; // テキスト折り返しなし

    // 吹き出しを画面に追加
    document.body.appendChild(bubble);
        // 吹き出しを数秒後に削除
    setTimeout(() => {
            document.body.removeChild(bubble);
        }, 3000); // 3秒後に吹き出しを消す
    }   
    update(gameInfo, input) {
        
        // インターバルを経過していたら弾を撃つ
        this._timeCount++;
        if (this._timeCount > this._interval) {
            // インターバル超えた場合に弾を撃つ

            /*this.shootHomingBullet(gameInfo.fighter);*/
            this.shootCircularBullets(15, 1);
            this.shootCircularBullets(14, 2);
            this.shootCircularBullets(5, 3);
            this.shootCircularBullets(13, 1);
            this.shootCircularBullets(12, 1);
            this.shootCircularBullets(11, 3);
            this.shootCircularBullets(10, 1);
            this.shootCircularBullets(9, 2);
            this.shootCircularBullets(8, 3);
            this._timeCount = 0;
            
            
            // インターバルを超えた際に動きを停止
            this._velocityX = 0;
    
            // 5秒後に再度動かす
            setTimeout(() => {
                this._velocityX = 1;  // 動きを再開する速度を設定（必要に応じて調整）
            }, 100); // 5秒後に動きを再開
        }
    
        // 左右に移動する
        this.x += this._velocityX;
        if (this.x <= 100 || this.x >= 500) {
            this._velocityX *= -2;
        }
         // HPが150以下になったときに吹き出しを表示
        if (this.currentHp <= 150 && !this.commentDisplayed150) {
            this.showSpeechBubble("まだまだ終わらないぞ！");
            this.commentDisplayed150 = true;
        }

        // HPが50以下になったときに吹き出しを表示
        if (this.currentHp <= 50 && !this.commentDisplayed50) {
            this.showSpeechBubble("これで最後だ！");
            this.commentDisplayed50 = true;
        }
        /*
        // HPが50以下になったときに吹き出しを表示
        if (this.currentHp <= 150 && this.commentDisplayed50 && this.commentDisplayed150) {
            this.showSpeechBubble("ふっかつ");
            this.commentDisplayed1 = true;
        }*/

        if(this.currentHp == 148 /*&&  !this.hasUpdated*/) {
            //　角度、弾速、振れ幅、揺れる速度
            const baseAngle = 90; // 中心の角度
            const angleSpread = 30; // 角度の広がり
            const speeds = [5, 7, 10, 12]; // 弾の速度リスト
            const amplitude = 10; // 振れ幅
            const frequency = 5.5; // 揺れる速度

            // 複数の速度で弾を発射
            speeds.forEach(speed => {
            for (let i = -angleSpread; i <= angleSpread; i += 5) { // 角度を5度刻みで増やす
                const angle = baseAngle + i;
                this.shootZigzagBullet(angle, speed, amplitude, frequency);
            }
        })
        
            this.shootLaser(85,100);
        
        ;

            //this.hasUpdated = true;
            this.currentHp = this.currentHp - 1;
        }

        if(this.currentHp == 45 /*&&  !this.hasUpdated*/) {
            //　角度、弾速、振れ幅、揺れる速度
            const baseAngle = 90; // 中心の角度
            const angleSpread = 80; // 角度の広がり
            const speeds = [1, 3, 5, 7]; // 弾の速度リスト
            const amplitude = 10; // 振れ幅
            const frequency = 5.5; // 揺れる速度

            // 複数の速度で弾を発射
            speeds.forEach(speed => {
            for (let i = -angleSpread; i <= angleSpread; i += 5) { // 角度を5度刻みで増やす
                const angle = baseAngle + i;
                this.shootZigzagBullet(angle, speed, amplitude, frequency);
            }
        });

            //this.hasUpdated = true;
            this.currentHp = this.currentHp - 1;
        }
        if(this.currentHp == 1 && !this.hasupdated){
            this.currentHp = 150;
            this.hasupdated = true;
        }
    
        // HPがゼロになったらdestroyする
        if (this.currentHp <= 0) {
            this.destroy();
        }
    }
}

class EnemyHpBar extends Actor {
    constructor(x, y, enemy) {
        const hitArea = new Rectangle(0, 0, 0, 0);
        super(x, y, hitArea);

        this._width = 500;
        this._height = 10;
        
        this._innerWidth = this._width;

        // 敵のHPが変わったら内側の長さを変更する
        enemy.addEventListener('changehp', (e) => {
            const maxHp = e.target.maxHp;
            const hp = e.target.currentHp;
            this._innerWidth = this._width * (hp / maxHp);
        });
    }

    render(target) {
        const context = target.getContext('2d');
        context.strokeStyle = 'white';
        context.fillStyle = 'white';
        
        context.strokeRect(this.x, this.y, this._width, this._height);
        context.fillRect(this.x, this.y, this._innerWidth, this._height);
    }
}

class DanmakuStgEndScene extends Scene {
    constructor(renderingTarget) {
        super('クリア', 'black', renderingTarget);
        const text = new TextLabel(215, 300, 'ゲームクリア！');
        const uls = new TextLabel(150, 600, 'しかしウイルスに感染しました');
        this.add(text);
        this.add(uls)
    }
}

class DanmakuStgGameOverScene extends Scene {
    constructor(renderingTarget, nextUrl) {
        super('ウイルスに感染しました', 'red', renderingTarget);
        const text = new TextLabel(150, 300, 'ウイルスに感染しました');
        this.add(text);
        

       
    }
}


class DanmakuStgMainScene extends Scene {
    constructor(renderingTarget) {
        super('メイン', 'black', renderingTarget);
        const fighter = new Fighter(280, 750);
        const enemy = new Enemy(280, 100);
        const hpBar = new EnemyHpBar(50, 20, enemy);
        
        this.add(fighter);
        this.add(enemy);
        this.add(hpBar);
        
        // 自機がやられたらゲームオーバー画面にする
        fighter.addEventListener('destroy', (e) => {
            const scene = new DanmakuStgGameOverScene(this.renderingTarget);
            this.changeScene(scene);

            // ゲームオーバー後に指定されたURLに遷移（例: png/boss.jpg）
            setTimeout(() => {
            window.location.href = '../../fake_worning_sim/fake_worning_sim.html';  // 2秒後に png/boss.jpg に遷移
            }, 2000);  // 2秒後にURL遷移
        });

        // 敵がやられたらクリア画面にする
        enemy.addEventListener('destroy', (e) => {
            const scene = new DanmakuStgEndScene(this.renderingTarget);
            this.changeScene(scene);


            // ゲームオーバー後に指定されたURLに遷移（例: png/boss.jpg）
            setTimeout(() => {
                window.location.href = '../../fake_worning_sim/fake_worning_sim.html';  // 2秒後に png/boss.jpg に遷移
                }, 2000);  // 2秒後にURL遷移

        });
    }
}

class DanmakuStgTitleScene extends Scene {
    constructor(renderingTarget) {
        super('タイトル', 'black', renderingTarget);
        const title = new TextLabel(200, 300, 'ウイルスバスター');
        const menu = new TextLabel(210, 400, 'スペースで開始');

        this.add(title);
        this.add(menu);
    }

    update(gameInfo, input) {
        super.update(gameInfo, input);
        if(input.getKeyDown(' ')) {
            const mainScene = new DanmakuStgMainScene(this.renderingTarget);
            this.changeScene(mainScene);
        }
    }
}

class DanamkuStgGame extends Game {
    constructor() {
        super('弾幕STG', 600, 800, 60);
        const titleScene = new DanmakuStgTitleScene(this.screenCanvas);
        this.changeScene(titleScene);
    }
}

assets.addImage('sprite', 'sprite_last.png');
assets.loadAll().then((a) => {
    const game = new DanamkuStgGame();
    document.body.appendChild(game.screenCanvas);
    game.start();
});