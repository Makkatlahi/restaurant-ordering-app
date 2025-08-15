import menuArray from "./data.js";

const menuItems = document.querySelector(".menu");

function renderMenuItems() {
  menuArray.forEach((item) => {
    let menuHtml = ``;
    menuHtml = `<ul class="items">
                    <li class="item">
                    <span class="item__emoji">${item.emoji}</span>
                    <div class="item__description">
                        <h2 class="item-name">${item.name}</h2>
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

// Add event listener using event delegation
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    // Find the closest item container to get the item data
    const item = e.target.closest(".item");
    const itemEmoji = item.querySelector(".item__emoji").textContent;
    const itemName = item.querySelector(".item-name").textContent;
    const itemPrice = item.querySelector(".item__price").textContent;
    const itemIngredients =
      item.querySelector(".item__ingredients").textContent;

    // Create order summary container if it doesn't exist
    let orderSummary = document.querySelector(".order-summary");
    if (!orderSummary) {
      const orderSummaryContainer = `<section class="order-summary">
                                       <h3 class="order-summary__heading">Your Order</h3>
                                     </section>`;
      document
        .querySelector(".main")
        .insertAdjacentHTML("afterend", orderSummaryContainer);
      orderSummary = document.querySelector(".order-summary");
    }

    // Add the item to the order summary
    const orderSummaryHtml = `<div class="order-item">
                                <span class="order-item__emoji">${itemEmoji}</span>
                                <div class="order-item__description">
                                    <h2 class="order-item-name">${itemName}</h2>
                                    <p class="order-item__ingredients">${itemIngredients}</p>
                                    <p class="order-item__price">${itemPrice}</p>                                  
                                </div>
                              </div>`;
    orderSummary.insertAdjacentHTML("beforeend", orderSummaryHtml);
  }
});
