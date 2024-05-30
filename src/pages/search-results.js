import React from "react";
import StoryItem from "./story_item";

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
        </div>
     );
}
 
export default SearchResults;