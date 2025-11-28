const flower = document.querySelector(".flower");
const message = document.querySelector(".message");
const bgMusic = document.getElementById("bg-music");

const messages = [
  "Ana, com você, tudo faz sentido 💫",
  "You're the missing piece I've been searching for 🧩",
  "Minha vida ganhou cores com você 🎨",
  "Your smile makes my day ✨",
  "Você ilumina meus dias 🌟",
  "I fall for you more every day 🍂",
  "Forever yours 💕",
  "Seu abraço é meu lugar favorito 🏡",
  "With you, life is sweeter 🍯",
  "You're my favorite hello and hardest goodbye 👋",
  "Eternamente seu 💞",
  "My love for you grows stronger every moment 💓",
  "You complete me ❤️",
  "Thank you for being you 💜",
  "Obrigado por ser quem você é 🙏",
  "You make ordinary moments extraordinary 🌈",
  "Meu amor por você cresce a cada dia 💘",
  "Your love is my greatest treasure 💎",
  "With you, I've found my forever home 💒",
  "You're my happy baby ☀️",
  "My heart blossoms for you 🌷",
  "I think of you all day 💓",
  "In your arms is where I belong 🤗",
  "Você é a razão do meu sorriso 😊",
  "You make my world bloom 🌸",
  "I love you more each day, honey 💖"
];

let blooming = false;

flower.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }

  blooming = !blooming;
  flower.classList.toggle("bloom");

  if (blooming) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;

    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
    });
  } else {
    message.textContent = "";
  }
});

const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "🎵";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
  }
});
