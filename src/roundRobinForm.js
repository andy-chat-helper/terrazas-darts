// roundRobinForm.js
import calculateLength from "./calcTournamentLength.js";
import convertLengthEstimate from "./convertLengthEstimate.js";
import calcNumberGames from "./calcNumberGames.js";
import calcEndTime from "./calcEndTime.js";

document.getElementById('calculateBtn').addEventListener('click', () => {
  const players = parseInt(document.getElementById('players').value);
  const boards = parseInt(document.getElementById('boards').value);
  const baseGameLength = parseInt(document.getElementById('gameLength').value);
  const startTime = document.getElementById('startTime').value;
  const gameType = document.querySelector('input[name="gameType"]:checked').value;
  const matchFormat = document.querySelector('input[name="matchFormat"]:checked').value;

  // Calculate game length based on game type
  let gameLength301;
  let gameLength501;

  if (gameType == '301') {
    gameLength301 = baseGameLength;
    gameLength501 = convertLengthEstimate(baseGameLength, gameType);
  }
  else {
    gameLength501 = baseGameLength;
    gameLength301 = convertLengthEstimate(baseGameLength, gameType);
  }
  console.log('Game Length 301: ', gameLength301);
  console.log('Game Length 501: ', gameLength501);
  // Calculate number of necessary matches based on match format
  let numberOfGames;
  if (players < 3) {
    alert('Not enough players for a Round Robin!')
    return;
  }
  else {
    numberOfGames = calcNumberGames(players, matchFormat)
  }
  console.log('Calculated number of games: ', numberOfGames);

  // Calculate length in mins
  let lengthInMins;
  if (gameType == '301') {
    lengthInMins = calculateLength(numberOfGames, boards, gameLength301)
  }
  else {
    lengthInMins = calculateLength(numberOfGames, boards, gameLength501)
  }
  console.log('Calculated Length: ', lengthInMins);

  // Convert to end time
  let formattedEndTime = calcEndTime(startTime, lengthInMins)


  console.log('Calculated End Time: ', formattedEndTime);
  // Display result
  document.getElementById('result').textContent = `Total time needed: ${lengthInMins} minutes. End time: ${formattedEndTime}.`;
});
