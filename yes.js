document.addEventListener("DOMContentLoaded", function () {
    const messageButton = document.createElement("button");
    messageButton.textContent = "💌 Click for a surprise!";
    messageButton.classList.add("message-button");
    document.body.appendChild(messageButton);

    // Crear el modal
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <p class="modal-message">Te amo mucho! ❤️ Eres la persona más especial para mí!</p>
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGI5ZjFxdWM1bmZuZWQ2cTlvbWNpMjNuaHNxN2pueXVoeWlvOGZ2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKoWXm3okO1kgHC/giphy.gif" alt="Love GIF" class="modal-image">
        </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector(".close-button");

    // Función para mostrar el modal
    function showMessage() {
        modal.style.display = "block";
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Agregar eventos
    messageButton.addEventListener("click", showMessage);
    closeButton.addEventListener("click", closeModal);

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});