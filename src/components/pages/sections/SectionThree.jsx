import React from "react";

const GiftFinder = () => {
    return (
        <div className="container-fluid bg-none position-absolute sectionthree find_product_main" style={{ zIndex: 100 }}>
            <div className=" my-4 find_product">
            <div className="bg-white p-4 rounded shadow-lg">
                <div className="row g-3 align-items-center">
                    {/* Gift Finder Label */}
                    <div className="col-12 col-sm-2 text-uppercase fw-bold text-sm-start text-center">
                        Gift <br /> Finder
                    </div>

                    {/* Pincode Input */}
                    <div className="col-12 col-sm-2">
                        <input
                        id="pincode"
                            type="text"
                            className="form-control"
                            placeholder="Enter Pincode"
                        />
                    </div>

                    {/* Occasion Select */}
                    <div className="col-12 col-sm-3">
                        <div className=" form-check d-flex justify-content-center">
                                <label className="form-check-label fw-bold" htmlFor="reverseCheck1">
                                    Occasion <br /> <span className="fw-light">Birthday, Anniversary etc.</span>
                                </label>
                            <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"/>
                        </div>
                    </div>

                    {/* Gift Type Select */}
                    
                     <div className="col-12 col-sm-3">
                        <div className=" form-check d-flex justify-content-center">
                                <label className="form-check-label fw-bold" htmlFor="reverseCheck2">
                                    Gift Type<br /> <span className="fw-light">Flowers, Cakes, Plants, etc.</span>
                                </label>
                            <input className="form-check-input" type="checkbox" value="" id="reverseCheck2"/>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="col-12 col-sm-2 text-sm-end text-center">
                        <button className="btn btn-primary w-100 w-sm-auto">
                            Find Gift
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default GiftFinder;
