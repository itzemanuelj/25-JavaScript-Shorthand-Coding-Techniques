//IF ELSE STATMENT

//LONG HAND

let age = 18

if (age >= 18) {
    console.log('ADULT');
} else {
    console.log('CHILD');
}


let age1 = x >= 18 ? 'ADULT' : 'CHILD';

//NESTED IF STATEMENT

if (x > 10) {
    console.log('greater than 10');
    if (x < 5) {
        console.log('less than 5');
    }
} else {
    console.log('between 5 & 10');
}

//NESTED IF STATEMENT IF STATEMENT

const answer = x > 10 ? "greater than 10" : x < 5 ? "less than 5" : "between 5 and 10";

let age3 = 21;

if (age >= 21) {
    console.log('Old enoug to drink');
    if (age >= 18) {
        console.log('Almost old enough to drink');
    }
} else {
    console.log('Not even close');
}

let age4 = age4 >= 21 ? 'Old enogh to drink' ? age4 >= 18 : 'almost' : 'not close';