function callBack6(boards, lists, cards, id) {
    const callBack1 = require("./callback1");
    const callBack2 = require("./callback2");
    const callBack3 = require("./callback3");

    if (callBack1 !== undefined && callBack2 !== undefined && callBack3 !== undefined) {

        if (boards !== undefined && lists !== undefined && cards !== undefined && id !== undefined) {

            setTimeout(() => {
                callBack1(boards, id, (boardData) => console.log(boardData));

                callBack2(lists, id, (listData) => {
                    console.log(listData);

                    if (Array.isArray(listData) === true) {

                        listData.forEach(listDataElements => {

                            callBack3(cards, listDataElements['id'], (cardData) => {
                                console.log(listDataElements.name, " : ", cardData);
                            });

                        });

                    }
                    else {
                        console.log("Id Not Found In cards data");
                    }

                });

            }, 2 * 1000);

        }
    }
}
module.exports = callBack6;