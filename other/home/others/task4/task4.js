const backBtn = document.getElementById("backBtn");
const pollutionTypes = document.getElementById("pollutionTypes");
const quizContainer = document.getElementById("quizContainer");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizResult = document.getElementById("quizResult");
const nextQuestion = document.getElementById("nextQuestion");

backBtn.addEventListener("click", () => {
  window.history.back();
});

// Quiz data
const quizzes = {
  "Air Pollution": [
    {
      question: "Which of these gases is a major contributor to air pollution?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      answer: "Carbon Dioxide"
    }
  ],
  "Water Pollution": [
    {
      question: "Which is a major source of water pollution?",
      options: ["Plastic Waste", "Sand", "Sunlight", "Rocks"],
      answer: "Plastic Waste"
    }
  ],
  "Soil Pollution": [
    {
      question: "Which practice can cause soil pollution?",
      options: ["Using Pesticides", "Planting Trees", "Composting", "Rainwater Harvesting"],
      answer: "Using Pesticides"
    }
  ],
  "Noise Pollution": [
    {
      question: "Which is a main cause of noise pollution?",
      options: ["Vehicles", "Rivers", "Mountains", "Grasslands"],
      answer: "Vehicles"
    }
  ]
};

let currentQuiz = [];
let currentIndex = 0;

function startQuiz(type) {
  pollutionTypes.style.display = "none";
  quizContainer.classList.remove("hidden");
  currentQuiz = quizzes[type];
  currentIndex = 0;
  showQuestion();
}

function showQuestion() {
  const q = currentQuiz[currentIndex];
  quizQuestion.textContent = q.question;
  quizOptions.innerHTML = "";
  quizResult.textContent = "";
  nextQuestion.classList.add("hidden");

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, q.answer);
    quizOptions.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    quizResult.textContent = "Correct ✅";
    quizResult.style.color = "green";
  } else {
    quizResult.textContent = `Wrong ❌. Correct: ${correct}`;
    quizResult.style.color = "red";
  }
  nextQuestion.classList.remove("hidden");
}

nextQuestion.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    showQuestion();
  } else {
    quizResult.textContent = "Quiz Completed!";
    quizOptions.innerHTML = "";
    nextQuestion.classList.add("hidden");
  }
});
