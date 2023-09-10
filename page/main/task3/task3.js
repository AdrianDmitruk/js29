const container = document.querySelector("div");

container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const paragraph = e.target.parentElement;
    paragraph.remove();
  }
});
