
var is1 = new Date().getDay() === 1;
var is2 = new Date().getDay() === 2;
var is3 = new Date().getDay() === 3;
var is4 = new Date().getDay() === 4;
var is5 = new Date().getDay() === 5;
var is6 = new Date().getDay() === 6;
var is7 = new Date().getDay() === 0;


// 花旗PChome聯名卡
function CitiPChomeCoBranded (price){
    var pToken;//
    var swipeMoney;
    // if (price >= 15000) {
    //     swipeMoney = 600;
    // } else if (price >= 8888) {
    //     swipeMoney = 888;
    // } else if ((is2 || is4 ) && price >= 6000) {
    //     swipeMoney = 360;
    // } else if (is2 && price >= 1000) {
    //     swipeMoney = 100;
    // }

    // return {
    //     swipeMoney
    // };
    return 0;
}
// 玉山銀行
function ESunBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 26888) {
        swipeMoney = 2688;
    } else if (price >= 22000) {
        swipeMoney = 1500;
    } else if (price >= 10000) {
        swipeMoney = 1000;
    } else if (price >= 5000) {
        swipeMoney = 200;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 國泰世華銀行
function CathayBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 35000) {
        swipeMoney = 2000;
    } else if (price >= 20000) {
        swipeMoney = 1000;
    } else if (price >= 12000) {
        swipeMoney = 1000;
    } else if (price >= 8000) {
        swipeMoney = 300;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}
// 花旗銀行
function CitiBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 16888) {
        swipeMoney = 1900;
    } else if (price >= 8888) {
        swipeMoney = 900;
    }

    if (price >= 30000) {
        pToken = 2000;
    } else if (price >= 5000) {
        pToken = 250;
    } else if (is4 && price >= 1200) {
        pToken = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 台北富邦銀行
function FubonBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 25000) {
        swipeMoney = 2600;
    } else if (price >= 20000) {
        swipeMoney = 1300;
    } else if (price >= 8800) {
        swipeMoney = 880;
    } else if (price >= 3000) {
        swipeMoney = 150;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 中國信託銀行
function ChinatrustBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 1000;
    } else if (is7 || is6) {
        swipeMoney = price * 0.05;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 台新銀行
function TaishinBank (price, type){
    var pToken;
    var swipeMoney;
    if (price >= 26888) {
        swipeMoney = 2300;
    } else if (price >= 20000) {
        swipeMoney = 1500;
    } else if (is1 && type === 'APP' && price >= 1288) {
        pToken = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 匯豐銀行
function HSBCBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 26888) {
        swipeMoney = 2988;
    } else if (price >= 22000) {
        swipeMoney = 1500;
    } else if (price >= 8888) {
        swipeMoney = 888;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 星展銀行
function DBSBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 35000) {
        swipeMoney = 2400;
    } else if (price >= 28000) {
        swipeMoney = 3200;
    } else if (price >= 26000) {
        swipeMoney = 180;
    } else if (price >= 15000) {
        swipeMoney = 1000;
    } else if (is5 && price >= 11000) {
        swipeMoney = 660;
    } else if (price >= 10000) {
        swipeMoney = 1000;
    } else if (price >= 6000) {
        swipeMoney = 400;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 聯邦銀行
function UnionBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 台灣土地銀行
function LandBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 26888) {
        pToken = 2988;
    } else if (price >= 22000) {
        pToken = 1500;
    } else if (price >= 8888) {
        pToken = 888;
    } else if (is2 && price >= 1288) {
        pToken = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

//////  ----  以下尚未完成
// 永豐銀行
function SinoPacBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 26888) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 第一銀行
function FirstBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 上海銀行
function ShanghaiBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 日盛銀行
function JihSunBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 陽信銀行
function SunnyBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 凱基銀行
function KgiBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 遠東商銀
function FarEasternBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 新光銀行
function ShinKongBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 樂天信用卡
function RakutenBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 華南銀行
function HuaNanBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 兆豐銀行
function MegaBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 合作金庫銀行
function CooperativeBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 彰化銀行
function ChangHwaBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 台中銀行
function TaichungBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// JCB
function JCBBank (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}

// 美國運通
function American (price){
    var pToken;
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 600;
    } else if (price >= 8888) {
        swipeMoney = 888;
    } else if ((is2 || is4 ) && price >= 6000) {
        swipeMoney = 360;
    } else if (is2 && price >= 1000) {
        swipeMoney = 100;
    }

    var data = {};
    data.swipeMoney = swipeMoney;
    data.pToken = pToken;
    return data;
}