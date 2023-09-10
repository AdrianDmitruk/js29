const div = document.querySelector("div");
const p = document.querySelector("p");

div.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    p.textContent = e.target.textContent;
  }
});
