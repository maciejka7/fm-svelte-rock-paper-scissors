import { choice } from './game.service.consts';
import { gameResults } from './game.service.consts';
import { getRandomNuberBetween } from './game.service.helpers';
import type { GameResults, Choice } from './game.service.types';

export function drawAChoice() {
  return choice[getRandomNuberBetween({ start: 0, end: 2 })];
}

export function pickAWinner({
  player1,
  player2,
}: {
  player1: Choice;
  player2: Choice;
}) {
  return validateResult([player1, player2]);
}

function validateResult(choices: [Choice, Choice]): GameResults {
  const [playerOneChoice, playerTwoChoice] = choices;
  if (playerOneChoice === playerTwoChoice) return gameResults.draw;

  switch (playerOneChoice) {
    case 'p':
      return playerTwoChoice === 'r'
        ? gameResults.playerOneWin
        : gameResults.playerTwoWin;
    case 'r':
      return playerTwoChoice === 's'
        ? gameResults.playerOneWin
        : gameResults.playerTwoWin;
    case 's':
      return playerTwoChoice === 'p'
        ? gameResults.playerOneWin
        : gameResults.playerTwoWin;
    default:
      throw new Error('probably wrong choices!');
  }
}
