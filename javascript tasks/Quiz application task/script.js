const quizQuestions = [
  {
    id: "q1",
    question: "What does the `typeof` operator return for `null`?",
    answers: { a: "object", b: "null", c: "undefined", d: "string" },
    correctAnswer: "a"
  },
  {
    id: "q2",
    question: "Which of the following is NOT a JavaScript data type?",
    answers: { a: "Number", b: "String", c: "Boolean", d: "Float" },
    correctAnswer: "d"
  },
  {
    id: "q3",
    question: "Which method is used to add an element to the end of an array?",
    answers: { a: "pop()", b: "push()", c: "shift()", d: "unshift()" },
    correctAnswer: "b"
  },
  {
    id: "q4",
    question: "What will `console.log(2 + '2')` output?",
    answers: { a: "4", b: "22", c: "'22'", d: "TypeError" },
    correctAnswer: "c"
  },
  {
    id: "q5",
    question: "What is the purpose of the `const` keyword?",
    answers: { a: "To declare a variable with a constant value that can be reassigned",
               b: "To create an immutable object",
               c: "To define a function",
               d: "To declare a variable with block scope" },
    correctAnswer: "b"
  },
  {
    id: "q6",
    question: "How do you check if a variable is an array?",
    answers: { a: "`typeof variable === 'array'`", b: "`variable instanceof Array`",
               c: "`Array.isArray(variable)`", d: "Both b and c" },
    correctAnswer: "d"
  },
  {
    id: "q7",
    question: "What does the `splice()` method do?",
    answers: { a: "Merges two or more arrays", b: "Removes elements from an array and inserts new elements",
               c: "Sorts the elements of an array", d: "Extracts a section of an array and returns a new array" },
    correctAnswer: "b"
  },
  {
    id: "q8",
    question: "What will `console.log(0.1 + 0.2 === 0.3)` output?",
    answers: { a: "true", b: "false", c: "NaN", d: "TypeError" },
    correctAnswer: "b"
  },
  {
    id: "q9",
    question: "Which function is used to serialize an object into a JSON string?",
    answers: { a: "JSON.parse()", b: "JSON.stringify()", c: "JSON.convert()", d: "object.toString()" },
    correctAnswer: "b"
  },
  {
    id: "q10",
    question: "How do you call an asynchronous function?",
    answers: { a: "using `async`", b: "using `await`", c: "using a callback", d: "using `async` and `await` or promise chaining" },
    correctAnswer: "d"
  }
];

// Get references to HTML elements
const quizContainerEl = document.querySelector('.quiz-container');
const questionIdEl = document.getElementById('question-id');
const questionTextEl = document.getElementById('question-text');
const answerChoicesEl = document.getElementById('answer-choices');
const nextBtn = document.getElementById('next-btn');
const resultsEl = document.getElementById('results');
const scoreDisplayEl = document.getElementById('score-display');
const reviewContainerEl = document.getElementById('review-container');

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

// Function to display the current question
function displayQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];

        questionIdEl.textContent = `Question ${currentQuestionIndex + 1}:`;
        questionTextEl.textContent = currentQuestion.question;

        answerChoicesEl.innerHTML = '';
        for (const answer in currentQuestion.answers) {
            const label = document.createElement('label');
            label.classList.add('answer-label');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${currentQuestion.id}`;
            input.value = answer;

            label.appendChild(input);
            label.appendChild(document.createTextNode(`${answer}: ${currentQuestion.answers[answer]}`));
            answerChoicesEl.appendChild(label);
        }

        if (currentQuestionIndex === quizQuestions.length - 1) {
            nextBtn.textContent = 'Submit';
        } else {
            nextBtn.textContent = 'Next';
        }
    } else {
        showResults();
    }
}

function handleNextClick() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const selectedAnswerEl = document.querySelector(`input[name="question-${currentQuestion.id}"]:checked`);

    if (selectedAnswerEl) {
        const selectedValue = selectedAnswerEl.value;
        userAnswers.push(selectedValue);

        if (selectedValue === currentQuestion.correctAnswer) {
            score++;
        }

        scoreDisplayEl.textContent = `Score: ${score} / ${quizQuestions.length}`;

        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert('Please select an answer!');
    }
}

function showResults() {
    quizContainerEl.classList.add('hide');

    resultsEl.classList.remove('hide');
    resultsEl.innerHTML = `<h2>Quiz Complete!</h2><p>You scored ${score} out of ${quizQuestions.length} correct!</p>`;

    let reviewHTML = '<h3>Review Your Answers:</h3>';
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const resultText = isCorrect ? 'Correct!' : 'Incorrect!';
        const resultClass = isCorrect ? 'correct' : 'incorrect';
        const correctMessage = isCorrect ? '' : `The correct answer was: <strong>${question.answers[question.correctAnswer]}</strong>`;

        reviewHTML += `
            <div class="review-item">
                <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <p>Your Answer: <strong>${question.answers[userAnswer] || 'Not Answered'}</strong> <span class="${resultClass}">(${resultText})</span></p>
                ${correctMessage ? `<p>${correctMessage}</p>` : ''}
            </div>
        `;
    });

    reviewContainerEl.innerHTML = reviewHTML;
    reviewContainerEl.classList.remove('hide');
}

nextBtn.addEventListener('click', handleNextClick);

displayQuestion();

 
  

