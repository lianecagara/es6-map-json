const JsonMap = require('../');

// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random name
function generateRandomName() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Helen', 'Isaac', 'Jane'];
  return names[getRandomInt(0, names.length - 1)];
}

// Function to generate a random surname
function generateRandomSurname() {
  const surnames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
  return surnames[getRandomInt(0, surnames.length - 1)];
}

// Function to generate a random age between 18 and 65
function generateRandomAge() {
  return getRandomInt(18, 65);
}

// Create a new instance of JsonMap with a file path
const usersData = new JsonMap(`${__dirname}/test.json`);

// Generate random user data and add it to the map
for (let i = 0; i < 5; i++) {
  const name = generateRandomName();
  const surname = generateRandomSurname();
  const age = generateRandomAge();
  const userData = { name, surname, age };
  usersData.set(`user${i + 1}`, userData);
}

// Log the users data
console.log(usersData);
