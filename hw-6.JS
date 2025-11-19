// Задание 1
//const str = 'js';
//const upperStr = str.toUpperCase();
//console.log(upperStr);

// Задание 2
//function filterByStartingString(array, searchString) {
    //const lowerSearchString = searchString.toLowerCase();
    //return array.filter(item => item.toLowerCase().startsWith(lowerSearchString));
//}
//const stringsArray = ["Apple", "banana", "Apricot", "blueberry"];
//const search = "a";
//const result = filterByStartingString(stringsArray, search);
//console.log(result); 

// Задание 3
//console.log(Math.floor(32.58884));
//console.log(Math.ceil(32.58884));
//console.log(Math.round(32.58884));

// Задание 4
//const namber = [ 52, 53, 49, 77, 21, 32 ];
//const min = Math.min(...namber);
//const max = Math.max(...namber);
//console.log(`Минимальное значение: ${min}`);
//console.log(`Максимальное значение: ${max}`);

// Задание 5
//function logRandomNamber1To10(){
//const randomNumber = Math.floor(Math.random() * 10) + 1;
//console.log(`Случайное число: ${randomNumber }`);
//}
//logRandomNamber1To10();

// Задание 6
//function generateRandomArray(maxNumber) {
    //const length = Math.floor(maxNumber/ 2);
    //const result = [];

    // Заполняем массив случайными числами
    //for (let i = 0; i < length; i++) {
        //result.push(Math.floor(Math.random() * maxNumber));
    //}

    //return result;
//}
//const randomArray = generateRandomArray(10);
//console.log(randomArray);

// Задание 7
//function twoIntegers(min, max) {
    //min = Math.floor(min);
    //max = Math.floor(max);
    //const randomNumber  = Math.floor(Math.random() * (max - min + 1))+ min;
    //console.log(`Случайное число от 1 до 10: ${randomNumber}`);
    //return randomNumber;
//}
//twoIntegers(1, 10);//

// Задание 8
//let currentDate = new Date();
//console.log(currentDate);

// Задание 9
//let currentDate1 = new Date();
//currentDate.setDate(currentDate.getDate() + 73);
//console.log(`Дата через 73 дня: ${currentDate.toLocaleDateString()}`);

// Задание 10
//function formatRussianDate(dateObject) {
//const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
//const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда','четверг', 'пятница', 'суббота'];
//const dayOfMonth = dateObject.getDate();
//const monthName = months[dateObject.getMonth()]; 
//const year = dateObject.getFullYear();
//const weekdayName = weekdays[dateObject.getDay()];
//const hours = dateObject.getHours();
//const minutes = dateObject.getMinutes();
//const seconds = dateObject.getSeconds();
//const addLeadingZero = (num) => num < 10 ? `0${num}` : num;
//const dateLine = `Дата: ${dayOfMonth} ${monthName} ${year} — это ${weekdayName}.`;
//const timeLine = `Время: ${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
//return `${dateLine}\n${timeLine}`;
////}
//const now = new Date();
//const formattedString = formatRussianDate(now);

//console.log(formattedString);
