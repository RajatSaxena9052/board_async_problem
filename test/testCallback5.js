const boards = require("../data/boards.json");
const lists = require("../data/lists.json");
const cards = require("../data/cards.json");

const callback5 = require("../callback5");

let boardId = "mcu453ed";

callback5(boards, lists, cards, boardId);