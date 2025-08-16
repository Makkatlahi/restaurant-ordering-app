import menuArray from "./data.js";

const menuItems = document.querySelector(".menu");

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
                    <button class="add-btn" data-add-item="${item.id}">
                    </button>
                    </li>
                </ul>
                    `;
    menuItems.innerHTML += menuHtml;
  });
}

renderMenuItems();

document.addEventListener("click", (e) => {
  const addItem = e.target.closest(".item");
  const itemName = addItem.querySelector(".item__name").textContent;
  const itemPrice = addItem.querySelector(".item__price").textContent;
  let orderSummaryHtml = ``;
  if (addItem) {
    orderSummaryHtml = `<section class="order">
                            <h3 class="order__heading">Your Order</h3>
                            <div class="order__items">
                                <p class="order__items--name"> ${itemName}
                                </p>
                                <p class="order__items--price">${itemPrice}</p>
                            </div>
                            <div class="order__total">
                                <p>Total price: <span class="order__total--price">Enter total here</span></p>
                            </div>
                            <button class="order__submit">Complete Order</button>
                        </section>`;

    menuItems.insertAdjacentHTML("beforeend", orderSummaryHtml);
  }
});

// function handleAddItem() {}
