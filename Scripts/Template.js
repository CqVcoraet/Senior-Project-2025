function webTemplate(currentPage) {

    // Initialize the debug window but keep it hidden initially
    var debugWindow = null;
    var debugWindowVisible = false;

    // Function to toggle the visibility of the debug console window
    function toggleDebugWindow() {
        if (debugWindowVisible) {
            debugWindow.close();  // Close the debug window if it's open
            debugWindowVisible = false;
        } else {
            debugWindow = window.open("", "DebugConsole", "width=500,height=400");
            if (debugWindow) {
                console.log("Debug window opened successfully.");
                debugWindow.document.write(`
                    <html>
                    <head>
                        <title>Debug Console</title>
                        <style>
                            body {
                                background-color: black;
                                color: #00FF00;
                                font-family: monospace;
                                font-size: 12px;
                                padding: 10px;
                                overflow-y: auto;
                            }
                            #logs {
                                max-height: 350px;
                                overflow-y: auto;
                                white-space: pre-wrap;
                            }
                            button {
                                background-color: red;
                                color: white;
                                border: none;
                                padding: 5px;
                                cursor: pointer;
                                margin-top: 5px;
                            }
                        </style>
                    </head>
                    <body>
                        <h3>Debug Console</h3>
                        <div id="logs"></div>
                        <button onclick="document.getElementById('logs').innerHTML = '';">Clear Logs</button>
                    </body>
                    </html>
                `);
                debugWindowVisible = true;
                debugWindow.focus();  // Ensure the debug window is focused if already open
            }
        }
    }

    // Background
    var bg = document.createElement("div");
    var bgWidth = 1650;
    bg.style.left = "50%";
    bg.style.top = "50%";
    bg.style.position = "absolute";
    bg.style.transform = "translate(-50%, -50%)";
    bg.style.width = bgWidth + "px";
    bg.style.height = "14000px";
    bg.style.backgroundColor = "#ebeff5";
    document.body.appendChild(bg);

    console.log("Template.js loaded!");

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
    menuBar.style.width = bgWidth + "px";
    menuBar.style.transform = "translateX(-50%)";
    menuBar.style.height = "120px";
    menuBar.style.backgroundColor = "#03468F";
    menuBar.style.zIndex = "9999";  // Ensures it stays above other content
    console.log("Menu bar element:", menuBar);
    document.body.appendChild(menuBar);

    function createMenuButton(xPos, yPos, pageName, width) {
        var button = document.createElement("button");
        button.style.position = "absolute";
        button.style.left = xPos + "px";
        button.style.top = yPos + "px";
        button.style.width = width + "px";
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

        // Append button to the menu bar
        menuBar.appendChild(button);
        

        // Return created buttons
        return button;    
    }

    var debug = createMenuButton(1500, 40, "Debug", 100);
    

    // Add the toggle function to the debug button
    debug.onclick = function() {
        toggleDebugWindow();
    };

    // Override console.log to log to the debug window
    function logToDebugWindow(message) {
        if (debugWindow && !debugWindow.closed) {
            let logDiv = debugWindow.document.getElementById("logs");
            let logEntry = debugWindow.document.createElement("div");
            logEntry.textContent = message;
            logDiv.appendChild(logEntry);
            logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll
        }
    }

    console._log = console.log; // Save the original console.log function
    console.log = function(message) {
    // Log to the debug window if it's open
    if (debugWindow && !debugWindow.closed) {
        let logDiv = debugWindow.document.getElementById("logs");
        let logEntry = debugWindow.document.createElement("div");
        logEntry.textContent = message;
        logDiv.appendChild(logEntry);
        logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll to the latest log
    }

    // Call the original console.log to keep logging in the browser console too
    console._log(message);  
};

    // Create Menu Buttons
    var home = createMenuButton(100, 40, "Home", 80);
    var problems = createMenuButton(250, 40, "Problems", 110);
    var solutions = createMenuButton(430, 40, "Solutions", 110);
    var implementation = createMenuButton(610, 40, "Implementation", 170);
    var sources = createMenuButton(840, 40, "Sources", 110);
    console.log("test");

    // Menu Button Event Listeners
    home.addEventListener("click", function () {
        window.location.href = "Home.html";
    });

    problems.addEventListener("click", function () {
        window.location.href = "Problems.html";
    });

    solutions.addEventListener("click", function () {
        window.location.href = "Solutions.html";
    });

    implementation.addEventListener("click", function () {
        window.location.href = "Implementation.html";
    });

    sources.addEventListener("click", function () {
        window.location.href = "Sources.html";
    });

    return { bg:bg };
}