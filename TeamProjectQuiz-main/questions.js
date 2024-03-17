async function saveToJSON(question, correctAnswer, incorrectAnswers) {
    var jsonData = {
        question: question,
        correctAnswer: correctAnswer,
        incorrectAnswers: incorrectAnswers
    };

    try {
        // Request access to the file system
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: 'quiz_data.json',
            types: [{
                accept: {
                    'application/json': ['.json'],
                },
            }],
        });

        // Create a writable stream to the file
        const writableStream = await fileHandle.createWritable();

        // Write the JSON data to the file
        await writableStream.write(JSON.stringify(jsonData));
        
        alert("Question and answers saved");
        
        // Close the writable stream
        await writableStream.close();

        console.log('File saved successfully.');

    } catch (err) {
        console.error('Error saving file:', err);
    }
}


// Function to handle the button click event
function askQuestionsAndSave() {
    var userQuestion = document.getElementById('questionInput').value;
    var userCorrectAnswer = document.getElementById('correctAnswerInput').value;
    var userIncorrectAnswer1 = document.getElementById('incorrectAnswer1Input').value;
    var userIncorrectAnswer2 = document.getElementById('incorrectAnswer2Input').value;
    var userIncorrectAnswer3 = document.getElementById('incorrectAnswer3Input').value;

    var userIncorrectAnswers = [userIncorrectAnswer1, userIncorrectAnswer2, userIncorrectAnswer3];

    if (userQuestion && userCorrectAnswer && userIncorrectAnswers.every(Boolean)) {
        saveToJSON(userQuestion, userCorrectAnswer, userIncorrectAnswers);
    } else {
        alert("Please fill in all fields.");
    }
}
