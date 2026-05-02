const students = [
  {
    name: "Alex",
    age: 22,
    isEnrolled: true,
    grades: [85, 92, 78, 90],
  },
  {
    name: "Jordan",
    age: 19,
    isEnrolled: true,
    grades: [88, 76, 95, 81],
  },
  {
    name: "Maya",
    age: 24,
    isEnrolled: false,
    grades: [91, 89, 94, 97],
  },
  {
    name: "Chris",
    age: 21,
    isEnrolled: true,
    grades: [65, 72, 70, 68],
  },
  {
    name: "Taylor",
    age: 20,
    isEnrolled: true,
    grades: [58, 64, 61, 55],
  },
];

// 1. Using forEach print each students name
students.forEach((student) => console.log(student.name));

/* 2.
 Create a function that:
- Calculates a student's average grade
- Determines their letter grade based on their average using conditionals
- Returns both values
*/
function averageGrade(gradeList) {
  let total = 0;
  gradeList.forEach((grade) => (total += grade));
  const average = total / gradeList.length;

  if (average > 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  let answer = [];
  answer.push(average, grade)
  return answer
//   return `Grade Average: ${average} ${grade} `
}
/* 3. Using the function above^^^ use a map to add that average and letter grade into the correct student object using
the keys "averageGrade" and "letterGrade" so the final object should look something like this:
    {
    name: "Alex",
    age: 22,
    isEnrolled: true,
    grades: [85, 92, 78, 90]
    averageGrade: Decimal // add this new value
    letterGrade: "B" // add this new value
  }
*/

students.map(student => student.averageGrade = averageGrade(student.grades)[0] )
students.map(student => student.letterGrade = averageGrade(student.grades)[1] )

console.log("Updated student array")
console.log(students)

// 4. Use filter to create a new array call topStudents for students who are enrolled and
// average grade is 80 or higher
// write code for #4 here
const topStudents = students.filter((student) => student.averageGrade >= 80 && student.isEnrolled)
console.log("Array of top students")
console.log(topStudents)