/**
 * Takes the user-entered estimate and game type (301 or 501) in minutes and calculates the corresponding time for the other type.
 * @param estimate number, time estimate in minutes
 * @param gameType string, game type (either 301 or 501)
 * @return estimated number of minutes (always rounded up) for the other mode
 */
export default function convertLengthEstimate(estimate, gameType) {
    if (gameType === '301') {
        return Math.ceil(estimate * (501/301));
    }
    else {
        return Math.ceil(estimate * (301/501));
    }
}