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

    // Create paragraph element for the question and add a class
    const questionParagraph = document.createElement('p');
    questionParagraph.textContent = data.question;
    questionParagraph.classList.add('question-box');

    
    
 

    // Append all elements to the quizDataDiv
    quizDataDiv.appendChild(questionHeading);
    quizDataDiv.appendChild(questionParagraph);
    
}
