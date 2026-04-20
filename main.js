document.getElementById("button").addEventListener("click", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "start.html";
  }, 500);
});
