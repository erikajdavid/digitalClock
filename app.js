//function to set up seconds
//seconds
    //00 -> 59
        //after 59, go back to 00, but add increment to min

let zero = "0";

const secondsEl = document.querySelector('.seconds');

let secondsGoingBy = zero + zero;

function startSeconds() {
    secondsGoingBy++;
    
    if (secondsGoingBy <=9) {
        //this ensures 0 is in front of numbers 0-9
        secondsEl.textContent = zero + secondsGoingBy;
    } else {
        //this is for numbers 11-59
        secondsEl.textContent = secondsGoingBy;
    }
    //change active numbers to red
    secondsEl.style.color = "red";
    
    if (secondsGoingBy === 60) {
        //add one increment to minute
        //print to display
        startMinutes();
        //reset to 00
        minutesGoingBy = zero + zero;
        //print to display
        minutesEl.textContent = zero + zero;
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

const minutesEl = document.querySelector('.minutes');

let minutesGoingBy = zero + zero;

function startMinutes() {
    minutesGoingBy++;

    if (minutesGoingBy <= 9) {
        minutesEl.textContent = zero + minutesGoingBy;
    } else {
        minutesEl.textContent = minutesGoingBy;
    }

    minutesEl.style.color = "red"

    if (minutesGoingBy === 60) {
        startHours();
        minutesEl.textContent = zero + zero;
        minutesGoingBy = zero + zero;
    }
}

//function to set up hours
//hours
    //00 -> 23
        //after 23:59:59, go back to 00:00:00

const hoursEl = document.querySelector('.hours')        

let hoursGoingBy = zero + zero;
        
function startHours() {
    hoursGoingBy++;

    if (hoursGoingBy <= 9) {
        hoursEl.textContent = "0" + hoursGoingBy;
    } else {
        hoursEl.textContent = hoursGoingBy;
    }

    hoursEl.style.color = "red";

    if (hoursGoingBy === 24) {
        hoursEl.textContent = zero + zero;
        hoursGoingBy = zero + zero;
    }
}
    


