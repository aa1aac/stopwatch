$(".resume").hide();
$(".stop").hide();
$(document).ready(function (){
    // declaration of variables
    var hours = minutes = seconds = milliseconds = 0;
    var prev_hours , prev_minutes , prev_seconds , prev_milliseconds = undefined;
    var timeUpdate;  
    var min=parseInt($("#min").text());
    var sec=parseInt($("#sec").text());
    // event listener click
    $('.start').click(()=>{
        $(".start").hide();
        updateTime(0,0,0,0); //updates the time
        $(".stop").css({
            "display":"inline"
        })
        $(".resume").css({
            "display":"none"
        })
    })

    // event listener stop
    $('.stop').click(()=>{
        $(".stop").css({
            "display":"none"
        })
        $(".start").css({
            "display":"inline"
        })
        $(".resume").css({
            "display":"inline"
        })
        // pause the timer
        clearInterval(timeUpdate);
    })
    $(".resume").click(()=>{

        prev_hours = parseInt($("#hours").text());
        prev_minutes = parseInt($("#minutes").text());
        prev_seconds = parseInt($("#seconds").text());
        prev_milliseconds = parseInt($("#milliseconds").text());
        updateTime(prev_hours, prev_minutes, prev_seconds, prev_milliseconds);
        $(".resume").css({
            "display":"none"
        })
        $(".stop").css({
            "display":"inline"
        })
        $(".start").css({
            "display":"none"
        })
    });
   function startClock(){
    var timeIncrement= calculate(); //stores time increment using calculate function
    }




 
   function calculate() {
setTimeout(calculate, 1000);
$("#min").text(min);
$("#sec").text(sec);
   if (sec <59){
    sec++;
}
    if(sec===59){
      sec=0;
        min++;
    }

}


function updateTime(prev_hours, prev_minutes, prev_seconds, prev_milliseconds){
    var startTime = new Date();    // get current time

    timeUpdate = setInterval(function () {
        var timeElapsed = new Date().getTime() - startTime.getTime();    // calculate the time elapsed in milliseconds

        // calculate hours                
        hours = parseInt(timeElapsed / 1000 / 60 / 60) + prev_hours;
          
        // calculate minutes
        minutes = parseInt(timeElapsed / 1000 / 60) + prev_minutes;
        if (minutes > 60) minutes %= 60;
         
        // calculate seconds
        seconds = parseInt(timeElapsed / 1000) + prev_seconds;
        if (seconds > 60) seconds %= 60;

        // calculate milliseconds 
        milliseconds = timeElapsed + prev_milliseconds;
        if (milliseconds > 1000) milliseconds %= 1000;

        // set the stopwatch
        setStopwatch(hours, minutes, seconds, milliseconds);
        console.log(hours+" "+minutes+" "+seconds+" "+milliseconds);
    }, 25); // update time in stopwatch after every 25ms

}
function setStopwatch(hours, minutes, seconds, milliseconds){
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
    $("#milliseconds").text(milliseconds);
}

})