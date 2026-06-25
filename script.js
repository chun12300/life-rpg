document.querySelectorAll(".card").forEach(card=>{

    card.onclick=()=>{

        const title = card.querySelector("h3").innerText;

        switch(title){

            case "健康":
                location.href="health.html";
                break;

            case "財富":
                alert("財富世界 開發中");
                break;

            case "生活":
                alert("生活世界 開發中");
                break;

            case "成長":
                alert("成長世界 開發中");
                break;

            case "探索":
                alert("探索世界 開發中");
                break;

        }

    };

});
