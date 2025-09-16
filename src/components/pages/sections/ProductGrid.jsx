import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { gridproducts } from '../../../../data/data';

const ProductGrid = () => {
    return (
        <div className="container mt-4 mt-lg-3">
            <h5 className="mb-1 mb-lg-3">End of Season Sale</h5>

            <div className="row gap-0">
                {gridproducts.map((item) => (
                    <div
                        key={item.id}
                        className="col-4 col-sm-4 mb-3 m-0 p-0 d-flex justify-content-center gap-1"
                    >
                        <div
                            className="card text-center bd p-1"
                            style={{
                                width: '380px',        // Set your desired width
                                maxWidth: '100%',      // Prevent overflow on small screens
                                margin: '3px', // Center the card if needed
                            }}
                        >

                            {/* ✅ Square image container */}
                            <div
                                className="w-100 ratio ratio-1x1 d-flex align-items-center justify-content-center overflow-hidden rounded-top bg-light"
                                style={{
                                    
                                    position: 'relative', // optional: for empty space
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain', // or 'cover' if you want to crop
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            </div>


                            <a href="#" className='text-decoration-none'>
                                <div className="card-body p-1">
                                <p className="card-title mb-1 txsm text-dark">{item.title}</p>
                                <p className="card-text text-muted txsm mb-0">{item.subTitle}</p>
                            </div>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProductGrid;
