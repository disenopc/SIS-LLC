const form = document.getElementById('dataForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('<TU_URL_DE_APP_SCRIPT>', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        responseMessage.textContent = "Datos enviados correctamente!";
        form.reset();
    } catch (error) {
        responseMessage.textContent = "Error al enviar los datos.";
    }
});
