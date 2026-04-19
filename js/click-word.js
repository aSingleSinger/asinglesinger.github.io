document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "嘿~", "嗖~", "啪~", "biu~", "哒~"
  ];

  const colors = [
    "#ff6b6b",
    "#4dabf7",
    "#51cf66",
    "#ffd43b",
    "#845ef7",
    "#f06595",
    "#20c997",
    "#ff922b"
  ];

  document.addEventListener("click", function (e) {
    const word = document.createElement("span");
    const text = words[Math.floor(Math.random() * words.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    word.textContent = text;
    word.style.position = "fixed";
    word.style.left = e.clientX + "px";
    word.style.top = e.clientY + "px";
    word.style.zIndex = "9999";
    word.style.fontSize = "16px";
    word.style.fontWeight = "700";
    word.style.color = color;
    word.style.pointerEvents = "none";
    word.style.userSelect = "none";
    word.style.transition = "all 1.5s ease-out";
    word.style.opacity = "1";
    word.style.transform = "translate(-50%, -50%)";

    document.body.appendChild(word);

    requestAnimationFrame(() => {
      word.style.top = e.clientY - 120 + "px";
      word.style.opacity = "0";
      word.style.transform = "translate(-50%, -50%) scale(1.5)";
    });

    setTimeout(() => {
      word.remove();
    }, 1500);
  });
});