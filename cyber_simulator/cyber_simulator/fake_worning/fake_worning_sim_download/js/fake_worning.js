// scripts.js
// ページがロードされた後に実行するコード
window.onload = function() {
    console.log("ページがロードされました!"); 
    // ナビゲーションリンクをクリックすると、ページのセクションにスクロール
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };
  