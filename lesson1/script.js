  "use strict";
// Набор переменных.
var money,
    date,
    constantSpending,
    fixedCosts,
    dailyExpenses,
    correctDate,
    yearReg,
    monthReg,
    dayReg,
    reg,
    sum;

// Объект, в который будут помещаться введенные пользователем данные.
var appData = {
    budget: 0,
    timeData: '',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// Функция для проверки правильности внесения данных по общему бюджету.
function checkMoney() {
    money = +window.prompt('Ваш бюджет на месяц?', '10000');
    if (money > 0) {
        appData.budget = money;
    } else {
        window.alert('Вы ввели неверные данные.');
        checkMoney();
    }
}

// Функция для проверки правильности внесения суммы обязательных расходов.
function checkCosts() {
    constantSpending = window.prompt('Введите обязательную статью расходов в этом месяце.', 'Сосиски');
    fixedCosts = +window.prompt('Во сколько обойдется?', '250');
    if (appData.budget > fixedCosts && fixedCosts > 0) {
        appData.expenses[constantSpending] = fixedCosts;
    } else if (fixedCosts > 0 && fixedCosts > appData.budget) {
        window.alert('Такие траты Вам не по карману!');
        checkCosts();
    } else {
        window.alert('Вы ввели неверные данные.');
        checkCosts();
    }
}

// Функция для проверки формата даты. (Не пропускает, если год ниже 2020.)
function checkDate() {
    date = window.prompt('Введите дату в формате YYYY-MM-DD', '2020-01-10');
    correctDate = false;
    yearReg = '(202[0-9]|203[0-9]|204[0-9]|205[0-9]|206[0-9]|207[0-9]|208[0-9])';    // Числа с 2020 по 2089.
    monthReg = '(0[1-9]|1[0-2])';               ///< Числа с 01 по 12.
    dayReg = '(0[1-9]|1[0-9]|2[0-9]|3[0-1])';   ///< Числа с 01 по 31.
    reg = new RegExp('^' + yearReg + '-' + monthReg + '-' + dayReg + '$', 'g');
    correctDate = reg.test(date);
    if (correctDate === true){
        appData.timeData = date;
    } else {
        window.alert('Вы ввели дату в неправильном формате.');
        checkDate();
    }
}

// Функция рассчета суммы всех обязательных трат.
function sumCosts() {
    sum = 0;
    for (let cost of Object.values(appData.expenses)) {
      sum += cost;
    }
    return sum;
}

checkMoney();

checkDate();

checkCosts();
checkCosts();

sumCosts(appData.expenses);

// Расчет ежедневных расходов с учетом вычета обязательных платежей. (Округление в меньшую сторону.)
dailyExpenses = Math.floor((appData.budget - sum)/30);

window.alert('Ваш бюджет на день : '+ dailyExpenses + ' руб.');

console.log(dailyExpenses);
console.log(appData);
console.log(correctDate);
console.log(sum);