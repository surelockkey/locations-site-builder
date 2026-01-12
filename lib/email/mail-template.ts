interface EmailTemplateData {
  site: string;
  state?: string;
  name?: string;
  email?: string;
  phone_number: string;
  service?: string;
  message?: string;
  callback?: string;
  url?: string;
}

export const generateHtmlContent = (data: EmailTemplateData): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #007bff;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          background-color: #f8f9fa;
          padding: 20px;
          border: 1px solid #dee2e6;
          border-top: none;
          border-radius: 0 0 5px 5px;
        }
        .field {
          margin-bottom: 15px;
          padding: 10px;
          background-color: white;
          border-radius: 3px;
        }
        .label {
          font-weight: bold;
          color: #007bff;
          display: block;
          margin-bottom: 5px;
        }
        .value {
          color: #333;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          color: #6c757d;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>New Contact Form Submission</h2>
      </div>
      <div class="content">
        ${data.name ? `
        <div class="field">
          <span class="label">Name:</span>
          <span class="value">${data.name}</span>
        </div>
        ` : ''}

        ${data.email ? `
        <div class="field">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
        </div>
        ` : ''}

        <div class="field">
          <span class="label">Phone Number:</span>
          <span class="value"><a href="tel:${data.phone_number}">${data.phone_number}</a></span>
        </div>

        ${data.service ? `
        <div class="field">
          <span class="label">Service Needed:</span>
          <span class="value">${data.service}</span>
        </div>
        ` : ''}

        ${data.message ? `
        <div class="field">
          <span class="label">Message:</span>
          <span class="value">${data.message}</span>
        </div>
        ` : ''}

        ${data.callback ? `
        <div class="field">
          <span class="label">Callback Requested:</span>
          <span class="value">${data.callback}</span>
        </div>
        ` : ''}

        ${data.state ? `
        <div class="field">
          <span class="label">State:</span>
          <span class="value">${data.state}</span>
        </div>
        ` : ''}

        ${data.url ? `
        <div class="field">
          <span class="label">Page URL:</span>
          <span class="value"><a href="${data.url}">${data.url}</a></span>
        </div>
        ` : ''}

        <div class="field">
          <span class="label">Website:</span>
          <span class="value"><a href="${data.site}">${data.site}</a></span>
        </div>
      </div>
      <div class="footer">
        <p>This email was sent from the contact form on ${data.site}</p>
      </div>
    </body>
    </html>
  `;
};
