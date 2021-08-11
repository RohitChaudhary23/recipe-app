import React from 'react';
import Carousel from './Carousel';
import { CarouselData } from './CarouselData';

function About() {
    return (
        <div className="container-fluid">
            <div className="row border-bottom">
                    <div className="col-12 col-lg-10 mx-auto d-flex align-items-center justify-content-center about-container mb-5">
                        <h1 className="text-white text-uppercase about-title">About Us</h1>
                        <p className="p-3 text-white">Qui reprehenderit ad Lorem non labore veniam proident sint enim. Consequat ex exercitation sint anim qui pariatur mollit. Non cillum est ullamco incididunt amet id amet reprehenderit et reprehenderit occaecat. Dolore esse commodo ex et dolore incididunt nostrud sit qui ullamco dolor. Elit occaecat occaecat in mollit non ad adipisicing non ipsum. Sunt exercitation magna dolore adipisicing tempor laborum.</p>

                        <img className="img-fluid about-image" src="../images/pexels-sarah-chai-7262906.jpg" alt="about-image" />
                    </div>
            </div>

            <div className="row border-bottom">
                <div className="col-12 col-lg-10 mx-auto about-container-2 text-center mb-5">

                    <div className="about-box">
                        <i className="fas fa-thumbs-up fa-3x"></i>
                        <p>Ex deserunt reprehenderit consequat amet adipisicing magna.</p>
                    </div>
                    <div className="about-box">
                        <i className="fas fa-heart fa-3x"></i>
                        <p>Pariatur fugiat anim laborum anim voluptate.</p>
                    </div>
                    <div className="about-box">
                        <i className="fas fa-check fa-3x"></i>
                        <p>Ex eiusmod laborum irure ad proident aute sint nisi minim sint irure reprehenderit sit commodo.</p>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">

                    <div className="people-carousel py-5">
                        <h1 className="text-center mb-4">Beautiful Feedbacks from users</h1>
                        <Carousel responses={CarouselData} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About
