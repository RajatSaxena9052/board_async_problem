const lists = require("../data/lists.json");
const callBack2 = require("../callback2");

let boardId = "mcu453ed";

let callBack = (data) => console.log(data);


callBack2(lists, boardId, callBack);
