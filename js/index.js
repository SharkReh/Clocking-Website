// variables
let main = document.getElementById("main-part");
let sunStates = [
    "<i class='fa-solid fa-moon'></i>",
    "<i class='fa-solid fa-sun'></i>",
];
const sun = document.getElementById("sun-icon");
let Button = document.getElementById("button");
let isBlack = true;
let settings = document.getElementById("settings");
let fullsc = document.getElementById("fullscreen");
const icon = document.getElementById("fullscreen");
const iconStates = [
    "<i class='fa-solid fa-compress'></i>",
    "<i class='fa-solid fa-expand'></i>",
];

let body = document.documentElement;
const StopwatchButton = document.getElementById("StopwatchButton");
const Sidebar = document.getElementById("sidebar");
let isPopupVisible = false;
let isPopupVisible2 = false;
const PlayTimerStates = [
    '<i class="fa-solid fa-circle-pause"></i>',
    '<i class="fa-solid fa-circle-play"></i>',
];
const PlayTimer = document.getElementById("PlayTimer");
let isRunning = false;
let Timer = document.getElementById("Timer");
let ss = 0;
let timeInterval;
let currentStateIndex2 = 0;
const ResetButton = document.getElementById("Reset");
let Time = document.getElementById("Time");
let isNotFullscreen = false;
const Settings = document.getElementById("settings");
let SettingsSidebar = document.getElementById("settings-sidebar");
const QuitSettings = document.getElementById("QuitSettings");
const HourSystemSwitch = document.getElementById("switch");
const CurrentTime = document.getElementById("currentTime");
const RedColor = document.getElementById("red-color");
const BlueColor = document.getElementById("blue-color");
const GreenColor = document.getElementById("green-color");
const DefaultColor = document.getElementById("default-color");
let FlagStopWatch = document.getElementById("FlagStopWatch");
const flags = [];
let flagList = document.getElementById("flagItem");
const login = document.getElementById("login");
const loginSidebar = document.getElementById("login-sidebar");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const errorMessage = document.getElementById("error-message");
loginButton.addEventListener("click", function () {
    const email = loginEmail.value;
    const password = loginPassword.value;
    // Hier kannst du deine E-Mail- und Passwortüberprüfung durchführen.
    // Dies ist ein einfaches Beispiel, das immer eine Fehlermeldung anzeigt.
    if (email === "beispiel@email.com" && password === "passwort123") {
      // Erfolgreiche Anmeldung
      errorMessage.textContent = "";
      window.location.href = "https://fontawesome.com";
    } else {
      // Anmeldung fehlgeschlagen
      errorMessage.textContent = "Incorrect Email or Password🤔";
    }
  });
// For login popup
login.addEventListener("click", function() {
        //This hide the popup
        if (isPopupVisible2) {
            loginSidebar.classList.add("hidden");
        } else {
            //This show the popup
            loginSidebar.classList.remove("hidden")
        }
        // Toggle the visibility state
        isPopupVisible2 = !isPopupVisible2;
});
function SetBlue() {
    Time.style.color = "blue";
    BlueColor.style.color = "blue";
}
function SetDefault() {
    Time.style.color = "rgb(7, 231, 220)";
    DefaultColor.style.color = "rgb(7, 231, 220)";
}
function SetGreen() {
    Time.style.color = "green";
    GreenColor.style.color = "yellowgreen";
}
function SetRed() {
    Time.style.color = "red";
    RedColor.style.color = "red";
}
// Open the Sidebar Settings
Settings.addEventListener("click", function() {
    SettingsSidebar.style.display = "block";
});
// Close the Sidebar Settings
function QuitTheSidebar() {
    SettingsSidebar.style.display = "none";
}
// Function for Reset Time
function ResetTime() {

    clearInterval(timeInterval); // Stop the timer
    ss = 0; // Reset the seconds
    updateTimer(); // Update the timer display
    isRunning = false; // Set running state to false
    PlayTimer.innerHTML = PlayTimerStates[1]; // Reset the play/pause icon
}
function flagStopWatch() {
    if (isRunning) {
        const currentElapsedTime = timeInterval;
        flags.push(currentElapsedTime);
        let flagItem = document.createElement("li");
        flagItem.textContent = `Flag at ${currentElapsedTime} seconds`;
        flagList.appendChild(flagItem);
    }
}

// function for stop or start a time
function toggleTimer() {
    if (isRunning) {
        clearInterval(timeInterval); // Stop the timer
    } else {
        timeInterval = setInterval(updateTimeAutomatically, 1000); // Start the timer
        updateTimeAutomatically(); // Update immediately the time
    }
    isRunning = !isRunning;
}
// changing icon content of play and stop timer
PlayTimer.addEventListener("click", () => {
    // Change the icon's content to the next state
    PlayTimer.innerHTML = PlayTimerStates[currentStateIndex2];
  
    // Increment the state index, and loop back to 0 if exceeding the array length
    currentStateIndex2 = (currentStateIndex2 + 1) % PlayTimerStates.length;
  });

