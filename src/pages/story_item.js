import { useState } from "react";
import { Link } from "react-router-dom";

const StoryItem = ({story}) => {

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
    
       
    const castCrewInfo = story.castAndCrew.map((castCrewMember) => {
        const { role, person } = castCrewMember; 
    
        return (
            <li key={person.id}>
            <span>{role}: {person.name} </span>
            </li>
        );
    });

    function formatSeries(series) {
       
        series = series.toLowerCase();
    
        const firstNumberIndex = series.search(/\d/);
    
        if (firstNumberIndex !== -1) {
            series = series.slice(0, firstNumberIndex) + ' ' + series.slice(firstNumberIndex);
        }
    
    
        series = series.charAt(0).toUpperCase() + series.slice(1);
    
        return series;
    }


    const episodeText = story.noOfEpisodes === 1 ? ' Episode' : ' Episodes';

    return ( 
        <section className='story-item'>
        <h3>{story.title} ({story.media})</h3>
        <div className="story-item-container"> 
        
        <div className="image-container">
        <img src={story.imgURL} alt="title_logo" width="175" height="200"/>
        </div>
        
        <div className="text-container">
        
        <ul>
            <div className="story-column-1">
            
            <li>{doctorInfo}: {formatSeries(story.series)}, Story {story.storyNumber}</li>
            <li><b>Companions:</b> {companionInfo}</li>
            <li>Originally broadcast: {story.firstEpBroadcast == story.lastEpBroadcast ? story.firstEpBroadcast : story.firstEpBroadcast + ' - ' + story.lastEpBroadcast}
            {' (' + story.noOfEpisodes + episodeText + ')'}</li>
            <li></li>
            <br />
            <li>{story.synopsis}</li>
            </div>
        </ul>

            <div className="add-user-story-buttons">
                <button className="story-buttons">Add Review</button>
                <button className="story-buttons"> Add to Watch List</button>
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