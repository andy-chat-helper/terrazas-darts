/**
 * Calculates the necessary number of games to play for a Round Robin based on number of players and match format (Best of 1/Best of 3
 * @param numberPlayers number, number of players, should be minimum 3 (no checks for it atm, future feature?)
 * @param matchFormat number, either 1 (Best of 1 format) or 3 (Best of 3 format)
 */
export default function calcNumberGames(numberPlayers, matchFormat) {
    const totalPlayerCombinations = (numberPlayers * (numberPlayers - 1)) / 2;
    return totalPlayerCombinations * matchFormat;
}