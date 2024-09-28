// Function to check the password
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'yourPassword'; // Set your password here

    if (password === correctPassword) {
        alert("Access Granted!"); // Optional: Alert for successful access
        document.getElementById('hint').style.display = 'none'; // Hide the hint
        window.location.href = 'page2.html'; // Redirect to page2.html
    } else {
        alert('Incorrect password. Please try again.'); // Alert for incorrect password
    }
}

// Optional: Function to handle the mouseover effect for the "No" button
document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.querySelector('.button-no');
    
    // Ensure the button exists before adding the event listener
    if (noButton) {
        noButton.addEventListener('mouseover', () => {
            const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Random x position
            const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Random y position
            noButton.style.position = 'absolute'; // Make position absolute
            noButton.style.left = `${randomX}px`; // Move button to random position
            noButton.style.top = `${randomY}px`; // Move button to random position
        });
    }
});