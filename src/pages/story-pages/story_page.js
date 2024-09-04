import React, { useState } from 'react';
import PageLayout from "../../Components/Navigation/page_layout";
import StorySearchResults from './story-search-results';
import { PageLoader } from '../../Components/Navigation/page_loader';
import DoctorFilter from '../../Components/SearchComponents/Characters/DoctorFilter';
import MediaFilter from '../../Components/SearchComponents/MediaFilter';
import '../../Components/SearchComponents/search.css';
import CompanionTVFilter from '../../Components/SearchComponents/Characters/Companions/CompanionTVFilter';
import CompanionProseFilter from '../../Components/SearchComponents/Characters/Companions/CompanionProseFilter';
import CompanionAudioFilter from '../../Components/SearchComponents/Characters/Companions/CompanionAudioFilter';
import CompanionComicsFilter from '../../Components/SearchComponents/Characters/Companions/CompanionComicsFilter';
import AntagonistTVFilter from '../../Components/SearchComponents/Characters/Antagonists/AntagonistTVFilter';
import AntagonistEUFilter from '../../Components/SearchComponents/Characters/Antagonists/AntagonistEUFilter';
import WriterTVFilter from '../../Components/SearchComponents/Creators-Writers/WriterTVFilter';
import ShowrunnerFilter from '../../Components/SearchComponents/Creators-Writers/ShowrunnerFilter';
import WriterAudioFilter from '../../Components/SearchComponents/Creators-Writers/WriterAudioFilter';
import WriterProseFilter from '../../Components/SearchComponents/Creators-Writers/WriterProseFilter';
import CreatorComicFilter from '../../Components/SearchComponents/Creators-Writers/CreatorComicFilter';
import RecurringCharacterFilterTV from '../../Components/SearchComponents/Characters/RecurringCharacters/RecurringCharactersTV';
import TVSeriesFilter from '../../Components/SearchComponents/Series/TVSeriesFilter';
import ProseSeriesFilter from '../../Components/SearchComponents/Series/ProseSeriesFilter';
import AudioSeriesFilter from '../../Components/SearchComponents/Series/AudioSeriesFilter';
import ComicSeriesFilter from '../../Components/SearchComponents/Series/ComicSeriesFilter';
import RecurringCharacterFilterEU from '../../Components/SearchComponents/Characters/RecurringCharacters/RecurringCharacersEU';

