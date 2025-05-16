import { useState, useEffect } from 'react'
import { addMessage } from '../data/db'

export const useContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formWasValidated, setFormWasValidated] = useState(false)
  const [newMessage, setNewMessage] = useState(null)
  const [isSending, setIsSending] = useState(false)
  const [addMessageResponse, setAddMessageResponse] = useState(null)

  useEffect(() => {
    if (newMessage) {
      setIsSending(true)
      addMessage(newMessage).then(() => {
        setAddMessageResponse({
          success: true,
          message: 'Gracias por contactarte! Tu mensaje se envió correctamente y te estaremos contactando a la brevedad.' 
        })
        setIsSending(false)
        setName('')
        setEmail('')
        setMessage('')
        setFormWasValidated(false)
        setNewMessage(null)
      }).catch(error => {
        console.log(error)
        setAddMessageResponse({
          success: false,
          message: 'Algo salió mal y no pudimos enviar tu mensaje. Por favor, vuelve a intentarlo o comunícate con nosotros por aluno de los otros medios.' 
        })
        setIsSending(false)
      })
    }
  }, [newMessage])

  const isValidName = () => name.trim() && name.length < 33
  const isValidEmail = () => email.trim() && /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/i.test(email)
  const isValidMessage = () => message.trim() && message.length < 241

  const handleSubmit = e => {
    e.preventDefault()

    if (isValidName() && isValidEmail() && isValidMessage()) {
      setNewMessage({
        name,
        email,
        message,
      })
    }

    setFormWasValidated(true)
  }

  return {
    nameInput: [name, setName, isValidName],
    emailInput: [email, setEmail, isValidEmail],
    messageInput: [message, setMessage, isValidMessage],
    formWasValidated,
    handleSubmit,
    isSending,
    addMessageResponse,
  }
}