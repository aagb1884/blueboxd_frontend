import { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './form.css'
import PageLayout from "../Navigation/page_layout";

const ReviewForm = ({fetchData, addUserStory}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { storyID, title } = location.state || {}
    const [user, setUser] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [reviewPrivate, setReviewPrivate] = useState(false);

    const [alert, setAlert] = useState({ type: '', message: '' });

    const privacyOptions = [
        { label: 'Public', value: false },
        { label: 'Private', value: true }
      ];
   
      useEffect(() => {
        if (storyID === undefined || null) {
          navigate('/stories');
        }
    
      }, [storyID]);

  
  
      const handleReviewChange = (e) => {
        setReview(e.target.value);
      };

      const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
      };
  
      const handleReviewPrivacyChange = (e) => {
        setReviewPrivate(e.target.value);
      };     

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newUserStory = {
            story: { id: storyID },
            user: { id: 3 }, // this will need changed when there is more than one user
            type: "REVIEW",
            review: review,
            rating: rating,
            reviewPrivate: reviewPrivate,
            creationOfReviewDateTime: new Date().toISOString(),
        };
        
            try {
                const savedUserStory = await addUserStory(newUserStory);
                setUser("");
                setReview("");
                setRating(0);
                setReviewPrivate(false);
                fetchData();
                setAlert({ type: 'success', message: 'Companion added successfully! Redirecting...' });
                navigate(`/reviews/${savedUserStory.id}`);
              } catch (error) {
                console.error("Error adding review:", error);
              }
      };

    return ( 
        <PageLayout>

        <form className="review-form" onSubmit={handleSubmit}>
            <h2>You are reviewing <i>{title}</i></h2>
            <div>
          <label htmlFor="review">Your Review</label>
          <br/>
          <textarea
          type="text"
          id="review"
          name="review"
          value={review}
          onChange={handleReviewChange}
          className="review"
          required
            />
          </div>
          <br />
            <label htmlFor="story-rating">What rating would you give it out of 10?</label>
          <br />
            <div className="story-rating">
            <input type="radio" id="star10" name="story-rating" value="10" checked={rating === 10}
          onChange={handleRatingChange}/>
          <label for="star10" title="10">10 stars</label>
          <input type="radio" id="star9" name="story-rating" value="9" checked={rating === 9}
          onChange={handleRatingChange}/>
          <label for="star9" title="9">9 stars</label>
          <input type="radio" id="star8" name="story-rating" value="8" checked={rating === 8}
          onChange={handleRatingChange}/>
          <label for="star8" title="8">8 stars</label>
          <input type="radio" id="star7" name="story-rating" value="7" checked={rating === 7}
          onChange={handleRatingChange}/>
          <label for="star7" title="7">7 stars</label>
          <input type="radio" id="star6" name="story-rating" value="6" checked={rating === 6}
          onChange={handleRatingChange}/>
          <label for="star6" title="6">6 stars</label>
          <input type="radio" id="star5" name="story-rating" value="5" checked={rating === 5}
          onChange={handleRatingChange}/>
          <label for="star5" title="5">5 stars</label>
          <input type="radio" id="star4" name="story-rating" value="4" checked={rating === 4}
          onChange={handleRatingChange}/>
          <label for="star4" title="4">4 stars</label>
          <input type="radio" id="star3" name="story-rating" value="3" checked={rating === 3}
          onChange={handleRatingChange} />
          <label for="star3" title="3">3 stars</label>
          <input type="radio" id="star2" name="story-rating" value="2" checked={rating === 2}
          onChange={handleRatingChange}/>
          <label for="star2" title="2">2 stars</label>
          <input type="radio" id="star1" name="story-rating" value="1" checked={rating === 1}
          onChange={handleRatingChange} />
          <label for="star1" title="1">1 star</label>
        
        <p>{rating}/10</p>
          
        </div>
        <br />
        <div>
          <label htmlFor="privacy-selector">Make review private</label> <select 
          id="privacy"
          name="privacy"
          value={reviewPrivate}
          onChange={handleReviewPrivacyChange}
          >
        {privacyOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>  
          <aside className="aside">Private reviews will only be seen by you</aside>
                 
          </div>
        <div className="form-button">
        <button type="submit">Add Review</button>
        </div>
        </form>

        </PageLayout>
     );
}
 
export default ReviewForm;