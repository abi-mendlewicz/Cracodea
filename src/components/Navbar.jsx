import { useLocation, NavLink } from 'react-router-dom'
import { GoArrowRight } from 'react-icons/go'

export default function Navbar() {
  const currentLocation = useLocation()
  const currentPathname = currentLocation.pathname

  return (
    <nav className='py-4 px-6 basis-full md:basis-1/5 text-right -order-1 md:order-1'>
      <ul>
        <li>
          <NavLink
            className={({isActive}) => isActive ? 'flex justify-end items-center transition text-blue-800' : 'flex justify-end items-center transition hover:-translate-x-4 text-blue-400'}
            to='contacto'
            onMouseEnter={e => {
              currentPathname !== '/contacto' && e.currentTarget.querySelector('svg').classList.remove('hidden')
            }}
            onMouseLeave={e => {
              currentPathname !== '/contacto' && e.currentTarget.querySelector('svg').classList.add('hidden')
            }}
          >
            Contacto
            {currentPathname !== '/contacto' &&
            <GoArrowRight className='motion-safe:animate-bounce-right hidden' />}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => isActive ? 'flex justify-end items-center transition text-blue-800' : 'flex justify-end items-center transition hover:-translate-x-4 text-blue-400'}
            to='portfolio'
            onMouseEnter={e => {
              currentPathname !== '/portfolio' && e.currentTarget.querySelector('svg').classList.remove('hidden')
            }}
            onMouseLeave={e => {
              currentPathname !== '/portfolio' && e.currentTarget.querySelector('svg').classList.add('hidden')
            }}
          >
            Ver trabajos
            {currentPathname !== '/portfolio' &&
            <GoArrowRight className='motion-safe:animate-bounce-right hidden' />}
          </NavLink>
        </li>
        {currentPathname !== '/' &&
        <li>
          <NavLink
            className='flex justify-end items-center transition hover:-translate-x-4 text-blue-400'
            to='/'
            onMouseEnter={e => {
              e.currentTarget.querySelector('svg').classList.remove('hidden')
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('svg').classList.add('hidden')
            }}
          >
            Inicio
            <GoArrowRight className='motion-safe:animate-bounce-right hidden' />
          </NavLink>
        </li>}
      </ul>
    </nav>
  )
}