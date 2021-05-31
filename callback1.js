function callBack1(listData, id, callBack) {
    if (listData !== undefined && id !== undefined && callBack !== undefined) {

        setTimeout(() => {
            let dataGot = listData.find((dataElements) => {
                if (dataElements["id"] == id) {
                    return dataElements;
                }
            });

            if (dataGot === undefined) {
                callBack(new Error("Data not found in boards file"), undefined);
            } else {
                callBack(undefined, dataGot);
            }

        }, 2 * 1000);

    }
}
module.exports = callBack1;