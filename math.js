 function add(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers!'); //error handling addition
    }
    return a + b;
}
    
    function subtract (a, b){
    return a - b;
}
module.exports = { add, subtract}; //export object

//OR
/*
export function add(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers!'); //error handling addition
    }
    return a + b;
}
export function subtract (a, b){
    return a - b;
}*/