function callback5(boards, lists, cards, userInput) {
    const callBack1 = require("./callback1");
    const callBack2 = require("./callback2");
    const callBack3 = require("./callback3");

    if (typeof callBack1 === "function" && typeof callBack2 === "function" && typeof callBack3 === "function") {

        if (boards !== undefined && lists !== undefined && cards !== undefined && userInput !== undefined) {

            setTimeout(() => {
                let { boardId, listName } = userInput;

                callBack1(boards, boardId, (error, boardData) => {
                    if (error) {
                        console.error();
                    } else {
                        console.log(boardData);
                    }
                });

                callBack2(lists, boardId, (error, listData) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(listData);

                        listName.forEach(listNameElements => {
                            listData.find(listDataElements => {

                                if (listDataElements.name == listNameElements) {

                                    callBack3(cards, listDataElements.id, (error, data) => {
                                        if (error) {
                                            console.error(error);
                                        } else {
                                            console.log(listNameElements, " : ", data);
                                        }
                                    });

                                }

                            });
                        });
                    }

                });

            }, 2 * 1000);

        }
    }

}
module.exports = callback5;