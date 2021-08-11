import React from 'react';
import image from '../images/service.jpg';

function Service() {
    return (
        <div className="container-fluid">
            <div className="row border-bottom">
                <div className="col-12 col-md-10 mx-auto service-container mb-5">

                    <img src={image} className="img-fluid" alt="Service-image" />
                    <h1 className="text-white p-2 fw-bolder">Service</h1>
                    <p className="text-white p-2">Proident ad commodo excepteur velit ex. Non do quis ex fugiat anim dolore tempor tempor amet ut. Pariatur reprehenderit sunt quis dolor laboris ullamco Lorem eu. Ex reprehenderit et ea consequat anim aute esse elit velit exercitation anim cupidatat culpa. Culpa tempor mollit anim proident nulla ea aliquip incididunt aliqua nostrud. Incididunt ex cupidatat tempor eu qui veniam velit. Veniam sunt laboris ullamco do deserunt et commodo aute deserunt.</p>

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-10 mx-auto mt-5">
                    
                    <div className="pricingTitle-box">
                        <h1 className="text-center text-white w-50">Pricing</h1>
                    </div>

                    <div className="card-box text-center">

                        <div className="card col-12 col-md-4 m-2">
                            <div className="card-header">
                                <h3 className="card-title">Free</h3>
                            </div>
                            <div className="card-body">
                                <h1 className="card-price">₹0<span className="period">/month</span></h1>
                                <ul className="list-unstyled">
                                    <li>Single User</li>
                                    <li>10 requests per minute</li>
                                    <li>Email support</li>
                                    <li>Help centre access</li>
                                </ul>
                                <button className="btn btn-outline-primary w-100">Sign up for FREE</button>
                            </div>
                        </div>

                        <div className="card col-12 col-md-4 m-2 card-big">
                            <div className="card-header">
                                <h3 className="card-title">Pro</h3>
                            </div>
                            <div className="card-body">
                                <h1 className="card-price">₹100<span className="period">/month</span></h1>
                                <ul className="list-unstyled">
                                    <li>5 Users</li>
                                    <li>100 requests per minute</li>
                                    <li>Priority email support</li>
                                    <li>Help centre access</li>
                                </ul>
                                <button className="btn btn-primary w-100">Get Started with PRO</button>
                            </div>
                        </div>

                        <div className="card col-12 col-md-4 m-2">
                            <div className="card-header">
                                <h3 className="card-title">Enterprise</h3>
                            </div>
                            <div className="card-body">
                                <h1 className="card-price">₹199<span className="period">/month</span></h1>
                                <ul className="list-unstyled">
                                    <li>Unlimited User</li>
                                    <li>Unlimited requests per minute</li>
                                    <li>Phone and email support</li>
                                    <li>Help centre access</li>
                                </ul>
                                <button className="btn btn-primary w-100">Sign up for ENTERPRISE</button>
                            </div>
                        </div>

                    </div>    

                </div>
            </div>
        </div>
    )
}

export default Service
