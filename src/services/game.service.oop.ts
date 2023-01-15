import { choice, gameResults } from './game.service.consts';
import { getRandomNuberBetween } from './game.service.helpers';
import type { Choice, GameResults } from './game.service.types';

export class Game {
  constructor(public player1: Choice, public player2: Choice) {}

  public pickAWinner(): GameResults {
    return this.validateResult([this.player1, this.player2]);
  }

  public static drawAChoice(): Choice {
    return choice[getRandomNuberBetween({ start: 0, end: 2 })];
  }

  private validateResult(choices: [Choice, Choice]): GameResults {
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
}
