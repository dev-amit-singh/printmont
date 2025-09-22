import React from 'react'
import GiftFinder from './GiftFinder'


const SectionTwo = () => {
  return (
    <>
    <div className='container-fluid  d-flex flex-column align-items-center justify-content-center gap-3 bg-gray mt-2 rounded-md p-0'>
          {/* max-height-220px */}
           <img src="./section-img/banner-5.jpeg" alt=" banner-5" width={"100%"}  className='col-12 rounded section-two-img'/>
           <p className='fw-medium ps-3 find-product d-none d-md-block'>Find Gift for your Business and Loved Ones</p>
           <div className='find_product_main'>

            <GiftFinder/>
           </div>

    </div>
    </>
  )
}

export default SectionTwo