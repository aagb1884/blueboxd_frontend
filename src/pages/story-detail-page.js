import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURLstories } from "../Services/story_services";
import PageLayout from "../Components/page_layout";
import AddReview from "../Components/Buttons/add-review-button";
import AddToWatchlist from "../Components/Buttons/add-to-watchlist-button";

const StoryDetailPage = ({setError, setLoading, isLoading, loggedInUser, addUserStory}) => {   
   const [selectedStory, setSelectedStory] = useState(null);
   const { id } = useParams(); 

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
      <span>{companion.firstName} {companion.lastName}
      {index < selectedStory.companions.length - 1 && <span>, </span>}</span> 
      </li>
  })
  
     
  const storyCastCrewInfo = selectedStory.castAndCrew.map((castCrewMember) => {
      const { role, person } = castCrewMember; 
  
      return (
          <li key={person.id}>
          <span>{role}: {person.name} </span>
          </li>
      );
  });

  console.log(selectedStory.imgURL)

  const storyReviews = selectedStory.storyConnections.map((reviewData) => {
    const { review, rating, user, creationOfReviewDateTime } = reviewData;
    const displayName = user?.display_name || 'Unknown User';
    const userImgUrl = user?.userImgURL || 'images/default-image-url.png';
  
    return (
      <div className="review">
      <li key={reviewData.id}>
        <ul>
          <div className="name-avatar">
          <li>{displayName}</li>
          <br />
          <li>
            {userImgUrl && <img id='user' src={userImgUrl} alt={`${displayName}'s avatar`} width="50" height="50" />}
          </li>
          </div>
          <li className="rating">{rating}/10</li>
          <li className="review-text">{review}</li>
          <li className="date-of-review">{new Date(creationOfReviewDateTime).toLocaleString()}</li>
        </ul>
      </li>
      </div>
    );
  });

  const episodeText = selectedStory.noOfEpisodes === 1 ? ' Episode' : ' Episodes';
 

    return ( 
        <PageLayout>
       <section className='story-detail-container'>
       <div className='story-detail'>
        <h3>{selectedStory.title} ({selectedStory.media})</h3>
        <div className="story-item-image-container">
        <img src={selectedStory.imgURL} id='selected-story-logo' alt="title_logo" width="175" height="200"/>
        </div>
        <div className="story-item-container"> 
        
        
        
        <div className="text-container">
        
        <ul>
            <div className="story-column-1">
            
            <li>{storyDoctorInfo}: {selectedStory.series}, Story {selectedStory.storyNumber}</li>
            <li><b>Companions:</b> {storyCompanionInfo}</li>
            <li>Originally broadcast: {selectedStory.firstEpBroadcast == selectedStory.lastEpBroadcast ? selectedStory.firstEpBroadcast : selectedStory.firstEpBroadcast + ' - ' + selectedStory.lastEpBroadcast}
            {' (' + selectedStory.noOfEpisodes + episodeText + ')'}</li>
            <li></li>
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
        <div className="add-user-story-buttons">
        <AddReview
        loggedInUser={loggedInUser}
        addUserStory={addUserStory}
        storyID={selectedStory.id}
        />
        <AddToWatchlist 
        loggedInUser={loggedInUser}
        addUserStory={addUserStory}
       storyID={selectedStory.id}
        />
        </div>
        <section className="story-reviews">
          <h2>Reviews:</h2>
          <ul>
          {storyReviews}
          </ul>
          
        </section>
        </div>
        </section>
       
        </PageLayout>
     );
}
 
export default StoryDetailPage;