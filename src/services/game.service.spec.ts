import { describe, it, expect } from 'vitest';
import type { Choice, GameResults } from './game.service.types';
import { gameResults } from './game.service.consts';
import { drawAChoice, pickAWinner } from './game.service';

type TestCase = {
  player1: Choice;
  player2: Choice;
  result: GameResults;
};

const testCases: TestCase[] = [
  { player1: 'r', player2: 'r', result: gameResults.draw },
  { player1: 'r', player2: 's', result: gameResults.playerOneWin },
  { player1: 'r', player2: 'p', result: gameResults.playerTwoWin },

  { player1: 'p', player2: 'p', result: gameResults.draw },
  { player1: 'p', player2: 'r', result: gameResults.playerOneWin },
  { player1: 'p', player2: 's', result: gameResults.playerTwoWin },

  { player1: 's', player2: 's', result: gameResults.draw },
  { player1: 's', player2: 'p', result: gameResults.playerOneWin },
  { player1: 's', player2: 'r', result: gameResults.playerTwoWin },
];

describe('Game service', () => {
  testCases.forEach(({ player1, player2, result }) => {
    it(
      `player1 choice: '${player1}' and player2 choice: '${player2}' should result as ${result}`
    ),
      () => {
        expect(pickAWinner({ player1, player2 })).toBe(result);
      };
  });

  it('shold two random choices resolve to good result', () => {
    expect(pickAWinner({ player1: drawAChoice(), player2: drawAChoice() }));
  });
});
