// 6.	Create a new file called loops.js and link it to your HTML
// file. Create the following loops with any variables you feel are
// needed:

//   a.	A while loop that prints all even numbers from 0 to 100

let i = 0;              // i starts with the value 0

while (i <= 100) {     //while i is less than or equal to 100,
    console.log(i);       //print the current iteration of i
    i += 2;                  //then add 2
};

console.log("");
console.log("BREAK!");
console.log("");

//   b.	A while loop that prints every 3rd number going backwards
//         from 100 until we reach 0

let t = 103          // t has a value of 103

while (t >= 3) {    //while t is greater than or equal to 3,
    t -= 3;               // subtract 3 from t's current value (which starts at 103)
    console.log(t);              // print t            
};

console.log("");
console.log("BREAK!");
console.log("");

//   c.	A for loop that prints every other number from 1 to 100

let o = 1;

for (o = 1; o <= 100; o += 2) {   // for (initialization, condition, increment) {
    console.log(o);                // code block to be executed while the condition is true
}                                       

console.log("");
console.log("BREAK!");
console.log("");

//   d.	A for loop that prints every number from 0 to 100, but 
//        if the number is divisible by 3, it prints “Hello” instead
//         of the number, and if the number is divisible by 5, 
//         it prints “World” instead of the number, and if it is 
//         divisible by both 3 and 5, it prints “HelloWorld” instead
//           of the number.


for (let e = 0;e <= 100; e++) {
    if (!(e % 3)) {
        console.log("Hello");
    } 
    if (!(e % 5)) {
        console.log("World");
    }
    if (!(e % 3) && !(e % 5)) {
        console.log("HelloWorld");
    } 
}