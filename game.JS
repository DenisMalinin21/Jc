
function guessNumberGameButton() {
    const maxNumber = 100;
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1; 
    let attempts = 0;
    
    while (true) {
        let guess = prompt(`Угадай число от 1 до ${maxNumber} (введите "отмена" для выхода)`);
        
        
        if (guess === null || guess.toLowerCase() === 'отмена') {
            alert('Игра отменена');
            return;
        }
        
       
        guess = Number(guess);
        if (isNaN(guess) || guess < 1 || guess > maxNumber) {
            alert('Пожалуйста, введите число от 1 до 100!');
            continue; 
        }
        
        attempts++;
        
        if (guess === randomNumber) {
            alert(`🎉 Поздравляю! Ты угадал число ${randomNumber} за ${attempts} попыток!`);
            return; 
        } else if (guess > randomNumber) {
            alert('⬇ Меньше! Попробуй ещё раз.');
        } else {
            alert('⬆ Больше! Попробуй ещё раз.');
        }
    }
}

// Задание 2
function simpleArithmetic() {
    const operations = ['+', '-', '/', '*'];
    let operation = operations[Math.floor(Math.random() * operations.length)];
    let a, b, result;
    let userAnswer;

    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;

    switch (operation) {
        case '+':
            userAnswer = prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;

        case '-':
            userAnswer = prompt(`Отнимите ${a} и ${b}`);
            result = a - b;
            break;

        case '*':
            userAnswer = prompt(`Умножьте ${a} и ${b}`);
            result = a * b;
            break;

        case '/':
            userAnswer = prompt(`Разделите ${a} и ${b}`);
            result = a / b;
            break;
    }

    
    if (userAnswer === null) {
        alert('Игра прервана');
        return;
    }

   
    userAnswer = +userAnswer;

    if (userAnswer === result) {
        alert('Это верный ответ');
    } else {
        alert(`Не верно! Правильный ответ ${result}`);
    }
}

function reverseString() {
    let text = prompt('Введите ваш текст');
    alert(text === null ? 'Вы отменили ввод' : text.split('').reverse().join(''));
}