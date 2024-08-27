/*
PROBLEM:
I: An object of objects (students) and their data
O: An object with the students grades and exam averages

- Exams are weighted 65%, Exercises are weighted 35%
- Grades follow table on problem
- Exercises always amount to 100, though how many exercises can vary
    - 50 + 50
    - 20 + 30 + 50
- Every exam has a maxium grade of 100. Find average by adding together then dividing
- Round grades to the nearest integer
    - 81.6 => 82
    - Lookup grade in table
    - Combine grade and letter in a string
        - 82 => "82 (C)"

EXAMPLE:
Student: 
- Exams: 90, 95, 100, 80 === 91.25
- Exercises: 20, 15, 10, 19, 15 === 79
    - ( 91 * .65 ) + ( 79 * .35 )
    - 59.3125 + 27.65 === 87(B)

ALGORITHM
** generateClassRecordSummary
- Create a new studentGrades array
- Create a new exams array
- Iterate thru student scores using keys
    - Determine overal grade
        - Create examGrade
            - All exams summed / length
            - push all scores to exams array
                - Each score is a different exam array
        - Create exercise grade
            - All exercises summed
        - Determine final grade
        - Push grade to studentGrades

- Return an object with all information included

** getLetterGrade
- Use if statements to lookup grade
*/

function generateClassRecordSummary(scores) {
  const studentGrades = [];
  const exams = [];

  Object.keys(scores).forEach(student => {
    let examsGrade = scores[student].scores.exams.reduce((total, score, idx) => {
      if (exams[idx]) {
        exams[idx].push(score);
      } else {
        exams[idx] = [score];
      }

      return total + score;
    }, 0) / scores[student].scores.exams.length;

    let exercisesGrade = scores[student].scores.exercises.reduce((total, score) => {
      return total + score;
    });

    let totalGrade = Math.round((examsGrade * 0.65) + (exercisesGrade * 0.35));
    studentGrades.push(formattedGrade(totalGrade));
  });

  let examData = exams.map(scores => {
    scores.sort((num1, num2) => num1 - num2)[0];

    let average = scores.reduce((sum, score) => sum + score) / scores.length;
    let min = scores[0];
    let max = scores[scores.length - 1];

    return {
      average: average,
      minimum: min,
      maximum: max,
    };
  });

  return {
    studentGrades: studentGrades,
    exams: examData,
  };
}

function formattedGrade(score) {
  return `${score} (${getLetterGrade(score)})`
}

function getLetterGrade(score) {
  if (score > 92) {
    return 'A';
  } else if (score > 84) {
    return 'B';
  } else if (score > 76) {
    return 'C';
  } else if (score > 68) {
    return 'D';
  } else {
    return 'F';
  }
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

/*

returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

*/