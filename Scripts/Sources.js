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
subtitle.innerHTML = "Sources & References";
template.bg.appendChild(subtitle);

var sourceParagraph = document.createElement("div");
sourceParagraph.style.position = "absolute";
sourceParagraph.style.top = "50.5%";
sourceParagraph.style.left = "50%";
sourceParagraph.style.transform = "translateX(-50%)";
sourceParagraph.style.width = "1400px";
sourceParagraph.style.height = "9000px";
sourceParagraph.style.fontFamily = "Lexend, sans-serif";
sourceParagraph.style.fontSize = "20px";
sourceParagraph.style.lineHeight = "1.5";
sourceParagraph.innerHTML = `
    <strong>Works Cited:</strong><br><br>
    Are Electric Vehicles Really Better for the Environment? Yes. (2024, January 17). Earthjustice. Retrieved February 26, 2025, from <a href="https://earthjustice.org/article/electric-vehicles-are-better-for-the-environment" target="_blank">Earthjustice</a><br><br>
    Chapman, J. (2024, Dec. 6). Why Governments Won't Act On Climate Change. YouTube. <a href="https://www.youtube.com/watch?v=_maaVQMwIPc" target="_blank">YouTube Video</a><br><br>
    Communicating on Climate Change | United Nations. (Unknown). The United Nations. Retrieved March 5, 2025, from <a href="https://www.un.org/en/climatechange/communicating-climate-change" target="_blank">UN Climate Change</a><br><br>
    Deaton, J. (Unknown). The US could shift to 90-percent renewable energy by 2035 at no extra cost. Panasonic Green Living. Retrieved March 3, 2025, from <a href="https://green-living.na.panasonic.com/articles/the-us-could-shift-to-90-percent-renewable-energy-by-2035-at-no-extra-cost" target="_blank">Panasonic Green Living</a><br><br>
    Fayyad, A. (2024, April 10). What other cities can learn from Washington, DC’s transit recovery. Vox. Retrieved March 4, 2025, from <a href="https://www.vox.com/cities-and-urbanism/24125535/dc-metro-transit-wmata-urbanism-cities-commuting" target="_blank">Vox Article</a><br><br>
    flurfdesign. (2023, June 7). The Suburbs are Ruining Your Mental and Physical Health. YouTube. Retrieved March 9, 2025, from <a href="https://youtu.be/tEEWqddlYQw?si=B457PX6j4UGQLPX_" target="_blank">YouTube Video</a><br><br>
    How Do I Talk to a Climate Change Denier? (2022, September 26). Boston University. Retrieved March 9, 2025, from <a href="https://www.bu.edu/articles/2022/how-do-i-talk-to-a-climate-change-denier/" target="_blank">Boston University</a><br><br>
    The Infographics Show. (2022, December 18). Why US Can't Build a High-Speed Rail. YouTube. Retrieved March 2, 2025, from <a href="https://youtu.be/q4vn5ej56lc?si=znM0yjbLRGublxlN" target="_blank">YouTube Video</a><br><br>
    Lawler, M. (2023, January 20). 4 Unique Solutions to America’s Failing Public Transportation System. Earth.Org. Retrieved March 9, 2025, from <a href="https://earth.org/us-public-transportation/" target="_blank">Earth.Org</a><br><br>
    Off the Rails: How America Can Revitalize Its Railroads. (2022, September 2). EESI. Retrieved March 9, 2025, from <a href="https://www.eesi.org/articles/view/off-the-rails-how-america-can-revitalize-its-railroads" target="_blank">EESI Report</a><br><br>
    Public Transportation Facts. (2023, September 28). American Public Transportation Association. Retrieved February 26, 2025, from <a href="https://www.apta.com/news-publications/public-transportation-facts/" target="_blank">APTA Report</a><br><br>
    Schimke, E. (2021, February 12). The Issue of Public Transportation in the Suburbs. Minnetonka Breezes. Retrieved March 9, 2025, from <a href="https://www.minnetonkabreezes.com/commentary/2021/02/12/the-issue-of-public-transportation-in-the-suburbs/" target="_blank">Minnetonka Breezes</a><br><br>
    Vox. (2020, October 22). Why American public transit is so bad | 2020 edition. Retrieved February 27, 2025, from <a href="https://youtu.be/-ZDZtBRTyeI?si=h2DwjUpCPC67KWNi" target="_blank">YouTube Video</a><br><br>
    What is Greenwashing? (2024, October 8). Arbor. Retrieved March 9, 2025, from <a href="https://www.arbor.eco/blog/the-greenwashers" target="_blank">Arbor Blog</a><br><br>
    Who Owns the Most Vehicles per Capita, by Country? (2024, August 10). Voronoi. Retrieved March 2, 2025, from <a href="https://www.voronoiapp.com/automotive/Who-Owns-the-Most-Vehicles-per-Capita-by-Country-701" target="_blank">Voronoi Data</a><br><br>
    Why Jaywalking is Called Jaywalking. (Unknown). Merriam-Webster. Retrieved March 5, 2025, from <a href="https://www.merriam-webster.com/wordplay/why-is-it-called-jaywalking" target="_blank">Merriam-Webster</a><br><br>
    Zuercher, R. (Fall 2024). [Personal interview.].
`;
template.bg.appendChild(sourceParagraph);
