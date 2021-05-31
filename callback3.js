function callBack3(cardData, listId, callBack) {
    if (cardData !== undefined && listId !== undefined && callBack !== undefined) {

        setTimeout(() => {
            let dataGot = cardData[listId];

            if (dataGot === undefined) {
                callBack(new Error("Id Not Found In cards data"), undefined);
            } else {
                callBack(undefined, dataGot);
            }

        }, 2 * 1000);

    }
}

module.exports = callBack3;