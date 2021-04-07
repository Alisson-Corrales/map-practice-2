"use strict";


let students = ['Martin Pratt: 53%',
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
'Todd Chadwick: 81%']

for(let i in students){
    students[i] = students[i].split(': ')
}
//console.log(students)


//1. Take the list I gave you in the input and break it down into an array like usual then use the proper methods to pass that array into a map named studentGrades.
//turns the array into a map
let studentGrades = new Map(students);


// ✧･ﾟ: *✧･ﾟ:* q. *:･ﾟ✧*:･ﾟ✧ //


//2. Using map methods on studentGrades only, tell me how many students are in the class and print out to console all of the students’ names.
console.log(studentGrades.size)
for(let names of studentGrades.keys()){
    console.log(names)
}


// ✧･ﾟ: *✧･ﾟ:* q. *:･ﾟ✧*:･ﾟ✧ //


//3. Using map methods please add the following student - grade pairs to the map
studentGrades.set('Isobella Moyer', '95%');
studentGrades.set('Star Mcdougall', '56%');
studentGrades.set('Blade Lennon', '72%');
studentGrades.set('Karishma Molloy', '92%');
studentGrades.set('Gregor Garner', '63%');
studentGrades.set('Alec Peterson', '100%');
studentGrades.set('Letitia Benitez', '67%');
studentGrades.set('Elicia Hoover', '55%');


// ✧･ﾟ: *✧･ﾟ:* q. *:･ﾟ✧*:･ﾟ✧ //


//4. Using map methods please loop through every grade and tell me the average grade in the class. 
for(let grades of studentGrades.values()){
    let total = grades.size;
    let totalSeries = (total*(total + 1)/total)/2;
    let average = totalSeries/total;
    console.log(average)
}


// ✧･ﾟ: *✧･ﾟ:* q. *:･ﾟ✧*:･ﾟ✧ //


//5. Using map methods as much as possible please go through and remove the top 4 grades and bottom 4 grades



// ✧･ﾟ: *✧･ﾟ:* q. *:･ﾟ✧*:･ﾟ✧ //


//6. Console.log every entry in the map using only map methods
//console.table(studentGrades)