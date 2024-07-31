import { NavLink, useLocation } from "react-router-dom";

const Navigation = ({currentId}) => {
    const location = useLocation();

    const isReviewsPath = location.pathname.includes('/reviews');
    const isStoriesPath = location.pathname.includes('/stories');

    const previousLink = isStoriesPath ? `/stories/${currentId - 1}` : `/reviews/${currentId - 1}`;
    const nextLink = isStoriesPath ? `/stories/${currentId + 1}` : `/reviews/${currentId + 1}`;
    const homeLink = isStoriesPath ? '/stories' : '/reviews';
    const homeTitle = isStoriesPath ? 'Return to Stories page' : 'Return to Reviews page';
    const homeText = isStoriesPath ? 'Stories' : 'Reviews';


    return ( 
        <div className="navigation-component">

            {currentId > 1 && (
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
                
                <NavLink to={nextLink}>
                    <img
                        src="/images/right-arrow.png"
                        alt="move-to-next"
                        title="Move to next"
                        id="navigation-icon"
                    />
                    Next
                </NavLink>
                </div>
     );
}
 
export default Navigation;