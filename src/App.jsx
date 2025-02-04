import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:id' element={<Portfolio />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App