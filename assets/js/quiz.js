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
let start = document.getElementById('start');
var score = 0;
var count = 0;

var hudScore = document.getElementById("highscore");
var prompQ = document.getElementById("prompt");
var choices = document.getElementById("choices");
var anwsers = document.getElementById("anwsers");
var hEl = document.createElement('h2');
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

function quiz() {
    hEl.innerHTML=questions[count].question;
    prompQ.appendChild(hEl);
    if (count <= questions.length-1) {
        getQuestion();
    }
    document.getElementById("hscore").innerHTML=score;
}


start.onclick = function startQuiz() {
    anwsers.removeChild(document.getElementById("start"));

    quiz();
}

function getQuestion() {

    var correct = questions[count].correctAnswer;
    for (let i = 0; i < questions[count].choices.length ; i++) {
        liEl = document.createElement("li");
        btnEl = document.createElement("button");
        btnEl.classList.add('btn')
        btnEl.type = "submit";
        btnEl.value = i;
        btnEl.innerHTML = questions[count].choices[i];
        btnEl.onclick = function () {
            if (btnEl.value == correct) {
                score += 10;
            }
            else {
                score -= 5;
            }
            removeQuestions();
            count++
        }
        liEl.append(btnEl);
        choices.appendChild(liEl);
    }//despreatly want to use better methods to do this...
}

function removeQuestions() {
    hEl.innerHTML = questions[count].question;
    for (let i = 0; i < questions[count].choices.length ; i++) {
        choices.removeChild(choices.firstElementChild);
    }
    quiz();
}