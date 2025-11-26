
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
            userAnswer = prompt(`Вычтите ${a} и ${b}`);
            result = a - b;
            break;

        case '*':
            userAnswer = prompt(`Умножьте ${a} и ${b}`);
            result = a * b;
            break;

        case '/':
            userAnswer = prompt(`Разделите ${a} и ${b} и округлите до двух знаков после запятой`);
            result = a / b;
            break;
    }

    
    if (userAnswer === null) {
        alert('Игра прервана');
        return;
    }

    userAnswer = parseFloat(userAnswer); 
    userAnswer = parseFloat(userAnswer.toFixed(2));
    result = parseFloat(result.toFixed(2));

    if (userAnswer === result) {
        alert('Это верный ответ');
    } else {
        alert(`Не верно! Правильный ответ ${result}`);
    }
}
// Задание 3 переверни текст 
function reverseString() {
    let text = prompt('Введите ваш текст');
    alert(text === null ? 'Вы отменили ввод' : text.split('').reverse().join(''));
}

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["Красный", "Синий", "Зеленый"],
        correctAnswer: 2,
        explanation: "Синий - потому что рассеяние Рэлея делает небо синим!"
    },
    {
        question: "Сколько дней в неделе?",
        options: ["Шесть", "Семь", "Восемь"],
        correctAnswer: 2,
        explanation: "7 дней - эта система идет из Древнего Вавилона!"
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["Четыре", "Пять", "Шесть"],
        correctAnswer: 2,
        explanation: "5 пальцев - большой, указательный, средний, безымянный, мизинец!"
    }
];


// Задание 4 Викторниа
function startQuiz() {
    let score = 0;

    for(let i = 0; i < quiz.length; i++) {
        const question = quiz[i];

       
        let optionsText = '';
        for(let j = 0; j < question.options.length; j++) {
            optionsText += `${j + 1}. ${question.options[j]}\n`;
        }

        
        const answer = prompt(
            `Вопрос ${i + 1}/${quiz.length}:\n${question.question}\n\n${optionsText}\nВведите номер ответа:`
        );

        if (answer === null) {
            alert('Викторина прервана');
            return;
        }

        const userAnswer = parseInt(answer);

        
        if (userAnswer === question.correctAnswer) {
            score++;
            alert('✅ Правильно!');
        } else {
             alert(`❌ Неправильно! Правильный ответ: ${question.correctAnswer}`)
        }
    }

        alert(`🎉 Викторина завершена!\nПравильных ответов: ${score} из ${quiz.length}`);
    }

    // Задание 5
const choices = ['Камень', 'Ножницы', 'Бумага'];
const validChoices = ['камень', 'ножницы', 'бумага'];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex].toLowerCase(); 
}

function getUserChoice() {
    let answer;
    let isValid = false;

    while (!isValid) {
        const promptAnswer = prompt('Выберите: Камень, Ножницы или Бумага');
        if (promptAnswer === null) {
            return null; 
        }
        answer = promptAnswer.toLowerCase();
        if (validChoices.includes(answer)) {
            isValid = true; 
        } else {
            alert('Неверный ответ! Пожалуйста, введите "камень", "ножницы" или "бумага".');
        }
    }
    
    return answer; 
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }

    const winConditions = {
        'камень': 'ножницы',
        'ножницы': 'бумага', 
        'бумага': 'камень'
    };

    if (winConditions[userChoice] === computerChoice) {
        return 'user';
    } else {
        return 'computer';
    }
}

function rockPaperScissors() {
    const userChoice = getUserChoice();
    
    
    if (userChoice === null) {
        alert('Игра отменена');
        return;
    }
    
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === 'draw') {
        alert(`Ничья! Оба выбрали ${userChoice}`);
    } else if (result === 'user') {
        alert(`Вы выиграли! ${userChoice} побеждает ${computerChoice}`);
    } else {
        alert(`Компьютер выиграл! ${computerChoice} побеждает ${userChoice}`);
    }
}
const colorButton = document.getElementById('colorButton');
    const gameSection = document.querySelector('.mini-game');
    function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

   function getRandomHexColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        const randomIndex = getRandomNumber(0, 15);
        color += hexChars[randomIndex];
        
    }

        return color;

   } 

   function showColorInfo(hexColor) {
        alert('Сгенерирован цвет: ' + hexColor);
   }

   function handleButtonClick() {
    const randomColor = getRandomHexColor();

    showColorInfo(randomColor);

    gameSection.style.backgroundColor = randomColor;

    alert('Цвет фона изменен на: ' + randomColor);
   }

   colorButton.addEventListener('click', handleButtonClick);