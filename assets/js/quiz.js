var questions = [{
    question: "1. How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3
}, {
    question: "2. How to empty an array in JavaScript?",
    choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctAnswer: 2
}, {
    question: "3. What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1
}, {
    question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0
}, {
    question: "5. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: 0
}, {
    question: "6. Which software company developed JavaScript?",
    choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1
}, {
    question: "7. What would be the result of 3+2+'7'?",
    choices: ["327", "12", "14", "57"],
    correctAnswer: 3
}, {
    question: "8. Look at the following selector: $('div'). What does it select?",
    choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctAnswer: 2
}, {
    question: "9. How can a value be appended to an array?",
    choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
    correctAnswer: 1
}, {
    question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
    choices: ["'32'", "'122'", "'13'", "'14'"],
    correctAnswer: 0
}];

var quizSpace = document.getElementById("quiz");
var score = 0;
var count = 0;

var hudScore = document.getElementById("highscore");
var prompQ = document.getElementById("question");
var choices = document.getElementById("choices");
var anwsers = document.getElementById("anwsers");

/*function startTimer(){
    var timer = setInterval(function(){
        var timeLeft = 75000;
        document.getElementById("time").innerHTML=timer;
        timer--;
        if(timer <= 0) {
            clearInterval();
            alert('Time is up');
            localStorage.setItem(score);
            let user= prompt('Enter your name');
            localStorage.setItem(user);
            window.location('highScore.html');
        }
    }, 1000);
}*/

function quiz(){
    //startTimer();
    if (count <=questions.length){
        getQuestion()
    }
}

function startQuiz(){
    anwsers.removeChild(document.getElementById("start"));
    
    quiz();
}
document.querySelector('button').onclick=startQuiz();

function getQuestion(){
    prompQ.innerText =questions[count].question, prompQ.innerHTML;
    var correctAnswer = questions[count].correctAnswer;
    for(let i = 0; i < questions[count].choices;i++){
        let btnEl = questions[count].choices[i];
        btnEl.valueOf(i);
        choices.appendChild(btnEl);
    }//despreatly want to use better methods to do this....
    onclick = function(){
        if(this.document.valueOf() == correctAnswer){
            score+=10;
        }
        else{
            score-=5;
        }
        getQuestion();
    }
}