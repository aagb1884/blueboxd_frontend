import React from "react";
import StoryItem from "./story-pages/story_item";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SearchResults = ({filteredStories, loggedInUser, addUserStory, fetchData}) => {

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
    />})

    return ( 

        <div className="search-results">
            {storyList}
            <button onClick={handleShowMoreStories}>Load more</button>
            <p>If you cannot find the story you are looking for, logged-in users can add it <NavLink to="/add_story">here</NavLink>.</p>
        </div>
     );
}
 
export default SearchResults;