import PageLayout from "../../Components/Navigation/page_layout";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUserStoryURL } from '../../Services/story_connection_services';
import './review-page.css'

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
          <section className="review-page">
            <h1>Review Page</h1>
            <div className="review">
        <ul>
          <div className="review-page-title-date">
          <li><NavLink to={`/stories/${selectedReview.story.id}`}>{selectedReview.story.title}</NavLink></li>
          <br/>
          <li className="date-of-review">{new Date(selectedReview.creationOfReviewDateTime).toLocaleString()}</li>
          </div>
          <div className="review-page-name-img-rating">
            <div className="name-img">
          <li><NavLink to={`/profile/${selectedReview.user.id}`}>{selectedReview.user.display_name}</NavLink></li>
          <li>
           <img id='user' 
           src={selectedReview.user.userImgURL ? selectedReview.user.userImgURL : '../images/default-image-url.png'}
           alt={`${selectedReview.user.display_name}'s avatar`} width="50" height="50" />
          </li>
            </div>
          <li className="rating">{selectedReview.rating}/10</li>
          </div>
          <li className="review-text">{selectedReview.review}</li>
        
        </ul>
      
          </div>
      </section>
        </PageLayout>
     );
}
 
export default ReviewPage;