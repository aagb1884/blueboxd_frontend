import React, { useState } from 'react';
import PageLayout from "../Components/page_layout";
import SearchResults from './search-results';
import StoryDetailPage from './story-detail-page';

const Story = ({stories, loading, error}) => {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [filterByMedia, setFilterByMedia] = useState('All');

  //   const allStories = stories.map((story, index) => {
  //     return <StoryDetailPage key={index} story={story} storyID={story.id}/>
  //  })

        const handleSearch = (event) => {
            event.preventDefault();
            setSearchTerm(event.target.value);
          };

        const clearSearch = () => {
            setSearchTerm('');
            setFilterByMedia('All')
        };

       

          let filteredStories = stories;
          if (searchTerm.length > 0 || filterByMedia !== 'All' || (searchTerm.length > 0 && filterByMedia !== 'All')) {
            filteredStories = stories.filter((story) => {
                const searchTermLower = searchTerm.toLowerCase();

                const mediaMatch = filterByMedia === 'All' || filterByMedia === story.media;
               
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
                mediaMatch &&
                (story.title.toLowerCase().includes(searchTermLower) ||
                story.keywords.toLowerCase().includes(searchTermLower) ||
                story.firstEpBroadcast.toLowerCase().includes(searchTermLower) ||
                story.lastEpBroadcast.toLowerCase().includes(searchTermLower) ||
                story.series.toLowerCase().includes(searchTermLower) ||
                story.productionCode.toLowerCase().includes(searchTermLower) ||
                doctorMatch ||
                companionMatch )
                
              );    
         
                }
          )}
        
          

    return ( 
        <PageLayout>
        <section>
            <h1>Story Page</h1>
            <section className="search-page">
         <h3>Search for specific stories.</h3>
            <p>Results will appear as you type.</p>
            <div className='search-function'>
               <input  id="search" 
                placeholder="Search..." 
                onChange={handleSearch}
                type="text"
                name="searchTerm"
                value={searchTerm}/>
                <button onClick={clearSearch}>
                    Clear Search
                </button>
                </div>
                <div className='search-filters'>
                <select
                    value={filterByMedia}
                    onChange={(e) => {
                    setFilterByMedia(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Foamat">`
                <option value='All'>Filter By Format</option>
                <option value='TV'>TV</option>
                <option value='FILM'>Film</option>
                <option value='AUDIO'>Audio</option>
                <option value='PROSE'>Prose</option>
                <option value='COMIC'>Comic</option>
                <option value='OTHER'>Other</option>
                </select>
                <span className="focus"></span>
                </div>
                
                <div className='stories-search-results'>
               <SearchResults 
               filteredStories={filteredStories}
               />
               {loading && <h2>Loading...</h2>}
               {error && <p>There was an error loading the stories.</p>}
               {!loading && !error && filteredStories.length === 0 && (
          <div>No results found.</div>
        )}
               </div>
        </section>
               
        </section>
        </PageLayout>
     );
}
 
export default Story;