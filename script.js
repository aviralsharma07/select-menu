var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

// for (option of options) {
//   option.addEventListener("click", () => {
//     selectText.innerHTML = option.innerHTML;
//     list.classList.toggle("hide");
//   });
// }

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (event) => {
    selectText.innerHTML = event.target.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  });
}
