const StoryItem = ({story}) => {

    const doctorInfo = story.doctors.map((doctor, index) => {
        return <span>{doctor.name}
        {index < story.doctors.length - 1 && <span>, </span>}</span> 
    })
    const companionInfo = story.companions.map((companion, index) => {
        return <span>{companion.firstName} {companion.lastName}
        {index < story.companions.length - 1 && <span>, </span>}</span> 
    })
    
       
    const castCrewInfo = story.castAndCrew.map((castCrewMember) => {
        const { role, person } = castCrewMember; 
    
        return (
            <span key={person.id}>{role}: {person.name} </span>
        );
    });


    return ( 
        <div className="story-item"> 
        
        <div className="image-container">
        <img src={story.imgURL} alt="title_logo" width="175" height="200"/>
        </div>

        <div className="text-container">
        <ul>
            <li>{doctorInfo}: {story.series}, Story {story.storyNumber} - {story.title}</li>
            <li>Companions: {companionInfo}</li>
            <li>Originally broadcast: {story.firstEpBroadcast} - {story.lastEpBroadcast}</li>
            <li>{castCrewInfo}.</li>
            <li>{story.synopsis}</li>
            <li><a href={story.wikiLink}>TARDIS Wiki</a></li>
        </ul>
        </div>
</div>
    );
}
 
export default StoryItem;