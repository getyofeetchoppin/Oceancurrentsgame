// Quiz questions and logic
const quizContainer = document.getElementById('quiz-container');

// Sample quiz questions
const questions = [
    {
        question: "Which of the following is an example of a sea feature?",
        options: ["Mountain", "Valley", "Trench", "Plateau"],
        correctAnswer: "Trench"
    },
    {
        question: "How does an ocean trench form?",
        options: ["Volcanic activity", "Weathering", "Erosion", "Plate tectonics"],
        correctAnswer: "Plate tectonics"
    },
    {
        question: "What is the primary factor influencing ocean circulation?",
        options: ["Wind", "Temperature", "Salinity", "Depth"],
        correctAnswer: "Wind"
    },
    {
        question: "How do changes in ocean temperature impact climate?",
        options: ["No impact", "Warms the climate", "Cools the climate", "Induces rainfall"],
        correctAnswer: "Warms the climate"
    },
    {
        question: "What is the term for the pattern of ocean circulation that influences climate?",
        options: ["Ocean waves", "Ocean currents", "Ocean tide", "Ocean vortex"],
        correctAnswer: "Ocean currents"
    }
];

// Function to display quiz questions
function displayQuiz() {
    let quizHTML = "";
    questions.forEach((q, index) => {
        quizHTML += `<div class="question">${index + 1}. ${q.question}</div>`;
        q.options.forEach((option, optionIndex) => {
            quizHTML += `
                <div>
                    <input type="radio" name="question${index}" id="option${index}${optionIndex}" value="${option}">
                    <label for="option${index}${optionIndex}">${option}</label>
                </div>
            `;
        });
    });
    quizContainer.innerHTML = quizHTML;
}

// Call the function to display the quiz
displayQuiz();
