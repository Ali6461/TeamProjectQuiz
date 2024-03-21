document.addEventListener("DOMContentLoaded", function() {
    fetch('quiz_data.json')
        .then(response => response.json())
        .then(data => displayQuizData(data))
        .catch(error => console.error('Error fetching quiz data:', error));
});

function displayQuizData(data) {
    const quizDataDiv = document.getElementById('quizData');
    
    const questionHeading = document.createElement('h2');  
    
    23
    questionHeading.textContent = data.question;
    questionHeading.classList.add('question-box');

    // Append all elements to the quizDataDiv
    quizDataDiv.appendChild(questionHeading);
    
    
}
