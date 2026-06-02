import { NextResponse } from "next/server";
import { Resend } from "resend";
import { emailTemplate } from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Nome, email e telefone são obrigatórios." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Fullseek <naoresponder@fullseek.com.br>",
      to: ["contato@fullseek.com.br"],
      replyTo: email,
      subject: `Novo contato via site - ${name}`,
      html: emailTemplate({ name, email, phone, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Send email error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erro interno do servidor." },
      { status: 500 },
    );
  }
}
