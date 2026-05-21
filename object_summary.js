console.log("==========| string V/s array |==========")

// Array
const numbers = [10, 20, 30, 40, 50, 60, 70]
numbers[0] = 100;   // mutable
console.log("Changed first item :", numbers)


// string
const district = "Mymensingh"
// district[0] = x ;  // immutable !
console.log("First letter of district :", district[0])
console.log("Total length with spaces : ", district.length)



console.log("=========| lowercase/upperCase/trim |=========")

const school = "Rajibpur Aftab Uddin High School";
console.log("School :", school.toUpperCase())
console.log("School :", school.toLowerCase())

const subject = "Chemistry";
const book = "chemistry";

if (subject.toUpperCase() === book.toUpperCase()) {
    console.log("Matched.")
}

else {
    console.log("They are not same thing.")
}



// x.trim() --> start & end | remove white space

const drink = "Water";
const liquid = "   Water   ";

if (drink.trim() === liquid.trim()) {
    console.log("No Difference.")
}
else {
    console.log("They are not same.")
}



console.log("=========| slice_join_concat_includes|=========")

// slice
const address = "DHAKA";
console.log("Slice (0,3 :", address.slice(0, 3))
// (0, 3) means: start from 0 to end 2 index


// split
const sentence = 'I am learning web development.';
console.log("Sentence split :", sentence.split(' '));
// O/p: Sentence split : [ 'I', 'am', 'learning', 'web', 'development.' ]

const friendsStr = "Rahim, Karim, Fahim, Rakib, Hasan";
const friends = friendsStr.split(",");
console.log(friends)
// O/p: [ 'Rahim', ' Karim', ' Fahim', ' Rakib', ' Hasan' ]


// split("")--- no space : letter one by one with comma : 'A', 'B'
// split(" ")  --- one space : word one by one : 'I', 'am'


// join 
const realFriend = ['Rahim', ' karim ', ' fahim ', ' jahid '];
console.log(realFriend.join('||'));


// concat()
const numbers_1 = [10, 20, 30, 40, 50];
const numbers_2 = [60, 70, 80, 90, 100];
const combined = numbers_1.concat(numbers_2);
console.log("Combined Array :", combined);


const firstName = "Bayjid";
const lastName = "Alom";
const fullName = firstName.concat(" ").concat(lastName);   // using space
const fullName_2 = firstName.concat(" ").concat(lastName).concat(" | Jihad");
console.log("Full Name :", fullName)
console.log("Full Name :", fullName_2)

// includes
console.log("is available B in fisrtName ? : ", firstName.includes("B"));








