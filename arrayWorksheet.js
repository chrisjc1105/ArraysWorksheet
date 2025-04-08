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
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase())
}

let appleCount = 0;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == "apple") {
        appleCount++;
    }
}
console.log(appleCount);



// Part 4 
let cart = [];
cart.push("Carrots", "Eggs", "Cheese");
console.log(cart);
cart.pop();
console.log(cart);
console.log(cart.length);

let numbers = [1, 2, 3, 4, 5];
//  indices:   0, 1, 2, 3, 4
for (let i = 0; i < Math.ceil(numbers.length / 2); i++) {
    let tempNum = numbers[i];

    numbers[i] = numbers[numbers.length - 1 - i];
    // console.log(`num at index ${i}: `, numbers[i]); // for testing

    numbers[numbers.length - 1 - i] = tempNum;
    // console.log(`num at index ${numbers.length-1-i}`, numbers[numbers.length - 1 - i]); // for testing
    // console.log(""); // whitespace for organization in testing
}
console.log(numbers);



// Part 5 
let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

if (array1.length > array2.length) {
    console.log("array1's length is greater than array2's length.")
} else if (array2.length > array1.length) {
    console.log("array2's length is greater than array1's length.")
} else {
    console.log("the two arrays have equal lengths.")
}



// Part 6 
const array = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        console.log(array[i]);
    }
}



// Part 7 
// 1. 
let students = ["Alice", "Bob", "Charlie"];
let subjects = ["Math", "Science"];

// 2. 
for (let i = 0; i < students.length; i++) { // outer parent loop
    // 3. 
    for (let j = 0; j < subjects.length; j++) { // inner child loop
        // 4. 
        console.log(`${students[i]} - ${subjects[j]}`); // work to be completed
    }
}

// Essentially, nested for loops can almost be compared to children completing their work when their parents tell them to. 
// Everytime the parent for loop iterates, or calls for work to be done, the child for loop will follow suit by completing its work- or in this context, code. 
// The inner child loop will run itself fully everytime the outer parent loop runs once. 
// This pattern will repeat over and over again until the outer parent loop finishes its OWN work *completely*.  

// For example, in the code above in Part 7, we are printing a list of students next to subjects. 
// 1. The arrays are declared with values of student and subject names respectively 
// 2. The "outside machine", or outer for loop, is written 
// 3. The "inside machine", or inner for loop, is written
// 4. The printing, or console.logs, is written. 

// Everytime the outer for loop runs once, the inner for loop will run itself fully. 
// -- e.g. -- 
// students[i] will be students[0] which will be Alice.
// subjects[j] will be subjects[0] which will be Math.
// because the inner for loop is nested in the outer one, this printing will run again, except subjects[j] will now be 
// subjects[1], which will be Science.
// Therefore, what's printed is both "Alice - Math" *and* "Alice - Science".
// The same will be done for "Bob" and "Charlie", with both "Math" and "Science" applying to both of them. 
