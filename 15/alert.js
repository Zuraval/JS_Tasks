"use strict";

// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // В результате будет ошибка, т.к. this - undefined

// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
	calculator.val1 = prompt("Введите первое значение", " ");
	calculator.val2 = prompt("Введите второе значение", " ");
  },
  sum() {
	return +calculator["val1"] + +calculator["val2"];
  },
  mul() {
	return calculator["val1"] * calculator["val2"]
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке

let ladder = {
	step: 0,
	up() {
	  this.step++;
	  return this;
	},
	down() {
	  this.step--;
	  return this;
	},
	showStep: function() {
	  alert( this.step );
	  return this;
	}
  };

ladder.up().up().up().showStep().up().showStep();