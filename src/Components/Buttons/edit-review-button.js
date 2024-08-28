import { NavLink } from "react-router-dom";

const EditReview = ({existingReview}) => {
    
    return ( 
        <NavLink
            to="/add_review"
            state={{ existingReview: existingReview.review, existingRating: existingReview.rating, storyID: existingReview.story.id }}
            className="review-nav">
        <button className="story-buttons">Edit Review</button>
        </NavLink>
     );
}
 
export default EditReview;


