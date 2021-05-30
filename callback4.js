function callback4(boards, lists, cards, id) {
    const callBack1 = require("./callback1");
    const callBack2 = require("./callback2");
    const callBack3 = require("./callback3");

    if (typeof callBack1 === "function" && typeof callBack2 === "function" && typeof callBack3 === "function") {

        if (boards !== undefined && lists !== undefined && cards !== undefined && id !== undefined) {

            setTimeout(() => {
                callBack1(boards, id, (boardsData) => console.log(boardsData));

                callBack2(lists, id, (listData) => {

                    console.log(listData);

                    if (Array.isArray(listData) === true) {

                        let mindId = listData.find(listData => {
                            if (listData.name == "Mind") {
                                return listData;
                            }
                        });

                        if (mindId === undefined) {
                            console.log("Id Not Found In cards data");
                        } else {
                            mindId = mindId.id;
                        }

                        callBack3(cards, mindId, (mindData) => console.log(mindData));

                    } else {
                        console.log("Id Not Found In cards data");
                    }

                });

            }, 2 * 1000);

        }
    }
}
module.exports = callback4;