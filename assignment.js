/*
Assignment No. 1. Feet-To-Mile converter === === === === === === === === === === === === === ===
Requirements & tasks to be done:
    input - feet,
    negative or string is not allowed,
    convert feet to mile,
    if float, display 4 decimal places i.e., 45.4589
    output - mile
 */
function feetToMile(feet) {
    // Input validation whether it is negative or string
    if (feet < 0) {
        return `This ${feet} negative value is not valid for distance. Please input a positive number!`;
    } else if (isNaN(feet)) {
        return `This "${feet}" is a string that is not allowed. Please input an integer!`;
    } else {
        let mile = feet / 5280;
        // Displaying 4 decimal places
        let resultMile = mile.toFixed(4);
        return `${feet} feet = ${resultMile} mile`;
    }
}

// Checking the possible inputs
console.log(feetToMile(-500));
console.log(feetToMile('abcfeet'));
console.log(feetToMile(500));





/* 
Assignment No. 2. Wood Calculator in chair, table and bed === === === === === === === === === === ===
Requirements & tasks to be done:
    input - numbers of chair, table and bed in chronological order,
    negative value or string input is not allowed,
    given that 1 chair = 1 cubic feet, 1 table = 3 cubic feet, and 1 bed = 5 cubic feet,
    output - summation of all cubic feet
*/
function woodCalculator(chair, table, bed) {
    // Input validation for negative and string value
    if (chair < 0 || table < 0 || bed < 0) {
        return 'Negative value is not allowed. Please input a positive number!';
    } else if (typeof (chair) !== 'number' || typeof (table) !== 'number' || typeof (bed) !== 'number') {
        return 'Please input a valid number, not a string!';
    } else {
        let chairCubicFeet = chair * 1;
        let tableCubicFeet = table * 3;
        let bedCubicFeet = bed * 5;

        const totalCubicFeet = chairCubicFeet + tableCubicFeet + bedCubicFeet;
        return `Total cubic feet is ${totalCubicFeet}`;
    }
}

// Checking the possible inputs
console.log(woodCalculator(12, -2, 1));
console.log(woodCalculator(12, 'abctable', 1));
console.log(woodCalculator(12, 2, 1));





/*
Assignment No. 3. Brick Calculator in a building === === === === === === === === === === === === === === ===
Requirements & tasks to be done:
    input - building floors,
    negative floor, zero, string and undefined are not allowed,
    count floors & compare,
    (1 - 10) floors height -> 15 feet, (11 - 20) floors height -> 12 feet, (21 - ~) floors height -> 10 feet,
    every feet need 1000 bricks constantly,
    output - total bricks number
*/
function brickCalculator(floors) {
    // Initialize feets by 1 because it is for multiplication
    let feets = 1;
    let feetsOfTen = 15 * 10;
    let feetsOfTwenty = feetsOfTen + (12 * 10);
    let totalBricks;

    // Solution using if, else-if condition
    if (floors <= 0) {
        return 'Floors must not be zero or negative. Please try again!';
    } else if (floors <= 10) {
        feets = floors * 15;
        totalBricks = feets * 1000;
        return totalBricks;
    } else if (floors <= 20) {
        feets = feetsOfTen + ((floors - 10) * 12);
        totalBricks = feets * 1000;
        return totalBricks;
    } else if (floors > 20) {
        feets = feetsOfTwenty + ((floors - 20) * 10);
        totalBricks = feets * 1000;
        return totalBricks;
    } else return `${floors} is not a number. It must be a number, not a string. Please try again!`;


    // Another way to same solution using switch case method
    /*
    switch (floors) {
        case (floors <= 0 && floors):
            totalBricks = 'Floors must not be zero or negative. Please try again!';
            break;
        case (floors <= 10 && floors):
            feets = floors * 15;
            totalBricks = feets * 1000;
            break;
        case (floors <= 20 && floors):
            feets = feetsOfTen + ((floors - 10) * 12);
            totalBricks = feets * 1000;
            break;
        case (floors > 20 && floors):
            feets = feetsOfTwenty + ((floors - 20) * 10);
            totalBricks = feets * 1000;
            break;
        default:
            totalBricks = `${floors} is not a number. It must be a number, not a string. Please try again!`;
    }
    return totalBricks;
    */
}

// Checking the possible inputs
console.log(brickCalculator('abc'));
console.log(brickCalculator());
console.log(brickCalculator(-25));
console.log(brickCalculator(25));





/*
Assignment No. 4. Tiny Friend - find out the lowest friend from an array === === === === === === === === === ===
Requirements & tasks to be done:
    input - an array of friends' list,
    empty array or undefined is not allowed,
    compare the length of every element/string in the array,
    find out the lowest string from them,
    output - the lowest friend
*/
function tinyFriend(friends) {
    // Validation when array is empty or undefined
    if (friends === undefined || friends.length < 1) {
        return `The friends' list is empty or undefined. Please try again!`;
    } else {
        let lowestFriend = friends[0];

        for (let i = 0; i < friends.length; i++) {
            if (friends[i].length < lowestFriend.length) {
                lowestFriend = friends[i];
            }
        }
        return lowestFriend;
    }
}

let friendsEmpty = [];
let friendsUndefined;
let friends = ['Jhankar Mahbub', 'Mostafa', 'Tiny', 'Yeasin', 'Vue', 'JS', 'Mahmud', 'js'];

// Checking the possible inputs
console.log(tinyFriend(friendsEmpty));
console.log(tinyFriend(friendsUndefined));
console.log(tinyFriend(friends));