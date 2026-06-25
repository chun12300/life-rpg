// ===============================
// 人生RPG v2.0
// script.js
// ===============================

console.log("人生RPG v2.0 啟動成功！");

// 網站載入動畫
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 0.8s";

        document.body.style.opacity = "1";

    },100);

});

// 找到所有卡片
const cards = document.querySelectorAll(".card");

// 每張卡加入點擊事件
cards.forEach(card=>{

    card.addEventListener("click",()=>{

        const title = card.querySelector("h3").innerText;

        alert("歡迎來到【" + title + "】\n\n功能正在開發中...");

    });

});

// 滑鼠經過時增加光暈
cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.18),
        rgba(255,255,255,.08) 45%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.08)";

    });

});

// 開始冒險按鈕（預留）
const startBtn = document.querySelector(".start-btn");

if(startBtn){

    startBtn.addEventListener("click",()=>{

        alert("冒險即將開始！");

    });

}
