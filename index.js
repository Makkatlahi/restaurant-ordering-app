import menuArray from "./data.js";

const menuItems = document.querySelector(".menu");

function renderMenuItems() {
  menuArray.map((item) => {
    let menuHtml = ``;
    menuHtml += `<ul class="menu-items">
                        <li class="menu-item">

                        </li>
                    </ul>
                    `;
  });
}
