document.addEventListener("DOMContentLoaded", () => {
    fetch('test.json')
        .then(response => response.json())
        .then(data => {
            displayQuestion(data);
        })
        .catch(error => console.error('Error fetching questions:', error));
});

function displayQuestion(questions) {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul>
                ${question.options.map(option => `<li>${option}</li>`).join('')}
            </ul>
        `;
        questionContainer.appendChild(questionElement);
    });
}
