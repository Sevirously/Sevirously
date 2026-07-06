const t = "To the person na mahilig mag Alden Richard Expression HAHAHAHappiest Birthday Chili, Welcome to adulthood whereas responsibilities are inevitable, to figure out what you really want to be and lastly where you pursue your dreams seriously na talaga. I wish you endless blessings, genuine happiness and of course money✨Don't forget to enjoy your life even stressed na masyado sa college teh, maaga kang papanot n'yan HAHAHA anyways, just enjoy the ride lang. Enjoy your special day!";

const btn = document.getElementById("open");
const c = document.getElementById("cover");
const l = document.getElementById("letter");
const p = document.getElementById("text");
const a = document.getElementById("bgm");

btn.onclick = () => {

  /* 💖 HEARTS */
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "60vh";
    heart.style.fontSize = (15 + Math.random() * 15) + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }

  /* ✨ SPARKLES */
  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }

  /* 🌈 GLOW */
  document.body.classList.add("glow");
  setTimeout(() => document.body.classList.remove("glow"), 1000);

  /* 🎁 SWITCH TO LETTER (ENVELOPE EFFECT) */
  c.style.transform = "scale(0)";
  c.style.opacity = "0";

  setTimeout(() => {
    c.classList.add("hidden");
    l.classList.remove("hidden");
  }, 600);

  /* 🎵 MUSIC */
  a.play().catch(() => {});

  /* ✍️ TYPEWRITER */
  let i = 0;
  let iv = setInterval(() => {
    p.textContent += t[i++] || "";
    if (i > t.length) clearInterval(iv);
  }, 35);
};

/* 🌸 PETALS */
const petals = document.querySelectorAll(".petal");

petals.forEach((p) => {
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (5 + Math.random() * 5) + "s";
  p.style.fontSize = (16 + Math.random() * 10) + "px";
  p.style.opacity = Math.random();
});  }

  /* 🌈 SCREEN GLOW */
  document.body.classList.add("glow");
  setTimeout(() => document.body.classList.remove("glow"), 1000);

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

/* 🌸 PETALS */
const petals = document.querySelectorAll(".petal");

petals.forEach((p) => {
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (5 + Math.random() * 5) + "s";
  p.style.fontSize = (16 + Math.random() * 10) + "px";
  p.style.opacity = Math.random();
});  }, 35);
};

/* 🌸 PETALS RANDOMIZER */
const petals = document.querySelectorAll(".petal");

petals.forEach((p) => {
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (5 + Math.random() * 5) + "s";
  p.style.fontSize = (16 + Math.random() * 10) + "px";
  p.style.opacity = Math.random();
});
