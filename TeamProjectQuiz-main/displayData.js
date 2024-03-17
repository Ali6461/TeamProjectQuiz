document.addEventListener("DOMContentLoaded", function() {
    fetch('quiz_data.json')
        .then(response => response.json())
        .then(data => displayQuizData(data))
        .catch(error => console.error('Error fetching quiz data:', error));
});

function displayQuizData(data) {
    const quizDataDiv = document.getElementById('quizData');
    
    const questionHeading = document.createElement('h2');
    questionHeading.textContent = 'Question:';
    const questionParagraph = document.createElement('p');
    questionParagraph.textContent = data.question;

    const correctAnswerHeading = document.createElement('h2');
    correctAnswerHeading.textContent = 'Correct Answer:';
    const correctAnswerParagraph = document.createElement('p');
    correctAnswerParagraph.textContent = data.correctAnswer;

    const incorrectAnswersHeading = document.createElement('h2');
    incorrectAnswersHeading.textContent = 'Incorrect Answers:';
    const incorrectAnswersList = document.createElement('ul');
    data.incorrectAnswers.forEach(answer => {
        const listItem = document.createElement('li');
        listItem.textContent = answer;
        incorrectAnswersList.appendChild(listItem);
    });

    quizDataDiv.appendChild(questionHeading);
    quizDataDiv.appendChild(questionParagraph);
    quizDataDiv.appendChild(correctAnswerHeading);
    quizDataDiv.appendChild(correctAnswerParagraph);
    quizDataDiv.appendChild(incorrectAnswersHeading);
    quizDataDiv.appendChild(incorrectAnswersList);
}
