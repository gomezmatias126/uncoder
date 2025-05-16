export const onRequestPost: PagesFunction = async ({ request, env }) => {
  const body = await request.json();

  const { nombre, email, mensaje } = body;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Tu Nombre <contacto@tu-dominio.com>",
      to: ["gomezmatias126@gmail.com"],
      subject: "Nuevo mensaje desde tu web",
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    }),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};
