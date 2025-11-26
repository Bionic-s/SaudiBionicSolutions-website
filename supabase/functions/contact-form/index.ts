Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        // Extract contact form data from request
        const { name, email, company, phone, message } = await req.json();

        // Validate required fields
        if (!name || !email) {
            throw new Error('Name and email are required');
        }

        // Get Resend API key from environment
        const resendApiKey = Deno.env.get('RESEND_API_KEY');
        
        if (!resendApiKey) {
            throw new Error('Resend API key not configured');
        }

        // Create professional HTML email template for contact forms
        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0B0D10; color: #FFFFFF;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #1A1D23; border-radius: 12px; overflow: hidden;">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #00BFFF 0%, #0099CC 100%); padding: 30px; text-align: center;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #FFFFFF;">
                                New Contact Form Submission
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                Hello Mohammad,
                            </p>
                            
                            <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                You have received a new contact form submission from the Bionic Solutions website. Please forward this information to the appropriate team member.
                            </p>
                            
                            <!-- Contact Information Box -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #00BFFF;">
                                            Contact Information
                                        </h2>
                                        
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF; width: 120px;">
                                                    <strong style="color: #FFFFFF;">Name:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    ${name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF;">
                                                    <strong style="color: #FFFFFF;">Email:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    <a href="mailto:${email}" style="color: #00BFFF; text-decoration: none;">
                                                        ${email}
                                                    </a>
                                                </td>
                                            </tr>
                                            ${company ? `
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF;">
                                                    <strong style="color: #FFFFFF;">Company:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    ${company}
                                                </td>
                                            </tr>
                                            ` : ''}
                                            ${phone ? `
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #9AA4AF;">
                                                    <strong style="color: #FFFFFF;">Phone:</strong>
                                                </td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #FFFFFF;">
                                                    <a href="tel:${phone}" style="color: #00BFFF; text-decoration: none;">
                                                        ${phone}
                                                    </a>
                                                </td>
                                            </tr>
                                            ` : ''}
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            ${message ? `
                            <!-- Message -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0B0D10; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #00BFFF;">
                                            Message
                                        </h2>
                                        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #9AA4AF; white-space: pre-wrap;">
                                            ${message}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            ` : ''}
                            
                            <!-- Next Steps -->
                            <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #9AA4AF;">
                                <strong style="color: #FFFFFF;">Suggested Next Steps:</strong>
                            </p>
                            <ul style="margin: 0 0 30px 0; padding-left: 20px; font-size: 14px; line-height: 1.8; color: #9AA4AF;">
                                <li>Review the contact information and message</li>
                                <li>Respond to the contact within 24 hours</li>
                                <li>Follow up with additional information about services</li>
                                <li>Schedule a discovery call if appropriate</li>
                            </ul>
                            
                            <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #9AA4AF;">
                                Best regards,<br>
                                <strong style="color: #FFFFFF;">Bionic Solutions Website</strong>
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #0B0D10; text-align: center; border-top: 1px solid #2A2D33;">
                            <p style="margin: 0; font-size: 12px; color: #9AA4AF;">
                                This is an automated notification from the Bionic Solutions contact form.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `;

        // Plain text version
        const textContent = `
New Contact Form Submission

Hello Mohammad,

You have received a new contact form submission from the Bionic Solutions website. Please forward this information to the appropriate team member.

Contact Information:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
${phone ? `- Phone: ${phone}` : ''}

${message ? `Message:\n${message}\n\n` : ''}

Suggested Next Steps:
- Review the contact information and message
- Respond to the contact within 24 hours
- Follow up with additional information about services
- Schedule a discovery call if appropriate

Best regards,
Bionic Solutions Website
        `;

        // Send email via Resend API
        const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Bionic Solutions <onboarding@resend.dev>',
                to: ['x8.mattuzo@gmail.com'],
                subject: `New Contact Form Submission - ${name}`,
                html: htmlContent,
                text: textContent,
            }),
        });

        if (!emailResponse.ok) {
            const errorText = await emailResponse.text();
            console.error('Resend API error:', errorText);
            throw new Error(`Failed to send email: ${errorText}`);
        }

        const emailResult = await emailResponse.json();
        console.log('Contact form email sent successfully:', emailResult);

        // Send confirmation email to the submitter
        const confirmationEmailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Bionic Solutions <onboarding@resend.dev>',
                to: [email],
                subject: 'Thank you for contacting Bionic Solutions',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #00BFFF;">Thank you for contacting Bionic Solutions</h2>
                        <p>Dear ${name},</p>
                        <p>Thank you for reaching out to us. We have received your inquiry and will respond within 24 hours.</p>
                        <p>In the meantime, you might find our Enterprise Framework Implementation Guide helpful:</p>
                        <p><a href="https://sfqfik2njw3n.space.minimax.io/assets/Bionic_Enterprise_Framework_Implementation_Guide.pdf" style="background-color: #00BFFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Download Framework Guide</a></p>
                        <p>Best regards,<br>The Bionic Solutions Team</p>
                    </div>
                `,
                text: `Dear ${name},\n\nThank you for contacting Bionic Solutions. We have received your inquiry and will respond within 24 hours.\n\nBest regards,\nThe Bionic Solutions Team`,
            }),
        });

        if (!confirmationEmailResponse.ok) {
            const errorText = await confirmationEmailResponse.text();
            console.error('Confirmation email error:', errorText);
            // Don't fail the whole request if confirmation email fails
        } else {
            const confirmationResult = await confirmationEmailResponse.json();
            console.log('Confirmation email sent successfully:', confirmationResult);
        }

        // Return success response
        return new Response(JSON.stringify({
            data: {
                success: true,
                emailId: emailResult.id,
                message: 'Contact form submitted successfully!',
                contactDetails: {
                    name,
                    email,
                    company,
                    phone,
                    message
                }
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200
        });

    } catch (error) {
        console.error('Contact form error:', error);

        const errorResponse = {
            error: {
                code: 'CONTACT_FORM_FAILED',
                message: error.message || 'Failed to submit contact form'
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});