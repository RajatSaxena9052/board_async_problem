const boards = require("../data/boards.json");
const callBack1 = require("../callback1");
let boardId = "mcu453ed";

let callBack = (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data)
    }
}

callBack1(boards, boardId, callBack);
