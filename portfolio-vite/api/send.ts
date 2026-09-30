import { Resend } from "resend";

declare const process :{ 
   env:{
  RESEND_API_KEY: string;
};
};
const resend= new
Resend(process.env.RESEND_API_KEY)

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ message: "Method not allowed" }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      subject,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["YOUR_EMAIL@example.com"],
      subject:` Portfolio Contact: ${subject}`,
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error(error);

      return new Response(
        JSON.stringify({
          message: error.message,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        message: "Something went wrong",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}