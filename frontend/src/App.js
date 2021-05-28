import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [mail, setMail] = useState({destinatario: '', asunto: '', cuerpo: ''})

  const leerInput = e => {
    const campo = e.target.name
    const valor = e.target.value
    setMail({
      ...mail,
      [campo]: valor
    })
  }

  const enviarMail = e => {
    e.preventDefault()
    axios.post('http://localhost:4000/mail', mail)
   .then(() => {
      alert("Mensaje enviado!")
      setMail({destinatario: '', asunto: '', cuerpo: ''})
   })
  }

  return (
    <div>
      <form onSubmit={enviarMail}>
        <input type="text" name="destinatario" placeholder="Dirección del destinatario" 
        value={mail.destinatario} onChange={leerInput}/>
        <input type="text" name="asunto" placeholder="Asunto" 
        value={mail.asunto} onChange={leerInput}/>
        <textarea name="cuerpo" placeholder="Cuerpo del mensaje"
        value={mail.cuerpo} onChange={leerInput}></textarea>
        <input type="submit" value="Enviar Mail" />
      </form>
    </div>
  )
}

export default App
