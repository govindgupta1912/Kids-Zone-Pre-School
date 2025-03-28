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
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from "react-router-dom";

// Error Page Component
function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for doesn't exist.</p>
      <Link to={`/Kids-Zone-Pre-School`} className='bg-blue-200 p-4'>go to Home Page</Link>
    </div>
  );
}
// function App() {
//   const [currentPage, setCurrentPage] = useState('home')

//   const renderPage = () => {
//     switch(currentPage) {
//       case 'home':
//         return <Home setCurrentPage={setCurrentPage} />
//       case 'about':
//         return <About setCurrentPage={setCurrentPage} />
//       case 'programs':
//         return <Programs setCurrentPage={setCurrentPage} />
//       case 'admissions':
//         return <Admissions setCurrentPage={setCurrentPage} />
//       case 'facilities':
//         return <Facilities setCurrentPage={setCurrentPage} />
//       case 'gallery':
//         return <Gallery setCurrentPage={setCurrentPage} />
//       case 'testimonials':
//         return <Testimonials setCurrentPage={setCurrentPage} />
//       case 'contact':
//         return <Contact setCurrentPage={setCurrentPage} />
//       default:
//         return <Home setCurrentPage={setCurrentPage} />
//     }
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
//       <main className="flex-grow">
//         {renderPage()}
//       </main>
//       <Footer setCurrentPage={setCurrentPage} />
//     </div>
//   )
// }

function App(){
  return(
      <div className='flex flex-col min-h-screen'>
       <Header/>
       <Outlet/>
       <Footer/>
      </div>
    
  );
};

const approuter = createBrowserRouter(
  createRoutesFromElements(
    <>
   
    <Route path="" element={<App />}>
      <Route index element={<Home />} /> {/* Default Route for "/" */}
      <Route path="about" element={<About />} />
      <Route path="programs" element={<Programs />} />
      <Route path="admissions" element={<Admissions />} />
      <Route path="facilities" element={<Facilities />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="contact" element={<Contact />} />
    </Route>
     {/* Route for ErrorPage without Header and Footer */}
     <Route path="*" element={<ErrorPage />} />
     </>
  )

)

function RootApp() {
  return (
    <RouterProvider router={approuter} /> 
  );
}

export default RootApp;
// export default App
