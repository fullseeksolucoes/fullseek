function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export function emailTemplate({
  name: rawName,
  email: rawEmail,
  phone: rawPhone,
  message: rawMessage,
}: EmailData): string {
  const name = escapeHtml(rawName);
  const email = escapeHtml(rawEmail);
  const phone = escapeHtml(rawPhone);
  const message = rawMessage ? escapeHtml(rawMessage) : undefined;
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0c0f12;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0c0f12">
    <tr>
      <td align="center" style="padding:40px 16px">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px">
              <img src="https://fullseek.com.br/logo.webp" alt="Fullseek" width="160" style="display:block;border:0;max-width:160px">
            </td>
          </tr>
          <!-- Card -->
          <tr>
            <td style="background:linear-gradient(135deg,#111519 0%,#0f1216 100%);border-radius:16px;padding:40px;border:1px solid rgba(156,13,217,0.15)">
              <!-- Badge -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:24px">
                <tr>
                  <td style="background:rgba(156,13,217,0.1);border:1px solid rgba(156,13,217,0.25);border-radius:100px;padding:6px 16px">
                    <span style="color:#9c0dd9;font-size:12px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase">NOVO CONTATO</span>
                  </td>
                </tr>
              </table>

              <h1 style="color:#ffffff;font-size:28px;font-weight:700;line-height:1.3;margin:0 0 8px;font-family:ClashDisplay,Inter,sans-serif">
                ${name}
              </h1>
              <p style="color:rgba(255,255,255,0.5);font-size:15px;margin:0 0 32px;line-height:1.5">
                Enviou uma mensagem através do site
              </p>

              <!-- Divider -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(156,13,217,0.3),transparent);margin-bottom:32px"></div>

              <!-- Details -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px">
                <tr>
                  <td style="padding-bottom:20px">
                    <span style="color:rgba(255,255,255,0.35);font-size:12px;font-weight:500;letter-spacing:0.5px;text-transform:uppercase;display:block;margin-bottom:4px">Nome</span>
                    <span style="color:#ffffff;font-size:16px;font-weight:500">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px">
                    <span style="color:rgba(255,255,255,0.35);font-size:12px;font-weight:500;letter-spacing:0.5px;text-transform:uppercase;display:block;margin-bottom:4px">Email</span>
                    <a href="mailto:${email}" style="color:#9c0dd9;font-size:16px;font-weight:500;text-decoration:none">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px">
                    <span style="color:rgba(255,255,255,0.35);font-size:12px;font-weight:500;letter-spacing:0.5px;text-transform:uppercase;display:block;margin-bottom:4px">Telefone</span>
                    <a href="tel:${phone}" style="color:#9c0dd9;font-size:16px;font-weight:500;text-decoration:none">${phone}</a>
                  </td>
                </tr>
                ${
                  message
                    ? `
                <tr>
                  <td style="padding-bottom:8px">
                    <span style="color:rgba(255,255,255,0.35);font-size:12px;font-weight:500;letter-spacing:0.5px;text-transform:uppercase;display:block;margin-bottom:4px">Mensagem</span>
                  </td>
                </tr>
                <tr>
                  <td style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;margin-bottom:20px">
                    <span style="color:rgba(255,255,255,0.8);font-size:15px;line-height:1.6;display:block">${message}</span>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>

              <!-- CTA Button -->
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:12px;background:#9c0dd9;padding:14px 32px;text-align:center">
                    <a href="mailto:${email}" style="color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;display:block">
                      Responder para ${name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:24px">
              <p style="color:rgba(255,255,255,0.2);font-size:13px;margin:0;line-height:1.6">
                Fullseek — Desenvolvimento Web<br>
                <a href="https://www.fullseek.com.br" style="color:rgba(156,13,217,0.5);text-decoration:none">fullseek.com.br</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
