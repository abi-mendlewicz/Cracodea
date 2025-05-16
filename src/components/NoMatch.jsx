import { GoArrowRight } from 'react-icons/go'
import { NavLink } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div className='px-6 basis-full md:basis-4/5 font-[Montserrat] text-blue-800'>
      <h1 className='my-4 mx-6 text-2xl font-semibold text-blue-800'>404</h1>
      <p className='my-4 mx-6'>Te encuentras perdido...</p>
      <NavLink
        className='my-4 mx-6 flex items-center transition text-blue-400'
        to='/'
        onMouseEnter={e => {
          e.currentTarget.querySelector('svg').classList.remove('hidden')
        }}
        onMouseLeave={e => {
          e.currentTarget.querySelector('svg').classList.add('hidden')
        }}
      >
        Volver al inicio
        <GoArrowRight className='motion-safe:animate-bounce-right hidden' />
      </NavLink>
    </div>
  )
}