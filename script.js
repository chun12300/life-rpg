/* ===================================
   人生RPG v1.0 Alpha001
   script.js
=================================== */

console.log("人生RPG v1.0 Alpha001 啟動成功");

/* ---------- 網站淡入 ---------- */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    },100);

});

/* ---------- 讀取暱稱 ---------- */

const nicknameElement = document.getElementById("nickname");

/* ---------- 本機儲存 ---------- */

let nickname = localStorage.getItem("lifeNickname");

/* ---------- 第一次使用 ---------- */

if(nickname === null){

    nickname = prompt("歡迎來到人生RPG\n\n請輸入你的暱稱");

    if(nickname === null || nickname.trim() === ""){

        nickname = "努力成長的大叔";

    }

    localStorage.setItem("lifeNickname",nickname);

}

/* ---------- 顯示暱稱 ---------- */

nicknameElement.innerText = nickname;

/* ---------- 五張卡 ---------- */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        const title = card.querySelector("h3").innerText;

        alert("【" + title + "】\n\n即將開放。");

    });

});
