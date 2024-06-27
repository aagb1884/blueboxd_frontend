import { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './form.css'
import PageLayout from "../Navigation/page_layout";
import TextEditor from "../../tiptap/text-editor";
import StarRating from "../star_rating";

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
    
      }, [storyID, navigate]);

  
  
      // const handleReviewChange = (e) => {
      //   setReview(e.target.value);
      // };

      const handleRatingChange = (newRating) => {
        setRating(parseInt(newRating));
      };

      function clearRating () {
        setRating(0)
      }
  
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
                setAlert({ type: 'success', message: 'Review saved successfully! Redirecting...' });
                navigate(`/reviews/${savedUserStory.id}`);
              } catch (error) {
                console.error("Error adding review:", error);
              }
      };

      console.log(review);

    return ( 
        <PageLayout>
          <section className="review-form">
            <h2>You are reviewing <i>{title}</i></h2>
            <div>
         
          {/* <textarea
          type="text"
          id="review"
          name="review"
          value={review}
          onChange={handleReviewChange}
          className="review"
          required
            /> */}
          <TextEditor setReview={setReview} />
          </div>
          <br />
         
            <div>
      <label htmlFor="story-rating">What rating would you give it out of 10?</label>
      <br />
      <div className="story-rating">
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
      </div>
      <button onClick={clearRating}>Clear Rating</button>
      <p>{rating}/10</p>
    </div>
          
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
          <br />
        <div className="form-button">
        <button type="submit" onClick={handleSubmit}>Add Review</button>
        </div>
      
        </section>
        </PageLayout>
     );
}
 
export default ReviewForm;