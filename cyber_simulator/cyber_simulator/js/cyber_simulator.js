// 画像の切り替えを行う関数
let currentImageIndex = 0;
const images = document.querySelectorAll('.image');

function toggleImages() {
    // 現在表示中の画像を非表示に
    images[currentImageIndex].style.display = 'none';
    
    // 次の画像に切り替え
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // 次の画像を表示
    images[currentImageIndex].style.display = 'block';
}

// 初回の画像を表示
setInterval(toggleImages, 150); // 2秒ごとに切り替え