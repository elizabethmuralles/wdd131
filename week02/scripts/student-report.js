// Variables dadas
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// --------------------------------------------------
// 1️⃣ FOR LOOP – valores menores que 30
// --------------------------------------------------
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log("For loop:", studentReport[i]);
  }
}

// --------------------------------------------------
// 2️⃣ WHILE LOOP – valores menores que 30
// --------------------------------------------------
let i = 0;

while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log("While loop:", studentReport[i]);
  }
  i++;
}

// --------------------------------------------------
// 3️⃣ FOREACH LOOP – valores menores que 30
// --------------------------------------------------
studentReport.forEach(score => {
  if (score < LIMIT) {
    console.log("forEach loop:", score);
  }
});

// --------------------------------------------------
// 4️⃣ FOR...IN LOOP – valores menores que 30
// --------------------------------------------------
for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log("for...in loop:", studentReport[index]);
  }
}

// --------------------------------------------------
// 5️⃣ FUTURE DAYS FROM TODAY (using a loop)
// --------------------------------------------------
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let today = new Date().getDay();

for (let d = 0; d < DAYS; d++) {
  let futureDay = (today + d) % 7;
  console.log("Day", d + 1 + ":", dayNames[futureDay]);
}
