import type { Choice } from './game.service.types';

export class Game {
  constructor(public player1: Choice, public player2: Choice) {}
}
