// a function that checks if the input/parameter is an even number in Javascript 

function isEven(number) {
    return number % 2 === 0;
}

let myNumber = 9;

if (isEven(myNumber)) {
    console.log(`${myNumber} is an even number.`);
} else {
    console.log(`${myNumber} is an odd number.`);
}

    //a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
    
    function printNumbers(n1, n2) {
      for (let i = n1; i <= n2; i++) {
        console.log(i);
      }
    }
    printNumbers(1, 5);
    
    // a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. i.e. 1+2+3
    
    function calcFunc(n1, n2) {
      let sum = 0;
      for (let i = n1; i <= n2; i++) {
        sum += i;
      }
      return sum;
    }
    
    console.log(calcFunc(1, 3));