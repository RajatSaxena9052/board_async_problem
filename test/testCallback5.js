const boards = require("../data/boards.json");
const lists = require("../data/lists.json");
const cards = require("../data/cards.json");

const callback5 = require("../callback5");

let userInput = {
    boardId: "mcu453ed",
    listName: ["Mind", "Space"]
}
callback5(boards, lists, cards, userInput);