import { NavLink } from "react-router-dom";

const StoryNavigation = ({currentId}) => {

    return ( 
        <div className="story-navigation">
                    <NavLink to={`/stories/${currentId - 1}`}>
                        <img src="/images/left-arrow.png"
                            alt="move-to-previous-story"
                            title="Move to previous story"
                            id="story-navigation-icon"
                        />
                        Previous
                    </NavLink>
                    <NavLink to={`/stories/`}>
                        <img src="/images/home.png"
                            alt="move-to-stories-page"
                            title="Return to Stories page"
                            id="story-navigation-icon"
                        />
                        Stories
                    </NavLink>
                    <NavLink to={`/stories/${currentId + 1}`}>
                        <img src="/images/right-arrow.png"
                            alt="move-to-next-story"
                            title="Move to next story"
                            id="story-navigation-icon"
                        />
                        Next
                    </NavLink>
                </div>
     );
}
 
export default StoryNavigation;