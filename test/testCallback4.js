const boards = require("../data/boards.json");
const lists = require("../data/lists.json");
const cards = require("../data/cards.json");

const callback4 = require("../callback4");

let boardId = "mcu453ed";

callback4(boards, lists, cards, boardId);