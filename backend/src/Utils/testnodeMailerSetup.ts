import transporter from "./nodeMailerSetup.js";

(async () => {
  try {
    await transporter.verify();
    console.log("✅ Email transporter ready");
  } catch (err) {
    console.error("❌ Email transporter error:", err);
  }
})();
