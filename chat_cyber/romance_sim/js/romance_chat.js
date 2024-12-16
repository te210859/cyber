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
        



// チャット初期化
function initializeChat() {
   addMessage("はじめまして！きれいな写真ですね！色々お話ししたいです。", "left","ひろし");
   addChoices([
       {
           text: "返信する",
           response: "〇〇さんはじめまして！ありがとう！",
           action: () => {
               addMessage("何とお呼びしたらいいですか？", "left","ひろし");
               addChoices([
                   {
                       text: "〇〇って呼んでください！",
                       response: "〇〇って呼んでください！",
                       action: () => {
                           addMessage("あなたのことが好きなのでもっと交流したいと思ってます！", "left","ひろし");
                           addChoices([
                               {
                                   text: "私もです!",
                                   response: "私もです！",
                                   action: () => {
                                    addMessage("1日中あなたを想っているよ。", "left","ひろし");
                                    addChoices([
                                        {
                                            text: "本当ですか？",
                                            response: "本当ですか？",
                                            action: () => {
                                            addMessage("本当だよ！あなたのことが好きだよ。", "left","ひろし");
                                            addChoices([
                                                {
                                                    text: "え、嬉しい",
                                                    response: "え、嬉しい",
                                                    action: () => {
                                                    addMessage("あなたと結婚して一緒に暮らしたいと思っているんだ。", "left","ひろし");
                                                    addMessage("そのためにも、暗号通貨に投資してお金を稼ごう", "left","ひろし");
                                                    addChoices([
                                                        {
                                                            text: "それは本当に安全なの？",
                                                            response: "それは本当に安全なの？",
                                                            action: () => {
                                                            addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                            addMessage("","left","ひろし","./y.png");
                                                            addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                            addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                            addChoices([
                                                                {
                                                                    text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                    response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                   
                                                                    action: () => {
                                                                    addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                    addChoices([
                                                                        {
                                                                            text: "どのくらい払えばいいの？",
                                                                            response: "どのくらい払えばいいの？",
                                                                           
                                                                            action: () => {
                                                                            addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                            addChoices([
                                                                                {
                                                                                    text: "１０９万円振り込んだよ。",
                                                                                    response: "１０９万円振り込んだよ。",
                                                                                   
                                                                                    action: () => {
                                                                                    addMessage("ありがとう！", "left","ひろし");
                                                                                    addChoices([
                                                                                        {
                                                                                            text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("返事ください", "right","あなた");
                                                                                            addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                            displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        
                                                                                    ]);
                                                                                    
                                                                                    }
                                                                                },
                                                                                {
                                                                                    text: "怪しいので無視",
                                                                                    response: "",
                                                                                    action: () =>{ 
                                                                                        addMessage("あれどうしたのー？", "left","ひろし");
                                                                                        addMessage("返信ちょうだーい", "left","ひろし");
                                                                                        displayResult(`成功！詐欺を逃れました。\n 
                                                                                        　このようにして言葉巧みに心を惑わしてきます。
                                                                                        \n　例えば詐欺師は仲良くなった後
                                                                                        \n　・2人の将来のために
                                                                                        \n　・投資でお金を増やそう
                                                                                        \n　・会いたいから旅費を送って
                                                                                        \n　・荷物を送るから手数料払って
                                                                                        \n　などと言ってお金をだまし取ろうとしてきます。`);

                                                                                }
                                                                            }
                                                                            ]);
                                                                            
                                                                            }
                                                                        },
                                                                        {
                                                                            text: "どのくらい払うのが相場なの？",
                                                                            response: "どのくらい払うのが相場なの？",
                                                                            action: () =>{ 
                                                                                addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                addChoices([
                                                                                    {
                                                                                        text: "１０９万円振り込んだよ。",
                                                                                        response: "１０９万円振り込んだよ。",
                                                                                       
                                                                                        action: () => {
                                                                                        addMessage("ありがとう！", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("返事ください", "right","あなた");
                                                                                                addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            
                                                                                        ]);
                                                                                        
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        text: "怪しいので無視",
                                                                                        response: "",
                                                                                        action: () =>{ 
                                                                                            addMessage("あれどうしたのー？", "left","ひろし");
                                                                                            addMessage("返信ちょうだーい", "left","ひろし");
                                                                                            displayResult(`成功！詐欺を逃れました。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
    
                                                                                    }
                                                                                }
                                                                                ]);
                                                                        }
                                                                    }
                                                                    ]);
                                                                    }
                                                                },
                                                                {
                                                                    text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                    response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                    action: () =>{ 
                                                                        addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                        addChoices([
                                                                                {
                                                                                    text: "１０９万円振り込んだよ。",
                                                                                    response: "１０９万円振り込んだよ。",
                                                                                   
                                                                                    action: () => {
                                                                                    addMessage("ありがとう！", "left","ひろし");
                                                                                    addChoices([
                                                                                        {
                                                                                            text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("返事ください", "right","あなた");
                                                                                            addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                            displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        
                                                                                    ]);
                                                                                    
                                                                                    }
                                                                                },
                                                                                {
                                                                                    text: "怪しいので無視",
                                                                                    response: "",
                                                                                    action: () =>{ 
                                                                                        addMessage("あれどうしたのー？", "left","ひろし");
                                                                                        addMessage("返信ちょうだーい", "left","ひろし");
                                                                                        displayResult(`成功！詐欺を逃れました。\n 
                                                                                        　このようにして言葉巧みに心を惑わしてきます。
                                                                                        \n　例えば詐欺師は仲良くなった後
                                                                                        \n　・2人の将来のために
                                                                                        \n　・投資でお金を増やそう
                                                                                        \n　・会いたいから旅費を送って
                                                                                        \n　・荷物を送るから手数料払って
                                                                                        \n　などと言ってお金をだまし取ろうとしてきます。`);

                                                                                }
                                                                            }
                                                                            ]);
                                                                            
                                                                }
                                                            }
                                                            ]);
                                                            }
                                                        },
                                                        {
                                                            text: "ちょっと心配だけど、やってみたい！",
                                                            response: "ちょっと心配だけど、やってみたい！",
                                                            action: () =>{
                                                                addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                addMessage("","left","ひろし","./y.png");
                                                                addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                addChoices([
                                                                    {
                                                                        text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                        response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                       
                                                                        action: () => {
                                                                        addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                        addChoices([
                                                                            {
                                                                                text: "どのくらい払えばいいの？",
                                                                                response: "どのくらい払えばいいの？",
                                                                               
                                                                                action: () => {
                                                                                addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                addChoices([
                                                                                    {
                                                                                        text: "１０９万円振り込んだよ。",
                                                                                        response: "１０９万円振り込んだよ。",
                                                                                       
                                                                                        action: () => {
                                                                                        addMessage("ありがとう！", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("返事ください", "right","あなた");
                                                                                                addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            
                                                                                        ]);
                                                                                        
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        text: "怪しいので無視",
                                                                                        response: "",
                                                                                        action: () =>{ 
                                                                                            addMessage("あれどうしたのー？", "left","ひろし");
                                                                                            addMessage("返信ちょうだーい", "left","ひろし");
                                                                                            displayResult(`成功！詐欺を逃れました。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
    
                                                                                    }
                                                                                }
                                                                                ]);
                                                                                
                                                                                }
                                                                            },
                                                                            {
                                                                                text: "どのくらい払うのが相場なの？",
                                                                                response: "どのくらい払うのが相場なの？",
                                                                                action: () =>{ 
                                                                                    addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                    addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                            }
                                                                        }
                                                                        ]);
                                                                        }
                                                                    },
                                                                    {
                                                                        text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                        response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                        action: () =>{ 
                                                                            addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                            addChoices([
                                                                                    {
                                                                                        text: "１０９万円振り込んだよ。",
                                                                                        response: "１０９万円振り込んだよ。",
                                                                                       
                                                                                        action: () => {
                                                                                        addMessage("ありがとう！", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("返事ください", "right","あなた");
                                                                                                addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            
                                                                                        ]);
                                                                                        
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        text: "怪しいので無視",
                                                                                        response: "",
                                                                                        action: () =>{ 
                                                                                            addMessage("あれどうしたのー？", "left","ひろし");
                                                                                            addMessage("返信ちょうだーい", "left","ひろし");
                                                                                            displayResult(`成功！詐欺を逃れました。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
    
                                                                                    }
                                                                                }
                                                                                ]);
                                                                                
                                                                    }
                                                                }
                                                                ]);
                                                        }
                                                    }
                                                    ]);
                                                    }
                                                },
                                                {
                                                    text: "やったー",
                                                    response: "やったー",
                                                    action: () =>{ 
                                                        addMessage("あなたと結婚して一緒に暮らしたいと思っているんだ。", "left","ひろし");
                                                        addMessage("そのためにも、暗号通貨に投資してお金を稼ごう", "left","ひろし");
                                                        addChoices([
                                                            {
                                                                text: "それは本当に安全なの？",
                                                                response: "それは本当に安全なの？",
                                                                action: () => {
                                                                addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                addMessage("","left","ひろし","./y.png");
                                                                addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                addChoices([
                                                                    {
                                                                        text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                        response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                       
                                                                        action: () => {
                                                                        addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                        addChoices([
                                                                            {
                                                                                text: "どのくらい払えばいいの？",
                                                                                response: "どのくらい払えばいいの？",
                                                                               
                                                                                action: () => {
                                                                                addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                addChoices([
                                                                                    {
                                                                                        text: "１０９万円振り込んだよ。",
                                                                                        response: "１０９万円振り込んだよ。",
                                                                                       
                                                                                        action: () => {
                                                                                        addMessage("ありがとう！", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("返事ください", "right","あなた");
                                                                                                addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            
                                                                                        ]);
                                                                                        
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        text: "怪しいので無視",
                                                                                        response: "",
                                                                                        action: () =>{ 
                                                                                            addMessage("あれどうしたのー？", "left","ひろし");
                                                                                            addMessage("返信ちょうだーい", "left","ひろし");
                                                                                            displayResult(`成功！詐欺を逃れました。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
    
                                                                                    }
                                                                                }
                                                                                ]);
                                                                                
                                                                                }
                                                                            },
                                                                            {
                                                                                text: "どのくらい払うのが相場なの？",
                                                                                response: "どのくらい払うのが相場なの？",
                                                                                action: () =>{ 
                                                                                    addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                    addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                            }
                                                                        }
                                                                        ]);
                                                                        }
                                                                    },
                                                                    {
                                                                        text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                        response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                        action: () =>{ 
                                                                            addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                            addChoices([
                                                                                    {
                                                                                        text: "１０９万円振り込んだよ。",
                                                                                        response: "１０９万円振り込んだよ。",
                                                                                       
                                                                                        action: () => {
                                                                                        addMessage("ありがとう！", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("返事ください", "right","あなた");
                                                                                                addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            
                                                                                        ]);
                                                                                        
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        text: "怪しいので無視",
                                                                                        response: "",
                                                                                        action: () =>{ 
                                                                                            addMessage("あれどうしたのー？", "left","ひろし");
                                                                                            addMessage("返信ちょうだーい", "left","ひろし");
                                                                                            displayResult(`成功！詐欺を逃れました。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
    
                                                                                    }
                                                                                }
                                                                                ]);
                                                                                
                                                                    }
                                                                }
                                                                ]);
                                                                }
                                                            },
                                                            {
                                                                text: "ちょっと心配だけど、やってみたい！",
                                                                response: "ちょっと心配だけど、やってみたい！",
                                                                action: () =>{
                                                                    addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                    addMessage("","left","ひろし","./y.png");
                                                                    addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                    addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                    addChoices([
                                                                        {
                                                                            text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                            response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                           
                                                                            action: () => {
                                                                            addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                            addChoices([
                                                                                {
                                                                                    text: "どのくらい払えばいいの？",
                                                                                    response: "どのくらい払えばいいの？",
                                                                                   
                                                                                    action: () => {
                                                                                    addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                    addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                                    
                                                                                    }
                                                                                },
                                                                                {
                                                                                    text: "どのくらい払うのが相場なの？",
                                                                                    response: "どのくらい払うのが相場なの？",
                                                                                    action: () =>{ 
                                                                                        addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "１０９万円振り込んだよ。",
                                                                                                response: "１０９万円振り込んだよ。",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("ありがとう！", "left","ひろし");
                                                                                                addChoices([
                                                                                                    {
                                                                                                        text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                        response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                       
                                                                                                        action: () => {
                                                                                                        addMessage("返事ください", "right","あなた");
                                                                                                        addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                        displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                        　このようにして言葉巧みに心を惑わしてきます。
                                                                                                        \n　例えば詐欺師は仲良くなった後
                                                                                                        \n　・2人の将来のために
                                                                                                        \n　・投資でお金を増やそう
                                                                                                        \n　・会いたいから旅費を送って
                                                                                                        \n　・荷物を送るから手数料払って
                                                                                                        \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                        
                                                                                                        }
                                                                                                    },
                                                                                                    
                                                                                                ]);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                text: "怪しいので無視",
                                                                                                response: "",
                                                                                                action: () =>{ 
                                                                                                    addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                    addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                    displayResult(`成功！詐欺を逃れました。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
            
                                                                                            }
                                                                                        }
                                                                                        ]);
                                                                                }
                                                                            }
                                                                            ]);
                                                                            }
                                                                        },
                                                                        {
                                                                            text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                            response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                            action: () =>{ 
                                                                                addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                                    
                                                                        }
                                                                    }
                                                                    ]);
                                                            }
                                                        }
                                                        ]);
                                                }
                                            }
                                            ]); 
                                            }
                                        },
                                        {
                                            text: "疑う",
                                            response: "本当に？",
                                            action: () =>{ 
                                                addMessage("本当だよ！あなたのことが好きだよ。", "left","ひろし");
                                                addChoices([
                                                    {
                                                        text: "え、嬉しい",
                                                        response: "え、嬉しい",
                                                        action: () => {
                                                        addMessage("あなたと結婚して一緒に暮らしたいと思っているんだ。", "left","ひろし");
                                                        addMessage("そのためにも、暗号通貨に投資してお金を稼ごう", "left","ひろし");
                                                        addChoices([
                                                            {
                                                                text: "それは本当に安全なの？",
                                                                response: "それは本当に安全なの？",
                                                                action: () => {
                                                                addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                addMessage("","left","ひろし","./y.png");
                                                                addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                addChoices([
                                                                    {
                                                                        text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                        response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                       
                                                                        action: () => {
                                                                        addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                        addChoices([
                                                                            {
                                                                                text: "どのくらい払えばいいの？",
                                                                                response: "どのくらい払えばいいの？",
                                                                               
                                                                                action: () => {
                                                                                addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                addChoices([
                                                                                    {
                                                                                        text: "１０９万円振り込んだよ。",
                                                                                        response: "１０９万円振り込んだよ。",
                                                                                       
                                                                                        action: () => {
                                                                                        addMessage("ありがとう！", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("返事ください", "right","あなた");
                                                                                                addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            
                                                                                        ]);
                                                                                        
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        text: "怪しいので無視",
                                                                                        response: "",
                                                                                        action: () =>{ 
                                                                                            addMessage("あれどうしたのー？", "left","ひろし");
                                                                                            addMessage("返信ちょうだーい", "left","ひろし");
                                                                                            displayResult(`成功！詐欺を逃れました。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
    
                                                                                    }
                                                                                }
                                                                                ]);
                                                                                
                                                                                }
                                                                            },
                                                                            {
                                                                                text: "どのくらい払うのが相場なの？",
                                                                                response: "どのくらい払うのが相場なの？",
                                                                                action: () =>{ 
                                                                                    addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                    addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                            }
                                                                        }
                                                                        ]);
                                                                        }
                                                                    },
                                                                    {
                                                                        text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                        response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                        action: () =>{ 
                                                                            addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                            addChoices([
                                                                                    {
                                                                                        text: "１０９万円振り込んだよ。",
                                                                                        response: "１０９万円振り込んだよ。",
                                                                                       
                                                                                        action: () => {
                                                                                        addMessage("ありがとう！", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("返事ください", "right","あなた");
                                                                                                addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            
                                                                                        ]);
                                                                                        
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        text: "怪しいので無視",
                                                                                        response: "",
                                                                                        action: () =>{ 
                                                                                            addMessage("あれどうしたのー？", "left","ひろし");
                                                                                            addMessage("返信ちょうだーい", "left","ひろし");
                                                                                            displayResult(`成功！詐欺を逃れました。\n 
                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                            \n　・2人の将来のために
                                                                                            \n　・投資でお金を増やそう
                                                                                            \n　・会いたいから旅費を送って
                                                                                            \n　・荷物を送るから手数料払って
                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
    
                                                                                    }
                                                                                }
                                                                                ]);
                                                                                
                                                                    }
                                                                }
                                                                ]);
                                                                }
                                                            },
                                                            {
                                                                text: "ちょっと心配だけど、やってみたい！",
                                                                response: "ちょっと心配だけど、やってみたい！",
                                                                action: () =>{
                                                                    addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                    addMessage("","left","ひろし","./y.png");
                                                                    addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                    addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                    addChoices([
                                                                        {
                                                                            text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                            response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                           
                                                                            action: () => {
                                                                            addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                            addChoices([
                                                                                {
                                                                                    text: "どのくらい払えばいいの？",
                                                                                    response: "どのくらい払えばいいの？",
                                                                                   
                                                                                    action: () => {
                                                                                    addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                    addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                                    
                                                                                    }
                                                                                },
                                                                                {
                                                                                    text: "どのくらい払うのが相場なの？",
                                                                                    response: "どのくらい払うのが相場なの？",
                                                                                    action: () =>{ 
                                                                                        addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "１０９万円振り込んだよ。",
                                                                                                response: "１０９万円振り込んだよ。",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("ありがとう！", "left","ひろし");
                                                                                                addChoices([
                                                                                                    {
                                                                                                        text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                        response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                       
                                                                                                        action: () => {
                                                                                                        addMessage("返事ください", "right","あなた");
                                                                                                        addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                        displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                        　このようにして言葉巧みに心を惑わしてきます。
                                                                                                        \n　例えば詐欺師は仲良くなった後
                                                                                                        \n　・2人の将来のために
                                                                                                        \n　・投資でお金を増やそう
                                                                                                        \n　・会いたいから旅費を送って
                                                                                                        \n　・荷物を送るから手数料払って
                                                                                                        \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                        
                                                                                                        }
                                                                                                    },
                                                                                                    
                                                                                                ]);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                text: "怪しいので無視",
                                                                                                response: "",
                                                                                                action: () =>{ 
                                                                                                    addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                    addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                    displayResult(`成功！詐欺を逃れました。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
            
                                                                                            }
                                                                                        }
                                                                                        ]);
                                                                                }
                                                                            }
                                                                            ]);
                                                                            }
                                                                        },
                                                                        {
                                                                            text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                            response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                            action: () =>{ 
                                                                                addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                                    
                                                                        }
                                                                    }
                                                                    ]);
                                                            }
                                                        }
                                                        ]);
                                                        }
                                                    },
                                                    {
                                                        text: "やったー",
                                                        response: "やったー",
                                                        action: () =>{ 
                                                            addMessage("あなたと結婚して一緒に暮らしたいと思っているんだ。", "left","ひろし");
                                                            addMessage("そのためにも、暗号通貨に投資してお金を稼ごう", "left","ひろし");
                                                            addChoices([
                                                                {
                                                                    text: "それは本当に安全なの？",
                                                                    response: "それは本当に安全なの？",
                                                                    action: () => {
                                                                    addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                    addMessage("","left","ひろし","./y.png");
                                                                    addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                    addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                    addChoices([
                                                                        {
                                                                            text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                            response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                           
                                                                            action: () => {
                                                                            addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                            addChoices([
                                                                                {
                                                                                    text: "どのくらい払えばいいの？",
                                                                                    response: "どのくらい払えばいいの？",
                                                                                   
                                                                                    action: () => {
                                                                                    addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                    addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                                    
                                                                                    }
                                                                                },
                                                                                {
                                                                                    text: "どのくらい払うのが相場なの？",
                                                                                    response: "どのくらい払うのが相場なの？",
                                                                                    action: () =>{ 
                                                                                        addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "１０９万円振り込んだよ。",
                                                                                                response: "１０９万円振り込んだよ。",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("ありがとう！", "left","ひろし");
                                                                                                addChoices([
                                                                                                    {
                                                                                                        text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                        response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                       
                                                                                                        action: () => {
                                                                                                        addMessage("返事ください", "right","あなた");
                                                                                                        addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                        displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                        　このようにして言葉巧みに心を惑わしてきます。
                                                                                                        \n　例えば詐欺師は仲良くなった後
                                                                                                        \n　・2人の将来のために
                                                                                                        \n　・投資でお金を増やそう
                                                                                                        \n　・会いたいから旅費を送って
                                                                                                        \n　・荷物を送るから手数料払って
                                                                                                        \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                        
                                                                                                        }
                                                                                                    },
                                                                                                    
                                                                                                ]);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                text: "怪しいので無視",
                                                                                                response: "",
                                                                                                action: () =>{ 
                                                                                                    addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                    addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                    displayResult(`成功！詐欺を逃れました。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
            
                                                                                            }
                                                                                        }
                                                                                        ]);
                                                                                }
                                                                            }
                                                                            ]);
                                                                            }
                                                                        },
                                                                        {
                                                                            text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                            response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                            action: () =>{ 
                                                                                addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                addChoices([
                                                                                        {
                                                                                            text: "１０９万円振り込んだよ。",
                                                                                            response: "１０９万円振り込んだよ。",
                                                                                           
                                                                                            action: () => {
                                                                                            addMessage("ありがとう！", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("返事ください", "right","あなた");
                                                                                                    addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                    displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                
                                                                                            ]);
                                                                                            
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            text: "怪しいので無視",
                                                                                            response: "",
                                                                                            action: () =>{ 
                                                                                                addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                displayResult(`成功！詐欺を逃れました。\n 
                                                                                                　このようにして言葉巧みに心を惑わしてきます。
                                                                                                \n　例えば詐欺師は仲良くなった後
                                                                                                \n　・2人の将来のために
                                                                                                \n　・投資でお金を増やそう
                                                                                                \n　・会いたいから旅費を送って
                                                                                                \n　・荷物を送るから手数料払って
                                                                                                \n　などと言ってお金をだまし取ろうとしてきます。`);
        
                                                                                        }
                                                                                    }
                                                                                    ]);
                                                                                    
                                                                        }
                                                                    }
                                                                    ]);
                                                                    }
                                                                },
                                                                {
                                                                    text: "ちょっと心配だけど、やってみたい！",
                                                                    response: "ちょっと心配だけど、やってみたい！",
                                                                    action: () =>{
                                                                        addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                        addMessage("","left","ひろし","./y.png");
                                                                        addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                        addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                        addChoices([
                                                                            {
                                                                                text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                                response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                               
                                                                                action: () => {
                                                                                addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                                addChoices([
                                                                                    {
                                                                                        text: "どのくらい払えばいいの？",
                                                                                        response: "どのくらい払えばいいの？",
                                                                                       
                                                                                        action: () => {
                                                                                        addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                        addChoices([
                                                                                            {
                                                                                                text: "１０９万円振り込んだよ。",
                                                                                                response: "１０９万円振り込んだよ。",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("ありがとう！", "left","ひろし");
                                                                                                addChoices([
                                                                                                    {
                                                                                                        text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                        response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                       
                                                                                                        action: () => {
                                                                                                        addMessage("返事ください", "right","あなた");
                                                                                                        addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                        displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                        　このようにして言葉巧みに心を惑わしてきます。
                                                                                                        \n　例えば詐欺師は仲良くなった後
                                                                                                        \n　・2人の将来のために
                                                                                                        \n　・投資でお金を増やそう
                                                                                                        \n　・会いたいから旅費を送って
                                                                                                        \n　・荷物を送るから手数料払って
                                                                                                        \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                        
                                                                                                        }
                                                                                                    },
                                                                                                    
                                                                                                ]);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                text: "怪しいので無視",
                                                                                                response: "",
                                                                                                action: () =>{ 
                                                                                                    addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                    addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                    displayResult(`成功！詐欺を逃れました。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
            
                                                                                            }
                                                                                        }
                                                                                        ]);
                                                                                        
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        text: "どのくらい払うのが相場なの？",
                                                                                        response: "どのくらい払うのが相場なの？",
                                                                                        action: () =>{ 
                                                                                            addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                            addChoices([
                                                                                                {
                                                                                                    text: "１０９万円振り込んだよ。",
                                                                                                    response: "１０９万円振り込んだよ。",
                                                                                                   
                                                                                                    action: () => {
                                                                                                    addMessage("ありがとう！", "left","ひろし");
                                                                                                    addChoices([
                                                                                                        {
                                                                                                            text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                            response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                           
                                                                                                            action: () => {
                                                                                                            addMessage("返事ください", "right","あなた");
                                                                                                            addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                            displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                            　このようにして言葉巧みに心を惑わしてきます。
                                                                                                            \n　例えば詐欺師は仲良くなった後
                                                                                                            \n　・2人の将来のために
                                                                                                            \n　・投資でお金を増やそう
                                                                                                            \n　・会いたいから旅費を送って
                                                                                                            \n　・荷物を送るから手数料払って
                                                                                                            \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                            
                                                                                                            }
                                                                                                        },
                                                                                                        
                                                                                                    ]);
                                                                                                    
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    text: "怪しいので無視",
                                                                                                    response: "",
                                                                                                    action: () =>{ 
                                                                                                        addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                        addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                        displayResult(`成功！詐欺を逃れました。\n 
                                                                                                        　このようにして言葉巧みに心を惑わしてきます。
                                                                                                        \n　例えば詐欺師は仲良くなった後
                                                                                                        \n　・2人の将来のために
                                                                                                        \n　・投資でお金を増やそう
                                                                                                        \n　・会いたいから旅費を送って
                                                                                                        \n　・荷物を送るから手数料払って
                                                                                                        \n　などと言ってお金をだまし取ろうとしてきます。`);
                
                                                                                                }
                                                                                            }
                                                                                            ]);
                                                                                    }
                                                                                }
                                                                                ]);
                                                                                }
                                                                            },
                                                                            {
                                                                                text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                                response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                                action: () =>{ 
                                                                                    addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                    addChoices([
                                                                                            {
                                                                                                text: "１０９万円振り込んだよ。",
                                                                                                response: "１０９万円振り込んだよ。",
                                                                                               
                                                                                                action: () => {
                                                                                                addMessage("ありがとう！", "left","ひろし");
                                                                                                addChoices([
                                                                                                    {
                                                                                                        text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                        response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                       
                                                                                                        action: () => {
                                                                                                        addMessage("返事ください", "right","あなた");
                                                                                                        addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                        displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                        　このようにして言葉巧みに心を惑わしてきます。
                                                                                                        \n　例えば詐欺師は仲良くなった後
                                                                                                        \n　・2人の将来のために
                                                                                                        \n　・投資でお金を増やそう
                                                                                                        \n　・会いたいから旅費を送って
                                                                                                        \n　・荷物を送るから手数料払って
                                                                                                        \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                        
                                                                                                        }
                                                                                                    },
                                                                                                    
                                                                                                ]);
                                                                                                
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                text: "怪しいので無視",
                                                                                                response: "",
                                                                                                action: () =>{ 
                                                                                                    addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                    addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                    displayResult(`成功！詐欺を逃れました。\n 
                                                                                                    　このようにして言葉巧みに心を惑わしてきます。
                                                                                                    \n　例えば詐欺師は仲良くなった後
                                                                                                    \n　・2人の将来のために
                                                                                                    \n　・投資でお金を増やそう
                                                                                                    \n　・会いたいから旅費を送って
                                                                                                    \n　・荷物を送るから手数料払って
                                                                                                    \n　などと言ってお金をだまし取ろうとしてきます。`);
            
                                                                                            }
                                                                                        }
                                                                                        ]);
                                                                                        
                                                                            }
                                                                        }
                                                                        ]);
                                                                }
                                                            }
                                                            ]);
                                                    }
                                                }
                                                ]); 
                                        }
                                    }
                                    ]);
                                   }
                               }
                           ]);
                       }
                   },
                   {
                       text: "怪しむ",
                       response: "これは詐欺ですか？",
                       action: () => {
                           addMessage("違いますよ！あなたと仲良くなりたいんです！", "left","ひろし");
                           addMessage("あなたのことが好きなのでもっと交流したいと思ってます！","left","ひろし");
                           addChoices([
                            {
                                text: "私もです!",
                                response: "私もです！",
                                action: () => {
                                 addMessage("1日中あなたを想っているよ。", "left","ひろし");
                                 addChoices([
                                     {
                                         text: "本当ですか？",
                                         response: "本当ですか？",
                                         action: () => {
                                         addMessage("本当だよ！あなたのことが好きだよ。", "left","ひろし");
                                         addChoices([
                                             {
                                                 text: "え、嬉しい",
                                                 response: "え、嬉しい",
                                                 action: () => {
                                                 addMessage("あなたと結婚して一緒に暮らしたいと思っているんだ。", "left","ひろし");
                                                 addMessage("そのためにも、暗号通貨に投資してお金を稼ごう", "left","ひろし");
                                                 addChoices([
                                                     {
                                                         text: "それは本当に安全なの？",
                                                         response: "それは本当に安全なの？",
                                                         action: () => {
                                                         addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                         addMessage("","left","ひろし","./y.png");
                                                         addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                         addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                         addChoices([
                                                             {
                                                                 text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                 response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                
                                                                 action: () => {
                                                                 addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                 addChoices([
                                                                     {
                                                                         text: "どのくらい払えばいいの？",
                                                                         response: "どのくらい払えばいいの？",
                                                                        
                                                                         action: () => {
                                                                         addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                         addChoices([
                                                                             {
                                                                                 text: "１０９万円振り込んだよ。",
                                                                                 response: "１０９万円振り込んだよ。",
                                                                                
                                                                                 action: () => {
                                                                                 addMessage("ありがとう！", "left","ひろし");
                                                                                 addChoices([
                                                                                     {
                                                                                         text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                         response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("返事ください", "right","あなた");
                                                                                         addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                         displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     
                                                                                 ]);
                                                                                 
                                                                                 }
                                                                             },
                                                                             {
                                                                                 text: "怪しいので無視",
                                                                                 response: "",
                                                                                 action: () =>{ 
                                                                                     addMessage("あれどうしたのー？", "left","ひろし");
                                                                                     addMessage("返信ちょうだーい", "left","ひろし");
                                                                                     displayResult(`成功！詐欺を逃れました。\n 
                                                                                     　このようにして言葉巧みに心を惑わしてきます。
                                                                                     \n　例えば詐欺師は仲良くなった後
                                                                                     \n　・2人の将来のために
                                                                                     \n　・投資でお金を増やそう
                                                                                     \n　・会いたいから旅費を送って
                                                                                     \n　・荷物を送るから手数料払って
                                                                                     \n　などと言ってお金をだまし取ろうとしてきます。`);

                                                                             }
                                                                         }
                                                                         ]);
                                                                         
                                                                         }
                                                                     },
                                                                     {
                                                                         text: "どのくらい払うのが相場なの？",
                                                                         response: "どのくらい払うのが相場なの？",
                                                                         action: () =>{ 
                                                                             addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                             addChoices([
                                                                                 {
                                                                                     text: "１０９万円振り込んだよ。",
                                                                                     response: "１０９万円振り込んだよ。",
                                                                                    
                                                                                     action: () => {
                                                                                     addMessage("ありがとう！", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                             response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("返事ください", "right","あなた");
                                                                                             addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                             displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         
                                                                                     ]);
                                                                                     
                                                                                     }
                                                                                 },
                                                                                 {
                                                                                     text: "怪しいので無視",
                                                                                     response: "",
                                                                                     action: () =>{ 
                                                                                         addMessage("あれどうしたのー？", "left","ひろし");
                                                                                         addMessage("返信ちょうだーい", "left","ひろし");
                                                                                         displayResult(`成功！詐欺を逃れました。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
 
                                                                                 }
                                                                             }
                                                                             ]);
                                                                     }
                                                                 }
                                                                 ]);
                                                                 }
                                                             },
                                                             {
                                                                 text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                 response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                 action: () =>{ 
                                                                     addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                     addChoices([
                                                                             {
                                                                                 text: "１０９万円振り込んだよ。",
                                                                                 response: "１０９万円振り込んだよ。",
                                                                                
                                                                                 action: () => {
                                                                                 addMessage("ありがとう！", "left","ひろし");
                                                                                 addChoices([
                                                                                     {
                                                                                         text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                         response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("返事ください", "right","あなた");
                                                                                         addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                         displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     
                                                                                 ]);
                                                                                 
                                                                                 }
                                                                             },
                                                                             {
                                                                                 text: "怪しいので無視",
                                                                                 response: "",
                                                                                 action: () =>{ 
                                                                                     addMessage("あれどうしたのー？", "left","ひろし");
                                                                                     addMessage("返信ちょうだーい", "left","ひろし");
                                                                                     displayResult(`成功！詐欺を逃れました。\n 
                                                                                     　このようにして言葉巧みに心を惑わしてきます。
                                                                                     \n　例えば詐欺師は仲良くなった後
                                                                                     \n　・2人の将来のために
                                                                                     \n　・投資でお金を増やそう
                                                                                     \n　・会いたいから旅費を送って
                                                                                     \n　・荷物を送るから手数料払って
                                                                                     \n　などと言ってお金をだまし取ろうとしてきます。`);

                                                                             }
                                                                         }
                                                                         ]);
                                                                         
                                                             }
                                                         }
                                                         ]);
                                                         }
                                                     },
                                                     {
                                                         text: "ちょっと心配だけど、やってみたい！",
                                                         response: "ちょっと心配だけど、やってみたい！",
                                                         action: () =>{
                                                             addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                             addMessage("","left","ひろし","./y.png");
                                                             addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                             addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                             addChoices([
                                                                 {
                                                                     text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                     response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                    
                                                                     action: () => {
                                                                     addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                     addChoices([
                                                                         {
                                                                             text: "どのくらい払えばいいの？",
                                                                             response: "どのくらい払えばいいの？",
                                                                            
                                                                             action: () => {
                                                                             addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                             addChoices([
                                                                                 {
                                                                                     text: "１０９万円振り込んだよ。",
                                                                                     response: "１０９万円振り込んだよ。",
                                                                                    
                                                                                     action: () => {
                                                                                     addMessage("ありがとう！", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                             response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("返事ください", "right","あなた");
                                                                                             addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                             displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         
                                                                                     ]);
                                                                                     
                                                                                     }
                                                                                 },
                                                                                 {
                                                                                     text: "怪しいので無視",
                                                                                     response: "",
                                                                                     action: () =>{ 
                                                                                         addMessage("あれどうしたのー？", "left","ひろし");
                                                                                         addMessage("返信ちょうだーい", "left","ひろし");
                                                                                         displayResult(`成功！詐欺を逃れました。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
 
                                                                                 }
                                                                             }
                                                                             ]);
                                                                             
                                                                             }
                                                                         },
                                                                         {
                                                                             text: "どのくらい払うのが相場なの？",
                                                                             response: "どのくらい払うのが相場なの？",
                                                                             action: () =>{ 
                                                                                 addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                 addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                         }
                                                                     }
                                                                     ]);
                                                                     }
                                                                 },
                                                                 {
                                                                     text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                     response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                     action: () =>{ 
                                                                         addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                         addChoices([
                                                                                 {
                                                                                     text: "１０９万円振り込んだよ。",
                                                                                     response: "１０９万円振り込んだよ。",
                                                                                    
                                                                                     action: () => {
                                                                                     addMessage("ありがとう！", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                             response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("返事ください", "right","あなた");
                                                                                             addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                             displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         
                                                                                     ]);
                                                                                     
                                                                                     }
                                                                                 },
                                                                                 {
                                                                                     text: "怪しいので無視",
                                                                                     response: "",
                                                                                     action: () =>{ 
                                                                                         addMessage("あれどうしたのー？", "left","ひろし");
                                                                                         addMessage("返信ちょうだーい", "left","ひろし");
                                                                                         displayResult(`成功！詐欺を逃れました。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
 
                                                                                 }
                                                                             }
                                                                             ]);
                                                                             
                                                                 }
                                                             }
                                                             ]);
                                                     }
                                                 }
                                                 ]);
                                                 }
                                             },
                                             {
                                                 text: "やったー",
                                                 response: "やったー",
                                                 action: () =>{ 
                                                     addMessage("あなたと結婚して一緒に暮らしたいと思っているんだ。", "left","ひろし");
                                                     addMessage("そのためにも、暗号通貨に投資してお金を稼ごう", "left","ひろし");
                                                     addChoices([
                                                         {
                                                             text: "それは本当に安全なの？",
                                                             response: "それは本当に安全なの？",
                                                             action: () => {
                                                             addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                             addMessage("","left","ひろし","./y.png");
                                                             addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                             addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                             addChoices([
                                                                 {
                                                                     text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                     response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                    
                                                                     action: () => {
                                                                     addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                     addChoices([
                                                                         {
                                                                             text: "どのくらい払えばいいの？",
                                                                             response: "どのくらい払えばいいの？",
                                                                            
                                                                             action: () => {
                                                                             addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                             addChoices([
                                                                                 {
                                                                                     text: "１０９万円振り込んだよ。",
                                                                                     response: "１０９万円振り込んだよ。",
                                                                                    
                                                                                     action: () => {
                                                                                     addMessage("ありがとう！", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                             response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("返事ください", "right","あなた");
                                                                                             addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                             displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         
                                                                                     ]);
                                                                                     
                                                                                     }
                                                                                 },
                                                                                 {
                                                                                     text: "怪しいので無視",
                                                                                     response: "",
                                                                                     action: () =>{ 
                                                                                         addMessage("あれどうしたのー？", "left","ひろし");
                                                                                         addMessage("返信ちょうだーい", "left","ひろし");
                                                                                         displayResult(`成功！詐欺を逃れました。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
 
                                                                                 }
                                                                             }
                                                                             ]);
                                                                             
                                                                             }
                                                                         },
                                                                         {
                                                                             text: "どのくらい払うのが相場なの？",
                                                                             response: "どのくらい払うのが相場なの？",
                                                                             action: () =>{ 
                                                                                 addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                 addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                         }
                                                                     }
                                                                     ]);
                                                                     }
                                                                 },
                                                                 {
                                                                     text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                     response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                     action: () =>{ 
                                                                         addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                         addChoices([
                                                                                 {
                                                                                     text: "１０９万円振り込んだよ。",
                                                                                     response: "１０９万円振り込んだよ。",
                                                                                    
                                                                                     action: () => {
                                                                                     addMessage("ありがとう！", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                             response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("返事ください", "right","あなた");
                                                                                             addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                             displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         
                                                                                     ]);
                                                                                     
                                                                                     }
                                                                                 },
                                                                                 {
                                                                                     text: "怪しいので無視",
                                                                                     response: "",
                                                                                     action: () =>{ 
                                                                                         addMessage("あれどうしたのー？", "left","ひろし");
                                                                                         addMessage("返信ちょうだーい", "left","ひろし");
                                                                                         displayResult(`成功！詐欺を逃れました。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
 
                                                                                 }
                                                                             }
                                                                             ]);
                                                                             
                                                                 }
                                                             }
                                                             ]);
                                                             }
                                                         },
                                                         {
                                                             text: "ちょっと心配だけど、やってみたい！",
                                                             response: "ちょっと心配だけど、やってみたい！",
                                                             action: () =>{
                                                                 addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                 addMessage("","left","ひろし","./y.png");
                                                                 addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                 addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                 addChoices([
                                                                     {
                                                                         text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                         response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                        
                                                                         action: () => {
                                                                         addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                         addChoices([
                                                                             {
                                                                                 text: "どのくらい払えばいいの？",
                                                                                 response: "どのくらい払えばいいの？",
                                                                                
                                                                                 action: () => {
                                                                                 addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                 addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                                 
                                                                                 }
                                                                             },
                                                                             {
                                                                                 text: "どのくらい払うのが相場なの？",
                                                                                 response: "どのくらい払うのが相場なの？",
                                                                                 action: () =>{ 
                                                                                     addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "１０９万円振り込んだよ。",
                                                                                             response: "１０９万円振り込んだよ。",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("ありがとう！", "left","ひろし");
                                                                                             addChoices([
                                                                                                 {
                                                                                                     text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                     response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    
                                                                                                     action: () => {
                                                                                                     addMessage("返事ください", "right","あなた");
                                                                                                     addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                     displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                     　このようにして言葉巧みに心を惑わしてきます。
                                                                                                     \n　例えば詐欺師は仲良くなった後
                                                                                                     \n　・2人の将来のために
                                                                                                     \n　・投資でお金を増やそう
                                                                                                     \n　・会いたいから旅費を送って
                                                                                                     \n　・荷物を送るから手数料払って
                                                                                                     \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                     
                                                                                                     }
                                                                                                 },
                                                                                                 
                                                                                             ]);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         {
                                                                                             text: "怪しいので無視",
                                                                                             response: "",
                                                                                             action: () =>{ 
                                                                                                 addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                 addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                 displayResult(`成功！詐欺を逃れました。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
         
                                                                                         }
                                                                                     }
                                                                                     ]);
                                                                             }
                                                                         }
                                                                         ]);
                                                                         }
                                                                     },
                                                                     {
                                                                         text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                         response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                         action: () =>{ 
                                                                             addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                             addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                                 
                                                                     }
                                                                 }
                                                                 ]);
                                                         }
                                                     }
                                                     ]);
                                             }
                                         }
                                         ]); 
                                         }
                                     },
                                     {
                                         text: "疑う",
                                         response: "本当に？",
                                         action: () =>{ 
                                             addMessage("本当だよ！あなたのことが好きだよ。", "left","ひろし");
                                             addChoices([
                                                 {
                                                     text: "え、嬉しい",
                                                     response: "え、嬉しい",
                                                     action: () => {
                                                     addMessage("あなたと結婚して一緒に暮らしたいと思っているんだ。", "left","ひろし");
                                                     addMessage("そのためにも、暗号通貨に投資してお金を稼ごう", "left","ひろし");
                                                     addChoices([
                                                         {
                                                             text: "それは本当に安全なの？",
                                                             response: "それは本当に安全なの？",
                                                             action: () => {
                                                             addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                             addMessage("","left","ひろし","./y.png");
                                                             addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                             addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                             addChoices([
                                                                 {
                                                                     text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                     response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                    
                                                                     action: () => {
                                                                     addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                     addChoices([
                                                                         {
                                                                             text: "どのくらい払えばいいの？",
                                                                             response: "どのくらい払えばいいの？",
                                                                            
                                                                             action: () => {
                                                                             addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                             addChoices([
                                                                                 {
                                                                                     text: "１０９万円振り込んだよ。",
                                                                                     response: "１０９万円振り込んだよ。",
                                                                                    
                                                                                     action: () => {
                                                                                     addMessage("ありがとう！", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                             response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("返事ください", "right","あなた");
                                                                                             addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                             displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         
                                                                                     ]);
                                                                                     
                                                                                     }
                                                                                 },
                                                                                 {
                                                                                     text: "怪しいので無視",
                                                                                     response: "",
                                                                                     action: () =>{ 
                                                                                         addMessage("あれどうしたのー？", "left","ひろし");
                                                                                         addMessage("返信ちょうだーい", "left","ひろし");
                                                                                         displayResult(`成功！詐欺を逃れました。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
 
                                                                                 }
                                                                             }
                                                                             ]);
                                                                             
                                                                             }
                                                                         },
                                                                         {
                                                                             text: "どのくらい払うのが相場なの？",
                                                                             response: "どのくらい払うのが相場なの？",
                                                                             action: () =>{ 
                                                                                 addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                 addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                         }
                                                                     }
                                                                     ]);
                                                                     }
                                                                 },
                                                                 {
                                                                     text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                     response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                     action: () =>{ 
                                                                         addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                         addChoices([
                                                                                 {
                                                                                     text: "１０９万円振り込んだよ。",
                                                                                     response: "１０９万円振り込んだよ。",
                                                                                    
                                                                                     action: () => {
                                                                                     addMessage("ありがとう！", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                             response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("返事ください", "right","あなた");
                                                                                             addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                             displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         
                                                                                     ]);
                                                                                     
                                                                                     }
                                                                                 },
                                                                                 {
                                                                                     text: "怪しいので無視",
                                                                                     response: "",
                                                                                     action: () =>{ 
                                                                                         addMessage("あれどうしたのー？", "left","ひろし");
                                                                                         addMessage("返信ちょうだーい", "left","ひろし");
                                                                                         displayResult(`成功！詐欺を逃れました。\n 
                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                         \n　・2人の将来のために
                                                                                         \n　・投資でお金を増やそう
                                                                                         \n　・会いたいから旅費を送って
                                                                                         \n　・荷物を送るから手数料払って
                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
 
                                                                                 }
                                                                             }
                                                                             ]);
                                                                             
                                                                 }
                                                             }
                                                             ]);
                                                             }
                                                         },
                                                         {
                                                             text: "ちょっと心配だけど、やってみたい！",
                                                             response: "ちょっと心配だけど、やってみたい！",
                                                             action: () =>{
                                                                 addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                 addMessage("","left","ひろし","./y.png");
                                                                 addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                 addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                 addChoices([
                                                                     {
                                                                         text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                         response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                        
                                                                         action: () => {
                                                                         addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                         addChoices([
                                                                             {
                                                                                 text: "どのくらい払えばいいの？",
                                                                                 response: "どのくらい払えばいいの？",
                                                                                
                                                                                 action: () => {
                                                                                 addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                 addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                                 
                                                                                 }
                                                                             },
                                                                             {
                                                                                 text: "どのくらい払うのが相場なの？",
                                                                                 response: "どのくらい払うのが相場なの？",
                                                                                 action: () =>{ 
                                                                                     addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "１０９万円振り込んだよ。",
                                                                                             response: "１０９万円振り込んだよ。",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("ありがとう！", "left","ひろし");
                                                                                             addChoices([
                                                                                                 {
                                                                                                     text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                     response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    
                                                                                                     action: () => {
                                                                                                     addMessage("返事ください", "right","あなた");
                                                                                                     addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                     displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                     　このようにして言葉巧みに心を惑わしてきます。
                                                                                                     \n　例えば詐欺師は仲良くなった後
                                                                                                     \n　・2人の将来のために
                                                                                                     \n　・投資でお金を増やそう
                                                                                                     \n　・会いたいから旅費を送って
                                                                                                     \n　・荷物を送るから手数料払って
                                                                                                     \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                     
                                                                                                     }
                                                                                                 },
                                                                                                 
                                                                                             ]);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         {
                                                                                             text: "怪しいので無視",
                                                                                             response: "",
                                                                                             action: () =>{ 
                                                                                                 addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                 addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                 displayResult(`成功！詐欺を逃れました。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
         
                                                                                         }
                                                                                     }
                                                                                     ]);
                                                                             }
                                                                         }
                                                                         ]);
                                                                         }
                                                                     },
                                                                     {
                                                                         text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                         response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                         action: () =>{ 
                                                                             addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                             addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                                 
                                                                     }
                                                                 }
                                                                 ]);
                                                         }
                                                     }
                                                     ]);
                                                     }
                                                 },
                                                 {
                                                     text: "やったー",
                                                     response: "やったー",
                                                     action: () =>{ 
                                                         addMessage("あなたと結婚して一緒に暮らしたいと思っているんだ。", "left","ひろし");
                                                         addMessage("そのためにも、暗号通貨に投資してお金を稼ごう", "left","ひろし");
                                                         addChoices([
                                                             {
                                                                 text: "それは本当に安全なの？",
                                                                 response: "それは本当に安全なの？",
                                                                 action: () => {
                                                                 addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                 addMessage("","left","ひろし","./y.png");
                                                                 addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                 addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                 addChoices([
                                                                     {
                                                                         text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                         response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                        
                                                                         action: () => {
                                                                         addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                         addChoices([
                                                                             {
                                                                                 text: "どのくらい払えばいいの？",
                                                                                 response: "どのくらい払えばいいの？",
                                                                                
                                                                                 action: () => {
                                                                                 addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                 addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                                 
                                                                                 }
                                                                             },
                                                                             {
                                                                                 text: "どのくらい払うのが相場なの？",
                                                                                 response: "どのくらい払うのが相場なの？",
                                                                                 action: () =>{ 
                                                                                     addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "１０９万円振り込んだよ。",
                                                                                             response: "１０９万円振り込んだよ。",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("ありがとう！", "left","ひろし");
                                                                                             addChoices([
                                                                                                 {
                                                                                                     text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                     response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    
                                                                                                     action: () => {
                                                                                                     addMessage("返事ください", "right","あなた");
                                                                                                     addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                     displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                     　このようにして言葉巧みに心を惑わしてきます。
                                                                                                     \n　例えば詐欺師は仲良くなった後
                                                                                                     \n　・2人の将来のために
                                                                                                     \n　・投資でお金を増やそう
                                                                                                     \n　・会いたいから旅費を送って
                                                                                                     \n　・荷物を送るから手数料払って
                                                                                                     \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                     
                                                                                                     }
                                                                                                 },
                                                                                                 
                                                                                             ]);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         {
                                                                                             text: "怪しいので無視",
                                                                                             response: "",
                                                                                             action: () =>{ 
                                                                                                 addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                 addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                 displayResult(`成功！詐欺を逃れました。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
         
                                                                                         }
                                                                                     }
                                                                                     ]);
                                                                             }
                                                                         }
                                                                         ]);
                                                                         }
                                                                     },
                                                                     {
                                                                         text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                         response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                         action: () =>{ 
                                                                             addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                             addChoices([
                                                                                     {
                                                                                         text: "１０９万円振り込んだよ。",
                                                                                         response: "１０９万円振り込んだよ。",
                                                                                        
                                                                                         action: () => {
                                                                                         addMessage("ありがとう！", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                 response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("返事ください", "right","あなた");
                                                                                                 addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                 displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             
                                                                                         ]);
                                                                                         
                                                                                         }
                                                                                     },
                                                                                     {
                                                                                         text: "怪しいので無視",
                                                                                         response: "",
                                                                                         action: () =>{ 
                                                                                             addMessage("あれどうしたのー？", "left","ひろし");
                                                                                             addMessage("返信ちょうだーい", "left","ひろし");
                                                                                             displayResult(`成功！詐欺を逃れました。\n 
                                                                                             　このようにして言葉巧みに心を惑わしてきます。
                                                                                             \n　例えば詐欺師は仲良くなった後
                                                                                             \n　・2人の将来のために
                                                                                             \n　・投資でお金を増やそう
                                                                                             \n　・会いたいから旅費を送って
                                                                                             \n　・荷物を送るから手数料払って
                                                                                             \n　などと言ってお金をだまし取ろうとしてきます。`);
     
                                                                                     }
                                                                                 }
                                                                                 ]);
                                                                                 
                                                                     }
                                                                 }
                                                                 ]);
                                                                 }
                                                             },
                                                             {
                                                                 text: "ちょっと心配だけど、やってみたい！",
                                                                 response: "ちょっと心配だけど、やってみたい！",
                                                                 action: () =>{
                                                                     addMessage("大丈夫。僕のことを信じて。まずは１０万円だけサイトに入金してみよう。", "left","ひろし");
                                                                     addMessage("","left","ひろし","./y.png");
                                                                     addMessage("〇〇、才能があるよ。利益が出てるから、投資資金をもっと増やそう。","left","ひろし");
                                                                     addMessage("投資資金を増やせば、早く一緒に暮らせるかも。","left","ひろし");
                                                                     addChoices([
                                                                         {
                                                                             text: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                             response: "わかった！楽しみだね。これだけ利益が出たなら、出金しておきたいんだけど、、、",
                                                                            
                                                                             action: () => {
                                                                             addMessage("高額な利益を出金するには税金を払う必要があるよ。", "left","ひろし");
                                                                             addChoices([
                                                                                 {
                                                                                     text: "どのくらい払えばいいの？",
                                                                                     response: "どのくらい払えばいいの？",
                                                                                    
                                                                                     action: () => {
                                                                                     addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                     addChoices([
                                                                                         {
                                                                                             text: "１０９万円振り込んだよ。",
                                                                                             response: "１０９万円振り込んだよ。",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("ありがとう！", "left","ひろし");
                                                                                             addChoices([
                                                                                                 {
                                                                                                     text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                     response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    
                                                                                                     action: () => {
                                                                                                     addMessage("返事ください", "right","あなた");
                                                                                                     addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                     displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                     　このようにして言葉巧みに心を惑わしてきます。
                                                                                                     \n　例えば詐欺師は仲良くなった後
                                                                                                     \n　・2人の将来のために
                                                                                                     \n　・投資でお金を増やそう
                                                                                                     \n　・会いたいから旅費を送って
                                                                                                     \n　・荷物を送るから手数料払って
                                                                                                     \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                     
                                                                                                     }
                                                                                                 },
                                                                                                 
                                                                                             ]);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         {
                                                                                             text: "怪しいので無視",
                                                                                             response: "",
                                                                                             action: () =>{ 
                                                                                                 addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                 addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                 displayResult(`成功！詐欺を逃れました。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
         
                                                                                         }
                                                                                     }
                                                                                     ]);
                                                                                     
                                                                                     }
                                                                                 },
                                                                                 {
                                                                                     text: "どのくらい払うのが相場なの？",
                                                                                     response: "どのくらい払うのが相場なの？",
                                                                                     action: () =>{ 
                                                                                         addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                         addChoices([
                                                                                             {
                                                                                                 text: "１０９万円振り込んだよ。",
                                                                                                 response: "１０９万円振り込んだよ。",
                                                                                                
                                                                                                 action: () => {
                                                                                                 addMessage("ありがとう！", "left","ひろし");
                                                                                                 addChoices([
                                                                                                     {
                                                                                                         text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                         response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                        
                                                                                                         action: () => {
                                                                                                         addMessage("返事ください", "right","あなた");
                                                                                                         addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                         displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                         　このようにして言葉巧みに心を惑わしてきます。
                                                                                                         \n　例えば詐欺師は仲良くなった後
                                                                                                         \n　・2人の将来のために
                                                                                                         \n　・投資でお金を増やそう
                                                                                                         \n　・会いたいから旅費を送って
                                                                                                         \n　・荷物を送るから手数料払って
                                                                                                         \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                         
                                                                                                         }
                                                                                                     },
                                                                                                     
                                                                                                 ]);
                                                                                                 
                                                                                                 }
                                                                                             },
                                                                                             {
                                                                                                 text: "怪しいので無視",
                                                                                                 response: "",
                                                                                                 action: () =>{ 
                                                                                                     addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                     addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                     displayResult(`成功！詐欺を逃れました。\n 
                                                                                                     　このようにして言葉巧みに心を惑わしてきます。
                                                                                                     \n　例えば詐欺師は仲良くなった後
                                                                                                     \n　・2人の将来のために
                                                                                                     \n　・投資でお金を増やそう
                                                                                                     \n　・会いたいから旅費を送って
                                                                                                     \n　・荷物を送るから手数料払って
                                                                                                     \n　などと言ってお金をだまし取ろうとしてきます。`);
             
                                                                                             }
                                                                                         }
                                                                                         ]);
                                                                                 }
                                                                             }
                                                                             ]);
                                                                             }
                                                                         },
                                                                         {
                                                                             text: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                             response: "じゃあ、もっとやってみようかな！\nどれくらい払えばいいの？",
                                                                             action: () =>{ 
                                                                                 addMessage("利益10%の１０９万円だよ。", "left","ひろし");
                                                                                 addChoices([
                                                                                         {
                                                                                             text: "１０９万円振り込んだよ。",
                                                                                             response: "１０９万円振り込んだよ。",
                                                                                            
                                                                                             action: () => {
                                                                                             addMessage("ありがとう！", "left","ひろし");
                                                                                             addChoices([
                                                                                                 {
                                                                                                     text: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                     response: "それでいつ出金できるようになるの？投資サイトの運営業者と連絡が取れなくなったんだけど、、",
                                                                                                    
                                                                                                     action: () => {
                                                                                                     addMessage("返事ください", "right","あなた");
                                                                                                     addMessage("どうして連絡してくれないの？", "right","あなた");
                                                                                                     displayResult(`残念ながら、詐欺に引っかかってしまいましたね。\n 
                                                                                                     　このようにして言葉巧みに心を惑わしてきます。
                                                                                                     \n　例えば詐欺師は仲良くなった後
                                                                                                     \n　・2人の将来のために
                                                                                                     \n　・投資でお金を増やそう
                                                                                                     \n　・会いたいから旅費を送って
                                                                                                     \n　・荷物を送るから手数料払って
                                                                                                     \n　などと言ってお金をだまし取ろうとしてきます。`);
                                                                                                     
                                                                                                     }
                                                                                                 },
                                                                                                 
                                                                                             ]);
                                                                                             
                                                                                             }
                                                                                         },
                                                                                         {
                                                                                             text: "怪しいので無視",
                                                                                             response: "",
                                                                                             action: () =>{ 
                                                                                                 addMessage("あれどうしたのー？", "left","ひろし");
                                                                                                 addMessage("返信ちょうだーい", "left","ひろし");
                                                                                                 displayResult(`成功！詐欺を逃れました。\n 
                                                                                                 　このようにして言葉巧みに心を惑わしてきます。
                                                                                                 \n　例えば詐欺師は仲良くなった後
                                                                                                 \n　・2人の将来のために
                                                                                                 \n　・投資でお金を増やそう
                                                                                                 \n　・会いたいから旅費を送って
                                                                                                 \n　・荷物を送るから手数料払って
                                                                                                 \n　などと言ってお金をだまし取ろうとしてきます。`);
         
                                                                                         }
                                                                                     }
                                                                                     ]);
                                                                                     
                                                                         }
                                                                     }
                                                                     ]);
                                                             }
                                                         }
                                                         ]);
                                                 }
                                             }
                                             ]); 
                                     }
                                 }
                                 ]);
                                }
                            }
                        ]);
                       }
                   }
               ]);
           }
       },
       {
           text: "無視する",
           response: "",
           action: () => {
            
            displayResult("成功！詐欺を逃れました。");
           }
       }
   ]);
}

// 初期化呼び出し
initializeChat();