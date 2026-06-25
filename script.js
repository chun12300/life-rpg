/* ===================================
   人生RPG v3.0.1 Alpha001
=================================== */

console.log("人生RPG v3.0.1 啟動成功");
alert("script.js 已載入");

// -----------------------------
// 網站淡入
// -----------------------------
window.addEventListener("load", function () {
    document.body.style.opacity = "0";

    setTimeout(function () {
        document.body.style.transition = "opacity 0.8s";
        document.body.style.opacity = "1";
    }, 100);
});

// -----------------------------
// 取得暱稱
// -----------------------------
let nickname = localStorage.getItem("lifeNickname");

// 第一次使用
if (!nickname) {

    nickname = prompt("歡迎來到人生RPG\n\n請輸入你的暱稱：");

    if (!nickname || nickname.trim() === "") {
        nickname = "努力成長的大叔";
    }

    localStorage.setItem("lifeNickname", nickname);
}

// -----------------------------
// 顯示暱稱
// -----------------------------
const nicknameElement = document.getElementById("nickname");

if (nicknameElement) {
    nicknameElement.innerText = nickname;
} else {
    alert("找不到 nickname");
}

// -----------------------------
// 人生等級
// -----------------------------
const levelElement = document.getElementById("life-level");

if (levelElement) {
    levelElement.innerText = "Lv.1";
}

// -----------------------------
// 卡片點擊
// -----------------------------
const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("click",function(){

        const title = card.querySelector("h3").innerText;

        alert("【" + title + "】\n\n功能開發中...");

    });

});
