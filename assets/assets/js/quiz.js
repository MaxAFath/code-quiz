var timeEl = document.getElementById('countdown');

function countdown(){
    var timeleft = 75;
    
    var timeInterval = setInterval(function(){
        if(timeleft >= 1){
            timeEl.textContent = timeleft;
            timeleft--;
        }
        else{
            timeEl.textContent = ' ';
            clearInterval(timeInterval);
        }
    }, 1000);
}