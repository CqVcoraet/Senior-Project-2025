var template = webTemplate("Home");
console.log("Template created:", template);

// Title
var title = document.createElement("div");
title.style.position = "absolute";
title.style.top = "48%";
title.style.left = "44%";
title.style.transform = "translateX(-50%)";
title.style.width = "1300px";
title.style.height = "100px";
title.style.color = "#000000";
title.style.fontFamily = "Lexend Giga, sans-serif";
title.style.fontSize = "60px";
title.style.fontWeight = "bold";
title.innerHTML = "Senior Project 2025 - Uddi.java";
console.log("Title created:", title);

if (template && template.bg) {
    template.bg.appendChild(title);
    console.log("Title appended to bg:", title);
} else {
    console.error("Template or bg is undefined");
}

var titleLine = document.createElement("div");
titleLine.style.position = "absolute";
titleLine.style.top = "49%";
titleLine.style.left = "50%";
titleLine.style.transform = "translateX(-50%)";
titleLine.style.width = "1510px";
titleLine.style.height = "2px";
titleLine.style.backgroundColor = "black";
template.bg.appendChild(titleLine);
console.log("Title line created:", titleLine);

var subtitle = document.createElement("div");
subtitle.style.position = "absolute";
subtitle.style.top = "49.3%";
subtitle.style.left = "55%";
subtitle.style.transform = "translateX(-50%)";
subtitle.style.width = "1600px";
subtitle.style.height = "100px";
subtitle.style.color = "#000000";
subtitle.style.fontFamily = "Lexend Giga, sans-serif";
subtitle.style.fontSize = "45px";
subtitle.style.fontWeight = "bold";
subtitle.innerHTML = "Implementation";
template.bg.appendChild(subtitle);