const Story = ({stories, loading, error, loggedInUser, addUserStory, fetchData, formatDate}) => {
  
    const [searchTerm, setSearchTerm] = useState("");
    //filters
    const [filterByMedia, setFilterByMedia] = useState('All');
    const [filterBySeriesTV, setFilterBySeriesTV] = useState('All');
    const [filterBySeriesProse, setFilterBySeriesProse] = useState('All');
    const [filterBySeriesAudio, setFilterBySeriesAudio] = useState('All');
    const [filterBySeriesComics, setFilterBySeriesComics] = useState('All');

    //character filters
    //doctor filter
    const [filterByDoctor, setFilterByDoctor] = useState('All');
    //companion filters
    const [filterByCompanionTV, setFilterByCompanionTV] = useState('All');
    const [filterByCompanionBooks, setFilterByCompanionBooks] = useState('All');
    const [filterByCompanionAudio, setFilterByCompanionAudio] = useState('All');
    const [filterByCompanionComics, setFilterByCompanionComics] = useState('All');
    //antagonist filters
    const [filterByAntagonistTV, setFilterByAntagonistTV] = useState('All');
    const [filterByAntagonistEU, setFilterByAntagonistEU] = useState('All');
    //recurringCharacterFilters
    const [filterByRecurringCharacterTV, setFilterByRecurringCharacterTV] = useState('All');
    const [filterByRecurringCharacterEU, setFilterByRecurringCharacterEU] = useState('All');

    // cast and crew filters
    const [filterByWriterProse, setFilterByWriterProse] = useState('All');
    const [filterByWriterAudio, setFilterByWriterAudio] = useState('All');
    const [filterByWriterTV, setFilterByWriterTV] = useState('All');
    const [filterByShowrunnerTV, setFilterByShowrunnerTV] = useState('All');
    const [filterByCreativeComics, setFilterByCreativeComics] = useState('All');
    
    //show/hide filter components
    const [showAllFilters, setShowAllFilters] = useState(false);
    const [showSeriesFilters, setShowSeriesFilters] = useState(false);
    const [showCharacterFilters, setShowCharacterFilters] = useState(false);
    const [showCompanionFilters, setShowCompanionFilters] = useState(false);
    const [showAntagonistFilters, setShowAntagonistFilters] = useState(false);
    const [showCastCrewFilters, setShowCastCrewFilters] = useState(false);

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
            setFilterByWriterProse('All');
            setFilterByWriterAudio('All');
            setFilterByWriterTV('All');
            setFilterByShowrunnerTV('All');
            setFilterByCreativeComics('All');
            setFilterByRecurringCharacterTV('All');
            setFilterByRecurringCharacterEU('All');
            setFilterBySeriesTV('All');
            setFilterBySeriesProse('All');
            setFilterBySeriesComics('All');
            setFilterBySeriesAudio('All');
        };

        const toLowerCaseSafe = (str) => (str ? str.toLowerCase() : '');

          let filteredStories = stories;
          if (searchTerm.length > 0 || filterByMedia !== 'All' || filterByDoctor !== 'All' || filterByCompanionTV !== 'All' ||
            filterByCompanionBooks !== 'All' || filterByCompanionAudio !== 'All' || filterByCompanionComics !== 'All' ||
            filterByAntagonistTV  !== 'All' || filterByAntagonistEU !== 'All' || filterByWriterAudio !== 'All' || filterByWriterTV!== 'All' || 
            filterByWriterProse !== 'All' || filterByShowrunnerTV !== 'All' || filterByCreativeComics !== 'All' || filterByRecurringCharacterTV !== 'All' ||
            filterByRecurringCharacterEU !== 'All' ||  filterBySeriesTV !== 'All' || filterBySeriesProse !== 'All' || filterBySeriesAudio !== 'All' || filterBySeriesComics !== 'All' ||
             (searchTerm.length > 0 && filterByMedia !== 'All' && filterByDoctor !== 'All' && filterByCompanionTV !== 'All' &&
              filterByCompanionAudio !== 'All' && filterByCompanionBooks !== 'All' && filterByCompanionComics !== 'All' &&
              filterByAntagonistTV !== 'All' && filterByAntagonistEU !== 'All' && filterByWriterTV !== 'All' && filterByWriterAudio !== 'All' &&
              filterByWriterProse !== 'All' && filterByShowrunnerTV !== 'All' && filterByCreativeComics !== 'All' && filterByRecurringCharacterTV !== 'All'
              && filterByRecurringCharacterEU !== 'All' && filterBySeriesTV !== 'All' && filterBySeriesProse !== 'All' && filterBySeriesAudio !== 'All' && filterBySeriesComics !== 'All'
             )) {
            filteredStories = stories.filter((story) => {

              const searchTermLower = toLowerCaseSafe(searchTerm);

              const mediaMatch = filterByMedia === 'All' || filterByMedia === story.media;

              

              const tvSeriesMatch = filterBySeriesTV === 'All' || filterBySeriesTV === story.series
              const audioSeriesMatch = filterBySeriesAudio === 'All' || filterBySeriesAudio === story.series
              const proseSeriesMatch = filterBySeriesProse === 'All' || filterBySeriesProse === story.series
              const comicSeriesMatch = filterBySeriesComics === 'All' || filterBySeriesComics === story.series

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

              const recurringCharacterFilterMatchTV = filterByRecurringCharacterTV === 'All' || 
              story.recurringCharacters.some((character) => (`${character.name} ${character.primaryMedia}`) === filterByRecurringCharacterTV);
              const recurringCharacterFilterMatchEU = filterByRecurringCharacterEU === 'All' || 
              story.recurringCharacters.some((character) => (`${character.name} ${character.primaryMedia}`) === filterByRecurringCharacterEU);


              const writerProseFilterMatch = filterByWriterProse === 'All' ||
              story.castAndCrew && story.castAndCrew.length > 0 &&
              story.castAndCrew.some((crewMember) => (`${crewMember.person.name} ${crewMember.role}`) === filterByWriterProse);            
              const writerAudioFilterMatch = filterByWriterAudio === 'All' ||
              story.castAndCrew && story.castAndCrew.length > 0 &&
              story.castAndCrew.some((crewMember) => (`${crewMember.person.name} ${crewMember.role}`) === filterByWriterAudio);            
              const writerTVFilterMatch = filterByWriterTV === 'All' ||
              story.castAndCrew && story.castAndCrew.length > 0 &&
              story.castAndCrew.some((crewMember) => (`${crewMember.person.name} ${crewMember.role}`) === filterByWriterTV);            
              const showrunnerFilterMatch = filterByShowrunnerTV === 'All' ||
              story.castAndCrew && story.castAndCrew.length > 0 &&
              story.castAndCrew.some((crewMember) => (`${crewMember.person.name} ${crewMember.role}`) === filterByShowrunnerTV);            
              const comicCreativeFilter = filterByCreativeComics === 'All' ||
              story.castAndCrew && story.castAndCrew.length > 0 &&
              story.castAndCrew.some((crewMember) => (`${crewMember.person.name} ${crewMember.role}`) === filterByCreativeComics);            


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

              const regCharacterMatch = story.recurringCharacters && story.recurringCharacters.length > 0 &&
              story.recurringCharacters.some((character) => {
                  return toLowerCaseSafe(character.name).includes(searchTermLower);
              });

              const castAndCrewMatch = story.castAndCrew && story.castAndCrew.length > 0 &&
              story.castAndCrew.some((crewMember) => {
                  return toLowerCaseSafe(crewMember.person.name).includes(searchTermLower);
              });


              return (
                (mediaMatch && doctorFilterMatch && companionFilterMatchTV && companionFilterMatchAudio && showrunnerFilterMatch &&
                  writerTVFilterMatch && companionFilterMatchProse && companionFilterMatchComics && antagonistFilterMatchTV && 
                  antagonistFilterMatchEU && writerAudioFilterMatch && writerProseFilterMatch && comicCreativeFilter && recurringCharacterFilterMatchTV
                  && recurringCharacterFilterMatchEU && tvSeriesMatch && audioSeriesMatch && proseSeriesMatch && comicSeriesMatch) &&
                (
                  toLowerCaseSafe(story.title).includes(searchTermLower) ||
                  toLowerCaseSafe(story.keywords).includes(searchTermLower) ||
                  toLowerCaseSafe(story.firstEpBroadcast).includes(searchTermLower) ||
                  toLowerCaseSafe(story.lastEpBroadcast).includes(searchTermLower) ||
                  toLowerCaseSafe(story.series).includes(searchTermLower) ||
                  toLowerCaseSafe(story.subSeries).includes(searchTermLower) ||
                  toLowerCaseSafe(story.productionCode).includes(searchTermLower) ||
                  doctorMatch ||
                  companionMatch ||
                  regCharacterMatch ||
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
         <i>Some search results may contain spoilers.</i>
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
                  title={showAllFilters ? "Hide" : "Expand"}
                  src={showAllFilters ? "../images/arrow_up.png" : "../images/arrow_down.png"}
                  onClick={() => toggleShowState(setShowAllFilters, showAllFilters)} />
                </div>
                {showAllFilters && (
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

                  <div className='show-hide-filters'>
                  <h5>Filter By Series</h5>
                  
                 
                  <img id="visible-toggle"
                  alt="toggle-view-button"
                  title={showSeriesFilters ? "Hide" : "Expand"}
                  src={showSeriesFilters ? "../images/arrow_up.png" : "../images/arrow_down.png"}                  onClick={() => toggleShowState(setShowSeriesFilters, showSeriesFilters)} />
                  </div>

                  {showSeriesFilters && (
                    <div className='series-filters'>

                    <div className='series-filters-rows'>
                    <TVSeriesFilter 
                    filterBySeries={filterBySeriesTV}
                    setFilterBySeries={setFilterBySeriesTV}
                    />
                    <AudioSeriesFilter 
                    filterBySeries={filterBySeriesAudio}
                    setFilterBySeries={setFilterBySeriesAudio}
                    />
                    </div>

                    <div className='series-filters-rows'>
                    <ProseSeriesFilter 
                    filterBySeries={filterBySeriesProse}
                    setFilterBySeries={setFilterBySeriesProse}
                    />
                    <ComicSeriesFilter 
                    filterBySeries={filterBySeriesComics}
                    setFilterBySeries={setFilterBySeriesComics}
                    />
                    </div>

                    </div>
                  )}

                  <div className='show-hide-filters'>
                  <h5>Filter By Characters</h5>
                  
                  <img id="visible-toggle"
                  alt="toggle-view-button"
                  title={showCharacterFilters ? "Hide" : "Expand"}
                  src={showCharacterFilters ? "../images/arrow_up.png" : "../images/arrow_down.png"}                  onClick={() => toggleShowState(setShowCharacterFilters, showCharacterFilters)} />
                  </div>
                  {showCharacterFilters && (
                  <>
                  <aside>Some characters may appear in more than one filter. Some results may be spoilers.</aside>
                  <div className='rec-character-filters'>

                  <RecurringCharacterFilterTV
                  filterByRecurringCharacter={filterByRecurringCharacterTV}
                  setFilterByRecurringCharacter={setFilterByRecurringCharacterTV}
                  />

                  <RecurringCharacterFilterEU 
                  filterByRecurringCharacter={filterByRecurringCharacterEU}
                  setFilterByRecurringCharacter={setFilterByRecurringCharacterEU}
                  />

                  </div>

                  <div className='show-hide-filters'>
                  <h5>Companion Filters</h5>
                  
                  <img id="visible-toggle"
                  alt="toggle-view-button"
                  title={showCompanionFilters ? "Hide" : "Expand"}     
                  src={showCompanionFilters ? "../images/arrow_up.png" : "../images/arrow_down.png"}                  onClick={() => toggleShowState(setShowCompanionFilters, showCompanionFilters)} />
                  </div>
                  {showCompanionFilters && (
                    <>
                  <aside>Some companions may appear in more than one filter. Some results may be spoilers.</aside>
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
                  </>
                  )}
                  
                  <div className='show-hide-filters'>
                  <h5>Antagonist Filters</h5>
                  <img id="visible-toggle"
                  alt="toggle-view-button"
                  title={showAntagonistFilters ? "Hide" : "Expand"}                  
                  src={showAntagonistFilters ? "../images/arrow_up.png" : "../images/arrow_down.png"}                  onClick={() => toggleShowState(setShowAntagonistFilters, showAntagonistFilters)} />
                  </div>
                  {showAntagonistFilters && (
                    <div className='filter-border'>
                    <aside>Some antagonists may appear in more than one filter. Some results may be spoilers.</aside>
                  
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
                  </div>
                  )}

                  </>
                  )}
                   <div className='show-hide-filters'>
                  <h5>Cast and Crew Filters</h5>
                  <img id="visible-toggle"
                  alt="toggle-view-button"
                  title={showCastCrewFilters ? "Hide" : "Expand"}                  
                  src={showCastCrewFilters ? "../images/arrow_up.png" : "../images/arrow_down.png"}                  onClick={() => toggleShowState(setShowCastCrewFilters, showCastCrewFilters)} />
                  </div>

                  {showCastCrewFilters && (
                  <div className='cast-crew-filters'>

                    <ShowrunnerFilter
                    filterByShowrunnerTV={filterByShowrunnerTV}
                    setFilterByShowrunnerTV={setFilterByShowrunnerTV}
                    />

                    <div className='cast-crew-row'>
                    <WriterTVFilter 
                    filterByWriterTV={filterByWriterTV}
                    setFilterByWriterTV={setFilterByWriterTV}
                    />
                    
                    <WriterAudioFilter 
                    filterByWriterAudio={filterByWriterAudio}
                    setFilterByWriterAudio={setFilterByWriterAudio}
                    />

                    <WriterProseFilter 
                    filterByWriterProse={filterByWriterProse}
                    setFilterByWriterProse={setFilterByWriterProse}
                    />  

                    <CreatorComicFilter 
                    filterByCreativeComics={filterByCreativeComics}
                    setFilterByCreativeComics={setFilterByCreativeComics}/>
                    </div>
                  </div>
                  )}
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
               formatDate={formatDate}
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