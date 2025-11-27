// Задание 1
//const people = [
   //{ name: 'Глеб', age: 29 },
   //{ name: 'Анна', age: 17 },
   //{ name: 'Олег', age: 7 },
   //{ name: 'Оксана', age: 47 }
//];
//people.sort((a, b) => {//
    //return a.age - b.age;
//});
//console.log(people);

// Задание 2
//function isPositive(number) {
 //return number > 0;
//}
//function isMale(person) {
 //return person.gender === 'male';
//}
//function filter(arr, testFunc) {
  //const output = [];
  //for (let i = 0; i < arr.length; i++) {
    //if (testFunc(arr[i])){
        //output.push(arr[i]);
    //}
  //}
  //return output;
//}

//console.log(filter([3, -4, 1, 9], isPositive));

//const people1 = [
   //{name: 'Глеб', gender: 'male'},
   //{name: 'Анна', gender: 'female'},
   //{name: 'Олег', gender: 'male'},
   //{name: 'Оксана', gender: 'female'}
//];

//console.log(filter(people1, isMale));

// Задание 3
//function repeatInterval () {
    //const date = new Date();
    //console.log(`Тукущая дата: ${date.toLocaleDateString()}`);
//}

//function startDateLogging() {
    //console.log("Программа запущена. Логирование началось.");
    //const intervalId = setInterval(repeatInterval, 3000);
    //setInterval(() => {
        //clearInterval(intervalId);
        //console.log("30 секунд прошло. Логирование остановленно");
    //}, 30000);
//}
//startDateLogging(); 

// Задание 4
//function delayForSecond(callback) {
    //setTimeout(() => {
        //console.log();
        //callback();
    //}, 1000);

//}

//delayForSecond(function () {
   //console.log('Привет, Глеб!');
//})

// Задание 5
//function delayForSecond(cb) {
    //setTimeout(() => {
        //console.log('Прошла одна секунда');
        //cb();
    //}, 1000)
//}
//function sayHi (name) {
    //console.log(`Привет, ${name}!`); 
//}
//delayForSecond(() => {
    //sayHi('Глеб');
//});