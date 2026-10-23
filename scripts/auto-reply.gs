// Google Apps Script web app that sends an automatic acknowledgement email.
// Deploy from script.google.com: Deploy > New deployment > Web app,
// Execute as: Me, Who has access: Anyone.

const OWNER_EMAIL = "dol.brian23@gmail.com";
const SENDER_NAME = "Brian Dol";
const COOLDOWN_SECONDS = 3600;

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    if (p._gotcha) return reply_();

    const email = String(p.email || "").trim().slice(0, 254);
    const name = String(p.name || "").replace(/[\r\n]+/g, " ").trim().slice(0, 100) || "there";
    const subject = String(p.subject || "").replace(/[\r\n]+/g, " ").trim().slice(0, 150);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply_();

    // One automatic reply per address per hour, to limit abuse of this endpoint.
    const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, email.toLowerCase());
    const key = "sent:" + Utilities.base64EncodeWebSafe(digest);
    const cache = CacheService.getScriptCache();
    if (cache.get(key)) return reply_();
    cache.put(key, "1", COOLDOWN_SECONDS);

    const topic = subject ? ' about "' + subject + '"' : "";
    const text =
      "Hi " + name + ",\n\n" +
      "Thank you for reaching out" + topic + ". I've received your message and will review it " +
      "personally. I'll get back to you as soon as I can.\n\n" +
      "In the meantime, you can find my work and CV at https://portfolio.briandol.workers.dev/\n\n" +
      "Best regards,\nBrian Dol\nSenior Full Stack Engineer\n\n" +
      "This is an automatic confirmation. You can reply to this email to reach me directly.";

    GmailApp.sendEmail(email, "Thanks for reaching out, I've received your message", text, {
      name: SENDER_NAME,
      replyTo: OWNER_EMAIL,
    });
  } catch (error) {
    console.error(error);
  }
  return reply_();
}

function reply_() {
  return ContentService.createTextOutput("ok");
}
