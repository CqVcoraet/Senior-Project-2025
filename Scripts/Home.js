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
subtitle.innerHTML = "Overhaul & Improve US Public Transportation";
template.bg.appendChild(subtitle);

var intro = document.createElement("div");
intro.style.position = "absolute";
intro.style.top = "50%";
intro.style.left = "50%";
intro.style.transform = "translateX(-50%)";
intro.style.width = "1400px";
intro.style.height = "300px";
intro.style.color = "#000000";
intro.style.fontFamily = "Lexend, sans-serif";
intro.style.fontSize = "20px";
intro.innerHTML = "Public transportation is an essential part of a country to survive and thrive. It is one of the most important parts because it makes it easier for citizens to get from point A to point B. Some countries such as Germany and Japan have great methods and funding of public transportation while countries like the US don’t have such a great method of public transportation. This is ironic due to the US being one of the richest and most tech savvy countries in the world. One cause is due to the US’s extreme obsession with cars, roads, and highways. The US is designed in such a way that cars are the most convenient mode of transportation. To make public transportation feasible here will require a lot of work but can be done with enough public support.";
template.bg.appendChild(intro);
