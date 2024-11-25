// インスクロール広告を表示する関数
window.onscroll = function () {
    // 現在のスクロール位置を取得
    var scrollPosition =
      window.scrollY || document.documentElement.scrollTop;
    
    // スクロール位置が500pxを超えた場合に広告を表示
    if (scrollPosition > 500) {
      // 底部のインスクロール広告を表示
      document.getElementById('ad-banner').classList.add('visible');
    }
  };
  
  // インスクロール広告を閉じる関数
  function closeAd() {
    // 底部のインスクロール広告を非表示にする
    document.getElementById('ad-banner').style.display = 'none';
  }
  
  // サイドバー広告を閉じる関数
  function closeSidebarAd() {
    // サイドバー広告を非表示にする
    document.getElementById('sidebar-ad').style.display = 'none';
  }
  
  // ポップアップ広告を閉じる関数
  function closePopupAd() {
    // ポップアップ広告を非表示にする
    document.getElementById('popup-ad').style.display = 'none';
  }
  
  // ページ読み込み後、数秒後にポップアップ広告を表示する
  window.onload = function () {
    // ページがロードされてから2秒後に実行される関数
    setTimeout(function () {
      // ポップアップ広告を表示
      document.getElementById('popup-ad').style.display = 'block';
    }, 2000); // 2秒後にポップアップを表示
  };
  