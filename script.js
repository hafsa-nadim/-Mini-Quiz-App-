const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    answer: "Harper Lee"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const scoreValueEl = document.getElementById("score-value");

// Function to load the current question
function loadQuestion() {
  const current = questions[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = ""; // Clear previous options

  for (let i = 0; i < current.options.length; i++) {
    const button = document.createElement("button");
    button.textContent = current.options[i];
    button.className = "option";
    button.onclick = function () {
      checkAnswer(current.options[i]);
    };
    optionsEl.appendChild(button);
  }
}

// Function to check the selected answer
function checkAnswer(selected) {
  if (selected === questions[currentIndex].answer) {
    score++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

// Function to show the final score
function showScore() {
  document.getElementById("quiz").classList.add("hidden");
  scoreEl.classList.remove("hidden");
  scoreValueEl.textContent = score + " / " + questions.length;
}

// Start the quiz
loadQuestion();
