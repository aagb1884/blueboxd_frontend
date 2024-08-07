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
import AntagonistTVFilter from '../../Components/SearchComponents/AntagonistTVFilter';
import AntagonistEUFilter from '../../Components/SearchComponents/AntagonistEUFilter';

const Story = ({stories, loading, error, loggedInUser, addUserStory, fetchData}) => {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [filterByMedia, setFilterByMedia] = useState('All');
    const [filterByDoctor, setFilterByDoctor] = useState('All');
    const [filterByCompanionTV, setFilterByCompanionTV] = useState('All');
    const [filterByCompanionBooks, setFilterByCompanionBooks] = useState('All');
    const [filterByCompanionAudio, setFilterByCompanionAudio] = useState('All');
    const [filterByCompanionComics, setFilterByCompanionComics] = useState('All');
    const [filterByAntagonistTV, setFilterByAntagonistTV] = useState('All')
    const [filterByAntagonistEU, setFilterByAntagonistEU] = useState('All')
    const [showFilters, setShowFilters] = useState(false);

        const toggleShowState = (set, state) => {
          set(!state)
        }

        const handleSearch = (event) => {
            event.preventDefault();
            setSearchTerm(event.target.value);
          };

        const clearSearch = () => {
            setSearchTerm('');
            setFilterByMedia('All');
            setFilterByDoctor('All');
            setFilterByCompanionTV('All');
            setFilterByCompanionAudio('All');
            setFilterByCompanionBooks('All');
            setFilterByCompanionComics('All');
            setFilterByAntagonistTV('All');
            setFilterByAntagonistEU('All');
        };

        const toLowerCaseSafe = (str) => (str ? str.toLowerCase() : '');

          let filteredStories = stories;
          if (searchTerm.length > 0 || filterByMedia !== 'All' || filterByDoctor !== 'All' || filterByCompanionTV !== 'All' ||
            filterByCompanionBooks !== 'All' || filterByCompanionAudio !== 'All' || filterByCompanionComics !== 'All' ||
            filterByAntagonistTV  !== 'All' || filterByAntagonistEU !== 'All' ||
             (searchTerm.length > 0 && filterByMedia !== 'All' && filterByDoctor !== 'All' && filterByCompanionTV !== 'All' &&
              filterByCompanionAudio !== 'All' && filterByCompanionBooks !== 'All' && filterByCompanionComics !== 'All' &&
              filterByAntagonistTV !== 'All' && filterByAntagonistEU !== 'All'
             )) {
            filteredStories = stories.filter((story) => {

              console.log(story.castAndCrew);

              const searchTermLower = toLowerCaseSafe(searchTerm);

              const mediaMatch = filterByMedia === 'All' || filterByMedia === story.media;

              const doctorFilterMatch = filterByDoctor === 'All' || 
              story.doctors.some((doctor) => doctor.name === filterByDoctor);

              const companionFilterMatchTV = filterByCompanionTV === 'All' || 
              story.companions.some((companion) => (`${companion.firstName} ${companion.primaryMedia}`) === filterByCompanionTV);
              const companionFilterMatchAudio = filterByCompanionAudio === 'All' || 
              story.companions.some((companion) => (`${companion.firstName} ${companion.primaryMedia}`) === filterByCompanionAudio);
              const companionFilterMatchComics = filterByCompanionComics === 'All' || 
              story.companions.some((companion) => (`${companion.firstName} ${companion.primaryMedia}`) === filterByCompanionComics);
              const companionFilterMatchProse = filterByCompanionBooks === 'All' || 
              story.companions.some((companion) => (`${companion.firstName} ${companion.primaryMedia}`) === filterByCompanionBooks);

              const antagonistFilterMatchTV = filterByAntagonistTV === 'All' || 
              story.antagonists.some((antagonist) => (`${antagonist.name} ${antagonist.primaryMedia}`) === filterByAntagonistTV);
              const antagonistFilterMatchEU = filterByAntagonistEU === 'All' || 
              story.antagonists.some((antagonist) => (`${antagonist.name} ${antagonist.primaryMedia}`) === filterByAntagonistEU);

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

              const castAndCrewMatch = story.castAndCrew && story.castAndCrew.length > 0 &&
              story.castAndCrew.some((crewMember) => {
                  return toLowerCaseSafe(crewMember.person.name).includes(searchTermLower);
              });


              return (
                (mediaMatch && doctorFilterMatch && companionFilterMatchTV && companionFilterMatchAudio &&
                  companionFilterMatchProse && companionFilterMatchComics && antagonistFilterMatchTV && antagonistFilterMatchEU 
                ) &&
                (
                  toLowerCaseSafe(story.title).includes(searchTermLower) ||
                  toLowerCaseSafe(story.keywords).includes(searchTermLower) ||
                  toLowerCaseSafe(story.firstEpBroadcast).includes(searchTermLower) ||
                  toLowerCaseSafe(story.lastEpBroadcast).includes(searchTermLower) ||
                  toLowerCaseSafe(story.series).includes(searchTermLower) ||
                  toLowerCaseSafe(story.productionCode).includes(searchTermLower) ||
                  doctorMatch ||
                  companionMatch ||
                  castAndCrewMatch
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
                  onClick={() => toggleShowState(setShowFilters, showFilters)} />
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
                  filterByCompanion={filterByCompanionTV}
                  setFilterByCompanion={setFilterByCompanionTV}
                  />

                  <CompanionProseFilter 
                  filterByCompanion={filterByCompanionBooks}
                  setFilterByCompanion={setFilterByCompanionBooks}
                  />

                  <CompanionAudioFilter 
                  filterByCompanion={filterByCompanionAudio}
                  setFilterByCompanion={setFilterByCompanionAudio}
                  />

                  <CompanionComicsFilter 
                  filterByCompanion={filterByCompanionComics}
                  setFilterByCompanion={setFilterByCompanionComics}
                  />
                  </div>
                  <h5>Antagonist Filters</h5>
                  <aside>Select from antagonists according to the format they first appeared in.</aside>
                  <div className='antagonist-filters'>

                    <AntagonistTVFilter 
                    filterByAntagonistTV={filterByAntagonistTV}
                    setFilterByAntagonistTV={setFilterByAntagonistTV}
                    />

                    <AntagonistEUFilter 
                    filterByAntagonistEU={filterByAntagonistEU}
                    setFilterByAntagonistEU={setFilterByAntagonistEU}
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
               toggleShowState={toggleShowState}
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