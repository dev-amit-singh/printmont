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
      <div className="d-none d-lg-block">
        <Header />
      </div>
      {/* Mobile Header */}
      <div className="d-block d-lg-none">
        <MobileHeader />
      </div>
   
      <Home/>
      <Footer/>
      

    </>
  )
}

export default App
