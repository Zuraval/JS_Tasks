"use strict";

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let num1 = prompt("Введите первое число", " ");
let num2 = prompt("Введите второе число", " ");

alert(+num1 + +num2);

// Методы Math.round и toFixed, согласно документации,
// округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
// Например:

alert( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?
alert( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?

alert(Math.round(6.35 * 10) / 10); // Ответ

// Создайте функцию readNumber,
// которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода,
// отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
	let num = +prompt("Введите число", " ");
	for (;;){
	    if (Number.isFinite(num) == true) {
	 	    alert(num); break;
	    } else if (num == null || num == "") {
			alert(null); break;
 	    } else {
			num = +prompt("Введите число", " ");
		}
	}
}

readNumber();

// Этот цикл – бесконечный. Он никогда не завершится, почему?
let i = 0;
while (i != 10) {
  i += 0.2;
}
// т.к. 0.2 будет сладываться с погрешностью и будет делать это бесконечно

// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число
// с плавающей точкой от min до max (но не включая max).

function random(min, max) {
	return Math.random() * (max - min) + min;
}

alert(random(1, 5));

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer)
// число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
	let num = min + Math.random() * (max + 1 - min);
	return Math.floor(num);
  }
  
alert(randomInteger(1, 5));