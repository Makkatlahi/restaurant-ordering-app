import menuArray from "./data.js";

const menuItems = document.querySelector(".menu");

function renderMenuItems() {
  menuArray.forEach((item) => {
    let menuHtml = ``;
    menuHtml = `<ul class="items">
                    <li class="item" id="${item.uuid}">
                    <span class="item__emoji">${item.emoji}</span>
                    <div class="item__description">
                        <h2 class="item-name">${item.name}</h2>
                        <p class="item__ingredients">${item.ingredients}</p>
                        <p class="item__price">$${item.price}</p>
                    </div>
                    <button class="add-btn" data-add-item="${item.uuid}">
                    </button>
                    </li>
                </ul>
                    `;
    menuItems.innerHTML += menuHtml;
  });
}

renderMenuItems();

document.addEventListener("click", (e) => {
  const addItem = e.target.dataset.addItem;
  if (addItem) {
    console.log(addItem);
  }
});

// function handleAddItem() {}
