const lists = require("../data/lists.json");
const callBack2 = require("../callback2");

let boardId = "mcu453ed";

let callBack = (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

callBack2(lists, boardId, callBack);
