export function Add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a- b;
}

export function multiple(a, b) {
    return a * b;
}

export function divide(a, b) {
    if( b == 0){
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

export default function formData(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString(undefined, options);
}
