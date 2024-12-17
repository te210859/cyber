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
  

  function showMessage() {
    alert('成功！偽広告を踏むパターンも試してみてね！');
  }

// スクロールイベントを監視
window.addEventListener('scroll', function() {
  // ドキュメントのスクロール位置が150pxを超えた場合
  if (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
    // headerに"shrink"クラスを追加
    document.querySelector('header').classList.add('shrink');
  } else {
    // headerから"shrink"クラスを削除
    document.querySelector('header').classList.remove('shrink');
  }
});




function closeImage(button) {
  const imageContainer = button.closest('.image-container'); // ボタンの親要素を取得
  const image = imageContainer.querySelector('.image'); // 親要素内の画像を取得
  const closeButton = imageContainer.querySelector('.close-btn'); // 親要素内のボタンを取得

  // 画像とボタンを両方とも非表示にする
  image.classList.add('hidden');
  closeButton.classList.add('hidden');
}

// 広告を閉じるための関数
function closeAd1() {
  const ad = document.querySelector('.annoying-ad1');
  const overlay = document.querySelector('.overlay');
  ad.style.display = 'none';
  overlay.style.display = 'none';
}

function closeAd2() {
  const ad = document.querySelector('.annoying-ad2');
  const overlay = document.querySelector('.overlay');
  ad.style.display = 'none';
  overlay.style.display = 'none';
}


function closeAd3() {
  const ad = document.querySelector('.annoying-ad3');
  const overlay = document.querySelector('.overlay');
  ad.style.display = 'none';
  overlay.style.display = 'none';
}


// 5秒後に広告を強制的に表示する
setTimeout(() => {
  const ad = document.querySelector('.annoying-ad');
  const overlay = document.querySelector('.overlay');
  ad.style.display = 'block';
  overlay.style.display = 'block';
}, 5000);  // 広告を5秒後に表示