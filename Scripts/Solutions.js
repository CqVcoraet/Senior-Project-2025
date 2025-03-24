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
subtitle.innerHTML = "Solutions to Solve Public Transportation";
template.bg.appendChild(subtitle);

// Electrify Public Transit
var solution1 = document.createElement("div")
solution1.style.position = "absolute";
solution1.style.top = "50%";
solution1.style.left = "55%";
solution1.style.transform = "translateX(-50%)";
solution1.style.width = "1600px";
solution1.style.height = "100px";
solution1.style.color = "#000000";
solution1.style.fontFamily = "Lexend Giga, sans-serif";
solution1.style.fontSize = "40px";
solution1.innerHTML = "Solution 1: Electrification of Public Transit";
template.bg.appendChild(solution1);

var p1 = document.createElement("div");
p1.style.position = "absolute";
p1.style.top = "50.6%";
p1.style.left = "50%";
p1.style.transform = "translateX(-50%)";
p1.style.width = "1400px";
p1.style.height = "300px";
p1.style.color = "#000000";
p1.style.fontFamily = "Lexend, sans-serif";
p1.style.fontSize = "20px";
p1.innerHTML = "Electrifying public transportation is the next important step because we need to take a lot of action to move towards a more sustainable future. These fossil fuels and CO2 vehicles cause a lot of damage and global warming towards the planet and atmosphere over time. As of now it is unclear how much damage has been done and whether it is too late or not to reverse it permanently. The best we can do is to stop harming it now and find ways to use renewable and clean energy. For public transportation, the railways will be fully electric and even have solar panels on them as both are clean and renewable energy sources. As we keep on researching more on clean and renewable energy sources, we may have even better energy sources in the future. Electricity still has its problems because it produces emissions to even be usable. ";
template.bg.appendChild(p1);