//questionA
console.log('Hello');
console.log("John")
console.log('You can call me "Santy"');
console.log("Go away, I'm Coding");
console.log(`I am sorry\nplease forgive me`);

//questionB
let number1 = 3;
let number2 = 9;
let number3 = 7;
let number4 = 6;
let number5 = 2;
console.log(number1 + number2 - number3 * number4 / number5);
console.log(number1 + (number2 - number3) * number4 / number5);

//questionC
let conditionA = true;
let conditionB = false;
let conditionC = true;
let conditionD = false;
console.log(conditionA && conditionB || conditionC && !conditionD);

//questionD
let age = 9;
let result = (age > 17) ? "Adults" : (age > 10) ? "Teenagers" : "Children";
console.log(result);

//questionE
let numA = 176;
let numB = 103;

console.log(numA & numB);
console.log(numA | numB);
console.log(numA ^ numB);
console.log(numA >> 2);
console.log(numB >> 2);
console.log(numA << 2);
console.log(numB << 2);

let numC = 1;
console.log(numC << 1);
console.log(numC << 2);
console.log(numC << 3);
console.log(numC << 4);
console.log(numC << 5);
console.log(numC << 6);
console.log(numC << 7);
console.log(numC << 8);

//questionF
let fullName = (fn,mn,ln) => 
    {return `${fn} ${mn} ${ln}, ${getTittle()}`;
}

let getTittle = () =>{
    return "B.S"
}

console.log(fullName("John", "Dream", "Myung"));



