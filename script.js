// Function to start the quiz
function startQuiz() {
    document.getElementById('opening-screen').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
}

// Move the "No" button away from the mouse
function moveNoButton() {
    const noButton = document.getElementById('no-button');
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Adjust for button width
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50)); // Adjust for button height
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// Placeholder for quiz question loading (implement this later)
function loadQuestion() {
    // You will implement this function to load questions later
}
