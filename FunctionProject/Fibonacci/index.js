var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const dic = new Map();

    dic.set(0,bigInt.zero);
    dic.set(1,bigInt.zero);

    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;


    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        if(dic.has(nth)){
            answer = dic.get(nth);
        }
        else{
            answer = this.exports("nth",nth-1);
        }
        // for (var i = 0; i < nth - 1; i++) {
        //     answer = nth_2.add(nth_1)
        //     nth_2 = nth_1
        //     nth_1 = answer
        // }
    }
    dic.set(nth,answer);

    context.res = {
        body: answer.toString()
    };
}