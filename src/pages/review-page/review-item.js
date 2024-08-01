import { NavLink } from "react-router-dom";

const ReviewItem = ({review}) => {

const reviewExcerpt = review.review && review.review.length > 0 ? review.review.substring(0, 75) : "No review available.";

    return ( 
        <div className="story-review" key={review.id}>
        
            <ul>
            <li><NavLink to={`/stories/${review.story.id}`}>{review.story.title}</NavLink></li>
                <div className="story-item-header-and-toggle">
                    
                    <div className="name-avatar-date">
                        <div className="name-avatar">
                            <li><NavLink to={`/profile/${review.user.id}`}>{review.user.display_name}</NavLink></li>
                            <li>
                                {review.user.userImgURL && <img id='user-avatar' src={review.user.userImgURL} alt={`${review.user.display_name}'s avatar`} width="50" height="50" />}
                            </li>
                        </div>
                        <li className="date-of-review">{new Date(review.creationOfReviewDateTime).toLocaleString()}</li>
                    </div>
                    <div className="unit">
                        <li className="rating"><b>{review.rating}/10</b></li>
                    </div>
                    <div className="review-link">
                    <NavLink to={`/reviews/${review.id}`}>Read Full Review</NavLink>
                    </div>
                </div>
                <div className="review-segment">
                <div dangerouslySetInnerHTML={{__html: `${reviewExcerpt}...` }} />
                </div>
                
            </ul>
        
    </div>
     );
}
 
export default ReviewItem;