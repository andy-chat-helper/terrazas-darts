// script.js
document.getElementById('calculateBtn').addEventListener('click', () => {
  const players = parseInt(document.getElementById('players').value);
  const boards = parseInt(document.getElementById('boards').value);
  const baseGameLength = parseInt(document.getElementById('gameLength').value);
  const startTime = document.getElementById('startTime').value;
  const gameType = document.querySelector('input[name="gameType"]:checked').value;
  const matchFormat = document.querySelector('input[name="matchFormat"]:checked').value;

  // Calculate game length based on game type
  const gameLength = gameType === '501' ? baseGameLength * (501 / 301) : baseGameLength;

  // Adjust for match format
  const totalGameLength = matchFormat === '3' ? gameLength * 2.5 : gameLength;

  // Calculate total time needed
  const totalTime = (players / boards) * totalGameLength;

  // Calculate end time
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const endMinutes = startHour * 60 + startMinute + totalTime;
  const endHour = Math.floor(endMinutes / 60) % 24;
  const endMinute = Math.floor(endMinutes % 60);

  // Format end time
  const formattedEndTime = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;

  // Display result
  document.getElementById('result').textContent = `Total time needed: ${Math.ceil(totalTime)} minutes. End time: ${formattedEndTime}.`;
});
