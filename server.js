const express = require('express')
const cors = require('cors')
require('dotenv').config()
const nodemailer = require('nodemailer')

const app = express()

let transport = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PWD
    },
    tls: {
        rejectUnauthorized: false
    }
})

const amigos = ["Carlos", "Roberto", "Maria"]
app.use(express.json())
app.use(cors())

app.post('/mail', (req, res) => {
    const {destinatario, asunto, cuerpo} = req.body

    // mandar el mail
    let mailOptions = {
        from: 'Compras Efectuadas  <nocontestar@donotreply.com>',
        to: destinatario,
        subject: 'Gracias por tu compra!',
        html: `<h1>Hola</h1>
        <script>
        alert("Hola")
        </script>`
    }
    transport.sendMail(mailOptions, (err) => {
        if (err) console.log(err)
        res.json({success: true})
    })
})


function funcionAmigos() {
    var html = ``
    amigos.map(amigo => html += `<h1>${amigo}</h1>`)
    return html
}

app.listen(4000, () => console.log("App listening on port 4000"))