export async function handler(event) {
    try {
        const data = JSON.parse(event.body);

        const token = "8447840821:AAEz-IkK-fcxetWwABJlEKaIurqMryY4l3c";
        const chatId = "8295942413";

        const mensaje = `
📩 Nuevo mensaje del formulario:
\n\n
👤 Nombre: ${data.nombre}
📧 Email: ${data.email}
📞 Teléfono: ${data.telefono}
📝 Mensaje: ${data.mensaje}
    `;

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: mensaje,
                parse_mode: "HTML",
            }),
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
