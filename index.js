function calc(val){
    let t1 = document.f1.t1.value;
    let t2 = document.f1.t2.value;

    let natija = 0;
    

    if (val == '+' ){
        natija = t1*1 + t2*1;
    } else if(val == '-'){
        natija = t1 - t2;
    } else if(val == '*'){
        natija = t1 * t2;
    } else{
        natija = t1 / t2;
    }

    document.f1.result.value = natija;
}

function hisobla(){
    let cost = document.product.cost.value;
    let number = document.product.number.value;

    let click = document.product.radio.value;
    let hisob = 0;

    if(click == '0per'){
        hisob = cost * number;
    } else if(click == '5per'){
        hisob = cost * number - cost * number * 5 / 100;
    } else {
        hisob = cost * number - cost * number * 15 / 100;
    }

    document.product.resultt.value = hisob;
}