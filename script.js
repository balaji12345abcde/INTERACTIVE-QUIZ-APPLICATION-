// Quiz questions array with answers
const questions = [
  {
    question: "What is 2+2?",
    answers: [
      { text: "4", correct: true }, // Correct answer
      { text: "22", correct: false } // Incorrect answer
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true }, // Correct answer
      { text: "London", correct: false } // Incorrect answer
    ]
  }
];

// Quiz state variables
let currentQuestionIndex = 0; // Tracks current question
let score = 0; // Tracks user score

// Function to display current question
function showQuestion(question) {
  // Set question text
  document.getElementById('question-container').innerHTML = question.question;
  const answerButtons = document.getElementById('answer-buttons');
  answerButtons.innerHTML = ''; // Clear previous answers
  
  // Create buttons for each answer
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    // Add click event to check answer
    button.addEventListener('click', () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
  });
}

// Function to handle answer selection
function selectAnswer(isCorrect) {
  // Update score if correct
  if (isCorrect) {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
  }
  
  // Move to next question or end quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    alert(`Quiz finished! Your score: ${score}/${questions.length}`);
  }
}

// Start the quiz with first question
showQuestion(questions[0]);