// Code for Timer
PlayTimer.addEventListener("click", function() {
     // Start the timer interval if it's not already running
    if (!timeInterval) {
    timeInterval = setInterval(updateTimeAutomatically, 1000); // Update every 1000 milliseconds (1 second)
    updateTimeAutomatically(); // Call immediately to show initial time
}
});
// Automatically updates the past time in the timer
function updateTimeAutomatically() {
    ss += 1;
    updateTimer();
}
// To ensure that all numbers have two digits
function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}
// Calculates and updates the minutes, hours and seconds
function updateTimer() {
    const hh = Math.floor(ss / 3600);
    const mm = Math.floor((ss % 3600) / 60);
    const remainingss = ss % 60;
    const TimeinTimer = `${padZero(hh)}:${padZero(mm)}:${padZero(remainingss)}`;
    Timer.textContent = `${TimeinTimer}`;
}
// Timer Popup
StopwatchButton.addEventListener("click", function() {
    //This hide the popup
    if (isPopupVisible) {
        Sidebar.classList.add("hidden");
    } else {
        //This show the popup
        Sidebar.classList.remove("hidden")
    }
    // Toggle the visibility state
    isPopupVisible = !isPopupVisible;
});
// dark white mode
sun.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
  });

//change color of sun
sun.addEventListener(`click`, function(){
    if (isBlack) {
        colorElement.style.backgroundColor = 'black';
        colorElement.style.color = 'white';
        isBlack = false;
    } else {
        colorElement.style.backgroundColor = 'white';
        colorElement.style.color = 'black';
        isBlack = true;
      }
});

// changing icon content of sun and moon
sun.addEventListener("click", () => {
  // Change the icon's content to the next state
  sun.innerHTML = sunStates[currentStateIndex2];

  // Increment the state index, and loop back to 0 if exceeding the array length
  currentStateIndex2 = (currentStateIndex2 + 1) % sunStates.length;
});

// Funktion, um die Uhrzeit zu aktualisieren
function updateClock()  {
    // Aktuelles Datum und Uhrzeit abrufen
    var currentTime = new Date();
  
    // Stunden, Minuten und Sekunden extrahieren
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Führende Nullen hinzufügen, wenn die Anzahl der Ziffern kleiner als 2 ist
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Uhrzeit in einem String formatieren
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    // Uhrzeit in das HTML-Element mit der ID "Time" einfügen
    document.getElementById("Time").innerHTML = timeString;
  }
  
  // Funktion aufrufen, um die Uhrzeit sofort anzuzeigen
  updateClock();
  
  // Die Uhrzeit alle Sekunde aktualisieren
setInterval(updateClock, 1000);

function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    var is12HourFormat = document.getElementById('timeFormatSwitch').checked;

    if (is12HourFormat) {
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' ' + ampm;
    } else {
        var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    document.getElementById('Time').innerHTML = timeString;
}

// Funktion aufrufen, um die Uhrzeit sofort anzuzeigen
updateClock();

// Die Uhrzeit bei Änderung des Schiebeschalters aktualisieren
document.getElementById('timeFormatSwitch').addEventListener('change', function () {
    updateClock();
});

// changing icon content of fullscreen
let currentStateIndex = 0;
icon.addEventListener("click", () => {
    // Change the icon's content to the next state
    icon.innerHTML = iconStates[currentStateIndex];

    // Increment the state index, and loop back to 0 if exceeding the array length
    currentStateIndex = (currentStateIndex + 1) % iconStates.length;
});

// For opening a fullscreen
fullsc.addEventListener("click", function() {
    if (main.requestFullscreen){
        main.requestFullscreen();
    } else if (main.msRequestFullscreen) {
        /* IE11 */
        main.msRequestFullscreen();
        
    }
});
// For change Items in Fullscreen
icon.addEventListener("click", function() {
    if (isNotFullscreen){
        Time.style.fontSize = "140px";
        Time.style.left = "37%";
        Time.style.top = "35%";
        StopwatchButton.style.display = "block";
    } else {
        Time.style.fontSize = "230px";
        Time.style.left = "27%";
        Time.style.top = "30%";
        StopwatchButton.style.display = "none";
    }
    isNotFullscreen = !isNotFullscreen;
});
// For closing a fullscreen
fullsc.addEventListener("click", function() {
    if (document.exitFullscreen){
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
    }
});
