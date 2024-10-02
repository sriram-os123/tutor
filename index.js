// Questions and responses for the Socratic method
const socraticQuestions = [
    "Why do you think that is the case?",
    "Can you explain that in another way?",
    "What assumptions are you making?",
    "What would happen if...?",
    "Can you think of an example?",
    "How does this relate to what we previously discussed?"
];

let currentQuestionIndex = 0;
let conversationHistory = [];

// Function to display the next question
function askQuestion() {
    if (currentQuestionIndex < socraticQuestions.length) {
        document.getElementById("assistant-question").innerHTML = <p>${socraticQuestions[currentQuestionIndex]}</p>;
    } else {
        document.getElementById("assistant-question").innerHTML = <p>Great job! You've worked through the questions. Keep thinking deeply!</p>;
    }
}

// Function to handle student response
document.getElementById("submit-response").addEventListener("click", function () {
    const response = document.getElementById("student-response").value.trim();

    if (response !== "") {
        // Update conversation history
        const assistantQuestion = document.getElementById("assistant-question").textContent;
        conversationHistory.push({ assistant: assistantQuestion, student: response });

        // Append the conversation to the history list
        const historyElement = document.createElement("li");
        historyElement.innerHTML = <strong>Assistant:</strong> ${assistantQuestion} <br> <strong>You:</strong> ${response};
        document.getElementById("conversation-history").appendChild(historyElement);

        // Clear the input field
        document.getElementById("student-response").value = "";

        // Ask the next question
        currentQuestionIndex++;
        askQuestion();
    }
});

// Initial question
askQuestion();
