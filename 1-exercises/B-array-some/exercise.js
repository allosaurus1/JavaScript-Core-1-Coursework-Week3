/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

var pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

const students = ["Islam", "Lesley", "Harun", "Rukmini"];
const mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

const pairs = pairsByIndex.map(function (indexes) {
  const student = students[indexes[0]];
  const mentor = mentors[indexes[1]];
  const isNull = pairsByIndex.some(element => element === null);
  if (isNull){
    console.log("Error!");
    process.exit(1);
  }  
  return [student, mentor];
});

console.log(pairs);
