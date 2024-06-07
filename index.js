const quizQuestions = [
    {
        question: "1. What does HTML stand for?",
        answers: {
            a: "Hyper Text Markup Language",
            b: "Home Tool Markup Language",
            c: "Hyperlinks and Text Markup Language",
            d: "Hypertext Transfer Protocol"
        },
        correctAnswer: "a"
    },
    {
        question: "2. Who is making the Web standards?",
        answers: {
            a: "Google",
            b: "Microsoft",
            c: "The World Wide Web Consortium",
            d: "Mozilla"
        },
        correctAnswer: "c"
    },
    {
        question: "3. Choose the correct HTML element for the largest heading:",
        answers: {
            a: "<heading>",
            b: "<h1>",
            c: "<h6>",
            d: "<head>"
        },
        correctAnswer: "b"
    },
    {
        question: "4. What is the correct HTML element for inserting a line break?",
        answers: {
            a: "<br>",
            b: "<lb>",
            c: "<break>",
            d: "<linebreak>"
        },
        correctAnswer: "a"
    },
    {
        question: "5. What is the correct HTML for adding a background color?",
        answers: {
            a: "<body bg='yellow'>",
            b: "<body style='background-color:yellow;'>",
            c: "<background>yellow</background>",
            d: "<body color='yellow'>"
        },
        correctAnswer: "b"
    }
];

let questionElement = document.querySelector(".question");
const inputOptions = document.querySelectorAll(".answer");
const [option_1, option_2, option_3, option_4, submitBtn] = document.querySelectorAll("#option_1,#option_2,#option_3,#option_4,#submit_btn");
let quizQuestionIndex = 0;
let userScore = 0;

const loadQuiz = () => {
    if (quizQuestionIndex >= quizQuestions.length) {
        console.log("Quiz completed!");
        console.log(`Your score is ${userScore}`);
        return;
    }

    let currentQuestion = quizQuestions[quizQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    option_1.innerText = currentQuestion.answers.a;
    option_2.innerText = currentQuestion.answers.b;
    option_3.innerText = currentQuestion.answers.c;
    option_4.innerText = currentQuestion.answers.d;

    inputOptions.forEach(input => input.checked = false);
};

const getSelectedAnswer = () => {
    let selectedAnswer;
    inputOptions.forEach(input => {
        if (input.checked) {
            selectedAnswer = input.id;
        }
    });
    return selectedAnswer;
};

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer) {
        if (selectedAnswer === quizQuestions[quizQuestionIndex].correctAnswer) {
            userScore++;
        }
        quizQuestionIndex++;
        loadQuiz();
    }
});

loadQuiz();
