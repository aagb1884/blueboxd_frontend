import React from "react";
import StoryItem from "./story-pages/story_item";
import { NavLink } from "react-router-dom";

const SearchResults = ({filteredStories, loggedInUser, addUserStory}) => {

   const storyList = filteredStories.map((filteredStory, index) => {
    return <StoryItem 
    story={filteredStory}
    loggedInUser={loggedInUser} 
    addUserStory={addUserStory}
    />})

    return ( 

        <div className="search-results">
            {storyList}
            <p>If you cannot find the story you are looking for, logged-in users can add it <NavLink to="/add_story">here</NavLink>.</p>
        </div>
     );
}
 
export default SearchResults;