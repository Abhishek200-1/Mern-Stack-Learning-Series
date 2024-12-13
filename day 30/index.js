// function defination
function sayMyName(){
    console.log("Abhishek")
}

// function use or call 
sayMyName();


function printCounting() {
    for(let i=1; i<=100; i++){
        console.log(i);
    }   
}

printCounting();


function getAverage(num1,num2){
    let avg = (num1 + num2)/2;
    console.log("Average: ", avg);
}

getAverage(3,7);


// return funtion
function getSum(a,b,c,d){
    let sum = a + b + c + d;
    return sum;
}

let answer = getSum(5,6,8,9);
console.log("Printing answer :", answer);


function getFullname( firstname , lastname){
    let fullname = firstname + " " + lastname;
    return fullname;
    // unreachable statement
}

let fullname = getFullname("Abhishek" , "Vishwakarma");
console.log("full name :" , fullname);


// arrow function


