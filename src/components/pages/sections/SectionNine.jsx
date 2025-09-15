import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sampleProducts, topImages } from '../../../../data/data';


const SectionNine = () => {
    return (
        <div className="container py-5 my-2 section-nine-bg">
            {/* Top 3 images */}
            <div className="row mb-3">
                {topImages.map((image) => (
                    <div className="col-4 mt-3 p-0" key={image.id}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="rounded"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                ))}
            </div>

            {/* Bottom 3 cards */}
            <div className="row">
                {sampleProducts.map((product) => (
                    <div className="col-4 m-0 p-0 " key={product.id}>
                        <div className="card h-100 bd mx-1 mt-1 mb-0 ">
                            <img
                                src={product.img}
                                className="card-img-top object-fit-contain section-nine-card"
                                alt={product.title}
                            />
                            <div className="card-body text-center bg-danger-emphasis m-0 py-2 w-100 yellow-bg">
                                <p className="card-title m-0 p-0 txsm">{product.title}</p>
                                <p className="card-text p-0 m-0 txsm fw-bold">{product.discount}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionNine;
