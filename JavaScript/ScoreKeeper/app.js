const p1 = {
    score: 0,
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Score')
}

const resetBtn = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#playto');

let winningScore = 5;
let isGameOver = false;

winScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}
