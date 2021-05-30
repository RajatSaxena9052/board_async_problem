function callback5(boards, lists, cards, id) {
    const callBack1 = require("./callback1");
    const callBack2 = require("./callback2");
    const callBack3 = require("./callback3");

    if (typeof callBack1 === "function" && typeof callBack2 === "function" && typeof callBack3 === "function") {

        if (boards !== undefined && lists !== undefined && cards !== undefined && id !== undefined) {

            setTimeout(() => {

                callBack1(boards, id, (boardData) => console.log(boardData));

                callBack2(lists, id, (listData) => {

                    console.log(listData);

                    if (Array.isArray(listData) === true) {

                        let mindId = listData.find(listDataElements => {
                            if (listDataElements.name == "Mind") {
                                return listDataElements;
                            };
                        });

                        let spaceId = listData.find(listDataElements => {
                            if (listDataElements.name == "Space") {
                                return listDataElements;
                            }
                        });

                        if (mindId === undefined && spaceId == undefined) {
                            console.log("Mind and Space Not Found In boardId passed");
                        }
                        else {
                            mindId = mindId.id;
                            spaceId = spaceId.id;
                        }

                        callBack3(cards, mindId, (mindData) => console.log("Mind ", mindData));

                        callBack3(cards, spaceId, (spaceData) => console.log("Space ", spaceData));

                    } else {
                        console.log("Id Not Found In cards data");
                    }

                });

            }, 2 * 1000);

        }
    }

}
module.exports = callback5;