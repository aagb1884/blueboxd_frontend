const StoryItem = ({story}) => {
console.log(story.title)
    return ( 
        <div className="story-item"> 
        <ul>
            <li><img src={story.imgURL} alt="title_logo" width="175" height="200"/></li>
            <li>{story.title}</li>
            <li>{story.firstEpBroadcast} - {story.lastEpBroadcast}</li>
            <li>{story.synopsis}</li>
           
        </ul>
</div>
    );
}
 
export default StoryItem;