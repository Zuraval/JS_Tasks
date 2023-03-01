"use strict";

// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
	return Array.from(new Set(arr));
}

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(arr) {
	let map = new Map();
  
	for (let word of arr) {
	  // разбиваем слово на буквы, сортируем и объединяем снова в строку
	  let sorted = word.toLowerCase().split("").sort().join(""); // (*)
	  map.set(sorted, word);
	}
  
	return Array.from(map.values());
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция

// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

let map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");

alert(keys);