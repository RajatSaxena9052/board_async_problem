function callBack2(data, id, callBack) {
    if (data !== undefined && id !== undefined && callBack !== undefined) {

        setTimeout(() => {
            let dataGot = data[id];

            if (dataGot === undefined) {
                callBack("Id Not Found In boards data");
            } else {
                callBack(dataGot);
            }

        }, 2 * 1000);

    }
}
module.exports = callBack2;