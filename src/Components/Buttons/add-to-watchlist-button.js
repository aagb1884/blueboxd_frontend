const AddToWatchlist = ({loggedInUser, addUserStory, storyID}) => {

// console.log(loggedInUser)

const watchlist = 'WATCHLIST';


    function handleAddToWatchlist() {
        addUserStory({
            story: {id: storyID},
            user: {id:3},
            // this will need changed when there is more than one user
            type: "WATCHLIST",
            rating: null,    
            reviewPrivate: false,
            creationOfReviewDateTime: new Date().toISOString()
        })
        alert("Story added to watchlist.")
    }

    return ( 
        <button className="story-buttons" onClick={handleAddToWatchlist}> Add to Watch List</button>
     );
}
 
export default AddToWatchlist;