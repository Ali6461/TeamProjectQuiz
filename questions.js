var questionsArray = [];

// Function to save the user's question into the array
function saveQuestion() {
    // Get the input value from the HTML page
    var questionInput = document.getElementById('questionInput').value;

    // Check if the input is not empty
    if (questionInput.trim() !== '') {
        // Save the question into the array
        questionsArray.push(questionInput);

        // Optionally, you can display a confirmation message
        alert('Question saved successfully!');
        
        // Clear the input field for the next question
        document.getElementById('questionInput').value = '';
    } else {
        // If the input is empty, display an error message
        alert('Please enter a valid question!');
    }
}