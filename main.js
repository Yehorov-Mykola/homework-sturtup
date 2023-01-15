//1. Складання зп
let salaryOne, salaryTwo, salarySum, salaryBon, salaryMin;

salaryOne = prompt("Enter your first month salary", '1');
salaryTwo = prompt("Enter your first month salary", '2');

salarySum = +salaryOne + +salaryTwo;

alert(`Your salary for 2 month is: ${salarySum}`);


//2. Складання зп + бонус
salaryBon = salarySum + 1;
alert(`You have extra bonus! Your total salary was: ${salarySum}$. It's increase for 1$ and now it is: ${salaryBon}$`);

//3. Чи хочете працювати далі
salaryMin = 2000;
alert(`Will you work next? ${salaryBon >= salaryMin}`);

//4. Перероблена версія
alert(`Далі перероблена версія`);

salaryOne = prompt("Enter your first month salary", '1');
salaryTwo = prompt("Enter your first month salary", '2');

salarySum = +salaryOne + +salaryTwo;

alert(`Your salary for 2 month is: ${salarySum}`);

salaryBon = salarySum + 1;
alert(`You have extra bonus! Your total salary was: ${salarySum}$. It's increase for 1$ and now it is: ${salaryBon}$`);

if (salaryBon < 2000){
    alert(`I'm out`);
}
else{
    alert(`I'm ready to work`);
}