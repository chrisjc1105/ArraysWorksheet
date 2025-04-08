// Part 1
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);
console.log(fruits.length);


// Part 2 
fruits.push("orange");
console.log(fruits);

let orange = fruits.pop();
console.log(fruits);
console.log(orange);

fruits.push("pineapple", "kiwi");
fruits.pop();
console.log(fruits);
console.log(fruits.length);


// Part 3
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase())
}

let appleCount = 0;
for (i = 0; i < fruits.length; i++) {
    if (fruits[i] == "apple") {
        appleCount++;
    }
}
console.log(appleCount);


// Part 4 
let cart = [];
cart.push("Carrots", "Eggs", "Cheese");