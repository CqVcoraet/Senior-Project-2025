var template = webTemplate("Home");
console.log("Template created:", template);

// Title
var title = document.createElement("div");
title.style.position = "absolute";
title.style.top = "38%";
title.style.left = "32%";
title.style.transform = "translateX(-50%)";
title.style.width = "800px";
title.style.height = "100px";
title.style.color = "#000000";
title.style.fontFamily = "Lexend Giga, sans-serif";
title.style.fontSize = "60px";
title.style.fontWeight = "bold";
title.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
title.innerHTML = "CqVcoraetLands";
console.log("Title created:", title);

if (template && template.bg) {
    template.bg.appendChild(title);
    console.log("Title appended to bg:", title);
} else {
    console.error("Template or bg is undefined");
}
