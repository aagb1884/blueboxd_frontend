import { NavLink, useLocation } from "react-router-dom";

const Navigation = ({currentId, reviewIds = [], storyIds = []}) => {
    const location = useLocation();

    const currentReviewIndex = reviewIds.indexOf(currentId);
    const previousReviewId = currentReviewIndex > 0 ? reviewIds[currentReviewIndex - 1] : null;
    const nextReviewId = currentReviewIndex < reviewIds.length - 1 ? reviewIds[currentReviewIndex + 1] : null;
    const firstReviewIdInArray = reviewIds[0]
    const lastReviewIdInArray = reviewIds[reviewIds.length - 1]
  

    const currentStoryIndex = storyIds.indexOf(currentId);
    const previousStoryId = currentStoryIndex > 0 ? storyIds[currentStoryIndex - 1] : null;
    const nextStoryId = currentStoryIndex < storyIds.length - 1 ? storyIds[currentStoryIndex + 1] : null;
    const firstStoryIdInArray = storyIds[0]
    const lastStoryIdInArray = storyIds[storyIds.length - 1]

    const isStoriesPath = location.pathname.includes('/stories');

    const previousLink = isStoriesPath ? `/stories/${previousStoryId}` : `/reviews/${previousReviewId}`;
    const nextLink = isStoriesPath ? `/stories/${nextStoryId}` : `/reviews/${nextReviewId}`;
    const homeLink = isStoriesPath ? '/stories' : '/reviews';
    const homeTitle = isStoriesPath ? 'Return to Stories page' : 'Return to Reviews page';
    const homeText = isStoriesPath ? 'Stories' : 'Reviews';
    const firstItemInArray = isStoriesPath ? firstStoryIdInArray : firstReviewIdInArray;
    const lastItemInArray = isStoriesPath ? lastStoryIdInArray : lastReviewIdInArray;
  
    return ( 
        <div className="navigation-component">

            {(currentId > firstItemInArray && currentId <= lastItemInArray) && (
                <NavLink to={previousLink}>
                    <img
                        src="/images/left-arrow.png"
                        alt="move-to-previous"
                        title="Move to previous"
                        id="navigation-icon"
                    />
                    Previous
                </NavLink>
            )}
                <NavLink to={homeLink}>
                    <img
                        src="/images/home.png"
                        alt={homeTitle}
                        title={homeTitle}
                        id="navigation-icon"
                    />
                    {homeText}
                </NavLink>
                
            {currentId < lastItemInArray && (
                <NavLink to={nextLink}>
                    <img
                        src="/images/right-arrow.png"
                        alt="move-to-next"
                        title="Move to next"
                        id="navigation-icon"
                    />
                    Next
                </NavLink>
                )}
                </div>
     );
}
 
export default Navigation;