const quizData = [  
    {
        question: "HTML stands for - ",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        correct: "c",
    },
    {
        question: "CSS stand for - ",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "None of these",
        correct: "b",
        
    },
    {
        question: "Which type of JavaScript language is ",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        correct: "a",
    },
    {
        question: "In which HTML element, we put the JavaScript code? ",
        a: "<javascript>...</javascript>",
        b: "<js>...</js>",
        c: "<script>...</script>",
        d: "<css>...</css>",
        correct: "c",
    },
    {
        question: "Which symbol is used separate JavaScript statements?",
        a: "Comma (,)",
        b: "Colon (:)",
        c: "Hyphen (_)",
        d: "Semicolon (;)",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Restart</button>
           `
       }
    }
})