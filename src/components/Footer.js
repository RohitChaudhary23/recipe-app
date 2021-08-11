import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="container-fluid bg-light mt-5 border-top">
                <div className="row">
                    <div className="col-12">
                        <footer className="footer d-flex align-items-center justify-content-around text-center">

                            <section>
                                <div className="row">
                                    <div className="col-12 col-md-4 mb-4">
                                        <h2 className="footer-brand fw-bolder mb-4">Recipe</h2>
                                        <p>Et Lorem esse cillum nulla proident et irure fugiat deserunt cupidatat. Aute elit sit aliqua magna exercitation dolor qui officia cupidatat dolore. Id deserunt nulla anim incididunt nulla exercitation magna duis in officia consequat. Est culpa culpa aliqua sit quis laboris labore nostrud anim enim. Aliquip ea velit reprehenderit ex ut commodo eu occaecat ullamco. Excepteur nulla anim ullamco sit. Mollit labore eu id adipisicing in aliquip ipsum ipsum.</p>
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <div className="row">
                                            <div className="col-4">
                                                <h6 className="fw-bold mb-4">Links</h6>
                                                <p><Link to="/" className="footer-link">Home</Link></p>
                                                <p><Link to="/finder" className="footer-link">Explore</Link></p>
                                                <p><Link to="/about" className="footer-link">About</Link></p>
                                                <p><Link to="/service" className="footer-link">Service</Link></p>
                                                <p><Link to="/contact" className="footer-link">Contact</Link></p>
                                            </div>

                                            <div className="col-4">
                                                <h6 className="fw-bold mb-4">Contact</h6>
                                                <p><i className="fas fa-home"></i> New Delhi</p>
                                                <p><i className="fas fa-envelope"></i> info@recipe.com</p>
                                                <p><i className="fas fa-phone"></i> +91 123456789</p>
                                            </div>

                                            <div className="col-4">
                                                <h6 className="fw-bold mb-4">Follow us</h6>
                                                <ul className="list-unstyled">
                                                    <li className="my-2">
                                                        <Link to="www.facebook.com">
                                                            <i className="fab fa-facebook fa-lg"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="my-2">
                                                        <Link to="www.twitter.com">
                                                            <i className="fab fa-twitter fa-lg twitter-color"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="my-2">
                                                        <Link to="www.instagram.com">
                                                            <i className="fab fa-instagram fa-lg insta-color"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="my-2">
                                                        <Link to="www.linkedin.com">
                                                            <i className="fab fa-linkedin fa-lg linkedin-color"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="my-2">
                                                        <Link className="text-dark" to="www.github.com">
                                                            <i className="fab fa-github fa-lg"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        
                        </footer>
                    </div>
                </div>
                <div className="row text-center text-white p-4 footer-box">
                    <p>@ 2021 Copyright: <strong><Link className="footer-link text-white">Recipe.com</Link></strong></p>
                </div>
            </div>
        </>
    )
}

export default Footer;
