// Function to prompt the user for a question
function askQuestion() {
    var userQuestion = prompt("Please enter your question:");
    return userQuestion;
}

// Function to prompt the user for an answer
function askAnswer(promptText) {
    var userAnswer = prompt(promptText);
    return userAnswer;
}

// Function to save the question and answers to a JSON file
function saveToJSON(question, correctAnswer, incorrectAnswers) {
    var jsonData = {
        question: question,
        correctAnswer: correctAnswer,
        incorrectAnswers: incorrectAnswers
    };

    // Convert JSON data to a string
    var jsonString = JSON.stringify(jsonData);

    // Create a Blob with the JSON string
    var blob = new Blob([jsonString], { type: "application/json" });

    // Create a link element to trigger the download
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "user_data.json";

    // Append the link to the document and trigger a click
    document.body.appendChild(a);
    a.click();

    // Remove the link from the document
    document.body.removeChild(a);
}

// Function to handle the button click event
function askQuestionsAndSave() {
    var userQuestion = askQuestion();
    var userCorrectAnswer = askAnswer("Please enter the correct answer:");
    var userIncorrectAnswer1 = askAnswer("Please enter an incorrect answer:");
    var userIncorrectAnswer2 = askAnswer("Please enter another incorrect answer:");
    var userIncorrectAnswer3 = askAnswer("Please enter one more incorrect answer:");

    var userIncorrectAnswers = [userIncorrectAnswer1, userIncorrectAnswer2, userIncorrectAnswer3];

    if (userQuestion && userCorrectAnswer && userIncorrectAnswers.every(Boolean)) {
        saveToJSON(userQuestion, userCorrectAnswer, userIncorrectAnswers);
        alert("Question and answers saved");
    } else {
        alert("Please fill in all fields.");
    }
}
