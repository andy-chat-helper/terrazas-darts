/**
 * Based on starting time and calculated tournament length in minutes, calculates end time
 * @param startTime string, start time in format HH:mm (24h)
 * @param lengthInMins number, tournament length in minutes
 * @return formatted string of end time in format HH:mm (24h)
 */
export default function calcEndTime(startTime, lengthInMins) {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const endMinutes = startHour * 60 + startMinute + lengthInMins;
    const endHour = Math.floor(endMinutes / 60) % 24;
    const endMinute = Math.floor(endMinutes % 60);
    return `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;
}