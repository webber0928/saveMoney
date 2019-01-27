
var is1 = new Date().getDay() === 1;
var is2 = new Date().getDay() === 2;
var is3 = new Date().getDay() === 3;
var is4 = new Date().getDay() === 4;
var is5 = new Date().getDay() === 5;
var is6 = new Date().getDay() === 6;
var is7 = new Date().getDay() === 0;


// 花旗PChome聯名卡
function CitiPChomeCoBranded (price){
    // var swipeMoney;
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

    return {
        swipeMoney
    };
}

// 國泰世華銀行
function CathayBank (price){
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

    return {
        swipeMoney
    };
}
// 花旗銀行
function CitiBank (price){
    var swipeMoney;
    var pToken;
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

    return {
        swipeMoney,
        pToken
    };
}

// 台北富邦銀行
function FubonBank (price){
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

    return {
        swipeMoney
    };
}

// 中國信託銀行
function ChinatrustBank (price){
    var swipeMoney;
    if (price >= 15000) {
        swipeMoney = 1000;
    } else if (is7 || is6) {
        swipeMoney = price * 0.05;
    }

    return {
        swipeMoney
    };
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

    return {
        swipeMoney,
        pToken
    };
}

// 匯豐銀行
function HSBCBank (price){
    var swipeMoney;
    if (price >= 26888) {
        swipeMoney = 2988;
    } else if (price >= 22000) {
        swipeMoney = 1500;
    } else if (price >= 8888) {
        swipeMoney = 888;
    }

    return {
        swipeMoney
    };
}

// 星展銀行
function DBSBank (price){
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

    return {
        swipeMoney
    };
}

// 聯邦銀行
function UnionBank (price){
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

    return {
        swipeMoney
    };
}

// 台灣土地銀行
function LandBank (price){
    var pToken;
    if (price >= 26888) {
        pToken = 2988;
    } else if (price >= 22000) {
        pToken = 1500;
    } else if (price >= 8888) {
        pToken = 888;
    } else if (is2 && price >= 1288) {
        pToken = 100;
    }

    return {
        pToken
    };
}

//////  ----  以下尚未完成
// 永豐銀行
function SinoPacBank (price){
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

    return {
        swipeMoney
    };
}

// 第一銀行
function FirstBank (price){
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

    return {
        swipeMoney
    };
}

// 上海銀行
function ShanghaiBank (price){
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

    return {
        swipeMoney
    };
}

// 日盛銀行
function JihSunBank (price){
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

    return {
        swipeMoney
    };
}

// 陽信銀行
function SunnyBank (price){
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

    return {
        swipeMoney
    };
}

// 凱基銀行
function KgiBank (price){
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

    return {
        swipeMoney
    };
}

// 遠東商銀
function FarEasternBank (price){
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

    return {
        swipeMoney
    };
}

// 新光銀行
function ShinKongBank (price){
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

    return {
        swipeMoney
    };
}

// 樂天信用卡
function RakutenBank (price){
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

    return {
        swipeMoney
    };
}

// 華南銀行
function HuaNanBank (price){
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

    return {
        swipeMoney
    };
}

// 兆豐銀行
function MegaBank (price){
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

    return {
        swipeMoney
    };
}

// 合作金庫銀行
function CooperativeBank (price){
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

    return {
        swipeMoney
    };
}

// 彰化銀行
function ChangHwaBank (price){
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

    return {
        swipeMoney
    };
}

// 台中銀行
function TaichungBank (price){
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

    return {
        swipeMoney
    };
}

// JCB
function JCBBank (price){
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

    return {
        swipeMoney
    };
}

// 美國運通
function American (price){
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

    return {
        swipeMoney
    };
}