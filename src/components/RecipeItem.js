import React, { useState, useEffect } from 'react';

function RecipeItem({ match }) {

    const [data, setData] = useState('');
    const [video, setVideo] = useState('');
    const [loading, setLoading] = useState(false);

    //Edmam API key
    const API_ID = 'f18eb926';
    const API_KEY = '20f72656dd38718aa592c4f61a07932a';

    //YouTube Data V3 API
    const YOUTUBE_API_KEY = 'AIzaSyD1G-EFETyQC7mydRhE7dulcstxYqsRFq4';

    useEffect(() => {
    
        fetch(`https://api.edamam.com/api/recipes/v2/${match.params.id}?type=public&app_id=${API_ID}&app_key=${API_KEY}`)
            .then((response) => {
                response.json()
                .then((data) => {
                    
                    console.log(data.recipe);

                    setData(data.recipe);
                    setLoading(true);
                })
            })
            .catch((err) => {
                console.log(err);
            })
        
    }, []);

    useEffect(() => {

        if(loading) {

            //query to search for youtube video
            let query = `how to make ${data.label}`;

            console.log(query);

            fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&q=${query}`)
                .then((response) => {
                    response.json()
                        .then((data) => {

                            console.log(data.items);
                            setVideo(data.items);

                        });
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }, [loading]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto">

                        <div className="row border-bottom d-flex align-items-center">

                            <div className="recipeItem-container col-12 col-md-6 text-center mt-4">
                                <h1 className="fw-bolder contact-title mb-4">{data.label}
                                    {data.dishType && (
                                        <span className="badge rounded-pill bg-danger">
                                            {data.dishType[0]}
                                        </span>
                                    )}
                                </h1>
                                <img src={data.image} alt={data.label} className="img-thumbnail img-fluid" />
                            </div>

                            <div className="recipeItem-container col-12 col-md-6 recipeItem-recipe-box my-4 px-3">
                                <h5 className="text-center ">Ingredients - </h5>
                                {data.ingredients && (
                                    <ul className="recipeList">

                                        {data.ingredients.map((ingredient) => {
                                            return(
                                                <li className="">{ingredient.text}</li>
                                            );
                                        })}

                                    </ul>
                                )}
                            </div>

                        </div>

                        <div className="row border-bottom">
                            <div className="col-12 recipeItem-container px-5 my-5">

                                <h3 className="contact-title">Health Label -</h3>
                                {data.healthLabels && (
                                    data.healthLabels.map((label) => {
                                        return(
                                            <span className="bg-primary text-white rounded text-wrap d-inline-block health-span">{label}</span>
                                        )
                                    })
                                )}

                                <h3 className="contact-title mt-5">Nutrients -</h3>
                                {data.digest && (
                                    data.digest.map((d) => {
                                        return(
                                            <span className="bg-primary text-white rounded text-wrap d-inline-block health-span">{d.label}</span>
                                        )
                                    })
                                )}

                            </div>
                        </div>
                        
                        <div className="row">

                            <div className="col-12 video-box">
                                <h3 className="contact-title mb-4">You can also watch <span className="text-uppercase fw-bold">Video !</span></h3>

                                <div className="embed-responsive embed-responsive-16by9">
                                    {video && (
                                        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video[0].id.videoId}`} allowFullScreen></iframe>
                                    )}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeItem;
