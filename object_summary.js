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
console.log(realFriend)
console.log(realFriend.join(''));  // o/p without comma


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





console.log("=========| reverse a string 3 diffrent ways |=========")

const sentence_2 = "I am Learning Web Development."

//  Way --01
let reverse_2 = " "
for (const letter of sentence_2) {
    // console.log(letter);
    reverse_2 = letter + reverse_2;

}
console.log("Way-01 (Reverse) :", reverse_2)


// Way -- 02

let rev = ""
for (let s = 0; s < sentence_2.length; s++) {
    // console.log(s)
    // console.log(sentence[s])
    const letter = sentence[s];
    rev = letter + rev;
}
console.log("Way-02 (Reverse) :", rev)


// Way --03

const reversed = sentence_2.split('').reverse().join('');
console.log("Way-03 (Reverse) :", reversed)




console.log("=========| Intro object properties & values |=========")

// Object  (Properties: "value",)
const bottle = {
    brand: "Akij",
    color: "White",
    price: 50,
    isClean: false,
}

const subjects = {
    name: "Biology",
    teacher: "Rima Mem",
    examDate: "28 May",
    chapters: ["First", "Second", "Third"],
    exams: {
        name: "Final Exam",
        marks: 100,
        date: "30 May"
    }
}
console.log("Final Exam Marks :", subjects.exams.marks)









