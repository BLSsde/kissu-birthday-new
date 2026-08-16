let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {


  // Stop any video on the current page
  const currentVideo = pages[currentPage].querySelector("video");

  if (currentVideo) {
    currentVideo.pause();
    currentVideo.currentTime = 0; // Optional: restart video from beginning
  }


  pages[currentPage].classList.remove("active");
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");

    // 👉 Start typing ONLY when letter page opens
    if (pages[currentPage].querySelector("#letter")) {
      startTyping();
    }
  }
}

function restartJourney() {
  // Remove active from every page
  pages.forEach(page => {
    page.classList.remove("active");
  });

  // Go back to first page
  currentPage = 0;
  pages[0].classList.add("active");
}

/* TYPING EFFECT */
const text = 
`
From the day we got engaged on 22𝒏𝒅 𝑭𝒆𝒃𝒓𝒖𝒂𝒓𝒚, my life has changed in the most beautiful way. That day is very special to me, because it gave me you — the most important person in my life. <br>

Now today on 4𝒕𝒉 𝑺𝒆𝒑𝒕𝒆𝒎𝒃𝒆𝒓 is your birthday, and I just want to tell you how lucky I feel to have you. You are not just my fiancée, you are my happiness, my peace, and my future.<br>

I love the way you take care of children and teach them with so much love and patience. It shows how kind and pure your heart is. You are truly a wonderful person, and I respect you a lot for that.<br>

You are so pretty, so beautiful, and so unique. You are multitalented, and everything about you feels special to me. Sometimes we fight, sometimes we don’t understand each other, but even in those moments, my love for you never becomes less. In fact, it only becomes stronger.<br>

I may not always express it perfectly, but I love you more than I can ever explain in words. You are the one who completes me. Without you, I feel incomplete.<br>

Please always stay with me. Don't ever leave me alone, not even for a moment. I want to spend my whole life with you, and I am waiting for the day when we will finally get married next year and start our forever together.<br>

You are made for me, and I am made for you ❤️<br>

<h3>𝑯𝒂𝒑𝒑𝒚 𝑩𝒊𝒓𝒕𝒉𝒅𝒂𝒚, 𝑴𝒚 𝑳𝒐𝒗𝒆 🎂❤️</h3> <br>
I promise to love you more and more every single day.<br>

<h3>𝑭𝒐𝒓𝒆𝒗𝒆𝒓 𝒚𝒐𝒖𝒓𝒔,</h3><br>
Your future husband 💖 <br>`;




let typingTimer = null;
let typingSession = 0;

function startTyping() {

  // Cancel any previous typing animation
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = null;
  }

  // Create a new typing session
  typingSession++;

  const currentSession = typingSession;

  const letter = document.getElementById("letter");

  if (!letter) return;

  // Clear previous letter
  letter.innerHTML = "";

  let i = 0;
  let output = "";

  function typeEffect() {

    // Stop if another typing session has started
    if (currentSession !== typingSession) {
      return;
    }

    if (i >= text.length) {
      typingTimer = null;
      return;
    }

    // If HTML tag starts
    if (text[i] === "<") {

      let tag = "";

      while (i < text.length && text[i] !== ">") {
        tag += text[i];
        i++;
      }

      // Add >
      if (i < text.length) {
        tag += ">";
        i++;
      }

      output += tag;

    } else {

      output += text[i];
      i++;
    }

    letter.innerHTML = output;

    // Automatically scroll to bottom while typing
    letter.scrollTop = letter.scrollHeight;

    typingTimer = setTimeout(typeEffect, 25);
  }

  typeEffect();
}



const bg = document.querySelector(".romantic-bg");

for (let i = 0; i < 25; i++) {
  let heart = document.createElement("span");

  const hearts = ["❤️","💖","💕","💘","💝"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";

  // 🔥 IMPORTANT FIX
  const duration = Math.random() * 5 + 5;
  heart.style.animationDuration = duration + "s";

  // ⛔ push start BELOW screen
  heart.style.animationDelay = Math.random() * duration + "s";

  // 🔥 FORCE start from bottom (no top flash)
  heart.style.bottom = "-50px";
  heart.style.top = "auto";

  bg.appendChild(heart);
}