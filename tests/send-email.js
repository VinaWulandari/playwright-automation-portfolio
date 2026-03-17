require('dotenv').config();
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Ambil environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO;

// Path ke folder allure-results
const resultsPath = path.resolve(__dirname, '../allure-results/');
const testCases = new Set();

let passed = 0, failed = 0;

fs.readdirSync(resultsPath).forEach(file => {
  if (file.endsWith('.json')) {
    const json = JSON.parse(fs.readFileSync(path.join(resultsPath, file), 'utf-8'));
    const uniqueId = json.fullName || json.name; // test case unik
    if (!testCases.has(uniqueId)) {
      testCases.add(uniqueId);
      if (json.status === 'passed') passed += 1;
      else if (json.status === 'failed') failed += 1;
    }
  }
});

const total = testCases.size;
console.log(`Total: ${total}, Passed: ${passed}, Failed: ${failed}`);

// Body email mirip GitHub workflow
const emailText = `
Playwright Test Automation Finished

Summary:
Total tests: ${total}
Passed: ${passed}
Failed: ${failed}

Download full Allure report from folder: allure-report/
`;

// Kirim email
async function main() {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: "Allure Test Report (Local Run)",
      text: emailText
    });

    console.log("✅ Email terkirim, ID:", info.messageId);
  } catch (err) {
    console.error("❌ Gagal kirim email:", err);
  }
}

main();