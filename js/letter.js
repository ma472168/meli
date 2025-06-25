/*
document.addEventListener("DOMContentLoaded", function() {
    const letterContainer = document.getElementById("letter-container");
    
    // Function to create a letter with animations
    function createLetter() {
        const letter = document.createElement("div");
        letter.className = "letter";
        letter.innerHTML = `
            <h1>Dear Friend,</h1>
            <p>We are excited to welcome you to our special event!</p>
            <p>Mark your calendars for July 28, 2025.</p>
            <p>Best wishes,</p>
            <p>Your Team</p>
        `;
        letterContainer.appendChild(letter);
        
        // Add animations
        setTimeout(() => {
            letter.classList.add("fade-in");
        }, 100);
    }

    // Call the function to create the letter
    createLetter();
});
*/