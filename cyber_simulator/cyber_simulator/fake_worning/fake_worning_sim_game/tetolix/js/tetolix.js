// キーボードの入力状態を記録する配列の定義
var input_key_buffer = new Array();

// キーボードの入力イベントをトリガーに配列のフラグ値を更新させる
window.addEventListener("keydown", handleKeydown);
function handleKeydown(e) {
  console.log("key down : " + e.keyCode);
  input_key_buffer[e.keyCode] = true;
}

window.addEventListener("keyup", handleKeyup);
function handleKeyup(e) {
  console.log("key up : " + e.keyCode);
  input_key_buffer[e.keyCode] = false;
}

// canvas要素の取得
const canvas = document.getElementById("maincanvas");
const ctx = canvas.getContext("2d");

// 画像を表示するの座標の定義 & 初期化
var x = 0;
var y = 0;

// ロード時に画面描画の処理が実行されるようにする
window.addEventListener("load", update);

// 画面を更新する関数を定義 (繰り返しここの処理が実行される)
function update() {
  // 画面全体をクリア
  ctx.clearRect(0, 0, 640, 480);

  // 入力値の確認と反映
  if (input_key_buffer[37]) {
    // 左が押されていればx座標を1減らす
    x = x - 1;
  }
  if (input_key_buffer[38]) {
    // 上が押されていればy座標を1減らす
    y = y - 1;
  }
  if (input_key_buffer[39]) {
    // 右が押されていればx座標を1増やす
    x = x + 1;
  }
  if (input_key_buffer[40]) {
    // 下が押されていればy座標を1増やす
    y = y + 1;
  }

  // 主人公の画像を表示
  var image = new Image();
  image.src = "png/boss.jpg";
  ctx.drawImage(image, x, y, 32, 32);

  // 再描画
  window.requestAnimationFrame(update);
}