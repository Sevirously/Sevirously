const t = "To the person na mahilig mag Alden Richard Expression HAHAHAHappiest Birthday Chili, Welcome to adulthood whereas responsibilities are inevitable, to figure out what you really want to be and lastly where you pursue your dreams seriously na talaga. I wish you endless blessings, genuine happiness and of course money✨Don't forget to enjoy your life even stressed na masyado sa college teh, maaga kang papanot n'yan HAHAHA anyways, just enjoy the ride lang. Enjoy your special day!";

const btn = document.getElementById("open");
const c = document.getElementById("cover");
const l = document.getElementById("letter");
const p = document.getElementById("text");
const a = document.getElementById("bgm");

btn.onclick = () => {

  /* 💖 HEART EXPLOSION */
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "60vh";
    heart.style.fontSize = (15 + Math.random() * 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1500);
  }

  /* 🎁 OPEN LETTER */
  c.classList.add("hidden");
  l.classList.remove("hidden");
  a.play().catch(() => {});

  let i = 0;
  let iv = setInterval(() => {
    p.textContent += t[i++] || "";
    if (i > t.length) clearInterval(iv);
  }, 35);
};

/* 🌸 PETALS RANDOMIZER */
const petals = document.querySelectorAll(".petal");

petals.forEach((p) => {
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (5 + Math.random() * 5) + "s";
  p.style.fontSize = (16 + Math.random() * 10) + "px";
  p.style.opacity = Math.random();
});
