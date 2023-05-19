//base
//00:00:00
//hr/min/sec

//function to set up seconds
//seconds
    //00 -> 59
        //after 59, go back to 00, but add increment to min

const secondsEl = document.querySelector('.seconds');

let secondsGoingBy = "0" + "0";

function startSeconds() {
    secondsGoingBy++;
    
    if (secondsGoingBy <=9) {
        //this ensures 0 is in front of numbers 0-9
        secondsEl.textContent = "0" + secondsGoingBy;
    } else {
        secondsEl.textContent = secondsGoingBy;
    }
    secondsEl.style.color = "red";
    
    if (secondsGoingBy === 60) {
        //add one increment to minute
        //print to display
        startMinutes();
        //reset to 00
        minutesGoingBy = "0" + "0";
        //print to display
        minutesEl.textContent = "0" + "0";
        
        
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

let minutesGoingBy = "0" + "0";

function startMinutes() {
    minutesGoingBy++;

    if (minutesGoingBy <= 9) {
        minutesEl.textContent = "0" + minutesGoingBy;
    } else {
        minutesEl.textContent = minutesGoingBy;
    }

    minutesEl.style.color = "red"

    if (minutesGoingBy === 60) {
        startHours();
        minutesEl.textContent = "0" + "0";
        minutesGoingBy = "0" + "0";
    }
}

//function to set up hours
//hours
    //00 -> 23
        //after 23:59:59, go back to 00:00:00

const hoursEl = document.querySelector('.hours')        

let hoursGoingBy = "0" + "0";
        
function startHours() {
    hoursGoingBy++;

    if (hoursGoingBy <= 9) {
        hoursEl.textContent = "0" + hoursGoingBy;
    } else {
        hoursEl.textContent = hoursGoingBy;
    }

    hoursEl.style.color = "red";

    if (hoursGoingBy === 24) {
        hoursEl.textContent = "0" + "0";
        hoursGoingBy = "0" + "0";
    }
}




//questions?

    


