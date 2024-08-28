import PageLayout from "../../Components/Navigation/page_layout";
import Navigation from "../../Components/Navigation/Navigation";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUserStoryURL } from '../../Services/story_connection_services';
import './review-page.css'
import RenderReview from "../../tiptap/render-review";
import EditReview from "../../Components/Buttons/edit-review-button";

const ReviewDetailPage = ({setError, setLoading, isLoading, reviewIds}) => {
    const [selectedReview, setSelectedReview] = useState(null);
    const { id } = useParams(); 
    const currentId = parseInt(id, 10);
    const navigate = useNavigate();

    if (currentId < 1) {
      navigate('/reviews/1')
  }

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

    // useEffect(() => {
    //     if (isLoading) return;

    //     if (selectedReview === null || selectedReview.type === 'WATCHLIST' && reviewIds.includes(currentId)) {
    //         const nextId = reviewIds.find(id => id > currentId);
    //         if (nextId) {
    //             navigate(`/reviews/${nextId}`);
    //         } else {
    //             navigate(`/reviews/${reviewIds[0]}`);
    //         }
    //     }
    // }, [isLoading, selectedReview]);


      if (!selectedReview || selectedReview.type === 'WATCHLIST') {
        return <div className="loading-review-page">No review loading, please move to another page... <Navigation currentId={currentId} reviewIds={reviewIds} /> </div>       
    }

    if (selectedReview === null) {
      navigate(`/reviews/${currentId + 1}`)
    } 

    return ( 
        <PageLayout>
          <section className="review-page">
            <h1>Review of <i><NavLink to={`/stories/${selectedReview.story.id}`}>{selectedReview.story.title} ({selectedReview.story.media})</NavLink></i></h1>
            <div className="review">
        <ul>
          <div className="review-page-title-date">
          <li className="review-page-username"><NavLink to={`/profile/${selectedReview.user.id}`}>{selectedReview.user.display_name}</NavLink></li>
          <br/>
          <li className="date-of-review">{new Date(selectedReview.creationOfReviewDateTime).toLocaleString()}</li>
          </div>
          <div className="review-page-name-img-rating">
            <div className="name-img">
        
          <li>
           <img id='user-avatar' 
           src={selectedReview.user.userImgURL ? selectedReview.user.userImgURL : '../images/default-image-url.png'}
           alt={`${selectedReview.user.display_name}'s avatar`} width="50" height="50" />
          </li>
            </div>
          <li className="rating">{selectedReview.rating}/10</li>
          </div>
          <li className="review-text"><div dangerouslySetInnerHTML={{__html: `${selectedReview.review}` }} /></li>
        
        </ul>
      
          </div>
        <EditReview 
        existingReview={selectedReview}
        />
        <Navigation 
          currentId={currentId}
          reviewIds={reviewIds}
        />
    
        </section>
        </PageLayout>
        
     );
}
 
export default ReviewDetailPage;