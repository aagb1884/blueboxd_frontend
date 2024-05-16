import React from "react";
import StoryItem from "./story_item";

const SearchResults = ({filteredStories}) => {

   const storyList = filteredStories.map((filteredStory, index) => {
    return <StoryItem story={filteredStory} />})

    return ( 
        <div className="search-results">
            {storyList}
        </div>
     );
}
 
export default SearchResults;