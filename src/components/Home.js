import React from 'react';
import { Link } from 'react-router-dom';
import video from '../video/video-1.mp4';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">

                    <div className="home">
                        <video className="video-fluid" autoPlay loop muted >
                            <source src={video} />
                        </video>

                        <div className="home-content">
                            <h1>Welcome to <span className="home-title">Recipe</span> .</h1>
                            <p>Follow our recipe and make lip-smacking food</p>

                            <Link to="/finder">
                                <button className="btn btn-outline-success">
                                    Let's Get Started
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="home-box-1 d-flex align-items-center justify-content-between">

                        <img className="img-thumbnail rounded-img-fluid image1 col-12 col-md-4" src="images/pexels-cottonbro-5674144.jpg" alt="Image1" />

                        <div className="col-12 col-md-7">
                            <h2 className="home-box-title">Editor's Pick</h2>
                            <p>Sint cupidatat sunt labore Lorem nostrud anim cillum. Nisi cupidatat ut eiusmod sunt laboris excepteur anim adipisicing velit fugiat aliquip incididunt occaecat. Anim excepteur aliqua nisi esse fugiat mollit ea veniam ullamco. Velit ullamco exercitation occaecat laboris culpa aliquip consectetur in aliqua dolore.<br /><br />
                            
                            Culpa minim eiusmod mollit eiusmod incididunt veniam ad mollit dolor officia cupidatat. Est nulla deserunt veniam in ea consectetur do dolor do laborum ex proident quis. Officia in sunt duis deserunt nulla anim.Nostrud velit occaecat in non incididunt fugiat. Anim culpa elit proident officia laborum reprehenderit aute.</p>
                        </div>

                    </div>

                    <div className="home-box-2 d-flex align-items-center justify-content-between">

                        <img className="img-thumbnail rounded-img-fluid image1 col-12 col-md-4 mx-2" src="images/pexels-dapurmelodi-1109197.jpg" alt="Image1" />

                        <div className="col-12 col-md-7">
                            <h2 className="home-box-title">Recent Stories</h2>
                            <p>Sint cupidatat sunt labore Lorem nostrud anim cillum. Nisi cupidatat ut eiusmod sunt laboris excepteur anim adipisicing velit fugiat aliquip incididunt occaecat. Anim excepteur aliqua nisi esse fugiat mollit ea veniam ullamco. Velit ullamco exercitation occaecat laboris culpa aliquip consectetur in aliqua dolore.<br /><br />
                            
                            Culpa minim eiusmod mollit eiusmod incididunt veniam ad mollit dolor officia cupidatat. Est nulla deserunt veniam in ea consectetur do dolor do laborum ex proident quis. Officia in sunt duis deserunt nulla anim.Nostrud velit occaecat in non incididunt fugiat. Anim culpa elit proident officia laborum reprehenderit aute.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;
