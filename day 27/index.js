console.log("hello dosto kaise ho");

// arithmetic operator
let a=10;
let b=5;

console.log(a-b);
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


// assignment operator

a+=10;
console.log(a);

a=a-2;
console.log(a);

// comparison opartor

console.log(a>5);
console.log(a<5);

console.log('5'==5);
console.log('5'===5);

// ternaryv oparatpr 
let age = 20;
let status = (age>18) ? 'i can vote' : 'i cant vote';

console.log(status);


let age1 = 5;
let status1 = (age1>18) ? 'i can vote' : 'i cant vote';

console.log(status1);

// logical oparator

let ans = (true && true && true);
console.log(ans);


let and = (true && true && false);
console.log(and);


let andd = (true || true || false);
console.log(andd);


let anddd = (true || true || true);
console.log(anddd);

// bitwise oparator

console.log(5 & 6);

console.log(5 | 6);

console.log(~ (6));

console.log(5 ^ 6);

// condition 

// if-else 
// switch 

// example 1 

let agee = 29;
if(agee>25){
    console.log('i can vote for india');
}

else

{
    console.log('i cannot vote for india');
}


// if-else-if statement

let number = 5;

if (number == 1){
    console.log('A');
}
else if (number == 2){
    console.log('B');
}
else if (number == 3){
    console.log('C');
}
else if (number == 4){
    console.log('D');
}
else if (number == 5){
    console.log('E');
}
else {
    console.log('F');
}


// swith statement

let num = 3;

switch (num) {
    case 1: console.log('A');
        break;
    case 2: console.log('B');
        break;
    case 3: console.log('C');
        break;
    case 4: console.log('D');
        break;
    case 5: console.log('E');
        break;
    default:
        console.log('F')
        break;
}


