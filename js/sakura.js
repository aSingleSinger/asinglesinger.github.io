document.addEventListener("DOMContentLoaded", () => {
  const count = 20; // 雪花数量（15~25最舒服）
  const snowChars = ["❄", "❅", "❆"];

  for (let i = 0; i < count; i++) {
    const snow = document.createElement("div");
    snow.className = "snowflake";
    snow.innerHTML = snowChars[Math.floor(Math.random() * snowChars.length)];

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.fontSize = (10 + Math.random() * 10) + "px";
    snow.style.animationDuration = (8 + Math.random() * 8) + "s";
    snow.style.animationDelay = Math.random() * 10 + "s";
    snow.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);

    document.body.appendChild(snow);
  }
});