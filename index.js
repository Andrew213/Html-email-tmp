// test html

import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const server = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
  service: "yandex",
  host: "smtp.yandex.ru",
  port: 465,
  auth: {
    user: "hhbotmailer@yandex.ru",
    pass: process.env.YANDEX_PASS,
  },
});
try {
  const html = fs.readFileSync(__dirname + "/index.html", {
    encoding: "utf-8",
  });

  transporter.sendMail({
    from: "hhbotmailer@yandex.ru",
    to: "mega.zip2013@gmail.com",
    subject: "test Staria mail",
    html,
  });
} catch (err) {
  console.log(`send mail err `, err);
}

server.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
