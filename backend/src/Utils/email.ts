import  transporter  from "./nodeMailerSetup.js"; 


// send new account email
export const sendNewAccountEmail = async (to: string, name: string) => {
  const mailOptions = {
    from: `"App Name" <${process.env.EMAIL_USER}>`,
    to,
    subject: "🎉 Welcome! Your Account Has Been Created",
    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <h2 style="color:#4CAF50;">Hello ${name},</h2>
        <p>Your account has been successfully created! 🎉</p>

        <p>You can now log in and start using your account immediately:</p>
        <a href="#" style="
          display:inline-block;
          padding:12px 24px;
          margin:20px 0;
          background-color:#4CAF50;
          color:#fff;
          text-decoration:none;
          border-radius:6px;
          font-weight:bold;
        ">Log In to Your Account</a>

        <p>If you did not create this account, please contact our support immediately.</p>

        <hr />
        <p style="font-size:12px; color:#777;">
          Thank you for joining <strong>App Name</strong>!<br />
          &copy; 2026 App Name. All rights reserved.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`New account email sent to ${to}: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error("Error sending new account email:", error);
    return false;
  }
};


// login email notification
export const sendLoginSuccessEmail = async (to: string, name: string) => {
  const mailOptions = {
    from: `"App Name" <${process.env.EMAIL_USER}>`,
    to,
    subject: "✅ Login Successful",
    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <h2 style="color:#4CAF50;">Hello ${name},</h2>
        <p>We noticed a successful login to your account! ✅</p>

        <p>If this was you, no action is needed. You can continue using your account safely.</p>

        <p>If you did NOT log in, we recommend changing your password immediately:</p>
       

        <hr />
        <p style="font-size:12px; color:#777;">
          This is an automated message from <strong>App Name</strong>.  
          &copy; 2026 App Name. All rights reserved.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Login success email sent to ${to}: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error("Error sending login success email:", error);
    return false;
  }
};


export const sendTemporaryPasswordEmail = async (to: string, name: string, tempPassword: string) => {
  const mailOptions = {
    from: `"App Name" <${process.env.EMAIL_USER}>`,
    to,
    subject: "🔑 Temporary Password",
    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <h2 style="color:#4CAF50;">Hello ${name},</h2>
        <p>We received a request to reset your password. Here is your temporary password:</p>

        <p style="font-size:18px; font-weight:bold; color:#f44336; background:#f9f9f9; padding:10px; border-radius:5px; display:inline-block;">
          ${tempPassword}
        </p>

        <p>Please use this temporary password to log in, and make sure to <strong>change your password immediately</strong> after logging in for security purposes.</p>

        <a href="https://yourapp.com/login" style="
          display:inline-block;
          padding:12px 24px;
          margin:20px 0;
          background-color:#4CAF50;
          color:#fff;
          text-decoration:none;
          border-radius:6px;
          font-weight:bold;
        ">Log In to Your Account</a>

        <p>If you did not request a password reset, please contact our support immediately.</p>

        <hr />
        <p style="font-size:12px; color:#777;">
          This is an automated message from <strong>App Name</strong>.<br />
          &copy; 2026 App Name. All rights reserved.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Temporary password email sent to ${to}: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error("Error sending temporary password email:", error);
    return false;
  }
};