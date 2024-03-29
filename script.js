// function play(){
//     hiddenElementId('home-screen')
//     showElementId('playGround')
//     continueGame()
    

//     let home = document.getElementById('home-screen');
//     home.classList.add('hidden')
//     console.log(home.classList.add('hidden'));

//     let playground = document.getElementById('playGround');
//     playground.classList.remove('hidden')
//     console.log(playground.classList.remove('hidden'))
// }

function GameContinue(){
    const alphabet = alphabetString();
    // console.log( 'your random alphabet',alphabet);

    let current = document.getElementById('current-alphabet');
    current.innerText = alphabet.toUpperCase();
    setElementTextColor(alphabet);
}

function handlerTextShow(event){
    const playerPress = event.key;
    if(playerPress === "Escape"){
        GameOver()
    }

    let currentAlphabet = document.getElementById('current-alphabet');
    let expectAlphabet = currentAlphabet.innerText.toLowerCase();
    // console.log(playerPress,expectAlphabet);

    if(playerPress === expectAlphabet){
        console.log('you are get point');
        // update score
        const currentScore = document.getElementById('current-score');
        const currentScoreValue = parseInt(currentScore.innerText);
        let newScore = currentScoreValue + 1;
        currentScore.innerText = newScore;

        // using function
        // getValuebyID('current-score')

        // start new round
        removeElementTextColor(expectAlphabet);
        GameContinue();
    }
    else{
        console.log('you are lost your life');
        const currentLife = document.getElementById('current-life');
        const currentLifeValue = parseInt(currentLife.innerText);
        let newLife = currentLifeValue - 1;
        currentLife.innerText = newLife;

        if(newLife === 0){
            // console.log('game over');
            GameOver()
        }

        // using function
        // getValuebyID2('current-life');
    }
}

document.addEventListener('keyup', handlerTextShow)

function play(){
    // add element class list 
    hiddenElementId('home-screen');
    // shortcut way
    hiddenElementId('ShowScore');
    showElementId('playGround');
    // reset score
    setTextElementValueByID('current-life',5);
    setTextElementValueByID('current-score',0)
    GameContinue();
}

function GameOver(){
    hiddenElementId('playGround');
    showElementId('ShowScore')
    // update finale score
    const lastScore = document.getElementById('current-score');
    let Score = lastScore.innerText;
    setTextElementValueByID('finalScore', Score);

    // remove text color 
    const currentScore = setElementByID("current-alphabet");
    // console.log(currentScore)
    removeElementTextColor(currentScore);

}

// function playAgain(){
//     hiddenElementId('ShowScore');
//     showElementId('playGround');
//     GameContinue()
// }
