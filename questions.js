// script.js

// Function to prompt the user for a question
function askQuestion() {
    var userQuestion = prompt("Please enter your question:");
    return userQuestion;
}

// Function to prompt the user for an answer
function askAnswer() {
    var userAnswer = prompt("Please enter the correct answer:");
    return userAnswer;
}

// Function to prompt the user for multiple incorrect answers
function askIncorrectAnswers() {
    var incorrectAnswers = [];
    for (var i = 0; i < 3; i++) {  // Prompt for three incorrect answers
        var incorrectAnswer = prompt("Please enter an incorrect answer:");
        incorrectAnswers.push(incorrectAnswer);
    }
    return incorrectAnswers;
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
    var userCorrectAnswer = askAnswer();
    var userIncorrectAnswers = askIncorrectAnswers();

    if (userQuestion && userCorrectAnswer && userIncorrectAnswers.length > 0) {
        saveToJSON(userQuestion, userCorrectAnswer, userIncorrectAnswers);
        alert("Question and answers saved");
    }
}
