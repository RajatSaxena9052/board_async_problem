function callback4(boards, lists, cards, id) {
    const callBack1 = require("./callback1");
    const callBack2 = require("./callback2");
    const callBack3 = require("./callback3");

    setTimeout(() => {
        callBack1(boards, id, (mg) => console.log(mg));

        callBack2(lists, id, (mg) => {
            console.log(mg);

            let mindId = mg.find(s => {
                if (s.name == "Mind") {
                    return s
                };
            }).id;

            callBack3(cards, mindId, (msg) => console.log(msg));

        });

    }, 2 * 1000)
}
module.exports = callback4;