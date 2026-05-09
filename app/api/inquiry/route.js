import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const organization = formData.get("organization");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const serviceType = formData.get("serviceType");
    const residents = formData.get("residents");
    const message = formData.get("message");

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"24 Hour Barber Website" <${process.env.EMAIL_USER}>`,
      to: "info@24hourbarber.com",
      replyTo: email,
      subject: `New Inquiry - ${serviceType}`,
      text: `
New Inquiry

Name: ${name}
Organization: ${organization}
Email: ${email}
Phone: ${phone}
Service Type: ${serviceType}
Residents/Clients: ${residents}

Message:
${message}
      `,
    });

    return Response.redirect(new URL("/thank-you", request.url));
  } catch (error) {
    console.error(error);

    return new Response("Failed to send inquiry.", {
      status: 500,
    });
  }
}
