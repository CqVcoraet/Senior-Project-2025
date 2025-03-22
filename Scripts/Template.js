function webTemplate(currentPage) {
    // Background
    var bg = document.createElement("div");
    var bgWidth = 1650;
    bg.style.left = "50%";
    bg.style.top = "50%";
    bg.style.position = "absolute";
    bg.style.transform = "translate(-50%, -50%)";
    bg.style.width = bgWidth + "px";
    bg.style.height = "2600px";
    bg.style.backgroundColor = "#E9E9E9";
    document.body.appendChild(bg);

    // Imported Fonts
    var lexend = document.createElement("link");
    lexend.href = "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap";
    lexend.rel = "stylesheet";
    document.head.append(lexend);

    var lexendGiga = document.createElement("link");
    lexendGiga.href = "https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&display=swap";
    lexendGiga.rel = "stylesheet";
    document.head.append(lexendGiga);

    // Menu Bar (Fixed Position)
    var menuBar = document.createElement("div");
    menuBar.style.position = "fixed";  // Changed from absolute to fixed
    menuBar.style.top = "0";
    menuBar.style.left = "50%";
    menuBar.style.width = bgWidth;
    menuBar.style.transform = "translateX(-50%)";
    menuBar.style.height = "120px";
    menuBar.style.backgroundColor = "#E4E4E4";
    menuBar.style.zIndex = "1000";  // Ensures it stays above other content
    document.body.appendChild(menuBar);

    function createMenuButton(xPos, yPos, pageName) {
        var button = document.createElement("button");
        button.style.position = "absolute";
        button.style.left = xPos + "px";
        button.style.top = yPos + "px";
        button.style.width = "80px";
        button.style.height = "40px";
        button.style.backgroundColor = "#EEEEEE";
        button.style.color = "#000000";
        button.style.fontFamily = "Lexend, sans-serif";
        button.style.fontSize = "18px";
        button.style.border = "none";
        button.style.borderRadius = "225px";
        button.style.fontWeight = "bold";
        button.style.cursor = "pointer";
        button.innerHTML = pageName;

        // Underline the button if it matches the current page
        if (pageName == currentPage) {
            button.style.color = "#05DBFC";
        } else {
            button.style.color = "#000000";
        }
        // Append button to the menu bar
        menuBar.appendChild(button);

        // Return created buttons
        return button;    
    }

    // Create Menu Buttons
    var home = createMenuButton(250, 40, "Home");
    var problems = createMenuButton(360, 40, "About");
    var solutions = createMenuButton(470, 40, "Solutions");
    var implementation = createMenuButton(500, 40, "Implementation");

    return { bg:bg };
}