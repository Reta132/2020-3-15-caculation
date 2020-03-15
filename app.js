// 取得結果元素
var result = document.getElementById("result");
// 取得按鈕：0-9 +-*/
var btns = document.getElementsByClassName("btn");
// 最終數字
var final = "";

// 等於按鈕
var equalBtn = document.getElementById("equal");
// 監聽器(""，等於)
equalBtn.addEventListener("click", equal);

function equal() {

    // 如果 最終數字 等於 "" 就 跳出此函數
    //當if後大括號內只有一行，則可以省略成if (final == "") return;
    if (final == "") {
        return;
    }
    // eval 運算字串
    result.innerHTML = eval(final);
    //清空
    final = "";
}

// var 在 function 內使用
// let 在 { } 內使用
for (let i = 0; i < btns.length; i++) {
     // 按鈕[編號].添加事件監聽器("點擊"，匿名函式() { 函式(); })
    btns[i].addEventListener("click", function () {

         // 顯示(按鈕[編號].內容)
        show(btns[i].innerHTML);
    })
    
}

// 函式 顯示(參數-內容)
function show(content) {
    //尚未輸入數字之前，顯示中的內容不會顯示的
    if (final == "") {
        if(content == "0")return;
        if(content == "*")return;
        if(content == "/")return;
    }

    // 取得最後一個字羅
    var last = final[final.length - 1];

    //邏輯運算子 || 或者
    if (last == "+" || last == "-" || last == "*" || last == "/" )
        if(content == "+" || content == "-" || content == "*" || content == "/" )
            return; 

    // 最終數字 += 參數-內容
    final += content;
    // 結果元素.內容 = 參數-內容
    result.innerHTML = final;

    //C鍵
    var clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", clear);
    function clear() {
        final = "";
        result.innerHTML = "0";
    }
}