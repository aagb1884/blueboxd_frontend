import { useParams, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { baseURLstories } from "../../Services/story_services";
import PageLayout from "../../Components/Navigation/page_layout";
import AddReview from "../../Components/Buttons/add-review-button";
import AddToWatchlist from "../../Components/Buttons/add-to-watchlist-button";
import './story.css';

const StoryDetailPage = ({setError, setLoading, isLoading, loggedInUser, addUserStory, fetchData}) => {   
   const [selectedStory, setSelectedStory] = useState(null);
   const [visibleReviewIds, setVisibleReviewIds] = useState([]);
   const { id } = useParams(); 
   const location = useLocation();
   const { isAuthenticated } = useAuth0();

   const toggleIndividualReviewVisibility = (reviewId) => {
    setVisibleReviewIds((prevVisibleReviewIds) =>
      prevVisibleReviewIds.includes(reviewId)
        ? prevVisibleReviewIds.filter((id) => id !== reviewId)
        : [...prevVisibleReviewIds, reviewId]
    );
  };

  
   const getSelectedStory = async (id) => {
      try {
        const response = await fetch(baseURLstories + '/' + id);
        if (!response.ok) {
          throw new Error('Failed to fetch story');
        }
        const data = await response.json();
        setSelectedStory(data);
      } catch (err) {
         console.log(err)
         setError(err)
       } finally {
         setLoading(false)
       }
    };

    useEffect(() => {
      getSelectedStory(id);
    }, [id]); 

    useEffect(() => {
      if (isLoading) return;
      getSelectedStory();
    }, [isLoading]);

    if (!selectedStory) {
      return <div>Loading...</div>; 
    }
  

    const storyDoctorInfo = selectedStory.doctors.map((doctor, index) => {
      return <span>{doctor.name}
      {index < selectedStory.doctors.length - 1 && <span>, </span>}</span> 
  })

  const storyCompanionInfo = selectedStory.companions.map((companion, index) => {
      return <li>
      <span>{companion.nickname.length > 0 ? companion.nickname : companion.firstName + ' ' + companion.lastName}
      {index < selectedStory.companions.length - 1 && <span>, </span>}</span> 
      </li>
  })
 
// average rating

  const storyConnections = selectedStory.storyConnections;

  const reviews = storyConnections.filter(sc => sc.type === 'REVIEW');

  const ratingsTotalArray = reviews.map(review => review.rating);

  const sum = ratingsTotalArray.reduce((partialSum, rating) => partialSum + rating, 0);

  const numberOfReviews = reviews.length;

  const averageRating = (numberOfReviews > 0) ? 'Average Rating: ' + (sum / numberOfReviews).toFixed(2) : 'No Ratings Yet';

  // cast and crew
     
  const storyCastCrewInfo = selectedStory.castAndCrew.length === 0 ? (
    <p>No Info. <NavLink
    className="frontpage-job"
    to="/add_cast_crew"
    state={{  previousLocation: location, 
              storyInfo: selectedStory,
              castAndCrew: selectedStory.castAndCrew }}
    >Add Cast and Crew?
    </NavLink> </p>
  ) : (
    <ul>
      {selectedStory.castAndCrew
      .sort((a, b) => b.role.localeCompare(a.role))
      .map((castCrewMember) => {
        const { role, person } = castCrewMember;
  
        return (
          <li key={person.id}>
            <span>{role}: {person.name}</span>
          </li>
        );
      })}
    </ul>
  );

  const storyReviews = selectedStory.storyConnections
  .filter(watchlistStory => watchlistStory.type === 'REVIEW') 
  .map((reviewData) => {
    const { review, rating, user, creationOfReviewDateTime } = reviewData;
    const displayName = user?.display_name || 'Unknown User';
    const userImgUrl = user?.userImgURL || '../images/default-image-url.png';
  
    return (
      <div className="story-review">
      <li key={reviewData.id}>
        <ul>
        <div className="story-item-header-and-toggle">
          <div className="name-avatar-date">
          <div className="name-avatar">
          <li><NavLink to={`/profile/${user.id}`}>{displayName}</NavLink></li>
          <li>
            {userImgUrl && <img id='user-avatar' src={userImgUrl} alt={`${displayName}'s avatar`} width="50" height="50" />}
          </li>
          </div>
          <li className="date-of-review">{new Date(creationOfReviewDateTime).toLocaleString()}</li>
          </div>
          <div className="unit">
          <li className="rating"><b>{rating}/10</b></li>
          <img id="visible-toggle" 
                  alt="toggle-view-button" 
                  title="Hide/Expand View"
                  src="../images/3209209_arrow_direction_down_triangle_up_icon.png" 
                  onClick={() => toggleIndividualReviewVisibility(reviewData.id)}/>
          </div>   
        </div>
          { visibleReviewIds.includes(reviewData.id) && (
          <li className="review-text"><div dangerouslySetInnerHTML={{__html: `${review}` }} /></li>
          )}
        </ul>
          
      </li>
      </div>
    );
  });

  const episodeText = selectedStory.noOfEpisodes === 1 ? ' Part' : ' Parts';

  const ifStoryIsEpisodic = selectedStory.media === 'TV' | 'AUDIO' | 'COMIC' ?
  ` (${selectedStory.noOfEpisodes} ${episodeText})` : '';

  const broadcastDateSelector = selectedStory.firstEpBroadcast === selectedStory.lastEpBroadcast 
  ? `${selectedStory.firstEpBroadcast}` 
  : `${selectedStory.firstEpBroadcast} - ${selectedStory.lastEpBroadcast}`;
 
  const releasedOrBroadcast = selectedStory.media === 'TV' ? 
  `Originally broadcast: ${broadcastDateSelector}`: 
  `Originally released: ${broadcastDateSelector}`

    return ( 
        <PageLayout>
       <section className='story-detail-container'>
       <div className='story-detail'>
        <h3>{selectedStory.title} ({selectedStory.media})</h3>
        <div className="story-item-image-container">
        <img src={selectedStory.imgURL.startsWith('http') ? `${selectedStory.imgURL}`: `../${selectedStory.imgURL}`} id='selected-story-logo' alt="title_logo" width="175" height="200"/>
        </div>
        <p>{averageRating}</p>
        <div className="story-item-container"> 
        
        
        
        <div className="text-container">
        
        <ul>
            <div className="story-column-1">
            
            <li>{storyDoctorInfo}: {selectedStory.series}, Story {selectedStory.storyNumber}</li>
            <li><b>Companions:</b> {storyCompanionInfo}</li>
            <li>{releasedOrBroadcast}</li> 
            <li>{ifStoryIsEpisodic}</li>
            <br />
            <li>{selectedStory.synopsis}</li>
            </div>
        </ul>
            
        <ul>
            <div className="story-column-2">
                <b>Cast and Crew:</b>
            <li>{storyCastCrewInfo} </li> 
            <br />
            <li>{selectedStory.productionCode > 0 ? 'Production Code: ' + selectedStory.productionCode : ''}</li>
            <li>Releases: {selectedStory.releases}</li>
            <li><a href={selectedStory.wikiLink}>TARDIS Wiki</a></li>
            </div>
        </ul>
        
             </div>
        </div>
        {isAuthenticated && (
        <div className="add-user-story-buttons">
        <AddReview
        loggedInUser={loggedInUser}
        addUserStory={addUserStory}
        storyID={selectedStory.id}
        storyTitle={selectedStory.title}
        />
        <br />
        <AddToWatchlist 
        loggedInUser={loggedInUser}
        addUserStory={addUserStory}
       storyID={selectedStory.id}
       fetchData={fetchData}
        />
        </div>
        )}
        <section className="story-reviews">
          <h2>Reviews:</h2>
          <ul>
          {storyReviews.length > 0 ? storyReviews : 'No-one has reviewed this story yet'}
          </ul>
          
        </section>
        </div>
       
        
        </section>
       
        </PageLayout>
     );
}
 
export default StoryDetailPage;