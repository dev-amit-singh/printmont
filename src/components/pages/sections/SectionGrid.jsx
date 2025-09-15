import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import SectionOne from './SectionOne';
import Banner from './Banner';
import BannerTwo from './BannerTwo';
import Bannerthree from '../Bannerthree';

const SectionGrid = () => {
  return (
    <div className='container-fluid p-0 px-2 pt-4 custom-bg m-0'>
      <div className='row'>

        {/* Box 1 - Women's */}
        <div className='col-12 col-md-12 col-lg-4 mb-4'>
          <div className='px-2 pt-2 d-flex flex-column bg-white rounded-3'>
            <div className='pb-2 d-flex justify-content-between align-items-center'>
              <h4>Women's</h4>
              <IoIosArrowDroprightCircle size={30} className='text-primary me-4' />
            </div>

            <div className='border-top border-bottom d-flex justify-content-around custom-space  align-items-center mt-1 mb-1'>

              {/* Big Image */}
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='square-container rounded-3'>
                  <img src="./women-dress/women-dress-3.jpeg" alt="img" />
                </div>
                <p className='m-0 p-0 fw-bold product-name-font'>T-shirt</p>
                <p className='m-0 p-0 fs-8 offer'>Min 50% off</p>
              </div>
                <div className="vr mx-3 bd" ></div>
              {/* Two Small Images */}
              <div className='d-flex flex-column justify-content-center align-items-center gap-3 mt-2'>
                <div className='d-flex flex-column justify-content-center align-items-center px-2 '>
                  <div className='square-container rounded-3'>
                    <img src="./women-dress/women-dress-4.jpeg" alt="img" />
                  </div>
                  <p className='m-0 p-0 fw-bold'>Watch</p>
                  <span className='m-0 p-0 fs-8 offer'>Top offer</span>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center px-2'>
                  <div className='square-container rounded-3'>
                    <img src="./women-dress/women-dress-5.jpeg" alt="img" />
                  </div>
                  <p className='m-0 p-0 fw-bold'>Watch</p>
                  <span className='m-0 p-0 fs-8 offer'>Top offer</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-transparent d-flex d-lg-none'>
      <BannerTwo />
      </div>
        </div>
        

        {/* Box 2 - Men's */}
        <div className='col-12 col-md-12 col-lg-4 mb-4'>
          <div className='px-2 pt-2 d-flex flex-column bg-white rounded-3'>
            <div className='pb-2 d-flex justify-content-between align-items-center'>
              <h4>Men's</h4>
              <IoIosArrowDroprightCircle size={30} className='text-primary me-4' />
            </div>

            <div className='border-top border-bottom d-flex justify-content-around align-items-center mt-1 mb-1 custom-space '>
              <div className='d-flex flex-column justify-content-center align-items-center '>
                <div className='square-container rounded-3'>
                  <img src="./men_shirt/men-shirt-2.jpeg" alt="img" />
                </div>
                <p className='m-0 p-0 fw-bold product-name-font'>Shirt</p>
                <p className='m-0 p-0 fs-8 offer'>Min 40% off</p>
              </div>
              <div className="vr bd" ></div>

              <div className='d-flex flex-column justify-content-center align-items-center gap-3 mt-2'>
                <div className='d-flex flex-column justify-content-center align-items-center px-2 '>
                  <div className='square-container rounded-3'>
                    <img src="./men_shirt/men-shirt-3.jpeg" alt="img" />
                  </div>
                  <p className='m-0 p-0 fw-bold'>Watch</p>
                  <span className='m-0 p-0 fs-8 offer'>Top offer</span>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center px-2 '>
                  <div className='square-container rounded-3'>
                    <img src="./men_shirt/men-shirt-4.jpeg" alt="img" />
                  </div>
                  <p className='m-0 p-0 fw-bold'>Watch</p>
                  <span className='m-0 p-0 fs-8 offer'>Top offer</span>
                </div>
              </div>
            </div>
          </div>
          <div className='d-block d-lg-none'>
            <Bannerthree/>
          </div>
        </div>

        {/* Box 3 - Kid's */}
        <div className='col-12 col-md-12 col-lg-4 mb-4'>
          <div className='px-2  pt-2 d-flex flex-column bg-white rounded-3'>
            <div className='pb-2  d-flex justify-content-between align-items-center'>
              <h4>Kid's</h4>
              <IoIosArrowDroprightCircle size={30} className='text-primary me-4' />
            </div>

            <div className='border-top border-bottom d-flex justify-content-around align-items-center mt-1 mb-1 '>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='square-container rounded-3'>
                  <img src="./kid-dress/kid-dress-4.jpeg" alt="img" />
                </div>
                <p className='m-0 p-0 fw-bold product-name-font'>Frock</p>
                <p className='m-0 p-0 fs-8 offer'>Min 30% off</p>
              </div>

              <div className="vr mx-3 bd" ></div>

              <div className='d-flex flex-column justify-content-center align-items-center gap-3 mt-2'>
                <div className='d-flex flex-column justify-content-center align-items-center px-2 '>
                  <div className='square-container rounded-3'>
                    <img src="./kid-dress/kid-dress-2.jpeg" alt="img" />
                  </div>
                  <p className='m-0 p-0 fw-bold'>Toy</p>
                  <span className='m-0 p-0 fs-8 offer'>Top offer</span>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center px-2'>
                  <div className='square-container rounded-3'>
                    <img src="./kid-dress/kid-dress-3.jpeg" alt="img" />
                  </div>
                  <p className='m-0 p-0 fw-bold'>Toy</p>
                  <span className='m-0 p-0 fs-8 offer'>Top offer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionGrid;
