import React from "react";
import StoryItem from "./story_item";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const StorySearchResults = ({filteredStories, loggedInUser, addUserStory, fetchData, formatDate}) => {

    const [storiesOnDisplay, setStoriesonDisplay] = useState(20);

    const handleShowMoreStories = () => {
        setStoriesonDisplay(prevStoriesOnDisplay => prevStoriesOnDisplay + 20)
    }

   const storyList = filteredStories
   .sort((a, b) => new Date(a.firstEpBroadcast) - new Date(b.firstEpBroadcast)) 
   .slice(0, storiesOnDisplay)
   .map((filteredStory, index) => {
    return <StoryItem 
    key={index}
    story={filteredStory}
    loggedInUser={loggedInUser} 
    addUserStory={addUserStory}
    fetchData={fetchData}
    formatDate={formatDate}
    />})

    const hasMoreStories = storiesOnDisplay < filteredStories.length;

    return ( 

        <div className="search-results">
            {storyList}
            {hasMoreStories && (
                <button className="story-buttons" onClick={handleShowMoreStories}>Load More</button>
            )}
            <p>If you cannot find the story you are looking for, logged-in users can add it <NavLink to="/add_story">here</NavLink>.</p>
        </div>
     );
}
 
export default StorySearchResults;