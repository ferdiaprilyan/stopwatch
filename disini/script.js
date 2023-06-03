var timerInterval;
var startTime = parseInt(localStorage.getItem("startTime")) || Date.now();
var isNightMode = false;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  var currentTime = Date.now();
  var elapsedTime = currentTime - startTime;

  var hours = Math.floor(elapsedTime / 3600000);
  var minutes = Math.floor((elapsedTime % 3600000) / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);

  document.getElementById("timer").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Simpan waktu mulai pada local storage
localStorage.setItem("startTime", startTime);

// Jalankan fungsi startTimer()
startTimer();

function toggleMode() {
  isNightMode = !isNightMode;
  var toggleButton = document.getElementById("toggleButton");
  var timerElement = document.getElementById("timer");

  if (isNightMode) {
    document.body.classList.add("mode-malam");
    document.body.classList.remove("mode-siang");
    toggleButton.textContent = "Malam";
    toggleButton.classList.add("toggle-button-night");
  } else {
    document.body.classList.add("mode-siang");
    document.body.classList.remove("mode-malam");
    toggleButton.textContent = "Siang";
    toggleButton.classList.remove("toggle-button-night");
  }

  timerElement.classList.toggle("mode-malam", isNightMode);
  timerElement.classList.toggle("mode-siang", !isNightMode);
}
