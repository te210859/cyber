    // 広告を閉じる機能
    function closeAd() {
      document.querySelector('.popup-ad-overlay').style.display = 'none';
    }
    function showAlert() {
      alert(" ダウンロードを開始します。");
    }
    // 拡大鏡機能
    let magnifier = document.getElementById('magnifier');

    function showMagnifier(event) {
      const target = event.target; // クリックされた画像を取得
      if (target.tagName === 'IMG') {
        magnifier.style.display = 'block'; // 拡大鏡を表示
        magnifier.style.top = `${event.clientY + 10}px`; // マウスの位置に合わせる
        magnifier.style.left = `${event.clientX + 10}px`;
        const magnifierImg = magnifier.querySelector('img');
        magnifierImg.src = target.src; // 拡大鏡にクリックされた画像を設定
      }
    }

    function hideMagnifier() {
      magnifier.style.display = 'none'; // 拡大鏡を非表示
    }
    // ズーム禁止のためのイベントリスナーを追加
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault(); // デフォルトのズーム操作を無効にする
      }
    });

    // マウスホイールによるズームを無効化
    document.addEventListener('wheel', function (event) {
      if (event.ctrlKey) {
        event.preventDefault(); // デフォルトのズーム操作を無効にする
      }
    }, { passive: false }); // passive: falseを指定することでpreventDefaultが可能に

    // タッチイベントでのズームを無効化
    document.addEventListener('touchmove', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault(); // ズームを防ぐ
      }
    }, { passive: false });

  