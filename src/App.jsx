import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Admissions from './pages/Admissions'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'about':
        return <About setCurrentPage={setCurrentPage} />
      case 'programs':
        return <Programs setCurrentPage={setCurrentPage} />
      case 'admissions':
        return <Admissions setCurrentPage={setCurrentPage} />
      case 'facilities':
        return <Facilities setCurrentPage={setCurrentPage} />
      case 'gallery':
        return <Gallery setCurrentPage={setCurrentPage} />
      case 'testimonials':
        return <Testimonials setCurrentPage={setCurrentPage} />
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
