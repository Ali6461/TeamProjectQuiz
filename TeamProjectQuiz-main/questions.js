document.addEventListener("DOMContentLoaded", () => {
    let currentQuestionIndex = 0;
    const questions = [
        {
            question: "What does HTML stand for?",
            options: [
                "A. Hyper Type Multi Language",
                "B. Hyper Text Multiple Language",
                "C. Hyper Text Markup Language",
                "D. Home Text Multi Language"
            ],
            correctAnswer: "C"
        },
        {
            question: "Which language runs in a web browser?",
            options: [
                "A. Java",
                "B. C",
                "C. Python",
                "D. JavaScript"
            ],
            correctAnswer: "D"
        },
        {
            question: "What does CSS stand for?",
            options: [
                "A. Central Style Sheets",
                "B. Cascading Style Sheets",
                "C. Cascading Simple Sheets",
                "D. Cars SUVs Sailboats"
            ],
            correctAnswer: "B"
        },
        {
            question: "Which is used to connect to a database?",
            options: [
                "A. HTML",
                "B. JS",
                "C. PHP",
                "D. CSS"
            ],
            correctAnswer: "C"
        },
        {
            question: "What tag is used to define an image?",
            options: [
                "A. img",
                "B. src",
                "C. image",
                "D. pic"
            ],
            correctAnswer: "A"
        }
    ];

    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = true; // Disable the "Next" button initially

    function displayQuestion() {
        if (currentQuestionIndex >= questions.length) {
            document.getElementById('quizContainer').innerHTML = "<h2>Quiz Completed!</h2>";
            return;
        }

        const question = questions[currentQuestionIndex];
        document.getElementById('questionText').textContent = question.question;

        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = ''; // Clear previous options

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.innerHTML = `<span>${option}</span>`;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });

        document.getElementById('progressText').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        nextButton.disabled = true; // Keep the "Next" button disabled until an option is selected
    }

    function selectOption(index) {
        console.log(`Option ${index + 1} selected.`);
        nextButton.disabled = false; // Enable the "Next" button after an option is selected
    }

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            document.getElementById('quizContainer').innerHTML = "<h2>Quiz Completed!</h2>";
        }
    });

    displayQuestion();
});
 