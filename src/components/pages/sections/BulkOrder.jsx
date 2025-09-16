import React, { useState } from 'react';
import { ImCancelCircle } from "react-icons/im";

const BulkOrder = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Fixed Vertical "Bulk Order" Button */}
            <div className="bulk-order-container" onClick={() => setShowModal(true)}>
                <div className="bulk-order-label bg-theme">
                    Bulk Order
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="bulk-form-modal">
                        <div className='row'>
                            <div className='col-9 m-0 p-0'>
                                <div className='d-flex justify-content-end align-items-center'>
                                    <h5 className="mb-0 ">Contact For Bulk Requirement</h5>
                                </div>

                            </div>
                            <div className='col-3 p-0 m-0 '>
                               <div className='d-flex justify-content-end align-items-center me-3'> 
                                    <ImCancelCircle onClick={() => setShowModal(false)} size={25} className='text-light-subtle'/>
                               </div>
                            </div>
                        </div>

                        

                        <div className="text-center mb-2">
                            <i className="bi bi-telephone-fill"></i>{' '}
                            <a href="tel:+919811003511" className="text-primary">+91-9811003511</a>
                        </div>

                        <form>
                            <div className="mb-2">
                                <label className="form-label fw-semibold m-0">Full Name</label>
                                <input className="form-control" placeholder="Your Good Name" />
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-semibold m-0">Mobile Number</label>
                                <input className="form-control" placeholder="Your Contact Number" />
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-semibold m-0">Email</label>
                                <input className="form-control" placeholder="Your Email Id" />
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-semibold m-0">Company</label>
                                <input className="form-control" placeholder="Your Company Name" />
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-semibold m-0">Budget</label>
                                <input className="form-control" placeholder="Your Budget" />
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-semibold m-0">Product Requirement</label>
                                <input className="form-control" placeholder="Your Product Requirement" />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="attachments" className="form-label fw-semibold m-0 ">
                                    Your Attachments (If Available)
                                </label>
                                <input className="form-control" type="file" id="attachments" />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default BulkOrder;
