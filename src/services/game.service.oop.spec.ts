import { describe, it, expect } from 'vitest';
import { Game } from './game.service.oop';
import { testCases } from './game.service.tests.helpers';

describe('Game service', () => {

  testCases.forEach(({ player1, player2, result }) => {
    it(
      `player1 choice: '${player1}' and player2 choice: '${player2}' should result as ${result}`
    ),
      () => {
        const game = new Game(player1, player2);        
        const gameResult = game.pickAWinner()
        expect(gameResult).toBe(result);
      };
  });

});
