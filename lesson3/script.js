"use strict";
let money, time;

function start () {
	money = +window.prompt("Ваш бюджет на месяц?", '60000');
	time = window.prompt('Введите дату в формате YYYY-MM-DD', '2020-01-19');

	while (isNaN(money) || money == "" || money == null){
		money = +window.prompt("Ваш бюджет на месяц?", '60000');
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};
function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses() {
	for (let i=0; i<3; i++) {
		let c = window.prompt("Необязательная статья расходов в месяце?", 'Бигуди'),
			d = +window.prompt("Во сколько обойдется?", '500');
	
		if ((typeof(c))=== 'string' && (typeof(c)) != null && (typeof(d)) != null
		&& c != '' && d != '' && c.length < 20) {
			window.console.log("Done");
			appData.optionalExpenses[c] = d;
		} else {
			window.alert('Упс! Вы ввели что-то неверно.');
			i--;
		}
	}
}

chooseOptExpenses();

function detectDayBudget() {
appData.moneyPerDay = (appData.budget / 30).toFixed();
}
detectDayBudget();

window.alert('Ежедневный бюджет: ' + appData.moneyPerDay);

/* Распределение уровня жизни в зависимости от доходов. Цифры по результатам
исследований на конец 2019 года. */

function detectLevel() {
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
}
detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +window.prompt("Какова сумма накоплений?"),
			percent = +window.prompt("Под какой процент?");

		appData.monthTncome = save/100/12*percent;
		window.alert("Доход в месяц с Вашего депозита: " + appData.monthTncome);
	}
}
checkSavings();