import { useState } from "react";
import ReviewItem from "./review-item";

const ReviewSearchResults = ({filteredReviews}) => {
    const [reviewsOnDisplay, setReviewsOnDisplay] = useState(5);

    const handleShowMoreReviews = () => {
        setReviewsOnDisplay(prevReviewsOnDisplay => prevReviewsOnDisplay + 10)
    }

    const reviewList = filteredReviews
    .sort((a, b) => new Date(b.creationOfReviewDateTime) - new Date(a.creationOfReviewDateTime)) 
    .slice(0, reviewsOnDisplay)
    .map((filteredReview) => {
        return <ReviewItem 
        review={filteredReview}
        />})

    const hasMoreReviews = reviewsOnDisplay < filteredReviews.length;

   
    return ( 
        <div className="search-results">
            {reviewList}
            {hasMoreReviews && (
                <button className="story-buttons" onClick={handleShowMoreReviews}>Load More</button>
            )}
        </div>
     );
}
 
export default ReviewSearchResults;