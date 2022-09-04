// 1.	Create an array called ages 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// check the size of the array ages
console.log("age size: " + ages.length);
// 1a.	subtract the value of the first element in the 
// array from the value in the last element of the array 
let ageDifference = ages[ages.length-1] - ages[0];
// print the result of age difference
console.log("age difference: "+ageDifference);
// 1b.	Add a new age to the array and repeat the step above to ensure it is dynamic 
ages.push(100);
ageDifference = ages[ages.length-1] - ages[0];
// print the age difference
console.log("age difference: "+ageDifference);
// 1c.	Use a loop to iterate through the ages array 
let sum1 = 0;
for (let i=0; i<ages.length; i++) {
    sum1 += ages[i];
}
// calculate the average age. 
let ageAverage = sum1 / ages.length;
// Print the result to the console.
console.log("age average: " + ageAverage);
// 2.	Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// 2a.	Use a loop to iterate through the array 
let sum2 = 0;
for (let i=0; i<names.length; i++) {    
    sum2 += names[i].length;    
}
// calculate the average number of letters per name.
let namesAverage = sum2 / names.length;
// Print the result to the console.
console.log("names' length average: " + namesAverage);

// 2b.	Use a loop to iterate through the array and concatenate all the names 
// together, separated by spaces.
let allNames = names[0];
for (let i=0; i<names.length; i++) {    
    allNames += " " + names[i];    
}
// I print the result to the console.
console.log("All names: " + allNames);

// 3. access the last element of any array using names array's length - 1
console.log("last element: " + names[names.length-1]);
// 4. access the first element of any array
console.log("first element: " + names[0]);

// 5.	Create a new array called nameLengths. 
// Write a loop to iterate over the previously 
// created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i=0; i<names.length; i++) {       
    nameLengths.push(names[i].length);    
}
// print out the nameLength array
console.log("names length: " + nameLengths);
// 6.	Write a loop to iterate over the nameLengths array and calculate the 
// sum of all the elements in the array. 
let sumLength = 0;
for (let i=0; i<nameLengths.length; i++) {    
	sumLength += nameLengths[i];
}
// Print the result to the console.
console.log("sumLength: " + sumLength);

// 7.	Write a function that takes two parameters, word and n, as arguments and 
// returns the word concatenated to itself n number of times. 
function concatWords(word, ntimes) {
    let words = word;
    for (let i=1; i<ntimes; i++) {
        words += word;
    }
    return words;
}
// Print the result to the console.
console.log(concatWords("Hello",3));

// 8.	Write a function that takes two parameters, firstName and lastName, 
// and returns a full name separated by a space.

function concatNames(firstName, lastName) {
    return firstName + " " + lastName;
}

// Print the result to the console.
console.log(concatNames("Loc", "Ngo"));
// 9.	Write a function that takes an array of numbers and returns true if the 
// sum of all the numbers in the array is greater than 100.
function isGreater100(numbers) {
    let sum4 = 0;
    for (let i=0; i<numbers.length; i++) {
        sum4 += numbers[i];
    }
    if (sum4 > 100) {
        return true;
    }
    // if less than or equal to 100 return false
    return false;
}
// Print true to the console for sum of ages that is ove 100
console.log("sum greater than 100: " + isGreater100(ages));
// Print false to the console for sum of array that is less than 100
console.log("sum less than 100: " + isGreater100([1,2,3]));

// 10.	Write a function that takes an array of numbers and returns the average 
// of all the elements in the array.
function averageNumbers(numbers) {
    let sum4 = 0;
    for (let i=0; i<numbers.length; i++) {
        sum4 += numbers[i];
    }
    let numbersAverage = sum4 / numbers.length;
    return numbersAverage;    
}

// Print the result of avergeNumbers function to the console for sum of ages that is over 100
console.log("average numbers: " + averageNumbers(ages));

// 11.	Write a function that takes two arrays of numbers and returns true if the 
// average of the elements in the first array is greater than the average of the 
// elements in the second array.
function greater(numbers1, numbers2) {
    if (averageNumbers(numbers1) > averageNumbers(numbers2)) {
        return true;
    }
    return false;
}

// test average numbers1 > numbers2; return true
console.log(greater("numbers1 > numbers2: " + [1,2,3], [0,1,2]));
// test average numbers2 > numbers1; return false
console.log(greater("numbers2 > numbers1: " + [0,1,2], [1,2,3]));
// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
// and a number moneyInPocket, and returns true if it is hot outside and if 
// moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    }
    // not isHotOutSize || moneyInPoctket <= 10.50 return false
    return false;
}
// test isHotOutside = true, moneyInPocket > 10.5
console.log("function willBuyDrink: "+willBuyDrink(true, 20));
// test isHotOutside = true, moneyInPocket < 10.5
console.log("function willBuyDrink: "+willBuyDrink(true, 5));
// test isHotOutside = false, moneyInPocket > 10.5
console.log("function willBuyDrink: "+willBuyDrink(false, 20));
// test isHotOutside = false, moneyInPocket < 10.5
console.log("function willBuyDrink: "+willBuyDrink(false, 5));

// 13. Create a function findSmallest that find the smallest values in an array.
// The function parameter can be numbers array or strings array.
function findSmallest(list) {

    let smallest = list[0];
    for (let i=1; i<list.length; i++) {
        if (list[i] < smallest) {
            smallest = list[i];
        }
    }
    return smallest;
}
// test for number array for function findSmallest
console.log("function findSmallest: "+findSmallest(ages));
// test for string array for function findSmallest
console.log("function findSmallest: " +findSmallest(names));
