//zmienne//
var newGameBtn = document.getElementById('js-newGameButton'),
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    resultFinalElem = document.getElementById('js-resultFinalElement');
    gameWinner = document.getElementById('js-winner');
	pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints'),
    playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult'),
    gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

//listenery//
pickRock.addEventListener('click', function() { playerPick('kamień') });
pickPaper.addEventListener('click', function() { playerPick('papier') });
pickScissors.addEventListener('click', function() { playerPick('nożyce') });
newGameBtn.addEventListener('click', newGame);

//funkcje//
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        resultFinalElem.style.display = 'none';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';      
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
        resultFinalElem.style.display = 'none';
  }
}

function newGame() {
  player.name = prompt('Graczu, wpisz swoje imię', 'Twoje imię graczu');
  if (player.name) {
    player.score = computer.score = 0;
    setGamePoints();
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
  }
}

function getComputerPick() {
    var possiblePicks = ['kamień', 'papier', 'nożyce'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone';
        playerResultElem.innerHTML = "Remis!";
        computerResultElem.innerHTML = "Remis!";
    } else if (
        (computerPick == 'kamień' &&  playerPick == 'nożyce') ||
        (computerPick == 'nożyce' &&  playerPick == 'papier') ||
        (computerPick == 'papier' &&  playerPick == 'kamień') ) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        computerResultElem.innerHTML = "Nie tym razem!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        playerResultElem.innerHTML = "Niestety nie!";
        computer.score++;
    }
    setGamePoints();
    checkPoints();
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function checkPoints() {
	if (player.score >= 10) {
		gameState = 'ended';
    	setGameElements();
        resultFinalElem.style.display = 'block';
        gameWinner.innerText = 'Wygrałeś!!';
	}
	else if (computer.score >= 10) {
		gameState = 'ended';
    	setGameElements();
        resultFinalElem.style.display = 'block';
        gameWinner.innerText = 'Przegrałeś!!';
	}
}

setGameElements();