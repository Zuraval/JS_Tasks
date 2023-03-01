"use strict";

// Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // выведет полностью весь массив

// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
	
	let arr = [];
	let summa = 0;
	
	for (;;) {

		let num = prompt("Введите число", " ");

		if (num == null || num == "" || !isFinite(num)) {
			for (let item of arr) {
				summa += item;
			}
			return summa;  
		} else {
			arr.push(+num); 
		}
	}
}

alert(sumInput());

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
	let maxSum = 0;
	let partialSum = 0;
  
	for (let item of arr) {
	  partialSum += item; 
	  maxSum = Math.max(maxSum, partialSum); 
	  if (partialSum < 0) partialSum = 0; 
	}
  
	return maxSum;
  }

  alert(getMaxSubSum([-1, 2, 3, 1, -9]));