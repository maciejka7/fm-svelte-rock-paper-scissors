import type { Choice } from './game.service.types';

export const choice: Choice[] = ['s', 'r', 'p'];

export const gameResults = {
  draw: 'draw',
  playerOneWin: 'playerOneWin',
  playerTwoWin: 'playerTwoWin',
} as const;
