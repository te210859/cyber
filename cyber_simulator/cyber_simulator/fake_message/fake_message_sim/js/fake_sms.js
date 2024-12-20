const timeline = document.getElementById("timeline");
const resultContent= document.getElementById("resultContent");

let historyCounter = 1; // 履歴番号を管理
// メッセージを追加する関数
function addMessage(content, sender, speaker, imageUrl = null) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;

  // メッセージ内容のHTMLを動的に生成
  const formattedContent = imageUrl 
      ? "" // 画像がある場合、吹き出しを非表示
      : `<div class="bubble">${content.replace(/\n/g, "<br>")}</div>`;

  // 画像のHTMLを追加（画像がない場合は空）
  const imageHTML = imageUrl 
      ? `<div class="image-container"><img src="${imageUrl}" alt="Image" class="message-image"></div>`
      : "";

  // 全体のHTML構造
  message.innerHTML = `
      <span class="speaker-label">${speaker}</span>
      ${formattedContent}
      ${imageHTML}
  `;

  // メッセージをチャット画面に追加
  timeline.appendChild(message);

  // スクロールを最下部に
  timeline.scrollTop = timeline.scrollHeight;
}

 

// 選択肢を追加する関数
function addChoices(choices) {
  const choiceContainer = document.createElement("div");
  choiceContainer.className = "choices";
  choices.forEach(choice => {
      const button = document.createElement("button");
      button.className = "choice";
      button.textContent = choice.text;

      button.onclick = () => {
          addMessage(choice.response, "right", "あなた");
          choice.action();
          choiceContainer.remove();
      };
      choiceContainer.appendChild(button);
  });
  timeline.appendChild(choiceContainer);
  setTimeout(() => {
      choiceContainer.classList.add('show');
  }, 100); // フェードイン
  timeline.scrollTop = timeline.scrollHeight;
}

function resetChat() {
            timeline.innerHTML = ""; // チャットの内容を全削除
            initializeChat(); // 初期化
        }
        
        // 結果を表示する関数
        function displayResult(content) {
            const resultItem = document.createElement("p");
            
            // 改行文字 (\n) を <br> タグに置き換え
            const htmlContent = content.replace(/\n/g, "<br>");
            
            // innerHTML に置き換えた内容を設定
            resultItem.innerHTML = `${historyCounter}. ${htmlContent}`;
            
            resultContent.appendChild(resultItem);
            historyCounter++; // 履歴番号をインクリメント
        }
        function addNotice(noticeText) {
          const notice = document.createElement("div");
          notice.className = "notice";  // スタイルを付けるためのクラス
          notice.innerHTML = `
              <strong>案内:</strong> <span>${noticeText}</span>
          `;
          timeline.appendChild(notice);
          timeline.scrollTop = timeline.scrollHeight;
      }



// チャット初期化
function initializeChat() {
 
   addMessage(`Amazonプライム会費のお支払い方法に問題があります。\n
                 詳細はこちらから：<a href="http://abehiroshi.la.coocan.jp/" target="_blank">https://user-amazon.nj.top</a>`, "left","Amazon");
   


   
}

// 初期化呼び出し
initializeChat();