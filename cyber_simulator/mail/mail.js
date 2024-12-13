const emails = [
    {
        subject: "お荷物お届けのお知らせ",
        from: "example1@domain.com",
        content: 'お客様が不在の為お荷物を持ち帰りました。詳細はこちらにてご確認ください<a href="../cursor/cursor.html" target="_blink">https://amazon.jp</a>'
    },
    {
        subject: "簡単なアルバイトに興味ないですか？",
        from: "example2@domain.com",
        content: "簡単なアルバイトに興味ないですか？(⌒∇⌒)是非ご参加してみて下さい。<br>1:スマートフォンでの簡単な操作だけです。<br>2:日給は1万から5万です。<br>3:この仕事に興味がある方、または、参加したい場合は、カスタマーサービススタッフの<br>LINE ID: 12A34<br>を追加して詳細を確認してください。"
    },
    {
        subject: "タイトル",
        from: "example3@domain.com",
        content: "本文"
    }
];

// メールリストを生成
const emailList = document.getElementById('emailList');

// 各メールのリストアイテムを生成
emails.forEach((email, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${email.subject} <br><span class="email-address">${email.from}</span>`;  // 件名と送信者を表示
    listItem.onclick = () => viewEmail(index);  // メールをクリックしたときに詳細を表示
    emailList.appendChild(listItem);
});

// メールの内容を表示
function viewEmail(index) {
    const email = emails[index];
    const emailContent = document.getElementById("emailContent");
    
    emailContent.innerHTML = `
        <h3>${email.subject}</h3>
        <p><strong>From:</strong> ${email.from}</p>
        <p>${email.content}</p>
    `;
}
