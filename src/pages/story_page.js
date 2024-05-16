import React, { useState } from 'react';
import PageLayout from "../Components/page_layout";
import StoryItem from "./story_item";
import SearchResults from './search-results';

const Story = ({stories}) => {
    const [searchTerm, setSearchTerm] = useState("");

        const allStories = stories.map((story, index) => {
            console.log(story)
            return <StoryItem key={index} story={story} />
        })

        const handleSearch = (event) => {
            event.preventDefault();
            setSearchTerm(event.target.value);
          };

        const clearSearch = () => {
            setSearchTerm('')
        };

          let filteredStories = stories;
          if (searchTerm.length > 0) {
            filteredStories = stories.filter((story) => {
                const searchTermLower = searchTerm.toLowerCase();

                const doctorMatch = story.doctors.some((doctor) => {
                    return (
                     doctor.name.toLowerCase().includes(searchTermLower) ||
                     doctor.mainActor.toLowerCase().includes(searchTermLower) 
                    )
                });

                const companionMatch = story.companions.some((companion) => {
                    return (
                    companion.firstName.toLowerCase().includes(searchTermLower) ||
                    companion.lastName.toLowerCase().includes(searchTermLower) ||
                    companion.mainActor.toLowerCase().includes(searchTermLower) 
                    )
                });

              return (
                story.title.toLowerCase().includes(searchTermLower) ||
                story.keywords.toLowerCase().includes(searchTermLower) ||
                story.firstEpBroadcast.toLowerCase().includes(searchTermLower) ||
                story.lastEpBroadcast.toLowerCase().includes(searchTermLower) ||
                story.series.toLowerCase().includes(searchTermLower) ||
                doctorMatch ||
                companionMatch    
              );      
            
            });
            
         }

    return ( 
        <PageLayout>
        <section>
            <h1>Story Page</h1>
            <section className="search-page">
         <h3>Search for specific stories.</h3>
            
               <input  id="search" 
                placeholder="Search..." 
                onChange={handleSearch}
                type="text"
                name="searchTerm"
                value={searchTerm}/>
                <button onClick={clearSearch}>
                    Clear Search
                </button>
                <div className='stories-search-results'>
               <SearchResults filteredStories={filteredStories}/>
               </div>
        </section>
            {/* <div className="story-list">
                {allStories}
            </div> */}
     
        </section>
        </PageLayout>
     );
}
 
export default Story;