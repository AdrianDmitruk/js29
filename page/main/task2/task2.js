const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();

  if (inputValue !== "") {
    const li = document.createElement("li");
    li.textContent = inputValue;
    ul.appendChild(li);

    input.value = "";
  }
});
