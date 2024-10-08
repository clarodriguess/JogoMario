
const mario = document.querySelector(".mario-game")
const pipe = document.querySelector(".pipe-game")

const jump = () => {
    mario.classList.add ("jump-mario");

    setTimeout ( () => {
        mario.classList.remove("jump-mario");
    }, 500);
};



const loopGame = setInterval(() => { 

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px","");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imagens/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginleft = "45px";

    /*let gameOver = document.querySelector("gameover")
    gameOve.innerHTML = ("GAME OVER")*/

    clearInterval(loopGame);
    }
}, 10);

document.addEventListener("keydown", jump);