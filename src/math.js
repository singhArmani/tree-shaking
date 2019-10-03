import get from 'lodash/get';

export function getProperty(Obj, propertyName){
    return get(Obj, propertyName)
}
export function add(a, b) {
    console.log("add");
    return a + b;
}

export function minus(a, b) {
    console.log("minus");
    return a - b;
}

export function multiply(a, b) {
    console.log("multiply");
    return a * b;
}

export function divide(a, b) {
    console.log("divide");
    return a / b;
}