"use strict";

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
	let arr = str.split('-');
	return arr.join('');
}

alert(camelize("list-style-image"));

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
	return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered ); 
alert( arr );

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, 
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {

	for (let i = 0; i < arr.length; i++) {
	  let val = arr[i];
  
	  if (val < a || val > b) {
		arr.splice(i, 1);
		i--;
	  }
	}
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 
alert( arr );

// Сортировать в порядке по убыванию

let arr = [1, 2, 3, 4, 5, -4, 10];
arr.sort((a, b) => b - a);

alert( arr );

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
	return arr.slice().sort();
}

let arr = ["Привет", "меня", "зовут", "Вова"];
let sorted = copySorted(arr);

alert( sorted );
alert( arr );

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

function Calculator() {

	this.methods = {
	  "-": (a, b) => a - b,
	  "+": (a, b) => a + b
	};
  
	this.calculate = function(str) {
  
	  let split = str.split(' '),
		a = +split[0],
		op = split[1],
		b = +split[2]
  
	  if (!this.methods[op] || isNaN(a) || isNaN(b)) {
		return NaN;
	  }
  
	  return this.methods[op](a, b);
	}
  
	this.addMethod = function(name, func) {
	  this.methods[name] = func;
	};
}

// У вас есть массив объектов user,
// и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); 

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName );

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(arr) {
	arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
sortByAge(arr);

alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

function getAverageAge(users) {
	return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
  
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) );

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
	let result = [];
  
	for (let str of arr) {
	  if (!result.includes(str)) {
		result.push(str);
	  }
	}
  
	return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );

// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), 
// которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

function groupById(array) {
	return array.reduce((obj, value) => {
	  obj[value.id] = value;
	  return obj;
	}, {})
}