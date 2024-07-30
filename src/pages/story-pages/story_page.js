import React, { useState } from 'react';
import PageLayout from "../../Components/Navigation/page_layout";
import SearchResults from '../search-results';
import { NavLink } from 'react-router-dom';
import { PageLoader } from '../../Components/Navigation/page_loader';

const Story = ({stories, loading, error, loggedInUser, addUserStory, fetchData}) => {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [filterByMedia, setFilterByMedia] = useState('All');

        const handleSearch = (event) => {
            event.preventDefault();
            setSearchTerm(event.target.value);
          };

        const clearSearch = () => {
            setSearchTerm('');
            setFilterByMedia('All')
        };

        const toLowerCaseSafe = (str) => (str ? str.toLowerCase() : '');

          let filteredStories = stories;
          if (searchTerm.length > 0 || filterByMedia !== 'All' || (searchTerm.length > 0 && filterByMedia !== 'All')) {
            filteredStories = stories.filter((story) => {
              const searchTermLower = toLowerCaseSafe(searchTerm);

                const mediaMatch = filterByMedia === 'All' || filterByMedia === story.media;
               
                const doctorMatch = story.doctors.some((doctor) => {
                    return (
                      toLowerCaseSafe(doctor.name).includes(searchTermLower) ||
                      toLowerCaseSafe(doctor.mainActor).includes(searchTermLower)
                    )
                });

                const companionMatch = story.companions.some((companion) => {
                    return (
                      toLowerCaseSafe(companion.firstName).includes(searchTermLower) ||
                      toLowerCaseSafe(companion.lastName).includes(searchTermLower) ||
                      toLowerCaseSafe(companion.mainActor).includes(searchTermLower)
                    )
                });

              return (
                mediaMatch &&
                (
                  toLowerCaseSafe(story.title).includes(searchTermLower) ||
                  toLowerCaseSafe(story.keywords).includes(searchTermLower) ||
                  toLowerCaseSafe(story.firstEpBroadcast).includes(searchTermLower) ||
                  toLowerCaseSafe(story.lastEpBroadcast).includes(searchTermLower) ||
                  toLowerCaseSafe(story.series).includes(searchTermLower) ||
                  toLowerCaseSafe(story.productionCode).includes(searchTermLower) ||
                  doctorMatch ||
                  companionMatch
              )
                
              );    
         
                }
          )}
        
          

    return ( 
        <PageLayout>
        <section>
            <h1>All the stories. In the end.</h1>
            <section className="search-page">
         <h4>Search for specific stories.</h4>
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
                <option value='Film'>Film</option>
                <option value='Audio'>Audio</option>
                <option value='Prose'>Prose</option>
                <option value='Comic'>Comic</option>
                <option value='Webcast'>Webcast</option>
                <option value='Other'>Other</option>
                </select>
                <span className="focus"></span>
                </div>
                
                <div className='stories-search-results'>
               <SearchResults 
                loggedInUser={loggedInUser}
               filteredStories={filteredStories}
               addUserStory={addUserStory}
               fetchData={fetchData}
               />
               {loading && <PageLoader />}
               {error && <p>There was an error loading the stories.</p>}
               {!loading && !error && filteredStories.length === 0 && (
          <div>
            <p>No results found.</p>
            <p>If you cannot find the story you are looking for, logged-in users can add it <NavLink to="/add_story">here</NavLink>.</p>
          </div>
          
        )}
               </div>
        </section>
               
        </section>
        </PageLayout>
     );
}
 
export default Story;