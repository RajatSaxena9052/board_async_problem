function callBack6(boards, lists, cards, id) {
    const callBack1 = require("./callback1");
    const callBack2 = require("./callback2");
    const callBack3 = require("./callback3");

    if (callBack1 !== undefined && callBack2 !== undefined && callBack3 !== undefined) {

        if (boards !== undefined && lists !== undefined && cards !== undefined && id !== undefined) {

            setTimeout(() => {
                callBack1(boards, id, (error, boardData) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(boardData);
                    }
                });

                callBack2(lists, id, (error, listData) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(listData);

                        listData.forEach(listDataElements => {

                            callBack3(cards, listDataElements['id'], (error, cardData) => {
                                if (error) {
                                    console.error(error);
                                } else {
                                    console.log(listDataElements.name, " : ", cardData);
                                }
                            });

                        });

                    }

                });

            }, 2 * 1000);

        }
    }
}
module.exports = callBack6;