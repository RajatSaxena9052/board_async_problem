const boards = require("../data/boards.json");
const callBack1 = require("../callback1");

let boardId = "mcu453ed";

let callBack = (data) => console.log(data);


callBack1(boards, boardId, callBack);
