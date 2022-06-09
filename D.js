function countDown(){
    console.log("Countdown started!")
    // writes to console to signal the start of the countdown
    currTime = 50
    // sets the starting time
    for(var i = 0; i <= 50; i++){
        /* loops to save space. 
        if you want to change the number of seconds you change the less than / equal to number to be your
        starting time divided by your interval*/
        console.log(i);
        setTimeout(function(){
            if(currTime == 0){
                // at the end of the countdown, blasts off
                document.getElementById("countText").innerHTML = "Down counted!";
            }else if(currTime < 25){
                // halfway through the countdown, puts more words on the screen
                document.getElementById("countText").innerHTML = " Warning: Less than halfway, time left: " + currTime;
            }else {
                //for the first 25 seconds, just prints the time
                document.getElementById("countText").innerHTML = currTime;
            }
            // i know this used to go by 5s but i want to go by 1s so
            currTime = currTime - 1;
            // 1000 milliseconds = 1 second between counts
        }, 1000 * i)
    }
}