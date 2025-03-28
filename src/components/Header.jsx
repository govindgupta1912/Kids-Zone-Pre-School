import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: '/', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Programs' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' }
  ]

  return (
    <header className="bg-white shadow-md -top-2 z-10 sticky">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to={``} >
          <div className="text-2xl h-14 w-52 font-bold text-primary">
            {/* <span onClick={() => {setCurrentPage('home');
              setIsMenuOpen(false)}} className="cursor-pointer">
            <span className="text-accent">Kids</span> Zone <span className="text-secondary">Pre-School</span>
            </span> */}
            <img className='h-full w-full' src="kidsZoneSchoolLogo.jpeg" alt="logo" />

          </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link to={item.id}
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`py-2 transition duration-300 border-b-2 ${
                currentPage === item.id 
                  ? 'border-primary text-primary font-medium' 
                  : 'border-transparent hover:text-primary hover:border-primary/30'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 rounded-md hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-3 flex flex-col space-y-3">
            {navItems.map(item => (
              
              <Link
              to={item.id}
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id)
                  setIsMenuOpen(false)
                }}
                className={`py-2 text-left ${
                  currentPage === item.id 
                    ? 'text-primary font-medium' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                 
                {item.label}
                </Link>
              
              
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 