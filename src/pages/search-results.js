import React from "react";
import StoryItem from "./story_item";

const SearchResults = ({filteredStories, formatSeries}) => {

   const storyList = filteredStories.map((filteredStory, index) => {
    return <StoryItem 
    story={filteredStory}
    formatSeries={formatSeries} />})

    return ( 

        <div className="search-results">
            {storyList}
        </div>
     );
}
 
export default SearchResults;