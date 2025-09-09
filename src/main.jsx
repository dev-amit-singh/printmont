import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SectionSix from './components/pages/sections/SectionSix.jsx';
// import Test from './components/pages/Test.jsx';
// import { sideProducts, featuredProduct } from '../data/data.js';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SectionSix/> */}
    {/* <Test/> */}
    {/* <Test title="Top Rated" */}
      {/* featuredProduct={featuredProduct} */}
      {/* sideProducts={sideProducts}/> */}
  </StrictMode>,
)
