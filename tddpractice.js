// A FUNCTION THAT TAKES IN AN ARRAY OF WORDS AND GIVES THEM BACK IN REVERSE

function arrayReverse(array) {
    let reverse = []; 

    for (let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }

    return reverse;
}

//A class for a number that manipulates and returns the number via multiplication, addition, subtraction and division.

class Number {
    constructor(num) {
        this.num = num; 
    }

    multiply(number) {
        return this.num * number;
    }

    addition(number) {
        return this.num + number;
    }

    subtraction(number) {
        return this.num - number;
    }

    division(number) {
        return this.num / number;
    }
}

//A function that takes in an array of words but filters out all words that end in ‘er’, 
//without using the built in filter function.

function noER(array) {
    //let testCount = 0; 

    for (let i = 0; i < array.length; i++) {
        if(array[i].endsWith('er')) {
            //testCount++;
            array.splice(i, 1);
        }
    }
    return array;
    //return testCount;
}



////////////////////  TESTING THE CODE ///////////////////////////

let help = ["no", "oh man", "sound the alarm", "noop"];

console.log(arrayReverse(help)); //expect noop, sound the alarm, oh man, no

let num1 = new Number (10);
console.log(num1.multiply(2));  //20
console.log(num1.addition(10)); //20
console.log(num1.subtraction(5)); //5
console.log(num1.division(2)); //5

let er = ["hello", "runner", "squeeze", "orange", "killer"]

console.log(noER(er)); //expect hello, squeeze, orange