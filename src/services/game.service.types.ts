import type { gameResults } from './game.service.consts';

export type Choice = 's' | 'r' | 'p';

export type GameResults = keyof typeof gameResults;
