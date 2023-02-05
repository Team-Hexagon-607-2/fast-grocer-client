import React from 'react';
import { FaStar } from 'react-icons/fa';
import StarRatingComponent from 'react-star-rating-component';


const StarRating = ({ setRating }) => {
   
    

    const ratingChanged = (rating) => {
        setRating(rating)
    }

    return (        

        <div className='star-container'>
            <StarRatingComponent
                
                editing={true}
                emptyStarColor={'gray'}
                starColor={'#ffc107'}
                renderStarIcon={() => <span>
                    <FaStar
                    size= {50}
                    className='star'
                    ></FaStar>
                    </span>}
                onStarClick={ratingChanged} />
        </div>
    );
};

export default StarRating;