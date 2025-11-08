// Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if(arr[i] === 10) {
        break;
    }
}

// Задание 2
const age = [1, 5, 4, 10, 0, 3]
const index = age.indexOf(4);
console.log(index);

// Задание 3
const number = [1, 3, 5, 10, 20]
const joinedNumber = number.join(' ');
console.log(joinedNumber);

// Задание 4
const size = 3;
const multiDimensionalArray = []

for(let i = 0; i < size; i++) {
    const row = [];
    for(let j = 0; j < size; j++) {
        row.push(1);
    }
    multiDimensionalArray.push(row);
}
console.log(multiDimensionalArray);

// Задание 5
let recount = [1, 1, 1];
recount.push(2,2,2);
console.log(recount);

// Задание 6
let numbers = [9, 8, 7, 'a', 6, 5]
numbers.sort();
numbers.pop();
console.log(numbers);

// Задание 7
let guess = [9, 8, 7, 6, 5]
let gyessNumber = prompt('Угадай число');
let transform = parseInt(gyessNumber, 10);
if (guess.includes(transform)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
const letters = ['abcdef'];
const reversedString = letters[0].split('').reverse().join('');
console.log(reversedString);

// Задание 9
const whole = [[1, 2, 3],[4, 5, 6]];
const wholeOne = whole.flat();
console.log(wholeOne);

// Задание 10
const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < range.length - 1; i++) {
    const rangeElement = range[i];
    const nextElement = range[i + 1];
    const sum = rangeElement + nextElement;
    console.log(sum);
}

// Задание 11
const getSquaresArrow = (originalArray) => {
    return originalArray.map(numb => numb * numb);
};
const numb = [1, 2, 3];
const result = getSquaresArrow(numb);
console.log(result);

// Задание 12
const getWordLengthArrow = (originalStrings) => {
    return originalStrings.map(word => word.length);
};
const word = ["максимально","функция","непонятна"];
const length = getWordLengthArrow(word);
console.log(length);

// Задание 13
const getNegativUnitArrow = (originalArray) => {
    return originalArray.filter(unit => unit < 0);
};
const unit =[1,-2, 3, -4, 5];
const solution =getNegativUnitArrow(unit);
console.log(solution);

// Задание 14
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+ 1)) + min;
};
const originalArray = [];
for (let i = 0; i < 10; i++){
    originalArray.push(getRandomInt(0, 10));
}
const evenValueArray = originalArray.filter(value => value % 2 === 0);
console.log("Исходный массив:", originalArray);
console.log("Массив с четными значениями (стрелочная функция):", evenValueArray);

// Задание 15
const getRanInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+ 1)) + min;
};
const numbersArray = [];
const arraysize = 6;
const MIN_VALUE = 1;
const MAX_VALUE = 10;
for (let i = 0; i < arraySize; i++) {
    numbersArray.push(getRanInt(MIN_VALUE,MAX_VALUE ));
}
const sum = numbersArray.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
const averege = sum / numbersArray.length;

console.log('Сгенерированный массив:',numbersArray);
console.log('Сумма элементов:', sum);
console.log('Количество элементов:',numbersArray.length);
console.log('Среднее арифметическое:',averege);
