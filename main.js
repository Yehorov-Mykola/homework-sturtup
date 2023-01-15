//1. Виведення інформації
console.log(`You can ignore single and double quotes like this: \\ '\\' \\" \\"`);

//2. Опитування користувача
let userName, surName, age, adminStatus;

alert('Please enter your data');

userName = prompt("What's your name?", 'Name');
alert(`Your name is: ${userName}`);

surName = prompt("What's your surname?", 'Surname');
alert(`Your full name is: ${userName} ${surName}`);

age = prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${surName}, your age is: ${age}`);

adminStatus = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${surName}, your age is: ${age}, admin status: ${adminStatus}`);
