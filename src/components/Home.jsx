import { useState, useEffect } from 'react'
import { FaConnectdevelop } from 'react-icons/fa6'
import { GiSandsOfTime } from 'react-icons/gi'
import { SlSupport } from 'react-icons/sl'
import { GrOptimize } from 'react-icons/gr'

export default function Home() {
  const [activeIcon, setActiveIcon] = useState(0)
  const [slideTitle, setSlideTitle] = useState('')
  const [slideText, setSlideText] = useState('')

  useEffect(() => {
    switch (activeIcon) {
      case 0:
        setSlideTitle('Desarrollo a medida')
        setSlideText('Cada solución es diseñada específicamente para las necesidades de tu negocio.')
        break
    
      case 1:
        setSlideTitle('Diseño optimizado')
        setSlideText('Diseños modernos y responsivos para que tu página web funcione en todos los dispositivos.')
        break
    
      case 2:
        setSlideTitle('Plazos de entrega claros')
        setSlideText('Compromiso con tiempos de entrega rápidos y eficientes.')
        break
    
      case 3:
        setSlideTitle('Soporte continuo')
        setSlideText('Te acompañamos después del lanzamiento con soporte y mantenimiento.')
    }

    const slideTimer = setTimeout(() => {
      const nextActiveIcon = activeIcon > 2 ? 0 : activeIcon + 1
      setActiveIcon(nextActiveIcon)
    }, 3000)

    return () => {
      clearTimeout(slideTimer)
    }
  }, [activeIcon])
  
  return (
    <section className='px-6 basis-full md:basis-4/5'>
      <div className='max-w-sm mx-auto'>
        <h2 className='py-4 font-[Montserrat] text-lg text-blue-800'>Diseñamos soluciones digitales a la medida, optimizando tu presencia online y eficiencia operativa.</h2>
        <div className='flex justify-between w-full'>
          <div
            className='flex justify-center py-8 cursor-pointer'
            onClick={() => setActiveIcon(0)}
          >
            <FaConnectdevelop className={activeIcon === 0 ? 'text-blue-800' : 'text-blue-400'} size={48} />
          </div>
          <div
            className='flex justify-center py-8 cursor-pointer'
            onClick={() => setActiveIcon(1)}
          >
            <GrOptimize className={activeIcon === 1 ? 'text-blue-800' : 'text-blue-400'} size={48} />
          </div>
          <div
            className='flex justify-center py-8 cursor-pointer'
            onClick={() => setActiveIcon(2)}
          >
            <GiSandsOfTime className={activeIcon === 2 ? 'text-blue-800' : 'text-blue-400'} size={48} />
          </div>
          <div
            className='flex justify-center py-8 cursor-pointer'
            onClick={() => setActiveIcon(3)}
          >
            <SlSupport className={activeIcon === 3 ? 'text-blue-800' : 'text-blue-400'} size={48} />
          </div>
        </div>
        <div className='text-blue-800'>
          <h3 className='mb-2 text-lg font-semibold'>{slideTitle}</h3>
          <p>{slideText}</p>
        </div>
      </div>
    </section>
  )
}