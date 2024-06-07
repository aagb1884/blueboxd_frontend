import 'review_form.css'

const StarRating = ({ rating }) => {
    const stars = [];


  for (let i = 1; i <= 10 i++) {
    if (i <= rating) {
      stars.push(<img key={i} src="images/filled-star.png" alt="Filled Star" />);
    } else {
      stars.push(<img key={i} src="images/empty-star.png" alt="Empty Star" />);
    }
  }

  return <div className="star-rating2">{stars}</div>;
};

 
export default StarRating;