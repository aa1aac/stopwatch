$(document).ready(function (){
    // declaration of variables 
    var min=parseInt($("#min").text());
    var sec=parseInt($("#sec").text());
    // event listener click
    $('.start').click(()=>{
        // chnge text to stop
        $('.start').text('stop')
        // add class stop
        $('.start').addClass('stop')
        // remove class start
        $('.start').removeClass('start')
        // start the clock
        startClock();
    })

    // event listener stop
    $('.stop').click(()=>{
        // pause the timer
        pause();
        // store the value of the min sec centi-sec

        // change text to start
        $(".stop").text("start");
        // add class start
        $(".stop").addClass("start");
        // remove stop 
        $(".stop").removeClass("stop");
        // change lap to reset class
        //change lap to reset text
        // remove lap class from the lap
    })
    // event listener lap
    $('.lap').click(()=>{
        // save the time data on lap section
        var lapT=$("#time").text;
        //print at the lap section of the page
        $("#lapsection").append(lapT);
        // reset the section of lap can run same function as startClock();
        
    })

    // event listener reset
    $('.reset').click(()=>{
        //restart the window || reset all the variables to null
        location.reload(true);
    })
   function startClock(){
    function calculate() {
        setTimeout(calculate, 1000);
        $("#min").text(min);
        $("#sec").text(sec);
        if (sec <59){
            sec++;
        }
        if(sec==59){
            sec=0;
            min++;
        }

 }
    calculate();
   }

})