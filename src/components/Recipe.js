import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({label, image, ingredients, uri}) => {

    const id = uri.slice(uri.indexOf('#') + 1);

    return(
            <div className="col-12 col-md-6 mt-5 d-flex justify-content-center">

                <div className="get-recipe-box">

                    <h1 className="fw-bolder text-center">{label}</h1>
                    <Link to={`/finder/${id}`}><img src={image} className="img-fluid" /></Link>
                </div>
            </div>
    )

}

export default Recipe;