import { gameResults } from "./game.service.consts";
import type { Choice, GameResults } from "./game.service.types";

export type TestCase = {
    player1: Choice;
    player2: Choice;
    result: GameResults;
  };
  
  export const testCases: TestCase[] = [
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
  