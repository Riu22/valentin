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
            <img src="preda.png" alt="Love GIF" class="modal-image">
        </div>
    `;

    //            <a href="./python/rexa.exe" download="rexa.exe" class="download-button">Download Surprise</a>

    document.body.appendChild(modal);

    // Seleccionar el botón de cerrar después de añadir el modal al DOM
    const closeButton = modal.querySelector(".close-button");

    // Función para mostrar el modal
    function showMessage() {
        modal.style.display = "flex"; // Cambiar a 'flex' para centrar el modal
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