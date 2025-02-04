import { FaRegEnvelope } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='flex justify-between items-baseline mt-8 py-4 pb-2 px-6 bg-black text-blue-400'>
      <div>© 2025 <a href='/'>Cracodea</a></div>
      <div className='flex'>
        <a className='text-blue-400' href='mailto:abi_men@yahoo.com'>
          <FaRegEnvelope size={32} />
        </a>
        <a className='ps-4 text-blue-400' href='https:wa.me/+59898000172'>
          <FaWhatsapp size={32} />
        </a>
      </div>
    </footer>
  )
}