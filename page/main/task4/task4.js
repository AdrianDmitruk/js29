const container = document.querySelector("div");
const img = document.querySelector("img");

container.addEventListener("mouseenter", () => {
  img.style.transform = "scale(1.2)";
});

container.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)";
});
