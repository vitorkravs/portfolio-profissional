'use client'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { FormContainer, Input, TextArea } from './styles'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false) // Estado para controlar a exibição da mensagem

  const handleSubmit = (e: any) => {
    emailjs.init('fvkhI1Enx63ZeuZ_w')
    e.preventDefault()

    const emailData = {
      to_email: 'vitorkravs3@gmail.com',
      from_name: name,
      from_email: email,
      message,
    }

    emailjs
      .send('service_tbx75h3', 'template_rdpfkto', emailData)
      .then((response: any) => {
        console.log('Email enviado com sucesso!', response)
        setEmailSent(true) // Atualiza o estado para mostrar a mensagem
      })
      .catch((error: any) => {
        console.error('Erro ao enviar o email:', error)
      })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextArea
        placeholder="Deixe sua mensagem e coloque seu email no final."
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {emailSent && <p>Email enviado com sucesso!</p>}{' '}
      {/* Mostra a mensagem se o email for enviado */}
      <button type="submit">Enviar</button>
    </FormContainer>
  )
}
