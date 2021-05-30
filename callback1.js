function callBack1(data, id, callBack) {
    if (data !== undefined && id !== undefined && callBack !== undefined) {

        setTimeout(() => {
            let dataGot = data.find((dataElements) => {
                if (dataElements["id"] == id) {
                    return dataElements;
                }
            });

            if (dataGot === undefined) {
                callBack("Id Not Found In boards data");
            } else {
                callBack(dataGot);
            }

        }, 2 * 1000);
    }
}
module.exports = callBack1;