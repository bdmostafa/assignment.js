/*
Assignment No. 1. Feet-To-Mile converter ======= === === === === === === ==
Requirements & tasks to be done:
    input - feet,
    negative feet not allowed,
    convert feet to mile,
    if float, 2 digit after decimal (35.54)
    output - mile
 */
function feetToMile(feet) {
    if (feet < 0) {
        return `This ${feet} negative value is not valid for distance. Please input a positive number.`
    } else {
        let mile = feet / 5280;
        // Displaying 4 decimal places
        let resultMile = mile.toFixed(4);
        return `${feet} feet = ${resultMile} mile`
    }
}
console.log(feetToMile(-500));
console.log(feetToMile(500));

/* 
Assignment No. 2. Wood Calculator in chair, table and bed === === === === === === === === === === === =
Requirements & tasks to be done:
    input - chair, table and bed in chronological order,
    negative value or string input not allowed,
    1 chair = 1 cubic feet, 1 table = 3 cubic feet, 1 bed = 5 cubic feet,
    output - cubic feet
*/
function woodCalculator(chair, table, bed) {
    // Input validation
    if (chair < 0 || table < 0 || bed < 0) {
        return 'Negative value is not allowed. Please input a positive number.'
    } else if (isNaN(chair) || typeof (table) !== 'number' || isNaN(bed)) {
        // Both usages of isNan() and typeof()
        return 'Please input a valid number, not string';
    } else {
        // As 1 chair = 1 cubic feet, no need to create extra variable
        let tableCubicFeet = table * 3;
        let bedCubicFeet = bed * 5;
        let totalCubicFeet = chair + tableCubicFeet + bedCubicFeet;
        return `Total cubic feet is ${totalCubicFeet}`;
    }

}
console.log(woodCalculator(12, -2, 1));
console.log(woodCalculator(12, 'table', 1));
console.log(woodCalculator(12, 2, 1));

/*
Assignment No. 3. Brick Calculator in a building === === === === === === === === === ===
Requirements & tasks to be done:
    input - building floors,
    negative floor not allowed,
    count floors & compare,
    (1 - 10) floors height - 15 feet, (11 - 20) floors height - 12 feet, (21 - ~) floors height - 10 feet,
    every feet need 1000 bricks constantly,
    output - bricks number
*/
function brickCalculator() {

}

/*
Assignment No. 4. Tiny Friend - the lowest friend from an array ================================
Requirements & tasks to be done:
    input - an array of friends' list,
    empty array or undefined is not allowed,
    compare the length of every element/string in the array
    find out the lowest string from them
    output - the lowest friend
*/
function tinyFriend(friends) {
    // Validation when array is empty or undefined
    if (friends === undefined || friends.length < 1) {
        return 'The list is empty or undefined. Please try again!';
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
let friends = ['Jhankar Mahbub', 'Mostafa', 'Tiny', 'Yeasin', 'Vue', 'Yo', 'Mahmud'];

console.log(tinyFriend(friendsEmpty));
console.log(tinyFriend(friendsUndefined));
console.log(tinyFriend(friends));