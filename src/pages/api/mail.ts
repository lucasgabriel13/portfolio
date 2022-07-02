import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {

  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'dev.lucas.goncalves@gmail.com',
    replyTo: email,
    subject: 'CONTATO ATRAVÉS DO SITE',
    html: `
    <p>Nome: ${name}</p>
    <p>Email: ${email}</p>
    <p>Mensagem: ${message}</p>
    `
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(400).end(err.message);
    }
    else {
      return res.status(200).send("Mensagem enviada com sucesso!")
    }
  });

}