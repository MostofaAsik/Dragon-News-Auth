import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, title, image_url, details } = news


    return (
        <div className="card bg-base-100  shadow-xl mb-20">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                {
                    details.length > 200 ?
                        <>
                            <p>{details.slice(0, 200)}</p>
                            <Link to={`/news/${_id}`}>
                                <p className='text-red-400'>Read more</p>
                            </Link>
                        </> :

                        <p>{details}</p>

                }

            </div>
        </div>
    );
};

export default NewsCard;