import { Link } from "react-router-dom";
import AddReview from "../../Components/Buttons/add-review-button";
import AddToWatchlist from "../../Components/Buttons/add-to-watchlist-button";
import { useAuth0 } from "@auth0/auth0-react";

const StoryItem = ({story, loggedInUser, addUserStory, fetchData, formatDate}) => {
    const { isAuthenticated } = useAuth0();

    const doctorInfo = story.doctors.map((doctor, index) => {
        return <span>{doctor.name}
        {index < story.doctors.length - 1 && <span>, </span>}</span> 
    })

    const companionInfo = story.companions.length > 0 
    ? story.companions.map((companion, index) => (
        <li key={index}>
          <span>{companion.nickname?.length > 0 ? companion.nickname : `${companion.firstName} ${companion.lastName}`}</span>
          {index < story.companions.length - 1 && <span>, </span>}
        </li>
      ))
    : 'No regular companion(s).';
  
    const episodeText = story.noOfEpisodes === 1 ? ' Part' : ' Parts';

    const ifStoryIsEpisodic = story.media === 'TV' | 'AUDIO' | 'COMIC' ?
    ` (${story.noOfEpisodes} ${episodeText})` : '';
  
    const formattedFirstEpDate = formatDate(story.firstEpBroadcast)
    const formattedLastEpDate = formatDate(story.lastEpBroadcast)

    const broadcastDateSelector = formattedFirstEpDate === formattedLastEpDate 
    ? `${formattedFirstEpDate}` 
    : `${formattedFirstEpDate} - ${formattedLastEpDate}`;

    const releasedOrBroadcast = story.media === 'TV' ? 
    `Originally broadcast: ${broadcastDateSelector}`: 
    `Originally released: ${broadcastDateSelector}`

    const seriesInfo = story.subSeries ? `${story.series}: ${story.subSeries}` : `${story.series}`

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
        <div className="image-container">
        <img src={story.imgURL.startsWith('http') ? `${story.imgURL}`: `../${story.imgURL}`} alt="title_logo" width="175" height="200"/>
        </div>
        <div className="story-item-container"> 
        
        <div className="text-container">
        <div className="story-column-1">
        <ul> 
            <li>{doctorInfo}</li>
            <li>{seriesInfo}. {storyNumber}</li>
            <br />
            <li><b>Companions:</b> {companionInfo}</li>
            <br />
            <li>{releasedOrBroadcast}</li> 
            <li>{ifStoryIsEpisodic}</li>
            <br />
            <li>{story.synopsis}</li>
        </ul>
        </div>
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