"use strict";

// // Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// function ucFirst(str) {
// 	if (!str) return str;

// 	return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst("привет"));

// // Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// // Функция должна быть нечувствительна к регистру

// function checkSpam(str) {
// 	let checkStr = str.toLowerCase();

// 	return checkStr.includes('viagra') || checkStr.includes('xxx');
// }

// alert(checkSpam('giraVIAGRA kolar'));

// // Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
// // если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// // Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
// 	if (str.length > maxlength) {
// 		let newStr = str.slice(0, maxlength);
// 		newStr = newStr.slice(0, maxlength-3) + "...";  
// 		return newStr;
// 	} else {
// 		return str;
// 	}
// }

// alert(truncate("Всем привет, меня зовут Вова и сегодня я научу вас играть на гитаре!", 20));

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
	return str = str.slice(1);
}

alert(extractCurrencyValue("$155"));