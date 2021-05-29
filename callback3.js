function callBack3(cardData, listId, callBack) {
    if (cardData !== undefined && listId !== undefined && callBack !== undefined) {

        setTimeout(() => {
            let dataGot = cardData[listId];

            if (dataGot !== undefined) {
                callBack(dataGot);
            } else {
                callBack("Id Not Found In boards data");
            }

        }, 2 * 1000);
    }
}

module.exports = callBack3;