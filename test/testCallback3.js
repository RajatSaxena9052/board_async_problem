const callBack3 = require("../callback3");
const cards = require("../data/cards.json");

let listId = "qwsa221";

let callBack = (data) => console.log(data);

callBack3(cards, listId, callBack);