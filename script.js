// script.js
document.getElementById("calculateBtn").addEventListener("click", function () {
  const players = parseInt(document.getElementById("players").value);
  const boards = parseInt(document.getElementById("boards").value);
  const gameLength = parseInt(document.getElementById("gameLength").value);
  const startTime = document.getElementById("startTime").value;

  // Calculate total matches (round-robin formula)
  const totalMatches = (players * (players - 1)) / 2;

  // Calculate total time required (in minutes)
  const totalGameTime = Math.ceil(totalMatches / boards) * gameLength;

  // Convert total time to hours and minutes
  const hours = Math.floor(totalGameTime / 60);
  const minutes = totalGameTime % 60;

  // Display results
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Total matches to play: <strong>${totalMatches}</strong></p>
    <p>Total time required: <strong>${hours} hour(s) and ${minutes} minute(s)</strong></p>
    <p>Starting at ${startTime}, you would finish around <strong>${calculateEndTime(startTime, totalGameTime)}</strong>.</p>
  `;
});

function calculateEndTime(startTime, totalGameTime) {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const endMinutes = startHour * 60 + startMinute + totalGameTime;
  const endHour = Math.floor(endMinutes / 60) % 24;
  const endMinute = endMinutes % 60;
  return `${endHour.toString().padStart(2, "0")}:${endMinute.toString().padStart(2, "0")}`;
}
