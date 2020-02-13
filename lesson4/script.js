"use strict";
let money, time;

function start () {
	money = +window.prompt("Ваш бюджет на месяц?", '120000');
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
	savings: true,
	chooseExpenses: function() {
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
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		window.alert('Ежедневный бюджет: ' + appData.moneyPerDay);
	},
	detectLevel: function() {
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
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +window.prompt("Какова сумма накоплений?"),
				percent = +window.prompt("Под какой процент?");
	
			appData.monthIncome = save/100/12*percent;
			window.alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
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
	},
	chooseIncome: function() {
		for (let i=0; i<1; i++) {
			let items = window.prompt('Что принесет дополнительный доход? (Перечислите через запятую.)');
			
			if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
				window.console.log("Done");
				appData.income = items.split(', ');
			} else{
				window.alert('Упс! Вы ввели что-то неверно.');
				i--;
			}
		}
		for (let j=0; j<1; j++) {
			let item = window.prompt('Может что-то еще?');

			if ((typeof(item)) === 'string' && (typeof(item)) != null && item != '') {
			appData.income.push(item);
			}
		}
		appData.income.sort();
	}
};

appData.chooseExpenses(); // Проверка обязательных расходов.
// appData.detectDayBudget(); // Расчет ежедневного бюджета.
// appData.detectLevel(); // Определение уровня достатка.
// appData.checkSavings(); // Доход с накоплений.
// appData.chooseOptExpenses(); // Дополнительные статьи расходов.
appData.chooseIncome(); // Дополнительные статьи доходов.

window.console.log('Способы доп. заработка: ');
appData.income.forEach(function(item, i) {
	window.console.log(++i + ': ' + item);
});

window.console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
	window.console.log(key);
}