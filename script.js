const quizData = [
    {
        question: "How old is Jadna?",
        a: "26",
        b: "17",
        c: "118",
        d: "18",
        correct: "a",
    }, 
    {
        question: "Who is the President of Brazil?",
        a: "Kim Jong-un",
        b: "Donald Trump",
        c: "Michell Obama",
        d: "Jair Bolsonario",
        correct: "d"
    }, 
    {
        question:"What is the capital of Rio de Janeiro?",
        a: "São Paulo",
        b: "Minas Gerais",
        c: "Rio de Janeiro",
        d: "Salvador",
        correct: "c",
    }, 
    {
        question:"How many continents there are in the World?",
        a: "One",
        b: "Two",
        c: "Ten",
        d: "Six",
        correct: "d",
    }, 
    {
        question: "What is the capital of US?",
        a: "New York",
        b: "Paris",
        c: "Washington",
        d: "Argentina",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionsEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBnt = document.getElementById("submit"); 

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionsEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelect(){
    let  answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
   
   return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
    
}

submitBnt.addEventListener('click', () => {
    const answer = getSelect();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
