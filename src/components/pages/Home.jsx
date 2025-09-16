import React from 'react'
import Categories from './category-list/Categories.jsx'
import FirstCrousel from './carousel/FirstCrousel.jsx'
import SectionOne from './sections/SectionOne'
import SecondCarousel from './carousel/SecondCarousel'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/GiftFinder.jsx'
import Banner from './sections/Banner'
import BannerTwo from './sections/BannerTwo'
import {discount, bestsellerProduct, bestsellerProducts, girloutfit, homeDecorItems, tablewareItems,  tablewareItems2, homeDecorItems2, dealsandcategories, columns,} from '../../../data/data'
import Singleproduct from './carousel/Singleproduct'
import SectionFour from './sections/SectionFour'
import SectionFourReverse from './sections/SectionFourReverse'
import SectionGrid from './sections/SectionGrid.jsx'
import Bannerthree from './Bannerthree'
import BrandDirectory from './sections/BrandDirectory'
import SectionEight from './sections/SectionEight.jsx'
import Slider from './carousel/Slider.jsx'
import BulkOrder from './sections/BulkOrder.jsx'

const Home = () => {
  return (
    <>
      <div className='relative'>
        <Categories />

      <FirstCrousel />

      <Slider/>

      <div className='bg-transparent'>
      <SectionOne />
      </div>

      <div className='defc '>
        <SecondCarousel products={bestsellerProducts} title="Our Bestellers" badgeText="Customizable" />
      </div>

      <SectionTwo />

      <div className='mt-lg-2 pt-lg-4 pt-1'>
        <SecondCarousel products={bestsellerProduct} title="Top Selection" badgeText="Customizable" />
      </div>

      <div className='my-3 mx-0 px-0'>
        <Banner />
      </div>

      <div className=' mt-lg-3 pt-lg-2 pt-1 defc'>
        <SecondCarousel products={discount} title="Discount For You" badgeText="Customizable" />
      </div>

      <div className='mt-3 mx-0 p-0'>
        <BannerTwo />
      </div>

      <div className=' mt-lg-3 pt-lg-2 pt-1 defc'>
        <SecondCarousel products={bestsellerProduct} title="Top Rated" badgeText="Customizable" />
      </div>

      <div  className='mt-3 mx-0 px-0'>
      <BannerTwo/>
    </div>

    <div className=' mt-lg-3 pt-lg-2 pt-1 defc'>
      <SecondCarousel products={dealsandcategories} title="Top Deals on Catgories" badgeText="Customizable"/>
    </div>

    <div  className='mt-3 mx-0 px-0'>
      <BannerTwo/>
    </div>

      <div className=' mt-lg-3 pt-lg-2 pt-1 defc'>
        <Singleproduct products={girloutfit} title="Women's Outfits" />
      </div>

      <div className='mt-1'>
        <SectionFour  columns={[ {
          title: 'Tableware & Dinnerware',
          items: tablewareItems,
        },
        {
          title: 'Home Decor Items',
          items: homeDecorItems,
        },
      ]}
      imageColumn={{
        imageUrl: './girl-product-img/girl-1.webp',
        alt: 'Home Decor Showcase',
      }}/>
      </div>
      <div  className='mt-2 mx-0 px-0'>
      <Banner/>
    </div>
      <div className='custom-bg'>
        <SectionFourReverse  columns={[
        {
          type: 'image',
          imageUrl: './card/bear.jpeg',
          alt: 'Girl with Product',
        },
        {
          type: 'grid',
          title: 'Tableware & Dinnerware',
          items: tablewareItems2,
        },
        {
          type: 'grid',
          title: 'Home Decor Items',
          items: homeDecorItems2,
        },
      ]} />

      </div>
      
      <div  className='mt-3 mx-0 px-0'>
      <Banner/>
    </div>

    <div>
      <SectionEight columns={columns}/>
    </div>
    <div  className='mt-3 mx-0 px-0'>
      <BannerTwo/>
    </div>

    <div>
      <SectionGrid />
    </div>
    <div  className='mt-3 mx-0 px-0'>
      <Bannerthree/>
    </div>
    
    <BrandDirectory/>

    <BulkOrder/>
      </div>
    </>
  )
}

export default Home
