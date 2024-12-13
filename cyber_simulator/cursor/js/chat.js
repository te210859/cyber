window.addEventListener('load', function () {
    // フルスクリーン表示
   document.getElementById('button1').addEventListener('click', function () {
        // フルスクリーンモードを要求
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        } else if (document.body.mozRequestFullScreen) { // Firefox用
            document.body.mozRequestFullScreen();
        } else if (document.body.webkitRequestFullscreen) { // Safari/Chrome用
            document.body.webkitRequestFullscreen();
        } else if (document.body.msRequestFullscreen) { // IE用
            document.body.msRequestFullscreen();
        } 

        // 画面切り替え処理
        const screenA = document.querySelector('.first_screen');
        const screenB = document.querySelector('.relative');

        // .first_screenを非表示にし、.relativeを表示
        screenA.classList.add('active'); // .first_screenを非表示に
        screenB.classList.add('active'); // .relativeを表示

        // button1を非表示にする
        const button1 = document.getElementById('button1');
        button1.style.display = 'none'; // button1を非表示に

        // relativeがactiveになった後、10秒後にsetsumeiのアニメーションを開始
        setTimeout(function () {
            const setsumei = document.querySelector('.setsumei');
            setsumei.style.opacity = 1;  // アニメーションを開始
            setsumei.style.animation = 'float 2s ease-in-out forwards';  // アニメーションを再指定
            setsumei.style.animationDelay = '0s';  // アニメーションを即時開始
        }, 10000);  // 10秒後にアニメーションを開始
    });

    // ひとつ前の画面に戻る処理
    function goBack() {
        // フルスクリーンを解除する処理
        if (document.exitFullscreen) {
            document.exitFullscreen();  // フルスクリーンを解除
        } else if (document.mozCancelFullScreen) { // Firefox用
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Safari/Chrome用
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE用
            document.msExitFullscreen();
        }

        // 履歴から前のページに戻る
        window.history.back(); // 履歴から前のページに戻る
    }

    // button2がクリックされた時
    document.getElementById('button2').addEventListener('click', goBack);

    async function startFullscreen(){
        try{
            await navigator.keyboard.lock(["Escape", "F11"]);
            await document.documentElement.requestFullscreen();
        } catch(error){
            console.error("エラー:", error);
        }
    }

    document.getElementById("button1").addEventListener("click", startFullscreen);
});

let progress = 0;
const progressBar = document.querySelector('.progress');
const percentage = document.querySelector('.percentage');

// 最初のインターバル（初期遅延）
let delay = 100; // 初期遅延 (5ms)

// 進捗を更新する関数
function updateProgress() {
  progress += 1;  // 進捗を増やす
  if (progress <= 100) {
    progressBar.style.width = `${progress}%`;
    percentage.textContent = `${progress}%`;
    
    // 次第に遅くするために、delay（遅延時間）を増加させる
    delay += 20; // 20msずつ遅くしていく

    // 次の進捗更新
    setTimeout(updateProgress, delay);  // 次回の進捗更新
  }
}

// 最初に進捗更新を開始
updateProgress();

// 音楽の再生終了時にリセットして再生を繰り返す
audio.addEventListener('ended', function() {
    audio.currentTime = 0;  // 再生位置を0にリセット
    audio.play();           // 再生を再開
  });

function switchAudio() {
      var audio1 = document.getElementById("audio1"); // music.wav
      var audio2 = document.getElementById("audio2"); // warning.wav

      // 音声を切り替える処理
      if (!audio2.paused) {
        return; // audio2（警告音）が再生中なら何もしない
      }
      
      // audio1（music.wav）を停止
      audio1.pause();
      audio1.currentTime = 0; // 先頭に戻す

      // audio2（warning.wav）を再生
      audio2.play();
    }