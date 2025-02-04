import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className='p-6 bg-blue-400'>
      <a href='/' aria-label='Inicio'>
        <img className='max-w-4/10 sm:max-w-none' src={logo} alt='Logo Cracodea' />
      </a>
    </header>
  )
}