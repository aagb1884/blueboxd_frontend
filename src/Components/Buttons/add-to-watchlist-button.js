const AddToWatchlist = ({loggedInUser, addUserStory, storyID, fetchData}) => {

const findWatchlistStories = loggedInUser?.userStorie?.filter(watchlistStory => watchlistStory.type === 'WATCHLIST') || [];
const checkIfOnWatchlist = findWatchlistStories.length > 0 &&  findWatchlistStories.some(watchlistStory => watchlistStory.story.id === storyID)

    function handleAddToWatchlist() {
        
if (!checkIfOnWatchlist) {
        addUserStory({
            story: {id: storyID},
            user: {id:3},
            // this will need changed when there is more than one user
            type: "WATCHLIST",
            rating: null,    
            reviewPrivate: false,
            creationOfReviewDateTime: new Date().toISOString()
        })
        console.log(checkIfOnWatchlist);
        alert("Story added to watchlist.")
        fetchData()
    }
    else {
        alert("Story is already on watchlist.")
    }
}

    return ( 
        <button className="story-buttons" onClick={handleAddToWatchlist}> Add to Watch List</button>
     );
}
 
export default AddToWatchlist;