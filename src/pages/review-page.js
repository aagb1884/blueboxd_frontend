import PageLayout from "../Components/Navigation/page_layout";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUserStoryURL } from '../Services/story_connection_services';

const ReviewPage = ({setError, setLoading, isLoading}) => {
    const [selectedReview, setSelectedReview] = useState(null);
    const { id } = useParams(); 

    const getSelectedReview = async (id) => {
        try {
          const response = await fetch(baseUserStoryURL + '/' + id);
          if (!response.ok) {
            throw new Error('Failed to fetch review');
          }
          const data = await response.json();
          setSelectedReview(data);
        } catch (err) {
           console.log(err)
           setError(err)
         } finally {
           setLoading(false)
         }
      };
  
      useEffect(() => {
        getSelectedReview(id);
      }, [id]); 

      useEffect(() => {
        if (isLoading) return;
        getSelectedReview();
      }, [isLoading]);
  
      if (!selectedReview) {
        return <div>Loading...</div>; 
      }

  

    return ( 
        <PageLayout>
            <h1>Review Page</h1>
            <div className="review">
        <ul>
          <div className="name-avatar">
          <li><NavLink to={`/stories/${selectedReview.story.id}`}>{selectedReview.story.title}</NavLink></li>
          <br/>
          <li><NavLink to={`/profile/${selectedReview.user.id}`}>{selectedReview.user.display_name}</NavLink></li>
          <br />
          <li>
            {selectedReview.user.userImgURL && <img id='user' src={selectedReview.user.userImgURL} alt={`${selectedReview.user.display_name}'s avatar`} width="50" height="50" />}
          </li>
          </div>
          <li className="rating">{selectedReview.rating}/10</li>
          <li className="review-text">{selectedReview.review}</li>
          <li className="date-of-review">{new Date(selectedReview.creationOfReviewDateTime).toLocaleString()}</li>
        </ul>
      
      </div>
        </PageLayout>
     );
}
 
export default ReviewPage;