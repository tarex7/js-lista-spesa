const shopping = document.getElementById("shopping");
const shopItems = [
  "Uova",
  "Pane",
  "Latte",
  "Biscotti",
  "Pasta",
  "Affettati",
  "Formaggio",
  "Verdura",
  "Frutta",
];

let listItems = "";

let i = 0;
while (i < shopItems.length) {
  listItems += `<li>${shopItems[i]}</li>`;
  i++;
}

shopping.innerHTML = listItems;
