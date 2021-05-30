function callBack3(cardData, listId, callBack) {
    if (cardData !== undefined && listId !== undefined && callBack !== undefined) {

        setTimeout(() => {
            let dataGot = cardData[listId];

            if (dataGot !== undefined) {
                callBack(dataGot);
            } else {
                callBack("Id Not Found In cards data");
            }

        }, 2 * 1000);

    }
}

module.exports = callBack3;