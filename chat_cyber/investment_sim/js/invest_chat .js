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
  addNotice("池下彰人との個人チャット");
   addMessage(`はじめまして池下彰人と申します。\n
                 プロのfx投資家としてあなたを全力でサポートします。\n
                 投資では高確率で利益を上げられます。`, "left","池下彰人");
   addChoices([
    {
           text:"返信する",
           response:"投資とかしたことなくて、、、\n色々とアドバイスお願いします。",
        action: ()=>{
           addMessage("興味があれば、投資情報を共有している投資セミナーグループに参加しますか？","left","池下彰人");
           addChoices([
            {
              text:"参加する",
              response:"参加します！",
            action:()=>{
              addNotice("投資セミナーグループ");
              addMessage("よろしくお願いします。","right","あなた")
              addMessage("よろしくね！","left","ミチヨ");
              addMessage("よろしくお願いします。","left","ヨシエ");
              addMessage("私は池下先生のおかげで100万円儲かりました。","left","ミチヨ");
              addMessage("頑張れば、たくさんのブランド品が買えるから！一緒に頑張ろうね！","left","ミチヨ");
              addChoices([
                {
                  text:"本当ですか？",
                  response:"まじまじマジンガー？！",
                action:()=>{
                 addMessage("まじまじ","left","中西");
                 addNotice("ヨシエとの個人チャット")
                 addMessage(`池下彰人先生から紹介を受けました。投資セミナーの口座担当です。
                 \n池下先生のいうことを聞けば必ず利益が出ますよ。`,"left","ヨシエ");
                 addMessage(`よろしくお願いします。`,"right","あなた");
                 addMessage(`早速ですが、最初の投資として、サイトに10万円入金しましょう。
                 \n指定する口座にお金を振り込んでください。`,"left","ヨシエ");
                 addChoices([
                    {
                   text:"お金を振り込む",
                   response:"わかりました。",
                   action:()=>{
                   addMessage("","right","あなた","./y.png");
                   addChoices([
                    {
                      text: "最近、投資をしたばかりですが、利益の一部を取り出すことはできるんですか？",
                      response:"最近、投資をしたばかりですが、利益の一部を取り出すことはできるんですか？",
                     action:()=>{
                       addMessage("大丈夫ですよ。利益を振り込んでおきますね","left","ヨシエ");
                       addChoices([
                         {
                            text:"利益がちゃんと入ってるか確認したいのでお願いします。",
                            response:"利益がちゃんと入ってるか確認したいのでお願いします。",
                            action:()=>{
                              addMessage(`○○銀行○○支店\n
                              普通預金\n
                              口座番号○○○○○○○○\n
                              口座名義　祥郎`,"right","あなた");
                              addNotice("池下彰人との個人チャット")
                              addMessage("","right","あなた","./y.png");
                              addMessage("これだけ利益が出たので全額取り出したいのですが","right","あなた");
                              addMessage(`高額な利益を取り出すには手数料が必要です。\n
                                          利益の10%の１０９万円振り込んでください。`,"left","池下彰人");
                              addChoices([
                               {
                                  text:"お金を振り込む",
                                  response:"１０９万振り込みました！",
                                  action:()=>{
                                  addMessage("確認します。","left","池下彰人");
                                  addMessage("口座担当から連絡があって利益を取り出すには税金としてあと100万円必要みたいです","left","池下彰人");
                                  addChoices([
                                    {
                                    text:"分かりました",
                                    response:"分かりました。",
                                    action:()=>{
                                     addMessage("100万円振り込もうとした、振り込めませんでした。どうしてですか？","right","あなた");
                                     addMessage("確認して下さい","right","あなた");
                                     addMessage("もしかして詐欺ですか","right","あなた");
                                     addMessage("お金返してください","right","あなた");
                                     addMessage("警察に通報しますよ","right","あなた");
                                     displayResult(`詐欺に引っかかりました。\n
                                     　お金を振り込む前に、以下のポイントをチェック！\n
                                     　１つでも当てはまったら、お金を振り込む前に、迷わず警察に相談を！\n
                                     　・投資先が実在しているかどうか\n
                                     　・「必ずもうかる」「あなただけ」といった文言に注意\n
                                     　・投資を勧めている「著名人」がなりすましでないか\n
                                     　・投資に関係する「暗号資産」「投資アプリ」等が実在するか\n`);

                                    }
                                    },
                                    {
                                      text:"警察に相談する",
                                      response:"怪しいので警察に通報しました。",
                                      action:()=>{
                                       addMessage("お金返してください","right","あなた");
                                       displayResult(`少ない被害で済みましたが、詐欺には引っかかりました。\n
                                                    　お金を振り込む前に、以下のポイントをチェック！\n
                                                    　１つでも当てはまったら、お金を振り込む前に、迷わず警察に相談を！\n
                                                    　・投資先が実在しているかどうか\n
                                                    　・「必ずもうかる」「あなただけ」といった文言に注意\n
                                                    　・投資を勧めている「著名人」がなりすましでないか\n
                                                    　・投資に関係する「暗号資産」「投資アプリ」等が実在するか\n`);

                                      }
                                    }
                                  ])

                                  }
                                                                               
                               },
                               {
                                text:"警察に相談する",
                                response:"怪しいので警察に通報しました。",
                                action:()=>{
                                 addMessage("お金返してください","right","あなた");
                                 displayResult(`少ない被害で済みましたが、詐欺には引っかかりました。\n
                                 　お金を振り込む前に、以下のポイントをチェック！\n
                                 　１つでも当てはまったら、お金を振り込む前に、迷わず警察に相談を！\n
                                 　・投資先が実在しているかどうか\n
                                 　・「必ずもうかる」「あなただけ」といった文言に注意\n
                                 　・投資を勧めている「著名人」がなりすましでないか\n
                                 　・投資に関係する「暗号資産」「投資アプリ」等が実在するか\n`);

                                }
                               }
                                 

                              ])            
                            }
                         }


                       ])
                       

                       
                     }
                     
                    }

                   ])

                   }
                    },
                    {
                      text:"思いとどまる",
                      response:"",
                      action:()=>{
                        displayResult("成功！詐欺を逃れました。")
                      }

                    }
                 ])
                }
                
                }
                

              ])
            }  

            },
            {
                text:"疑う",
                response:"詐欺ではないのですか？",
            action:()=>{
                addMessage("違いますよ！参加者の皆さんは実際に利益を得てますよ。","left","池下彰人");
                addChoices([
                 {
                      text:"参加する",
                      response:"参加します！。",
                      action:()=>{
                        addNotice("投資セミナーグループ");
                        addMessage("よろしくお願いします。","right","あなた")
                        addMessage("よろしくね！","left","ミチヨ");
                        addMessage("よろしくお願いします。","left","ヨシエ");
                        addMessage("私は池下先生のおかげで100万円儲かりました。","left","ミチヨ");
                        addMessage("頑張れば、たくさんのブランド品が買えるから！一緒に頑張ろうね！","left","ミチヨ");
                        addChoices([
                          {
                            text:"本当ですか？",
                            response:"まじまじマジンガー？！",
                          action:()=>{
                           addMessage("まじまじ","left","中西");
                           addNotice("ヨシエとの個人チャット")
                           addMessage(`池下彰人先生から紹介を受けました。投資セミナーの口座担当です。
                           \n池下先生のいうことを聞けば必ず利益が出ますよ。`,"left","ヨシエ");
                           addMessage(`よろしくお願いします。`,"right","あなた");
                           addMessage(`早速ですが、最初の投資として、サイトに10万円入金しましょう。
                           \n指定する口座にお金を振り込んでください。`,"left","ヨシエ");
                           addChoices([
                              {
                             text:"お金を振り込む",
                             response:"わかりました。",
                             action:()=>{
                             addMessage("","right","あなた","./y.png");
                             addChoices([
                              {
                                text: "最近、投資をしたばかりですが、利益の一部を取り出すことはできるんですか？",
                                response:"最近、投資をしたばかりですが、利益の一部を取り出すことはできるんですか？",
                               action:()=>{
                                 addMessage("大丈夫ですよ。利益を振り込んでおきますね","left","ヨシエ");
                                 addChoices([
                                   {
                                      text:"利益がちゃんと入ってるか確認したいのでお願いします。",
                                      response:"利益がちゃんと入ってるか確認したいのでお願いします。",
                                      action:()=>{
                                        addMessage(`○○銀行○○支店\n
                                        普通預金\n
                                        口座番号○○○○○○○○\n
                                        口座名義　祥郎`,"right","あなた");
                                        addNotice("池下彰人との個人チャット")
                                        addMessage("","right","あなた","./y.png");
                                        addMessage("これだけ利益が出たので全額取り出したいのですが","right","あなた");
                                        addMessage(`高額な利益を取り出すには手数料が必要です。\n
                                                    利益の10%の１０９万円振り込んでください。`,"left","池下彰人");
                                        addChoices([
                                         {
                                            text:"お金を振り込む",
                                            response:"１０９万振り込みました！",
                                            action:()=>{
                                            addMessage("確認します。","left","池下彰人");
                                            addMessage("口座担当から連絡があって利益を取り出すには税金としてあと100万円必要みたいです","left","池下彰人");
                                            addChoices([
                                              {
                                              text:"分かりました",
                                              response:"分かりました。",
                                              action:()=>{
                                               addMessage("100万円振り込もうとした、振り込めませんでした。どうしてですか？","right","あなた");
                                               addMessage("確認して下さい","right","あなた");
                                               addMessage("もしかして詐欺ですか","right","あなた");
                                               addMessage("お金返してください","right","あなた");
                                               addMessage("警察に通報しますよ","right","あなた");
                                               displayResult(`詐欺に引っかかりました。\n
                                               　お金を振り込む前に、以下のポイントをチェック！\n
                                               　１つでも当てはまったら、お金を振り込む前に、迷わず警察に相談を！\n
                                               　・投資先が実在しているかどうか\n
                                               　・「必ずもうかる」「あなただけ」といった文言に注意\n
                                               　・投資を勧めている「著名人」がなりすましでないか\n
                                               　・投資に関係する「暗号資産」「投資アプリ」等が実在するか\n`);
          
                                              }
                                              },
                                              {
                                                text:"警察に相談する",
                                                response:"怪しいので警察に通報しました。",
                                                action:()=>{
                                                 addMessage("お金返してください","right","あなた");
                                                 displayResult(`少ない被害で済みましたが、詐欺には引っかかりました。\n
                                                 　お金を振り込む前に、以下のポイントをチェック！\n
                                                 　１つでも当てはまったら、お金を振り込む前に、迷わず警察に相談を！\n
                                                 　・投資先が実在しているかどうか\n
                                                 　・「必ずもうかる」「あなただけ」といった文言に注意\n
                                                 　・投資を勧めている「著名人」がなりすましでないか\n
                                                 　・投資に関係する「暗号資産」「投資アプリ」等が実在するか\n`);
          
                                                }
                                              }
                                            ])
          
                                            }
                                                                                         
                                         },
                                         {
                                          text:"警察に相談する",
                                          response:"怪しいので警察に通報しました。",
                                          action:()=>{
                                           addMessage("お金返してください","right","あなた");
                                           displayResult(`少ない被害で済みましたが、詐欺には引っかかりました。\n
                                           　お金を振り込む前に、以下のポイントをチェック！\n
                                           　１つでも当てはまったら、お金を振り込む前に、迷わず警察に相談を！\n
                                           　・投資先が実在しているかどうか\n
                                           　・「必ずもうかる」「あなただけ」といった文言に注意\n
                                           　・投資を勧めている「著名人」がなりすましでないか\n
                                           　・投資に関係する「暗号資産」「投資アプリ」等が実在するか\n`);
          
                                          }
                                         }
                                           
          
                                        ])            
                                      }
                                   }
          
          
                                 ])
                                 
          
                                 
                               }
                               
                              }
          
                             ])
          
                             }
                              },
                              {
                                text:"思いとどまる",
                                response:"",
                                action:()=>{
                                  displayResult("成功！詐欺を逃れました。")
                                }
          
                              }
                           ])
                          }
                          
                          }
                          
          
                        ])
                      }  
                 },
                 {
                  
                    text:"無視する",
                    response:"",
                 action:()=>{
                   
                 displayResult("成功！詐欺を逃れました。")
           
                 }   
                 }

                ])


                
            }



            }


           ])
        }
    },
    { 
         text:"無視する",
         response:"",
      action:()=>{
        
      displayResult("成功！詐欺を逃れました。")

      }   
       }
    ])


   
}

// 初期化呼び出し
initializeChat();