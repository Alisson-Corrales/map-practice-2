"use strict";


let students = `'Martin Pratt: 53%',
'Kain Gibbs: 76%',
'Shantelle Shah: 82%',
'Ritik Alcock: 80%',
'Abdurahman Ratcliffe: 57%',
'Bailey Garcia: 68%',
'Freyja Joyce: 99%',
'Abraham Davison: 92%',
'Zarah Cote: 95%',
'Aayush Keith: 100%',
'Melvin Fischer: 58%',
'Blane Ayala: 68%',
'Gregg Zuniga: 76%',
'Rizwan Goodwin: 64%',
'Denise Turner: 84%',
'Shelly Reed: 89%',
'Robin Ellwood: 87%',
'Pollyanna Hopkins: 67%',
'Darcey Martins: 79%',
'Javan Rankin: 92%',
'Lina Flower: 99%',
'Millie-Rose Lacey: 65%',
'Lynda Whitley: 100%',
'Emrys Banks: 77%',
'Bradleigh Hodges: 60%',
'Aishah Knott: 94%',
'Shannen Blanchard: 90%',
'Ellise Watson: 56%',
'Kimora Carver: 54%',
'Elaina Allison: 59%',
'Kobe Odom: 61%',
'Keeleigh Searle: 97%',
'Coby Peters: 52%',
'Leslie Whitmore: 93%',
'Christian Cook: 65%',
'Esme Downes: 77%',
'Nico Clegg: 74%',
'Aine Welch: 82%',
'Noah Huber: 97%',
'Dewey Benton: 55%',
'Ubaid Shannon: 88%',
'Todd Chadwick: 81%'`

students = students.split("\n");
for(let i in students){
    students[i] = students[i].split(':')
}

console.table(students)
let names = [];
for(let j = 0; j <= 42; j ++){
    let output = students[0][j];
    names.push(
        
        output);
}
//this doesn't work beyond [0][1]. find out why
//console.log(students[0][0])
let grades = [];
for(let k = 0; k <= 42; k ++){
    let output = students[1][k];
    grades.push(output);
}



//1. Take the list I gave you in the input and break it down into an array like usual then use the proper methods to pass that array into a map named studentGrades.
//turns the array into a map
let studentGrades = new Map();
studentGrades.set(names, grades)
console.table(studentGrades)

//2. Using map methods on studentGrades only, tell me how many students are in the class and print out to console all of the students’ names.
//console.log(studentGrades.size)
//for(let names of studentGrades.keys()){
//    console.log(names)
//}

//3. Using map methods please add the following student - grade pairs to the map
/*studentGrades.set(['Isobella Moyer: 95%'],
['Star Mcdougall: 56%'],
['Blade Lennon: 72%'],
['Karishma Molloy: 92%'],
['Gregor Garner: 63%'],
['Alec Peterson: 100%'],
['Letitia Benitez: 67%'],
['Elicia Hoover: 55%'])
*/