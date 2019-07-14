const game_area = document.querySelector('.game-area');
const button = document.querySelector('button');
const message = document.querySelector('.message');

let game_play = false;
let score = 0;

button.addEventListener('click', playGame);

function playGame() {
    if (!game_play) {
        game_play = true;
        score = 0;
        game_area.innerHTML = '';
        message.innerHTML = 'Guess the combo';
        button.innerHTML = 'Check Combo';
        build(6);
        
    } else {
        score++;
        message.innerHTML = `Guesses ${score}`;

        const numbers = document.querySelectorAll('.number');

        let win_condition = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                win_condition++;
            } else {
                let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";
            }
            if (win_condition == numbers.length) {
                gameEnd();
            }
        }
    }
}

function gameEnd() {
    message.innerHTML = `You solved the combo in ${score} guesses`;
    game_play = false;
    button.innerHTML = "Restart Game";
}


function build(num) {
    for (let i = 0; i < num; i++) {
        let element = document.createElement('input');
        element.setAttribute('type', 'number');
        element.max = 9;
        element.min = 0;
        element.order = 0;
        element.size = 1;
        element.style.width = '50px';
        element.classList.add('number')
        element.correct = Math.floor(Math.random() * 10);
        element.value = 0;
        game_area.appendChild(element);
    }

}
