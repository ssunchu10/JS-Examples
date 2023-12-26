/**
 * Input = Numbr ex: 4
 * Output: array [0,1,1,2,3] {}:
 */

function fibonacci(length){
    var firstNumber = 0;
    var secondNumber = 1;
    var thirdNumber;
    var result = [0, 1];

    for(var i=2; i < length; i++){
        thirdNumber = firstNumber + secondNumber;
        result.push(thirdNumber);
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }

    return result;
}

console.log(fibonacci(5));