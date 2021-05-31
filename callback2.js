function callBack2(listData, boardId, callBack) {
    if (listData !== undefined && boardId !== undefined && callBack !== undefined) {

        setTimeout(() => {
            let dataGot = listData[boardId];

            if (dataGot === undefined) {
                callBack(new Error("Id Not Found In lists Data"), undefined);
            } else {
                callBack(undefined, dataGot);
            }

        }, 2 * 1000);

    }
}
module.exports = callBack2;