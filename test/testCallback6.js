const boards = require("../data/boards.json");
const lists = require("../data/lists.json");
const cards = require("../data/cards.json");

const callBack6 = require("../callback6");

let boardId = "mcu453ed";


callBack6(boards, lists, cards, boardId);