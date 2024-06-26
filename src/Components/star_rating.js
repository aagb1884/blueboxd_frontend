import './Forms/form.css'

const StarRating = ({ rating, onRatingChange }) => {
    const stars = [];


    for (let i = 1; i <= 10; i++) {
      if (i <= rating) {
        stars.push(
          <img 
            key={i} 
            src="images/filled-star.png" 
            alt={`${i} Star`} 
            onClick={() => onRatingChange(i)} 
            className="star"
          />
        );
      } else {
        stars.push(
          <img 
            key={i} 
            src="images/empty-star.png" 
            alt={`${i} Star`} 
            onClick={() => onRatingChange(i)} 
            className="star"
          />
        );
      }
    }
  
    return <div className="star-rating2">{stars}</div>;
  };
 
export default StarRating;