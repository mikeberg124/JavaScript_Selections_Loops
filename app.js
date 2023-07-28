console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i =0; i < 100; i++)  {
    if(i % 2 == 0) {
        continue;
    } else{
        console.log(i);
    }
}
  

// Exercise 2 Section
for (let i =0; i < 100; i++)  {
    if(i % 3 == 0  && i % 5 == 0) {
        console.log('FIZZBUZZ');
    } else{
        if( i % 3 == 0)
        console.log('FIZZ');
    }

    if( i % 5 == 0) {
        console.log('BUZZ');
    }
        
}

// Exercise 3 Section

let i = 1;

while(i <= 100){
    let output = "";
    if( i % 3 == 0) {
        output += "FIZZ";

    }
    if( i % 5 == 0) {
        output += "BUZZ";
        
    }
    console.log ('${i} ${output}');
    i++;
}

let x = 1;

do {
    let output = "";
    if( x % 3 == 0) {
        output += "FIZZ";

    }
    if( x % 5 == 0) {
        output += "BUZZ";
        
    }
    console.log ('${x} ${output}');
    x++;
} while( x <= 100);

// Exercise 4 Section

let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(i = 1; i<=n ; i++) {
    if(i == numberToFind){
        console.log('Found ${numberToFind}');
    break;
    }
    if(i == n) {
        console.log('Did not find ${numberToFind}');
    }

    

}

// Exercise 5 Section

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
//console.log(start, end);

for(let i = start; i <= end; i++) {
let output = ""

if( fizzDivisor == 0) {
    output += "Fizz"
}
if( buzzDivisor == 0) {
    output += "Buzz"
}
console.log ('${i} ${output}');
    
}

console.log(fizzDivisor,buzzDivisor);