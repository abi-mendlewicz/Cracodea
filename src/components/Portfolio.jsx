import hsuCover from '../assets/portfolio/hsu.webp'
import uhlCover from '../assets/portfolio/uhl.webp'
import croquetaCover from '../assets/portfolio/croqueta.webp'
import basilisaCover from '../assets/portfolio/basilisa.webp'

export default function Portfolio() {
  return (
    <section className='px-6 basis-full md:basis-4/5'>
      <h2 className='py-4 font-[Montserrat] text-lg text-blue-800'>Algunos de nuestros trabajos...</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div>
          <a
            className='relative'
            href='https://hogareshsu.com'
            target='_blank'
            rel='noreferrer'
            onMouseEnter={e => {
              e.currentTarget.querySelector('div').classList.remove('opacity-0')
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('div').classList.add('opacity-0')
            }}
          >
            <img className='w-full' src={hsuCover} alt='Captura de pantalla' />
            <div className='absolute bottom-0 left-0 p-4 w-full bg-black/80 text-blue-400 opacity-0 transition-opacity duration-1000'>
              <h3 className='mb-2 text-lg font-semibold'>Home Staging Uruguay</h3>
              <p>https://hogareshsu.com</p>
            </div>
          </a>
        </div>
        <div>
          <a
            className='relative'
            href='https://basilisa.org'
            target='_blank'
            rel='noreferrer'
            onMouseEnter={e => {
              e.currentTarget.querySelector('div').classList.remove('opacity-0')
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('div').classList.add('opacity-0')
            }}
          >
            <img className='w-full' src={basilisaCover} alt='Captura de pantalla' />
            <div className='absolute bottom-0 left-0 p-4 w-full bg-black/80 text-blue-400 opacity-0 transition-opacity duration-1000'>
              <h3 className='mb-2 text-lg font-semibold'>Editorial Basilisa</h3>
              <p>https://basilisa.org</p>
            </div>
          </a>
        </div>
        <div>
          <a
            className='relative'
            href='https://croqueta.uy'
            target='_blank'
            rel='noreferrer'
            onMouseEnter={e => {
              e.currentTarget.querySelector('div').classList.remove('opacity-0')
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('div').classList.add('opacity-0')
            }}
          >
            <img className='w-full' src={croquetaCover} alt='Captura de pantalla' />
            <div className='absolute bottom-0 left-0 p-4 w-full bg-black/80 text-blue-400 opacity-0 transition-opacity duration-1000'>
              <h3 className='mb-2 text-lg font-semibold'>Croqueta Estudio Creativo</h3>
              <p>https://croqueta.uy</p>
            </div>
          </a>
        </div>
        <div>
          <a
            className='relative'
            href='https://unicohairlab.com'
            target='_blank'
            rel='noreferrer'
            onMouseEnter={e => {
              e.currentTarget.querySelector('div').classList.remove('opacity-0')
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('div').classList.add('opacity-0')
            }}
          >
            <img className='w-full' src={uhlCover} alt='Captura de pantalla' />
            <div className='absolute bottom-0 left-0 p-4 w-full bg-black/80 text-blue-400 opacity-0 transition-opacity duration-1000'>
              <h3 className='mb-2 text-lg font-semibold'>Único Hair Lab</h3>
              <p>https://unicohairlab.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}