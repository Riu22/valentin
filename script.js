document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    let messageIndex = 0;
    let moveAttempts = 0;

    const messages = [
        "Are you sure?", "Really sure??", "Are you positive?", "Pookie please...", "Just think about it!", 
        "If you say no, I will be really sad...", "I will be very sad...", "I will be very very very sad...", 
        "Ok fine, I will stop asking...", "Just kidding, say yes please! ❤️"
    ];

    // Función para mover el botón "No" aleatoriamente
    function moveNoButton() {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Función para manejar el clic en el botón "No"
    function handleNoClick() {
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
        
        // Aumentar el tamaño del botón "Sí"
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.2}px`;
        
        // Mover el botón "No" después de algunos intentos
        if (moveAttempts > 2) {
            moveNoButton();
        }
        moveAttempts++;
        
        // Agregar corazones flotantes
        addFloatingHeart();
    }

    // Función para agregar corazones flotantes
    function addFloatingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);
        
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Función para manejar el clic en el botón "Sí"
    function handleYesClick() {
        window.location.href = "yes_page.html";
    }

    // Agregar eventos a los botones
    noButton.addEventListener("click", handleNoClick);
    yesButton.addEventListener("click", handleYesClick);
});
