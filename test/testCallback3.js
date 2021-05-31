const callBack3 = require("../callback3");
const cards = require("../data/cards.json");

let listId = "qwsa221";

let callBack = (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

callBack3(cards, listId, callBack);