function calcualate(num1, num2, operator){

    let calc = function(num1, num2, operator) {return operator(num1, num2)};

    let add = function(num1, num2) {return num1 + num2};
    let subtract = function(num1, num2) {return num1 - num2};
    let multiply = function(num1, num2) {return num1 * num2};
    let divide = function(num1, num2) {return num1 / num2};

    switch(operator){
        case `+`: return calc(num1, num2, add);
        case `-`: return calc(num1, num2, subtract);
        case `*`: return calc(num1, num2, multiply);
        case `/`: return calc(num1, num2, divide);
    }
}