// 3 formas de escribir funciones

// 1-
function name_function (param1, param2, paramn){
    if (param1 > param2) {
        return value1
    } else {
        return value2;
    }
}


// 2-
name_function => (param1, param2, paramn) => {
    if (param1 > param2) {
        return value1
    }else {
        return value2;
    }
};


// 3-
let name_function = (param1, param2, paramn) => (param1>param2)?value1:value2;