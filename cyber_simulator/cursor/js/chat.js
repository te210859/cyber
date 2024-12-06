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
    });

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
