import menuArray from "./data.js";

const menuItems = document.querySelector(".menu");
const addBtn = document.querySelector(".add-btn");

function renderMenuItems() {
  menuArray.forEach((item) => {
    let menuHtml = ``;
    menuHtml = `<ul class="items">
                    <li class="item">
                    <span class="item__emoji">${item.emoji}</span>
                    <div class="item__description">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item__ingredients">${item.ingredients}</p>
                        <p class="item__price">$${item.price}</p>
                    </div>
                    <button class="add-btn">
                    </button>
                    </li>
                </ul>
                    `;
    menuItems.innerHTML += menuHtml;
  });
}

renderMenuItems();
