import { v4 as uuidv4 } from "uuid";

const menuArray = [
  {
    name: "Pizza",
    ingredients: ["pepperoni", "mushroom", "mozarella"],
    uuid: uuidv4(),
    price: 14,
    emoji: "🍕",
  },
  {
    name: "Hamburger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: 12,
    emoji: "🍔",
    uuid: uuidv4(),
  },
  {
    name: "Beer",
    ingredients: ["grain, hops, yeast, water"],
    price: 12,
    emoji: "🍺",
    uuid: uuidv4(),
  },
];

export default menuArray;
