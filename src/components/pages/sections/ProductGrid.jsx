import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { gridproducts } from '../../../../data/data';

const ProductGrid = () => {
    return (
        <div className="container m-0 pt-3">
            <h5 className="mb-3">End of Season Sale</h5>

            <div className="row gap-0">
                {gridproducts.map((item) => (
                    <div
                        key={item.id}
                        className="col-4 col-sm-4 mb-3 m-0 p-0 d-flex justify-content-center "
                    >
                        <div
                            className="card text-center bd p-1 m-1"
                            style={{
                                width: '380px',        // Set your desired width
                                maxWidth: '100%',      // Prevent overflow on small screens
                                margin: '1', // Center the card if needed
                            }}
                        >

                            {/* ✅ Square image container */}
                            <div
                                className="w-100"
                                style={{
                                    aspectRatio: '2/2', // or '4/3', '3/4', etc. for different shapes
                                    width: '100%',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderTopLeftRadius: '0.375rem',
                                    borderTopRightRadius: '0.375rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#f8f9fa', // optional: for empty space
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
