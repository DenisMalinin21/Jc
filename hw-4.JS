// Задание 1
const min = (a,b) => (a < b) ? a : b;

console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2
const isEven = (n) => (n % 2 === 0) ? 'Число нечетное' : 'Число четное';

console.log(isEven(5));
console.log(isEven(4));    

// Задание 3
function squaer(namber) {
    console.log(namber ** 2);
}
squaer(7);

const sq = (n) => n ** 2;

console.log(sq(14));

//Задание 4
function age() {
    let age = prompt ('Привет, сколько вам лет?');
    if(age < 0) {
        alert ('Вы ввел не правильное значение');
    } else if (age >= 0 && age <= 12) {
        alert ('Привет, друг!');
    } else if (age >= 13) {
        alert ('Добро пожаловать!');
    }

}
age();

// Задание 5  
function calc(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b
    }
}
console.log(calc('21' , 2));

// Задание 6
function getNumber() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 2}`;
    }
}
console.log(getNumber(15));

// Задание 7
function getArea () {
    return Math.PI * this.radius ** 2;
}

function getPerimetr () {
    return 2 * Math.PI * this.radius;
}    


const circle1 = {
    radius: 10,
    metiodGetArea: getArea,
    metodGetPerimetr: getPerimetr,
}
const circle2 = {
    radius: 20,
    metiodGetArea: getArea,
    metodGetPerimetr: getPerimetr,
}
console.log(circle1.metiodGetArea());
console.log(circle2.metiodGetArea());