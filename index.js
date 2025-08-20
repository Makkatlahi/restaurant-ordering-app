import menuArray from "./data.js";

// containers
const menuSection = document.getElementById("menu");
const orderSection = document.getElementById("order");
const payModal = document.getElementById("pay-modal");
const container = document.getElementById("container");

// elements
const orderList = document.querySelector(".order__list");
const orderTotal = document.querySelector(".total-price__amount");
const orderButton = document.querySelector(".order__button");

// variables
let order = [];
let totalPrice = 0;

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
                        <span>
                          <button class="remove-btn" data-remove-btn="${item.id}">remove
                          </button>
                        </span>
                        </h2>
                        <p class="order-item__price">$${item.price}</p>
                    </div>
                </li>`;
    orderList.innerHTML += orderHtml;
  });

  totalPrice = order.reduce((total, currentAmount) => {
    return total + currentAmount.price;
  }, 0);
  orderTotal.textContent = `$${totalPrice}`;
}

function renderModal() {
  const payModalHtml = `<h3 class="modal-heading">Enter card details</h3>
                        <form class="payment-form">
                            <input id="form-name" class="input-field" type="text" placeholder="Enter your name" name="name" required/>
                            <input id="form-card" class="input-field" type="text" placeholder="Enter card number" name="card-number" required/>
                            <input id="form-cvv" class="input-field" type="text" placeholder="Enter CVV" required/>
                            <button type="submit" class="pay-btn">Pay</button>
                        </form>`;

  payModal.classList.remove("hidden");
  container.classList.add("blur");

  payModal.innerHTML = payModalHtml;
}

function renderConfirmationMessage(name) {
  payModal.classList.add("hidden");
  const confirmationHtml = `<p> Thanks, ${name}! Your order is on its way</p>`;
  orderSection.innerHTML = "";
  orderSection.innerHTML = confirmationHtml;
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
  } else if (e.target.dataset.removeBtn) {
    const item = menuArray.filter(
      (item) => item.id === parseInt(e.target.dataset.removeBtn)
    )[0];
    // return a new array without the item that was clicked for
    // removal
    order = order.filter((orderItem) => orderItem.id !== item.id);

    order.length === 0 ? orderSection.classList.add("hidden") : renderOrder();
  } else if (e.target.dataset.order) {
    renderModal();
  } else if (e.target.classList.contains("pay-btn")) {
    e.preventDefault();
    const paymentForm = document.querySelector(".payment-form");
    const paymentFormData = new FormData(paymentForm);
    const name = paymentFormData.get("name");
    renderConfirmationMessage(name);
  }
});
