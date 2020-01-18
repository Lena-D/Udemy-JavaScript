let money = window.prompt("Ваш бюджет на месяц?", ''),
	time = window.prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = window.prompt("Обязательная статья расходов в месяце?", ''),
	a2 = window.prompt("Во сколько обойдется?", ''),
	a3 = window.prompt("Обязательная статья расходов в месяце?", ''),
	a4 = window.prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

window.alert(appData.budget / 30);