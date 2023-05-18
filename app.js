

//base
//00:00:00
//hr/min/sec

//function to set up seconds
//seconds
    //00 -> 59
        //after 59, go back to 00, but add increment to min

const secondsEl = document.querySelector('.seconds');

let secondsGoingBy = 00;

function startSeconds() {
    secondsGoingBy++;
    secondsEl.textContent = secondsGoingBy;
    if (secondsGoingBy === 59) {
        secondsGoingBy === 00;
    }
}

let secondsInterval = null;
function secondsSpeed() {
    secondsInterval = setInterval(startSeconds, 1000);
}
secondsSpeed();

//function to set up minutes
//minutes
    //00 -> 59
        //after 59, go back to 00, but add increase to hour

//function to set up hours
//hours
    //00 -> 23
        //after 23:59:59, go back to 00:00:00

//AM 00:00:00 to 11:59:59
//PM 12:00:00 to 23:59:59 

//function to restart/reset


//questions?

    


