import React, { useState } from 'react';

function Carousel( { responses } ) {

    const [current, setCurrent] = useState(1);
    const length = responses.length;

    const nextResponse = () => {
        setCurrent(current === length ? 1 : current + 1);
    }

    const previousResponse = () => {
        setCurrent(current === 1 ? length : current - 1);
    }

    return (
        <div className="people-carousel-item">

            <i className="fas fa-arrow-circle-left fa-2x" onClick={previousResponse}></i>
            <i className="fas fa-arrow-circle-right fa-2x" onClick={nextResponse}></i>

           {responses.map((data) => {
                return (
                    <div className={data.id === current ? 'slide-active carousel-item' : 'slide'} key={data.id}>
                        {data.id === current && (
                            <>
                                <p className="text-center text-white">{data.message}</p>
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <img className="img-fluid people-carousel-item-image" src={data.personImage} alt={data.personName}></img>
                                    <h6 className="fw-bold text-white mt-2">{data.personName}</h6>
                                </div>
                            </>
                        )}
                    </div>
                )
           })} 
        </div>
    )
}

export default Carousel;
