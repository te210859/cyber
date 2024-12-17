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
   addMessage("1日5～7万稼げるバイトあります!", "left","たけし");
   addChoices([
       {
          text:"返信する",
          response:"気になるので是非紹介してほしいです",
          action:()=>{
           addMessage("高額バイト\n誰にでもできる簡単なお仕事!夜道で猫を探すバイト\n時給7500円\n交通費支給なし","left","たけし");
           addChoices([
           {
            text:"返信する",
            response:"是非、応募したいです！",
            action:()=>{
                addMessage(`ありがとうございます。
                            仕事で連絡を取り合うためにTelegramを
                            インストールしてください。`,"left","たけし");
                addChoices([
                    {
                        text:"インストールする",
                        response:"インストールしました。",
                        action:()=>{
                        addNotice("匿名性の高いアプリ(Telegram)へ移動");
                        addMessage(`アルバイトをするために登録情報と
                                    して、「身分証明書」「住民票」
                                     「家族構成」を教えてください。`,"left","たけし");
                        addChoices([
                          {
                           text:"個人情報を送る",
                           response:"分かりました。以下の通りです。",
                           action:()=>{
                           addMessage("(個人情報)","right","あなた");
                           addMessage("確認しました。早速ですが、移動手段はどちらになりますか？","left","たけし");
                           addChoices([
                            {
                               text:"場所はどちらになりますか？",
                               response:"場所はどちらになりますか？",
                               action:()=>{
                                addMessage("○○区○○公園近辺です。","left","たけし");
                                addChoices([
                               {
                                text:"車か電車どちらがいいですか？",
                                response:"車か電車どちらがいいですか？",
                                action:()=>{
                                 addMessage("どちらでも良いですよ。","left","たけし");
                                 addMessage("本日の稼働可能性でしょうか？","left","たけし");
                                 addChoices([
                                 {
                                  text:"今日は働けないです",
                                  response:"今日は働けないです。直近だといつ頃入れますか？",
                                  action:()=>{
                                    addMessage("明日なら大丈夫ですよ。","left","たけし");
                                    addChoices([
                                    {
                                     text:"分かりました",
                                     response:"分かりました。明日、入ります。",
                                     action:()=>{
                                       addMessage(`ありがとうございます。
                                                   あなたにしかできない仕事なので
                                                   期待してます！`,"left","たけし");
                                       addMessage(`当日は、○○時○○分に○○駅前に集合
                                                  してください。
                                                  その後、この番号に連絡してください。
                                                        xxx-xxxx-xxxx`,"left","たけし");
                                       addChoices([
                                       {
                                        text:"行く",
                                        response:"では当日よろしくお願いします。",
                                        action:()=>{
                                        displayResult(`失敗！あなたは犯罪に加担してしまいました。\n
                                        　闇バイトは、一見すると魅力的に見えることがありますが、\n
                                        　大きな代償を伴います。十分に注意し、安全な方法で収入を得ることを心がけましょう。\n
                                        　-闇バイトの注意ポイント-\n
                                        　1.高額報酬は要注意\n
                                        　2.仕事内容が不明確\n
                                        　3.SNSの求人に注意\n
                                        　4.個人情報を渡さない\n
                                        　5.犯罪に加担するリスク\n
                                        　-対策-
                                        　・信頼できる求人を選ぶ：公式サイトや正規の窓口を利用。\n
                                        　・相談する：怪しい場合は家族や警察に相談。\n
                                        　・無視する：少しでも怪しい募集はスルー。
                                        `);


                                        }

                                       },
                                       {
                                         text:"行かない",
                                         response:"",
                                         action:()=>
                                         {
                                            addMessage("何している？すぐ連絡しろ","left","たけし");
                                            addChoices([
                                                {
                                                 text:"すみません",
                                                 response:"すみません。別の仕事でちょっといけないです。",
                                                 action:()=>{
                                                  addMessage("おまへの予定なんて聞いていない、すぐ連絡しろ！","left","たけし");
                                                  addMessage(`おい。早く電話かけろ。
                                                             お前の個人情報を公開してもいいのか！？
                                                             今以上に大変なことになるぞ！`,"left","たけし");
                                                  addChoices([
                                                   {
                                                       text:"行く",
                                                       response:"今から電話して、向かいます",
                                                       action:()=>
                                                       {
                                                          displayResult(`失敗！あなたは犯罪に加担してしまいました。\n
                                                          　闇バイトは、一見すると魅力的に見えることがありますが、\n
                                                          　大きな代償を伴います。十分に注意し、安全な方法で収入を得ることを心がけましょう。\n
                                                          　-闇バイトの注意ポイント-\n
                                                          　1.高額報酬は要注意\n
                                                          　2.仕事内容が不明確\n
                                                          　3.SNSの求人に注意\n
                                                          　4.個人情報を渡さない\n
                                                          　5.犯罪に加担するリスク\n
                                                          　-対策-
                                                          　・信頼できる求人を選ぶ：公式サイトや正規の窓口を利用。\n
                                                          　・相談する：怪しい場合は家族や警察に相談。\n
                                                          　・無視する：少しでも怪しい募集はスルー。
                                                          `);
                                                       }
                                                   },
                                                   {
                                                      text:"勇気を出して警察に相談する",
                                                      response:"警察に通報します",
                                                      action:()=>{
                                                         displayResult(`成功！犯罪に加担せずに済みました！\n
                                                                       　勇気を出して通報したのは素晴らしいことです！\n
                                                                       　しかし個人情報をむやみに他人に教える点は注意しましょう。\n
                                                                       　闇バイトは、一見すると魅力的に見えることがありますが、\n
                                                                       　大きな代償を伴います。十分に注意し、安全な方法で収入を得ることを心がけましょう。\n
                                                                       　-闇バイトの注意ポイント-\n
                                                                       　1.高額報酬は要注意\n
                                                                       　2.仕事内容が不明確\n
                                                                       　3.SNSの求人に注意\n
                                                                       　4.個人情報を渡さない\n
                                                                       　5.犯罪に加担するリスク\n
                                                                       　-対策-
                                                                       　・信頼できる求人を選ぶ：公式サイトや正規の窓口を利用。\n
                                                                       　・相談する：怪しい場合は家族や警察に相談。\n
                                                                       　・無視する：少しでも怪しい募集はスルー。
                                                                       `
                                                                       );

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

                                    }

                                    ])

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
                            text:"情報が漏れたりしませんか？",
                            response:"情報が漏れることが怖いんですけど大丈夫ですか？",
                           action:()=>{
                            addMessage(`Telegramは、一定時間が経過すると
                                        通信履歴が消去されるため、漏れる
                                        心配はありません。`,"left","たけし");
                            addChoices([
                              {
                               text:"送る",
                               response:"分かりました。以下の通りです。",
                               action:()=>{
                                addMessage("確認しました。早速ですが、移動手段はどちらになりますか","left","たけし");
                                addChoices([
                                 {
                                    text:"場所はどちらになりますか？",
                                    response:"場所はどちらになりますか？",
                                    action:()=>{
                                     addMessage("○○区○○公園近辺です。","left","たけし");
                                     addChoices([
                                    {
                                     text:"車か電車どちらがいいですか？",
                                     response:"車か電車どちらがいいですか？",
                                     action:()=>{
                                      addMessage("どちらでも良いですよ。","left","たけし");
                                      addMessage("本日の稼働可能性でしょうか？","left","たけし");
                                      addChoices([
                                      {
                                       text:"今日は働けないです",
                                       response:"今日は働けないです。直近だといつ頃入れますか？",
                                       action:()=>{
                                         addMessage("明日なら大丈夫ですよ。","left","たけし");
                                         addChoices([
                                         {
                                          text:"分かりました",
                                          response:"分かりました。明日、入ります。",
                                          action:()=>{
                                            addMessage(`ありがとうございます。
                                                        あなたにしかできない仕事なので
                                                        期待してます！`,"left","たけし");
                                            addMessage(`当日は、○○時○○分に○○駅前に集合
                                                       してください。
                                                       その後、この番号に連絡してください。
                                                             xxx-xxxx-xxxx`,"left","たけし");
                                            addChoices([
                                            {
                                             text:"行く",
                                             response:"では当日よろしくお願いします。",
                                             action:()=>{
                                             displayResult(`失敗！あなたは犯罪に加担してしまいました。\n
                                             　闇バイトは、一見すると魅力的に見えることがありますが、\n
                                             　大きな代償を伴います。十分に注意し、安全な方法で収入を得ることを心がけましょう。\n
                                             　-闇バイトの注意ポイント-\n
                                             　1.高額報酬は要注意\n
                                             　2.仕事内容が不明確\n
                                             　3.SNSの求人に注意\n
                                             　4.個人情報を渡さない\n
                                             　5.犯罪に加担するリスク\n
                                             　-対策-
                                             　・信頼できる求人を選ぶ：公式サイトや正規の窓口を利用。\n
                                             　・相談する：怪しい場合は家族や警察に相談。\n
                                             　・無視する：少しでも怪しい募集はスルー。
                                             `);


                                             }

                                            },
                                            {
                                              text:"行かない",
                                              response:"",
                                              action:()=>
                                              {
                                                 addMessage("何している？すぐ連絡しろ","left","たけし");
                                                 addChoices([
                                                     {
                                                      text:"すみません",
                                                      response:"すみません。別の仕事でちょっといけないです。",
                                                      action:()=>{
                                                       addMessage("おまへの予定なんて聞いていない、すぐ連絡しろ！","left","たけし");
                                                       addMessage(`おい。早く電話かけろ。
                                                                  お前の個人情報を公開してもいいのか！？
                                                                  今以上に大変なことになるぞ！`,"left","たけし");
                                                       addChoices([
                                                        {
                                                            text:"行く",
                                                            response:"今から電話して、向かいます",
                                                            action:()=>
                                                            {
                                                               displayResult(`失敗！あなたは犯罪に加担してしまいました。\n
                                                                　闇バイトは、一見すると魅力的に見えることがありますが、\n
                                                                　大きな代償を伴います。十分に注意し、安全な方法で収入を得ることを心がけましょう。\n
                                                                　-闇バイトの注意ポイント-\n
                                                                　1.高額報酬は要注意\n
                                                                　2.仕事内容が不明確\n
                                                                　3.SNSの求人に注意\n
                                                                　4.個人情報を渡さない\n
                                                                　5.犯罪に加担するリスク\n
                                                                　-対策-
                                                                　・信頼できる求人を選ぶ：公式サイトや正規の窓口を利用。\n
                                                                　・相談する：怪しい場合は家族や警察に相談。\n
                                                                　・無視する：少しでも怪しい募集はスルー。
                                                               `);
                                                            }
                                                        },
                                                        {
                                                           text:"勇気を出して警察に相談する",
                                                           response:"警察に通報します",
                                                           action:()=>{
                                                              displayResult(`成功！犯罪に加担せずに済みました！\n
                                                              　勇気を出して通報したのは素晴らしいことです！\n
                                                              　しかし個人情報をむやみに他人に教える点は注意しましょう。\n
                                                              　闇バイトは、一見すると魅力的に見えることがありますが、\n
                                                              　大きな代償を伴います。十分に注意し、安全な方法で収入を得ることを心がけましょう。\n
                                                              　-闇バイトの注意ポイント-\n
                                                              　1.高額報酬は要注意\n
                                                              　2.仕事内容が不明確\n
                                                              　3.SNSの求人に注意\n
                                                              　4.個人情報を渡さない\n
                                                              　5.犯罪に加担するリスク\n
                                                              　-対策-
                                                              　・信頼できる求人を選ぶ：公式サイトや正規の窓口を利用。\n
                                                              　・相談する：怪しい場合は家族や警察に相談。\n
                                                              　・無視する：少しでも怪しい募集はスルー。
                                                              `);

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

                                         }

                                         ])

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
                               text:"送らず、無視する",
                               response:"",
                               action:()=>{
                                displayResult("個人情報お送らず、犯罪への加担を未然に防ぐことができました。");

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
                            displayResult("犯罪への加担を未然に防ぐことができました。");

                     }

                    }
                ])
            }
           },
           {
            text:"無視する", 
            response:"",
            action:()=>{
                displayResult("犯罪への加担を未然に防ぐことができました。");
            }


           }

              ])

          
          }
       },
       {
           text: "無視する",
           response: "",
           action: () => {
            
            displayResult("犯罪への加担を未然に防ぐことができました。");
           }
       }
   ]);
}

// 初期化呼び出し
initializeChat();