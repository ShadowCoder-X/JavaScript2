function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return `BMI: ${bmi.toFixed(2)} - Underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `BMI: ${bmi.toFixed(2)} - Normal weight`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `BMI: ${bmi.toFixed(2)} - Overweight`;
  } else {
    return `BMI: ${bmi.toFixed(2)} - Obese`;
  }
}

console.log(calculateBMI(70, 1.75));

function checkSeason(month) {
  month = month.toLowerCase();

  if (["september", "october", "november"].includes(month)) {
    return "Autumn";
  } else if (["december", "january", "february"].includes(month)) {
    return "Winter";
  } else if (["march", "april", "may"].includes(month)) {
    return "Spring";
  } else if (["june", "july", "august"].includes(month)) {
    return "Summer";
  } else {
    return "Invalid month";
  }
}

console.log(checkSeason("March"));

// Using Math.max
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//Without using Math.max
function findMax(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([1, 2, 3, 4]);

function showDateTime() {
  const now = new Date();

  let day = String(now.getDate()).padStart(2, "0");
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let year = now.getFullYear();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");

  console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}

console.log(showDateTime());
