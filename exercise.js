/* ===================================
   人生RPG Alpha004
   exercise.js
=================================== */

console.log("Exercise Module Loaded");

/* ===== 顯示暱稱 ===== */

const nickname = localStorage.getItem("lifeNickname") || "努力成長的大叔";

document.getElementById("nickname").innerText = nickname;

/* ===== 人生 Level ===== */

document.getElementById("life-level").innerText = "Lv.1";

/* ===== 讀取運動紀錄 ===== */

let exerciseList =
    JSON.parse(localStorage.getItem("exerciseList")) || [];

/* ===== 取得元件 ===== */

const exerciseName =
    document.getElementById("exerciseName");

const exerciseMinute =
    document.getElementById("exerciseMinute");

const saveButton =
    document.getElementById("saveExercise");

const list =
    document.getElementById("exerciseList");

/* ===== 顯示紀錄 ===== */

function renderExercise(){

    list.innerHTML="";

    exerciseList.forEach((item,index)=>{

        const li=document.createElement("li");

        li.innerHTML=
        "🏋️ " +
        item.name +
        "　" +
        item.minute +
        " 分鐘";

        list.appendChild(li);

    });

}

/* ===== 儲存 ===== */

function saveExercise(){

    localStorage.setItem(
        "exerciseList",
        JSON.stringify(exerciseList)
    );

}

/* ===== 新增 ===== */

saveButton.addEventListener("click",()=>{

    const name=exerciseName.value.trim();

    const minute=exerciseMinute.value.trim();

    if(name==""){

        alert("請輸入運動名稱");

        return;

    }

    if(minute==""){

        alert("請輸入運動時間");

        return;

    }

    exerciseList.push({

        name:name,

        minute:minute

    });

    saveExercise();

    renderExercise();

    exerciseName.value="";

    exerciseMinute.value="";

    exerciseName.focus();

});

/* ===== Enter 快速新增 ===== */

exerciseMinute.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        saveButton.click();

    }

});

/* ===== 啟動 ===== */

renderExercise();
