import { describe, it, expect } from 'vitest';
import { drawAChoice, pickAWinner } from './game.service';
import { testCases } from './game.service.tests.helpers';

describe('Game service', () => {
  testCases.forEach(({ player1, player2, result }) => {
    it(
      `player1 choice: '${player1}' and player2 choice: '${player2}' should result as ${result}`
    ),
      () => {
        expect(pickAWinner({ player1, player2 })).toBe(result);
      };
  });
});
