function isEven(num) {
    if (num % 2 === 0) {
        return true;   //returns true if number is even
        // returns false otherwise
    } else {
        return false;
    }
}


var num = 4
isEven(num);

function factorial(num) {
// define result variable
    let result = num;
    while (num > 1) {
        num = num - 1;
        result = result * num;
    }
    return result
}
console.log(factorial(5));


function kebabToSnake(str) {
    var replaced = str.split('-').join("_");
    return replaced
}

kebabToSnake("hello-world");