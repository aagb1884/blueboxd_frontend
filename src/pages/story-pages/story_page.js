import React, { useState } from 'react';
import PageLayout from "../../Components/Navigation/page_layout";
import StorySearchResults from './story-search-results';
import { PageLoader } from '../../Components/Navigation/page_loader';
import DoctorFilter from '../../Components/SearchComponents/DoctorFilter';
import MediaFilter from '../../Components/SearchComponents/MediaFilter';
import '../../Components/SearchComponents/search.css';
import CompanionTVFilter from '../../Components/SearchComponents/CompanionTVFilter';
import CompanionProseFilter from '../../Components/SearchComponents/CompanionProseFilter';
import CompanionAudioFilter from '../../Components/SearchComponents/CompanionAudioFilter';
import CompanionComicsFilter from '../../Components/SearchComponents/CompanionComicsFilter';

const Story = ({stories, loading, error, loggedInUser, addUserStory, fetchData}) => {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [filterByMedia, setFilterByMedia] = useState('All');
    const [filterByDoctor, setFilterByDoctor] = useState('All');
    const [filterByCompanion, setFilterByCompanion] = useState('All');
    const [showFilters, setShowFilters] = useState(false);

        const toggleShowFilters = () => {
          setShowFilters(!showFilters)
        }

        const handleSearch = (event) => {
            event.preventDefault();
            setSearchTerm(event.target.value);
          };

        const clearSearch = () => {
            setSearchTerm('');
            setFilterByMedia('All');
            setFilterByDoctor('All');
            setFilterByCompanion('All')
        };

        const toLowerCaseSafe = (str) => (str ? str.toLowerCase() : '');

          let filteredStories = stories;
          if (searchTerm.length > 0 || filterByMedia !== 'All' || filterByDoctor !== 'All' || filterByCompanion !== 'All' ||
             (searchTerm.length > 0 && filterByMedia !== 'All' && filterByDoctor !== 'All' && filterByCompanion !== 'All')) {
            filteredStories = stories.filter((story) => {

            

              const searchTermLower = toLowerCaseSafe(searchTerm);

              const mediaMatch = filterByMedia === 'All' || filterByMedia === story.media;

              const doctorFilterMatch = filterByDoctor === 'All' || 
              story.doctors.some((doctor) => doctor.name === filterByDoctor);
              
              const companionFilterMatch = filterByCompanion === 'All' || 
              story.companions.some((companion) => (`${companion.firstName} ${companion.primaryMedia}`) === filterByCompanion);

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
                    toLowerCaseSafe(companion.nickname).includes(searchTermLower) ||
                    toLowerCaseSafe(companion.mainActor).includes(searchTermLower)
                  )
              });

              return (
                (mediaMatch && doctorFilterMatch && companionFilterMatch) &&
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
                <div className='show-hide-filters'>
              <h4>Filters</h4>
                <img id="visible-toggle"
                  alt="toggle-view-button"
                  title="Hide/Expand View"
                  src="../images/3209209_arrow_direction_down_triangle_up_icon.png"
                  onClick={toggleShowFilters} />
                </div>
                {showFilters && (
                  <section className='all-filters'>
                  <div className='filters'>
                  <MediaFilter 
                  filterByMedia={filterByMedia}
                  setFilterByMedia={setFilterByMedia}
                  />

                  <DoctorFilter 
                  filterByDoctor={filterByDoctor}
                  setFilterByDoctor={setFilterByDoctor}
                  />
                  </div>
                  <h5>Companion Filters</h5>
                  <aside>Companions are grouped according to the format they first appeared in.</aside>
                  <div className='companion-filters'>
                      
                  <CompanionTVFilter 
                  filterByCompanion={filterByCompanion}
                  setFilterByCompanion={setFilterByCompanion}
                  />

                  <CompanionProseFilter 
                  filterByCompanion={filterByCompanion}
                  setFilterByCompanion={setFilterByCompanion}
                  />

                  <CompanionAudioFilter 
                  filterByCompanion={filterByCompanion}
                  setFilterByCompanion={setFilterByCompanion}
                  />

                  <CompanionComicsFilter 
                  filterByCompanion={filterByCompanion}
                  setFilterByCompanion={setFilterByCompanion}
                  />
                  </div>
                  </section>
                  )}
                </div>
              
                
                <div className='stories-search-results'>
               <StorySearchResults 
                loggedInUser={loggedInUser}
               filteredStories={filteredStories}
               addUserStory={addUserStory}
               fetchData={fetchData}
               />
               {loading && <PageLoader />}
               {error && <p>There was an error loading the stories.</p>}
               {!loading && !error && filteredStories.length === 0 && (
          <div>
            <h2>No results found.</h2>
          </div>
          
        )}
               </div>
        </section>
               
        </section>
        </PageLayout>
     );
}
 
export default Story;