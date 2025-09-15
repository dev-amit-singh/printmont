import React from 'react'

import Categories from './category-list/Categories'
import BannerTwo from './sections/BannerTwo'
import Bannerthree from './Bannerthree'
import FirstCrousel from './carousel/FirstCrousel'
import Slider from './carousel/Slider'
import SectionOne from './sections/SectionOne'
import SecondCarousel from './carousel/SecondCarousel'


import { bestsellerProduct, bestsellerProducts, budsItems, dealsandcategories, girloutfit, homeDecorItems, mensFashionItems, mobileItems, productList, sampleProducts, specialoffer, tablewareItems, womensFashionItems } from '../../../data/data'
import SingleProduct from './carousel/Singleproduct'
import SectionTwo from './sections/SectionTwo'
import ProductGrid from './sections/ProductGrid'
import SectionFour from './sections/SectionFour'
import SectionNine from './sections/SectionNine'
import Banner from './sections/Banner'
import SectionEightSingle from './sections/SectionEightSingle'
import ProductList from './sections/ProductList'
import SectionSix from './sections/SectionGrid'
import SectionGrid from './sections/SectionGrid'

const MobHome = () => {
  return (
    
    <>
    <div className='bg-white'>
        <div> <Categories/></div>

        <div><FirstCrousel/></div>

        <div><Slider/></div>

        <div><SectionOne/></div>

        <div className='bg-white'>
            <SingleProduct products={girloutfit} title="Recently Viewed" />
        </div>

        <div><SectionTwo/></div>

        <div><ProductGrid/></div>

        <div>
            <SectionFour   columns={[ {
                  title: 'Tableware & Dinnerware',
                  items: tablewareItems,

                },
            ]}
            backgroundImageUrl="./bg/super.png"
            />
        </div>

        <div className='mt-2'>
            <SingleProduct products={specialoffer} backgroundImageUrl="./bg/flashsale.png"/>
        </div>

        <div><SectionNine products={sampleProducts}/></div>

        <div className='bg-white'>
            <SectionFour   columns={[ {
                  title: 'Men\'s Fashion',
                  items: mensFashionItems,

                },
            ]}
            backgroundImageUrl="./bg/bg-3.png"
            />
        </div>

        <div>
            <SectionFour   columns={[ {
                  title: 'Women\'s Fashion',
                  items: womensFashionItems,

                },
            ]}
            backgroundImageUrl="./bg/bg-4.png"
            />
        </div>

        <div className='mt-2'>
        <SecondCarousel products={bestsellerProduct} title="Top Selection" />
      </div>

      <div><Banner/></div>

      <div className='mt-2'>
        <SecondCarousel products={bestsellerProducts} title="Discount For You" />
      </div>

      <div><Banner/></div>

      <div className='mt-2'>
        <SecondCarousel products={dealsandcategories} title="Top Deals on categories" />
      </div>

      <div><Banner/></div>

      <div className=' mt-lg-3 pt-lg-2 pt-1 defc'>
        <SingleProduct products={girloutfit} title="Women's" />
      </div>

      <div><SectionOne/></div>


      <div>
         <BannerTwo/>
      </div>
      
      <div>
            <SectionFour   columns={[ {
                  title: 'EarBuds & Headphones',
                  items: budsItems,
                },]}
            backgroundImageUrl="./bg/bg-4.png"
            />
        </div>

        <div className='mt-2'>
        <SecondCarousel products={dealsandcategories} title="Top Deals on categories" />
      </div>

      <div><ProductList products={productList}/></div>

        <div><ProductGrid/></div>

        <div><ProductList products={productList}/></div>

        <div>
            <SectionFour   columns={[ {
                  title: 'Mobiles',
                  items: mobileItems,
                },]}
            backgroundImageUrl="./bg/bg-5.png"
            />
        </div>

      <div className='mt-2'><Banner/></div>

      <div>
        <SectionGrid/>
      </div>

      <div className=''><Bannerthree/></div>

      <div className='mt-2'>
            <SectionFour   columns={[ {
                  title: 'Men\'s Fashion',
                  items: mensFashionItems,

                },
            ]}
            backgroundImageUrl="./bg/bg-3.png"
            />
        </div>

        <div>
            {/* <Bannerthree/> */}
        </div>
    </div>
    </>
  )
}

export default MobHome