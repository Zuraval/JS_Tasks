"use strict";

// Выведется ли alert?

if ("0") {
  alert( 'Привет' ); // да, выведется, т.к. "0" имеет тип стринг, а не инт
}

//------------------------------------------------------------------------

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let CompanyName = prompt("Какое «официальное» название JavaScript?", " ")

if (CompanyName == "ECMAScript") {
	alert("Верно!");
} else {
	alert("Не знаете? ECMAScript!");
}

//------------------------------------------------------------------------

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let Number = prompt("Введите число", " ")

if (+Number > 0) {
	alert(1);
} else if (+Number < 0) {
	alert(-1);
} else if (+Number == 0) {
	alert(0);
}

//------------------------------------------------------------------------

// Перепишите конструкцию if с использованием условного оператора '?':

 let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let result = (a + b < 4) ? 'Мало' : 'Много'; // Решение

//------------------------------------------------------------------------

// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let message = (login == 'Сотрудник') ? 'Привет' : // Решение
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';