const estimationInput301 = document.getElementById("gameLength301solo");
const estimationInput501 = document.getElementById("gameLength501solo");
const estimationInput301Both = document.getElementById("gameLength301Both");
const estimationInput501Both = document.getElementById("gameLength501Both");

/**
 * When called, activates the input for 301 estimates
 */
function activate301() {
    estimationInput301.disabled = false;
    estimationInput501.disabled = true;
    estimationInput301Both.disabled = true;
    estimationInput501Both.disabled = true;
}

/**
 * When called, activates the input for 501 estimates
 */
function activate501() {
    estimationInput301.disabled = true;
    estimationInput501.disabled = false;
    estimationInput301Both.disabled = true;
    estimationInput501Both.disabled = true;
}

/**
 * When called, activates the input for both estimates
 */
function activateBoth() {
    estimationInput301.disabled = true;
    estimationInput501.disabled = true;
    estimationInput301Both.disabled = false;
    estimationInput501Both.disabled = false;
}