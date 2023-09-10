const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();

  if (inputValue !== "") {
    const customEvent = new CustomEvent("textSubmitted", {
      detail: inputValue,
    });

    document.dispatchEvent(customEvent);
  }
});

document.addEventListener("textSubmitted", (e) => {
  alert(`Результат: ${e.detail}`);
});
