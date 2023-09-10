const select = document.querySelector("select");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const selectedOption = select.options[select.selectedIndex];
  const selectedValue = selectedOption.value;
  const selectedText = selectedOption.textContent;

  const customEvent = new CustomEvent("selectedOption", {
    detail: {
      value: selectedValue,
      text: selectedText,
    },
  });

  document.dispatchEvent(customEvent);
});

document.addEventListener("selectedOption", (e) => {
  const selectedText = e.detail.text;
  alert(`Результат: ${selectedText}`);
});
