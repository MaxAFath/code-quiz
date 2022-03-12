var timeEl = document.getElementById('countdown');

var questions = [{
    question: "",
    choices: ["", "", "" , ""],
    correctAnswer:1
}, {
    question: ""
}, {
    question: ""
},{
    
}
]

function testTime(){
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


addEventListener("click", TEMP)