const regex = /^[^aA]{6,}$/;

function validateString(str) {
  return regex.test(str);
}

const strings = [
  "Wonderful", // має бути знайдено
  "Joyful", // має бути знайдено
  "Happiness",
  "Time",
  "Task",
  "Apple",
];

const validStrings = strings.filter((str) => validateString(str));

console.log(validStrings);
