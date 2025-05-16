import { useContactForm } from '../hooks/contact'
import { LuSendHorizontal } from 'react-icons/lu'
import { ImSpinner2 } from 'react-icons/im'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { RiErrorWarningLine } from 'react-icons/ri'

export default function Contact() {
  const {formWasValidated, handleSubmit, isSending, addMessageResponse, ...formData} = useContactForm()
  const [name, setName, isValidName] = formData.nameInput
  const [email, setEmail, isValidEmail] = formData.emailInput
  const [message, setMessage, isValidMessage] = formData.messageInput

  return (
    <section className='px-6 basis-full md:basis-4/5'>
      <form
        className='max-w-sm mx-auto'
        onSubmit={e => handleSubmit(e)}
      >
        <input
          className='block p-2 w-full border-b focus:outline-hidden focus:bg-blue-50'
          type='text'
          value={name}
          placeholder='Nombre'
          onChange={e => setName(e.target.value)}
          aria-label='Nombre'
        />
        {formWasValidated && !isValidName() &&
        <p className='mt-2 text-sm text-red-400'>Debes proporcionar un nombre válido no mayor a 32 cracteres.</p>}

        <input
          className='block mt-8 p-2 w-full border-b focus:outline-hidden focus:bg-blue-50'
          type='email'
          value={email}
          placeholder='Correo electrónico'
          onChange={e => setEmail(e.target.value)}
          aria-label='Correo electrónico'
        />
        {formWasValidated && !isValidEmail() &&
        <p className='mt-2 text-sm text-red-400'>Debes proporcionar un correo electrónico válido.</p>}

        <textarea
          className='block mt-8 p-2 w-full border-b focus:outline-hidden focus:bg-blue-50'
          value={message}
          rows={5}
          placeholder='Cuerpo del mensaje'
          onChange={e => setMessage(e.target.value)}
          aria-label='Cuerpo del mensaje'
        />
        {formWasValidated && !isValidMessage() &&
        <p className='mt-2 text-sm text-red-400'>Debes proporcionar un mensaje válido no mayor a 240 cracteres</p>}

        <button
          className='flex items-center mt-8 text-blue-400 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'
          type='submit'
          onMouseEnter={e => {
            if (!isSending) {
              e.currentTarget.querySelector('svg').classList.add('motion-safe:animate-bounce-right')
            }
          }}
          onMouseLeave={e => {
            if (!isSending) {
              e.currentTarget.querySelector('svg').classList.remove('motion-safe:animate-bounce-right')
            }
          }}
          disabled={formWasValidated && (!isValidName() || !isValidEmail() || !isValidMessage())}
        >
          <span className='me-2'>{isSending ? 'Enviando mensje' : 'Enviar'}</span>
          {isSending
          ? <ImSpinner2 className='animate-spin' />
          : <LuSendHorizontal />}
        </button>
        {addMessageResponse &&
        <p className={`my-6 text-${addMessageResponse.success ? 'green' : 'red'}-400`}>
          {addMessageResponse.success
          ? <FaRegCircleCheck className='inline me-2 text-green-400' />
          : <RiErrorWarningLine className='inline me-2 text-red-400' />}
          {addMessageResponse.message && addMessageResponse.message}
        </p>}
      </form>
    </section>
  )
}