/* ===================================
   人生RPG Alpha003
=================================== */

console.log("人生RPG Alpha003 啟動");

/* ===== 淡入 ===== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    },100);

});

/* ===== 暱稱 ===== */

let nickname = localStorage.getItem("lifeNickname");

if(!nickname){

    nickname = prompt("歡迎來到人生RPG\n\n請輸入你的暱稱");

    if(!nickname || nickname.trim()==""){

        nickname="努力成長的大叔";

    }

    localStorage.setItem("lifeNickname",nickname);

}

document.getElementById("nickname").innerText=nickname;

/* ===== 人生宣言 ===== */

let quote = localStorage.getItem("lifeQuote");

if(!quote){

    quote = prompt("請輸入你的人生宣言");

    if(!quote || quote.trim()==""){

        quote="人生，不需要打怪。\n而是超越昨天的自己。";

    }

    localStorage.setItem("lifeQuote",quote);

}

document.getElementById("lifeQuote").innerText=quote;

/* ===== 人生 Level ===== */

document.getElementById("life-level").innerText="Lv.1";

/* ===== 任務 ===== */

let tasks = JSON.parse(localStorage.getItem("lifeTasks")) || [];

const input = document.getElementById("taskInput");

const button = document.getElementById("addTask");

const list = document.getElementById("taskList");

/* ===== 顯示任務 ===== */

function renderTasks(){

    list.innerHTML="";

    tasks.forEach((task,index)=>{

        const li=document.createElement("li");

        const checkbox=document.createElement("input");

        checkbox.type="checkbox";

        checkbox.checked=task.done;

        checkbox.onchange=()=>{

            task.done=checkbox.checked;

            saveTasks();

            renderTasks();

        };

        const span=document.createElement("span");

        span.innerText=task.text;

        if(task.done){

            span.classList.add("completed");

        }

        li.appendChild(checkbox);

        li.appendChild(span);

        list.appendChild(li);

    });

}

/* ===== 新增任務 ===== */

button.addEventListener("click",()=>{

    const text=input.value.trim();

    if(text=="") return;

    tasks.push({

        text:text,

        done:false

    });

    input.value="";

    saveTasks();

    renderTasks();

});

/* ===== Enter新增 ===== */

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        button.click();

    }

});

/* ===== 儲存 ===== */

function saveTasks(){

    localStorage.setItem("lifeTasks",JSON.stringify(tasks));

}

/* ===== 五大卡 ===== */

document.querySelectorAll(".card").forEach(card=>{

    card.onclick=()=>{

        alert(card.querySelector("h3").innerText+"\n\n功能開發中");

    }

});

/* ===== 啟動 ===== */

renderTasks();
