// 2.	In your editor, create a new directory for 
//     this project. Create an index.html and index.js
//      file. Link the JavaScript file to the HTML file. 
//  In the JavaScript file create the following Boolean 
//  variables and choose what values they hold:

//     a.	isHotOutside
let isHotOutside = true;
//     b.	isWeekday
let isWeekday = false;
//     c.	hasMoneyInPocket
let hasMoneyInPocket = false;

// 3.	Create the following variables and assign them values 
//     (the assigned values should not be Boolean):

//     a.	costOfMilk
let costOfMilk = 2.89;
//     b.	moneyInWallet
let moneyInWallet = 10;
//     c.	thirstLevel (how thirsty you are on a scale of 1-10)
let thirstLevel = 2;

// 4.	Using the variables you created above and Boolean operators,
//      create variables for the following scenarios:

//     a.	shouldByIcecream – this should be true if it is hot 
//                       outside and there is money in your pocket

let shouldBuyIcecream = (isHotOutside && hasMoneyInPocket);

if (shouldBuyIcecream) {
    console.log("I'm in the mood for some ice cream!");
} else {
    console.log("I don't have any money, maybe tomorrow.");
};

//     b.	willGoSwimming – this should be true if it is hot
//                             outside and it is not a weekday

let willGoSwimming = (isHotOutside && !isWeekday);

if (willGoSwimming) {
    console.log("It's the perfect day for a swim!");
} else {
    console.log("Not today-tomorrow should be a better day.");
};
//     c.	isAGoodDay – this should be true if it is hot outside, 
//                         there is money in your pocket, and it is 
//                         not a weekday

let isAGoodDay = (isHotOutside && hasMoneyInPocket && !isWeekday);

if (isAGoodDay) {
    console.log("BEST DAY EVERRRRRRR!");
} else {
    console.log("Meh, I've seen better days.");
};
//     d.	willBuyMilk – this should be true if it is hot outside, 
//                         and thirstLevel is greater than or equal
//                        to 3, and moneyInWallet is greater than or 
//                          equal to 2 times the cost of milk.

let willBuyMilk = (isHotOutside && thirstLevel >= 2*(costOfMilk));

if (willBuyMilk) {
    console.log("Milk is exactly what I need!");
} else {
    console.log("Not in the mood.");
};

// 5.	Log the values to the console.

console.log(shouldBuyIcecream);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log(willBuyMilk);

