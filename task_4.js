/*
### Task-4

Count the `number of properties`.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

Output: 4 */


let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
}

let prop = Object.keys(student).length;
console.log("Total property :", prop)

