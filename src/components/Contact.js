import React, { useState } from 'react';

function Contact() {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const updateInput = (e) => {
        //console.log(e.target.value);
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    const submitResponse = (e) => {
        e.preventDefault();

        alert(`Your response: \n Name: ${state.name} \n Email: ${state.email} \n Phone no.: ${state.phone} \n Message: ${state.message}`);

        setState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    }

    return (
        <div className="container p-5 mt-4">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto d-flex align-items-center justify-content-between">

                    <div className="col-lg-6 d-none d-lg-block">
                        <img src="images/contact.jpg" alt="contact-image" className="contact-image" />
                    </div>

                    <div className="col-12 col-lg-6">
                        <h1 className="text-center mb-3 contact-title">Get in touch</h1>

                        <form className="col-12 col-md-8 mx-auto" onSubmit={submitResponse}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name: </label>
                                <input type="text" className="form-control mb-3 bg-light" placeholder="Enter Your Name"
                                    name="name"
                                    value={state.name}
                                    onChange={updateInput}
                                 />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"  className="form-label">E-mail: </label>
                                <input type="text"  className="form-control mb-3 bg-light" placeholder="Email"
                                    name="email"
                                    value={state.email}
                                    onChange={updateInput}
                                 />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone"  className="form-label">Phone No.: </label>
                                <input type="number"  className="form-control mb-3 bg-light" placeholder="Phone number"
                                    name="phone"
                                    value={state.phone}
                                    onChange={updateInput}
                                 />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message"  className="form-label">Your Message: </label>
                                <textarea  className="form-control mb-3 bg-light" placeholder="Your Message" rows="3"
                                    name="message"
                                    value={state.message}
                                    onChange={updateInput}
                                 />
                            </div>

                            <button type="submit" className="btn btn-outline-primary w-100">Submit</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
