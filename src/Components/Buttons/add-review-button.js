import { NavLink } from "react-router-dom";

const AddReview = ({loggedInUser, storyID, storyTitle}) => {
    
    return ( 
        <NavLink
            to="/add_review"
            state={{ user: loggedInUser, storyID: storyID, title: storyTitle }}
            className="review-nav">
        <button className="story-buttons">Add Review</button>
        </NavLink>
     );
}
 
export default AddReview;


