const t = "To the person na mahilig mag Alden Richard Expression HAHAHAHappiest Birthday Chili, Welcome to adulthood whereas responsibilities are inevitable, to figure out what you really want to be and lastly where you pursue your dreams seriously na talaga. I wish you endless blessings, genuine happiness and of course money✨Don't forget to enjoy your life even stressed na masyado sa college teh, maaga kang papanot n'yan HAHAHA anyways, just enjoy the ride lang. Enjoy your special day!";

const btn = document.getElementById("open");
const c = document.getElementById("cover");
const l = document.getElementById("letter");
const p = document.getElementById("text");
const a = document.getElementById("bgm");

btn.onclick = () => {
  c.classList.add("hidden");
  l.classList.remove("hidden");
  a.play().catch(() => {});

  let i = 0;
  let iv = setInterval(() => {
    p.textContent += t[i++] || "";
    if (i > t.length) clearInterval(iv);
  }, 35);
};

/* 🌸 PETAL FIX (ADD THIS AT THE VERY BOTTOM) */

const petals = document.querySelectorAll(".petal");

petals.forEach((p) => {
  // random horizontal position
  p.style.left = Math.random() * 100 + "vw";

  // random speed
  p.style.animationDuration = (4 + Math.random() * 6) + "s";

  // random size
  p.style.fontSize = (14 + Math.random() * 16) + "px";

  // random delay so they don't fall at same time
  p.style.animationDelay = Math.random() * 5 + "s";

  // random transparency
  p.style.opacity = (0.3 + Math.random() * 0.7);
});
