import { Link } from "react-router-dom";
import AddReview from "../../Components/Buttons/add-review-button";
import AddToWatchlist from "../../Components/Buttons/add-to-watchlist-button";

const StoryItem = ({story, loggedInUser, addUserStory}) => {

    const doctorInfo = story.doctors.map((doctor, index) => {
        return <span>{doctor.name}
        {index < story.doctors.length - 1 && <span>, </span>}</span> 
    })
    const companionInfo = story.companions.map((companion, index) => {
        return <li>
        <span>{companion.firstName} {companion.lastName}
        {index < story.companions.length - 1 && <span>, </span>}</span> 
        </li>
    })

    const episodeText = story.noOfEpisodes === 1 ? ' Episode' : ' Episodes';

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
        <img src={story.imgURL} alt="title_logo" width="175" height="200"/>
        </div>
        
        <div className="text-container">
        
        <ul>
            <div className="story-column-1">
            
            <li>{doctorInfo}: {story.series}, Story {story.storyNumber}</li>
            <li><b>Companions:</b> {companionInfo}</li>
            <li>Originally broadcast: {story.firstEpBroadcast == story.lastEpBroadcast ? story.firstEpBroadcast : story.firstEpBroadcast + ' - ' + story.lastEpBroadcast}
            {' (' + story.noOfEpisodes + episodeText + ')'}</li>
            <li></li>
            <br />
            <li>{story.synopsis}</li>
            </div>
        </ul>

            <div className="add-user-story-buttons">
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
                />
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