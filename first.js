//task1
const name=prompt("What is your name?");
alert(`Hy,${name}`);

//task2
const year_now=2026;
const birth_year=Number(prompt("which year were you born?"));
const years_old=year_now-birth_year;
alert(`You are ${years_old} years old`);

//task3
const leight=Number(prompt("Яка довжина сторони квадрата?"));
const result1=leight*4;
alert(`Периметр квадрата:${result}`);


//task4
const radius=Number(prompt("Який радіус кола?"));
const result2=3.14*radius**2;
alert(`площа кола:${result2}`);


//task5
const l=Number(prompt("Яка відстань між двома містами?(км/год) "));
const t=Number(prompt("За скільки годин ви хочете доїхати(год)"));
const speed=l/t;
alert(`speed: ${speed}`);

//task6
const dollar_to_euro=0.88;
const dollars=Number(prompt("How many dollars do you have?"));
const euro=Math.floor(dollars*dollar_to_euro);
alert(`from ${dollars} dollars you can take ${euro}`);

//task7
const your_size= Number(prompt("Your size of flash drive(gb): "));
const size_files=820;
const your_sizemb=your_size*1024;
const result3=Math.floor(your_sizemb/size_files);
alert(`you can download ${result3} files`);

//task8
const money=Number(prompt("How much money do tou have"));
const cost_chocolate=Number(prompt("How many cost the chocolate"));
const chocolates=Math.floor(money/cost_chocolate);
const last_money=money-chocolates;
alert(`You can buy ${chocolates} chocolates and you have ${last_money} money after that`);


//tsk9
const number=Number(prompt("enter your number"));
const last=number%10;
const first = Math.floor(number / 100);
const second = Math.floor(number / 10) % 10;
alert(`${last}${second}${first}`);

//task10
const number1 = Number(prompt("Введіть ціле число"));
const result4 = number1 % 2 === 0 ? "Парне" : "Непарне";
alert(`${result4}`);