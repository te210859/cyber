function validateForm() {
    const mail = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;
    let valid = true;

    // メールアドレスのバリデーション
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // 正規表現によるバリデーション
    if (!mail || !emailRegex.test(mail)) {
        document.getElementById('mailError').style.display = 'block'; // エラーメッセージ表示
        valid = false;
    } else {
        document.getElementById('mailError').style.display = 'none'; // エラーメッセージ非表示
    }

    // パスワードのバリデーション
    if (!pass) {
        document.getElementById('passError').style.display = 'block'; // エラーメッセージ表示
        valid = false;
    } else {
        document.getElementById('passError').style.display = 'none'; // エラーメッセージ非表示
    }

    if (valid) {
        // 入力が有効な場合はページ遷移
        window.location.href = 'ama_after.html';
    }
}
