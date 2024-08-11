const SQUARE_ROOT_TWO = 1.41421;
const GOLDEN_RATIO = 1.61803;
const LIGHT_SPEED = 299792458;

function square(number) {
    return number * number;
}

function cube(number){
    return number * number * number;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function squareRoot(number) {
    if(number >= 0) {
        return Math.sqrt(number);
    }else {
        throw new Error("cannot take square root of a negative number.");
    }
}

module.exports = {
    SQUARE_ROOT_TWO,
    GOLDEN_RATIO,
    LIGHT_SPEED,
    square,
    cube,
    power,
    squareRoot
}