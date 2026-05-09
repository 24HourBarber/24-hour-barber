import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const serviceType = formData.get("serviceType");
    const message = formData.get("message");

    await resend.emails.send({
      from: "24 Hour Barber <onboarding@resend.dev>",
      to: ["24hourbarber@gmail.com"],
      subject: `New Inquiry - ${serviceType}`,
      reply_to: email,

      html: `
        <h2>New Inquiry Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.redirect(
      new URL("/thank-you", req.url),
      302
    );

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Failed to send inquiry.",
      }),
      {
        status: 500,
      }
    );
  }
}
