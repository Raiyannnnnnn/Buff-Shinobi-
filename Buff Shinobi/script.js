// ======== Elements ========
const startBtn = document.getElementById('startBtn');
const instructionsBtn = document.getElementById('instructionsBtn');
const webcam = document.getElementById('webcam');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');

let player1Score = 0;
let player2Score = 0;

// ======== Speech (TTS) Function ========
function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 1; // speed (1 = normal)
  msg.pitch = 1; // tone
  msg.lang = 'en-US';
  window.speechSynthesis.speak(msg);
}

// ======== Webcam setup ========
async function startWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    webcam.srcObject = stream;
    speak("Webcam activated. Let's start the fitness challenge!");
  } catch (error) {
    alert("Camera access denied or unavailable.");
  }
}

// ======== Score simulation (for now) ========
function simulateScoring() {
  // Randomly update scores every few seconds (for testing)
  setInterval(() => {
    const player = Math.random() > 0.5 ? 1 : 2;
    if (player === 1) {
      player1Score++;
      score1El.textContent = player1Score;
      speak("Good job Player 1!");
    } else {
      player2Score++;
      score2El.textContent = player2Score;
      speak("Awesome work Player 2!");
    }
  }, 3000);
}

// ======== Button events ========
startBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  game.style.display = 'flex';
  startWebcam();
  simulateScoring(); // Remove later when real AI connects
});

instructionsBtn.addEventListener('click', () => {
  speak("Welcome to the Kids Fitness Battle! Two players stand in front of the camera. Perform the exercises shown, and every correct move earns you one point. After three minutes, the player with the most points wins!");
});
