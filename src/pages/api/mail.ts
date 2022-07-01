import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {

  let transporter = nodemailer.createTransport({
    host: 'smtp.umbler.com',
    port: 587,
    auth: {
      user: 'mails@lucasgoncalves.tech',
      pass: '917382465Lucas!'
    }
  })

  const mailOptions = {
    from: 'mails@lucasgoncalves.tech',
    to: 'dev.lucas.goncalves@gmail.com',
    subject: 'Vindo do Website',
    html: '<p>Olá, esta é apenas uma mensagem de teste</p>'
  }

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err)
      console.log(err)
    else
      console.log(info);
  });

}