import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='row g-1 g-lg-0'>
        <div className='col-md-6'><img width={"100%"} height={"225px"}
      src="./section-img/add1.png"
      className="object-fit-cover rounded img-fluid"
      alt="online-shopping "
    /></div>

        <div className='col-md-6'><img width={"100%"} height={"225px"}
      src="./section-img/add2.png"
      className="object-fit-cover img-fluid rounded"
      alt="lap-hoodie"
    /></div>
      </div>

    </div>
    </>
  )
}

export default Banner