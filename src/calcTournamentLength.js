/**
 * Calculates how long a given number of games take depending on the number of available boards and the average game length.
 * @param numberGames number, how many games will be played
 * @param numberBoards number, how many boards are available
 * @param gameLength number, how long an average game lasts
 * @return tournament length in minutes, rounded up to the full minute
 */
export default function calculateLength(numberGames, numberBoards, gameLength) {
    return Math.ceil(numberGames / numberBoards * gameLength);
};