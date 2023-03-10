"use strict";

// Что выведет код ниже?

alert( null || 2 || undefined ); // 2

// Что выведет код ниже?

alert( alert(1) || 2 || alert(3) ); // alert(1), а затем 2

// Что выведет код ниже?

alert( 1 && null && 2 ); // null

// Что выведет код ниже?

alert( alert(1) && alert(2) ); // alert(1), а затем undefined

//Что выведет код ниже?

alert( null || 2 && 3 || 4 ); // 3

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age = prompt("Сколько вам лет?", " ");

if (age >= 14 && age <= 90) {
	alert("Все верно!");
}

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age = prompt("Введите ваш возраст", " ");

if (!(age >= 14 && age <= 90)) { // 1
	alert("Все верно!")
}


if (age >= 90 && age <= 14) { // 2
	alert("Все верно!");
}

// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' ); // (-1)first
if (-1 && 0) alert( 'second' ); // (true и false) не выполнится 
if (null || -1 && 1) alert( 'third' ); // (1)third

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, 
//если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

let login = prompt("Введите ваш логи", " ");
let password; 

if (login === "" || login === null) {
	alert("Отменено")
} else if (login === "Админ") {
	password = prompt("Введите пароль", " ")

	if (password === "Я главный") {
		alert("Здравствуйте!");
	} else if (password === null) {
		alert("Отменено");
	} else {
		alert("Неверный пароль");
	}

} else {
	alert("Я вас не знаю");
}