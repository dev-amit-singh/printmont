import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import Header from './components/header/Header'
import Home from './components/pages/Home'
import Footer from './components/footer/Footer'
import MobileHeader from './components/header/MobileHeader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        {/* Desktop Header */}
      <div className="d-none d-lg-block headon">
        <Header />
      </div>
      {/* Mobile Header */}
      <div className="d-block d-lg-none sticky-navbar">
        <MobileHeader />
      </div>
      <div className='home-main px-1'>

      <Home/>
      </div>
      <Footer/>
      

    </>
  )
}

export default App
