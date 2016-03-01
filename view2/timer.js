    function workTimer(){
        var duration = 15;
        var timer = duration, minutes, seconds;
        setInterval(function(){
        
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            duration = minutes + ":" + seconds;
            console.log(duration);
            getTime;
            if(--timer < 0){
                timer = duration;
            }
          
        }, 1000);   
    
        function getTime(){
            return duration;
        }
    }
    
    workTimer();
