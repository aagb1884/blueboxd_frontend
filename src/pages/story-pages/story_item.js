import { Link } from "react-router-dom";
import AddReview from "../../Components/Buttons/add-review-button";
import AddToWatchlist from "../../Components/Buttons/add-to-watchlist-button";
import { useAuth0 } from "@auth0/auth0-react";

const StoryItem = ({story, loggedInUser, addUserStory, fetchData}) => {
    const { isAuthenticated } = useAuth0();

    const doctorInfo = story.doctors.map((doctor, index) => {
        return <span>{doctor.name}
        {index < story.doctors.length - 1 && <span>, </span>}</span> 
    })
    const companionInfo = story.companions.map((companion, index) => {
        return <li>
        <span>{companion.nickname?.length > 0 ? companion.nickname : companion.firstName + ' ' + companion.lastName}
        {index < story.companions.length - 1 && <span>, </span>}</span> 
        </li>
    })

    const episodeText = story.noOfEpisodes === 1 ? ' Part' : ' Parts';

    const ifStoryIsEpisodic = story.media === 'TV' | 'AUDIO' | 'COMIC' ?
    ` (${story.noOfEpisodes} ${episodeText})` : '';
  
    const broadcastDateSelector = story.firstEpBroadcast === story.lastEpBroadcast 
    ? `${story.firstEpBroadcast}` 
    : `${story.firstEpBroadcast} - ${story.lastEpBroadcast}`;
   
    const releasedOrBroadcast = story.media === 'TV' ? 
    `Originally broadcast: ${broadcastDateSelector}`: 
    `Originally released: ${broadcastDateSelector}`

    const storyNumber = story.storyNumber > 0 ? `Story ${story.storyNumber}` : '';

    const storyConnections = story.storyConnections;

    const reviews = storyConnections.filter(sc => sc.type === 'REVIEW');
  
    const ratingsTotalArray = reviews.map(review => review.rating);
  
    const sum = ratingsTotalArray.reduce((partialSum, rating) => partialSum + rating, 0);
  
    const numberOfReviews = reviews.length;
  
    const averageRating = (numberOfReviews > 0) ? 'Average Rating: ' + (sum / numberOfReviews).toFixed(2) : 'No Ratings Yet';

    return ( 
        <section className='story-item'>
        <h3>{story.title} ({story.media})</h3>
        <p>{averageRating} </p>
        <div className="story-item-container"> 
        
        <div className="image-container">
        <img src={story.imgURL.startsWith('http') ? `${story.imgURL}`: `../${story.imgURL}`} alt="title_logo" width="175" height="200"/>
        </div>
        
        <div className="text-container">
        
        <ul>
            <div className="story-column-1">
            
            <li>{doctorInfo}: {story.series}. {storyNumber}</li>
            <li><b>Companions:</b> {companionInfo}</li>
            <li>{releasedOrBroadcast}</li> 
            <li>{ifStoryIsEpisodic}</li>
            <br />
            <li>{story.synopsis}</li>
            </div>
        </ul>
       
            <div className="add-user-story-buttons-story-item">
            {isAuthenticated && (
                <>
                <AddReview
                loggedInUser={loggedInUser}
                addUserStory={addUserStory}
                storyID={story.id}
                storyTitle={story.title}
                 />
                <AddToWatchlist 
                loggedInUser={loggedInUser}
                addUserStory={addUserStory}
                storyID={story.id}
                fetchData={fetchData}
                />
                </>
                 )}  
                <Link to={`/stories/${story.id}`}>
                    <button className="story-buttons" >Read More</button>
                </Link>
             </div>
       
        </div>
        
        
             
        </div>
       
        </section>
    );
}
 
export default StoryItem;