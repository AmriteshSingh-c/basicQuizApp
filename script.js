var quizData = [{
        question: "what is the most used language for competitive programming ?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "Node.js",
        correct: "c"
    },
    {
        question: "Is 57 a Prime Number ?",
        a: "Yes",
        b: "No",
        c: "Can't Say",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "Which is the most used browser ?",
        a: "Chrome",
        b: "Internet Explorer",
        c: "Mozilla Firefox",
        d: "Brave",
        correct: "a"
    },
    {
        question: "What is 25*25=?",
        a: "625",
        b: "125",
        c: "1125",
        d: "25",
        correct: "a"
    },
    {
        question: "Are you dumb?",
        a: "Yes",
        b: "NO",
        c: "Can't Say",
        d: "Too Dumb to answer this ",
        correct: "d"
    }
];
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
   
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;
    answerEls.forEach((answerE) => {
        if (answerE.checked == true) {
            answer = answerE.id;
            answerE.checked = false;
            return answer;
        }
    });
    return answer;
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        
            if (answer === quizData[currentQuiz].correct) {
                
                score++;
            }
      

        currentQuiz++;
        if (currentQuiz < quizData.length) {

            loadQuiz();
        } else {
            quiz.innerHTML = '<h2>You answered Correctly ' + score + '/' + quizData.length + ' questions </h2><button onClick="location.reload()">PLay Again</button>';
        }
    }




});
