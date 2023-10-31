const readlineSync = require('readline-sync');
const userName = readlineSync.question('Введите ваше имя: '); 
console.log(`Привет, ${userName}! Добро пожаловать в мир Node.js и readline-sync.`);
// -----------------------------------------
const incomeTaxCalculator = (income) => {
const a = 0.15
return income * a
}

const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32
}

const calculateDiscount = (price, discountPercentage) => {
    const a = price * discountPercentage / 100
    const b = price - a
    return b
}

const calculateRectangleProperties = (width, height) => {
    const square = width * height
    const perimeter = (width * 2) + (height * 2)
    return square + ' ' + perimeter
}

const calculateDistance = (x1, y1, x2, y2) => {
    Distance = ((x2 - x1)**2 + (y2 - y1)**2)**0.5
    return Distance
}

const calculateTime = (distance, speed) => {
    time_in_hours = distance / speed 
    hours = Math.round((time_in_hours))
    minutes = Math.round(((time_in_hours * 60) % 60)  )
    return hours+('ч') +' '+minutes+('м')
}

const wordCount = (sent) => {
    return sent.split(" ").length
}

const calculateBalance = (incomes, expenses) => {
    const balance = incomes - expenses
    return balance
}

const calculateAverageGrade = (grades) => {
    const gradesAr = grades.split(" ");
    const gradesSum = 0;

    for(let i = 0; i < gradesAr.length; i++) {
        gradesSum += parseInt(gradesAr[i]);
    };

    return gradesSum / gradesAr.length
}


const generateRandomEquation = () => {
    let a = Math.round((Math.random() * 11));
    let b = Math.round((Math.random() * 11));
    let c = Math.round((Math.random() * 11));
    if(Math.random() >= 0.5 ){
        a = -a;
    };
    if(Math.random() >= 0.5 ){
        b = -b;
    };
    if(Math.random() >= 0.5 ){
        c = -c;
    };
    return `${a}x^2 + ${b}x = ${c}`
}

const calculateEmployeeBonus = (salary, performanceRating) => {
    if (performanceRating => 8){
      salary = salary * 0.20;
}else{
  salary = salary * 0.10;  
}

return salary;
}

const reverseWord = (str,exc) => {
    let result = '';
    let i = str.length;
    while (i > 0){
    result = result + str[i-1];
    i = i - 1;
    }
    return result;
    };
    
    const reverseStringWithException = (str,exc) =>{
    return exc + ' ' + reverseWord(str.substring(0, str.indexOf(' ')));
    }