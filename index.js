import menuArray from "./data.js";

const menuSection = document.getElementById("menu");
const orderSection = document.getElementById("order");
const orderList = document.querySelector(".order__list");
const order = [];

function renderMenuItems() {
  menuArray.forEach((item) => {
    let menuHtml = ``;
    menuHtml = `<ul class="items">
                    <li class="item" id="${item.id}">
                    <span class="item__emoji">${item.emoji}</span>
                    <div class="item__description">
                        <h2 class="item__name">${item.name}</h2>
                        <p class="item__ingredients">${item.ingredients}</p>
                        <p class="item__price">$${item.price}</p>
                    </div>
                    <button class="add-btn" data-add-btn="${item.id}">
                    </button>
                    </li>
                </ul>
                    `;
    menuSection.innerHTML += menuHtml;
  });
}

// to be changed to add item to list addItemToOrder()
function renderOrder() {
  // clear/reset the rendered html when button is clicked
  orderList.innerHTML = "";
  orderSection.classList.remove("hidden");
  // iterate through the array to pick up any additions
  // if the button has already been clicked once
  order.forEach((item) => {
    let orderHtml = ``;
    orderHtml = `
    <li class="order-item" id="${item.id}">
    <div class="order-item__info">
    <h2 class="order-item__name">${item.name}
    <span><button class="remove-btn" data-remove-btn="${item.id}">remove
    </button></span>
    </h2>
    <p class="order-item__price">$${item.price}</p>
    </div>
    
    </li>`;
    orderList.innerHTML += orderHtml;
  });
}

renderMenuItems();

document.addEventListener("click", (e) => {
  if (e.target.dataset.addBtn) {
    // iterate through menuArray and see if the
    // id that was clicked (target id) matches with
    // the ones in the array
    const item = menuArray.filter(
      (item) => item.id === parseInt(e.target.dataset.addBtn)
    )[0];
    // taking what was clicked and adding it to the empty array
    order.push(item);
    // render out the updated html
    renderOrder(); // to be changed to addItemToOrder()
  }
});
