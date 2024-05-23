import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURLstories } from "../Services/story_services";
import PageLayout from "../Components/page_layout";

const StoryDetailPage = ({setError, setLoading, isLoading, user}) => {   
   const [selectedStory, setSelectedStory] = useState(null);
   const { id } = useParams(); 

   const getSelectedStory = async (id) => {
      try {
        const response = await fetch(baseURLstories + '/' + id);
        if (!response.ok) {
          throw new Error('Failed to fetch story');
        }
        const data = await response.json();
        setSelectedStory(data);
      } catch (err) {
         console.log(err)
         setError(err)
       } finally {
         setLoading(false)
       }
    };

    useEffect(() => {
      getSelectedStory(id);
    }, [id]); 

    useEffect(() => {
      if (isLoading) return;
      getSelectedStory();
    }, [isLoading]);

    if (!selectedStory) {
      return <div>Loading...</div>; 
    }
  

    const storyDoctorInfo = selectedStory.doctors.map((doctor, index) => {
      return <span>{doctor.name}
      {index < selectedStory.doctors.length - 1 && <span>, </span>}</span> 
  })
  const storyCompanionInfo = selectedStory.companions.map((companion, index) => {
      return <li>
      <span>{companion.firstName} {companion.lastName}
      {index < selectedStory.companions.length - 1 && <span>, </span>}</span> 
      </li>
  })
  
     
  const storyCastCrewInfo = selectedStory.castAndCrew.map((castCrewMember) => {
      const { role, person } = castCrewMember; 
  
      return (
          <li key={person.id}>
          <span>{role}: {person.name} </span>
          </li>
      );
  });

  function formatSeries(series) {
     
      series = series.toLowerCase();
  
      const firstNumberIndex = series.search(/\d/);
  
      if (firstNumberIndex !== -1) {
          series = series.slice(0, firstNumberIndex) + ' ' + series.slice(firstNumberIndex);
      }
  
  
      series = series.charAt(0).toUpperCase() + series.slice(1);
  
      return series;
  }

  const episodeText = selectedStory.noOfEpisodes === 1 ? ' Episode' : ' Episodes';
 
  console.log(selectedStory.doctors)

    return ( 
        <PageLayout>
       <section className='story-item'>
        <h3>{selectedStory.title} ({selectedStory.media})</h3>
        <div className="story-item-container"> 
        
        <div className="image-container">
        <img src={selectedStory.imgURL} alt="title_logo" width="175" height="200"/>
        </div>
        
        <div className="text-container">
        
        <ul>
            <div className="story-column-1">
            
            <li>{storyDoctorInfo}: {formatSeries(selectedStory.series)}, Story {selectedStory.storyNumber}</li>
            <li><b>Companions:</b> {storyCompanionInfo}</li>
            <li>Originally broadcast: {selectedStory.firstEpBroadcast == selectedStory.lastEpBroadcast ? selectedStory.firstEpBroadcast : selectedStory.firstEpBroadcast + ' - ' + selectedStory.lastEpBroadcast}
            {' (' + selectedStory.noOfEpisodes + episodeText + ')'}</li>
            <li></li>
            <br />
            <li>{selectedStory.synopsis}</li>
            </div>
        </ul>
            
        <ul>
            <div className="story-column-2">
                <b>Cast and Crew:</b>
            <li>{storyCastCrewInfo} </li> 
            <br />
            <li>{selectedStory.productionCode > 0 ? 'Production Code: ' + selectedStory.productionCode : ''}</li>
            <li>Releases: {selectedStory.releases}</li>
            <li><a href={selectedStory.wikiLink}>TARDIS Wiki</a></li>
            </div>
        </ul>
        
             </div>
        </div>
        <div className="add-user-story-buttons">
        <button>Add Review</button>
        <button>Add to Watch List</button>
        </div>
        </section>
        </PageLayout>
     );
}
 
export default StoryDetailPage;