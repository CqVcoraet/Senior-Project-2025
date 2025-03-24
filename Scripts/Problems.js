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
subtitle.innerHTML = "Problems With US Public Transportation";
template.bg.appendChild(subtitle);

var intro = document.createElement("div");
intro.style.position = "absolute";
intro.style.top = "50%";
intro.style.left = "50%";
intro.style.transform = "translateX(-50%)";
intro.style.width = "1400px";
intro.style.height = "500px";
intro.style.color = "#000000";
intro.style.fontFamily = "Lexend, sans-serif";
intro.style.fontSize = "20px";
intro.innerHTML = "Current public transit is extremely inconvenient compared to driving a car due to how car-based the US transportation system is. This has been a trend since the beginning of the automobiles and it has gotten worse over time. Car companies profit a lot from high sales and they lobby the government to further build more roads and highways. And also consumers themselves feel having their own car gives them more freedom making it harder to improve public transportation in the US. Another huge problem is that apps like Uber have more domination and public influence thereby lowering public incentive to fund or invest in public transportation.";
template.bg.appendChild(intro);

// Public Transportation Problems Graphic
var pbt = document.createElement("img")
pbt.src = "/Images/Problems US PBT.png";
pbt.style.position = "absolute";
pbt.style.top = "52.5%";
pbt.style.left = "28%";
pbt.style.width = "405px";
pbt.style.height = "405px";
pbt.style.transform = "translate(-50%, -50%)";
template.bg.appendChild(pbt);
console.log("Public Transportation Problems Graphic created:", pbt);

// Excessive Highways & Roads Image
var excess = document.createElement("img");
excess.src = "/Images/Excessive Highways & Roads 1.png";
excess.style.position = "absolute";
excess.style.top = "52.5%";
excess.style.left = "65%";
excess.style.width = "405px";
excess.style.height = "405px";
excess.style.transform = "translate(-50%, -50%)";
template.bg.appendChild(excess);
console.log("Excessive Highways & Roads Image created:", excess);

var p2 = document.createElement("div");
p2.style.position = "absolute";
p2.style.top = "54.2%";
p2.style.left = "50%";
p2.style.transform = "translateX(-50%)";
p2.style.width = "1400px";
p2.style.height = "500px";
p2.style.color = "#000000";
p2.style.fontFamily = "Lexend, sans-serif";
p2.style.fontSize = "20px";
p2.innerHTML = "The current US public transportation system is heavily dependent on cars, which makes it difficult to invest in other modes of transportation, such as buses, trains, and electric vehicles. The US is the second highest country of cars per 1,000 people (860 / 1,000). Car companies are profiting a lot from high sales and they lobby the government to further build more roads and highways. Also consumers themselves feel having their own car gives them more freedom making it harder to improve public transportation in the US. Another huge problem is that apps like Uber make cars even more convient because you can literally pay to have a car come to your location and because the US is heavily designed for cars, people would still choose cars the most even if public transportation has the same level of improvements as in countries like Germany.";
template.bg.appendChild(p2);

// Extreme Emissions Image 1
var emissions1 = document.createElement("img");
emissions1.src = "/Images/Greenhouse Emissions 1.webp";
emissions1.style.position = "absolute";
emissions1.style.top = "57%";
emissions1.style.left = "28%";
emissions1.style.width = "405px";
emissions1.style.height = "405px";
emissions1.style.transform = "translate(-50%, -50%)";
template.bg.appendChild(emissions1);
console.log("Extreme Emissions Image 1 created:", emissions1);

// Forest Fire Image 1
var forestFire1 = document.createElement("img");
forestFire1.src = "/Images/Forest Fire 1.jpg";
forestFire1.style.position = "absolute";
forestFire1.style.top = "57%";
forestFire1.style.left = "65%";
forestFire1.style.width = "405px";
forestFire1.style.height = "405px";
forestFire1.style.transform = "translate(-50%, -50%)";
template.bg.appendChild(forestFire1);

var p3 = document.createElement("div");
p3.style.position = "absolute";
p3.style.top = "58.7%";
p3.style.left = "50%";
p3.style.transform = "translateX(-50%)";
p3.style.width = "1400px";
p3.style.height = "500px";
p3.style.color = "#000000";
p3.style.fontFamily = "Lexend, sans-serif";
p3.style.fontSize = "20px";
p3.innerHTML = "The US public transportation system has been a major contributor to extreme greenhouse gas emissions and forest fires. The US is heavily dependent on cars, which makes it difficult to invest in other modes of transportation, such as buses, trains, and electric vehicles. Another big issue is that corporations are so good at lobbying the government that they don't even want to act on climate change because it won't be a \"good investment\". They use so called math equations to do this but they are sketchy and sometimes completely false but the general public unfortunately buys into this. ";
p3.innerHTML += "These corporations are also against or at least heavily resisting clean and renewable energy sources because they themselves profit immensely from environmental damage and clean energy sources are less profitable and controllable. Although this is considered a conspiracy theory and if any evidence were there to support this theory, it is extremely hidden and scarce. I don't expect you to believe that this is true. \n \n However, we can take the philosophical parts from it to better understand the motives of these corporations. An inventor named Nikola Tesla discovered a way to harness limitness energy from the atmosphere and universe using a special tower he designed. ";
p3.innerHTML += "The reason it was siezed and destroyed is because it threatens the money, power, and control of powerful oil corporations. If free clean energy like that were invented, it would be quickly shut down because it threatens the control, power, and money of corporations. Corporate politics is the biggest barrier to improving public transporation especially clean energy ones because they have massive governmental influence and power. In our economy, the more money you have, the more power you have. ";
p3.innerHTML += "There is also a lot of climate change denial thereby worsening this problem. We need to educate people on the impacts of climate change, how real it is, and what we as a society can do to minimize it and what it promises for a better future.";
template.bg.appendChild(p3);
