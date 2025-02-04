import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <main className='grow-1'>
        <h1 className='p-6 font-[Montserrat] text-right text-xl text-blue-800'>Deasarrollo de software<br />& Diseño web</h1>
        <div className='flex flex-wrap'>
          <Outlet />
          <Navbar />
        </div>
      </main>
      <Footer />
    </div>
  )
}