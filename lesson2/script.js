"use strict";
let money = +window.prompt("Ваш бюджет на месяц?", '60000'),
	time = window.prompt('Введите дату в формате YYYY-MM-DD', '2020-01-19');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

/*let num = 0;
do {
	let a = window.prompt("Обязательная статья расходов в месяце?", 'Стол'),
		b = +window.prompt("Во сколько обойдется?", '4500');
	if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
	&& a != '' && b != '' && a.length < 20) {
		window.console.log("Done");
		appData.expenses[a] = b;
		num++;
	} else {
		window.alert('Упс! Вы ввели что-то неверно.');
	}
}
while (num < 2);*/

/*let num = 0;
while (num < 2){
	let a = window.prompt("Обязательная статья расходов в месяце?", 'Стол'),
		b = +window.prompt("Во сколько обойдется?", '4500');
	if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
	&& a != '' && b != '' && a.length < 20) {
		window.console.log("Done");
		appData.expenses[a] = b;
		num++;
	} else {
		window.alert('Упс! Вы ввели что-то неверно.');
	}
}*/

for (let i=0; i<2; i++) {
	let a = window.prompt("Обязательная статья расходов в месяце?", 'Стол'),
		b = +window.prompt("Во сколько обойдется?", '4500');

	if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
	&& a != '' && b != '' && a.length < 20) {
		window.console.log("Done");
		appData.expenses[a] = b;
	} else {
		window.alert('Упс! Вы ввели что-то неверно.');
		i--;
	}
}

appData.moneyPerDay = appData.budget / 30;

window.alert('Ежедневный бюджет: ' + appData.moneyPerDay);

/* Распределение уровня жизни в зависимости от доходов. Цифры по результатам
исследований на конец 2019 года. */
if (appData.moneyPerDay <= 667) {
	window.console.log("Критически минимальный уровень достатка.");
} else if (appData.moneyPerDay > 667 && appData.moneyPerDay < 4000){
	window.console.log("Низкий уровень достатка.");
} else if (appData.moneyPerDay >= 4000 && appData.moneyPerDay < 6667){
	window.console.log("Средний уровень достатка.");
} else if (appData.moneyPerDay >= 6667) {
	window.console.log("Высокий уровень достатка.");
} else {
	window.console.log("Что-то пошло не так.");
}
