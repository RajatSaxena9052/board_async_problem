const boards = require("../data/boards.json");
const lists = require("../data/lists.json");
const cards = require("../data/cards.json");

const callback4 = require("../callback4");

let userInput = {
    boardId: "mcu453ed",
    listName: ["Mind"]
}

callback4(boards, lists, cards, userInput);