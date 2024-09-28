function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '032224';

    if (password === correctPassword) {
        alert("Access Granted!"); 
        document.getElementById('hint').style.display = 'none'; 
        window.location.href = 'Page2.html'; 
    } else {
        alert('Incorrect password. Please try again.'); 
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.querySelector('.button-no');
    
    if (noButton) {
        noButton.addEventListener('mouseover', () => {
            const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); 
            const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); 
            noButton.style.position = 'absolute'; 
            noButton.style.left = `${randomX}px`; 
            noButton.style.top = `${randomY}px`; 
        });
    }
});
