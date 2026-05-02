document.addEventListener("DOMContentLoaded", () => {

  // INDEX PAGE
  const text = document.getElementById("text");
  const code = document.getElementById("code");

  if (text && code) {
    let msg = "SYSTEM BOOTING...\nUNKNOWN USER DETECTED\nENTER ACCESS CODE";
    let i = 0;

    function type() {
      if (i < msg.length) {
        text.innerHTML += msg[i];
        i++;
        setTimeout(type, 40);
      }
    }
    type();

    code.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (code.value.trim().toUpperCase() === "ANNA") {
          window.location.href = "unlock.html";
        } else {
          code.classList.add("error");
          setTimeout(() => code.classList.remove("error"), 500);
        }
      }
    });
  }

  // UNLOCK PAGE
  window.check = function () {
    const input = document.getElementById("answer");
    const msg = document.getElementById("msg");

    if (!input) return;

    if (input.value.trim().toUpperCase() === "ANNA") {
      msg.innerText = "ACCESS GRANTED...";
      setTimeout(() => {
        window.location.href = "final.html";
      }, 800);
    } else {
      msg.innerText = "ACCESS DENIED";
      input.classList.add("error");

      setTimeout(() => {
        input.classList.remove("error");
        msg.innerText = "";
      }, 800);
    }
  };

});
