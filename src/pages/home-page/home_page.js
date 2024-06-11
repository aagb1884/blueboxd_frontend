import PageLayout from "../../Components/Navigation/page_layout";
import { useAuth0 } from "@auth0/auth0-react";
import './home.css';
import { NavLink } from "react-router-dom";


const HomePage = ({stories, userStories, loading, error}) => {
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();

   

    if (loading) {
        return <h2>Loading...</h2>;
      }
    
      if (error) {
        return <p>There was an error loading the Home Page. Please refresh.</p>;
      }

   

    const today = new Date()
    const todayWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const getRecentTVStories = stories
    .map(story => {
    if (story.media === "TV") {
        const [day, month, year] = story.lastEpBroadcast.split('/');
        const storyDate = new Date(year, month - 1, day); 

        if (storyDate < todayWithoutTime) {
          const difference = todayWithoutTime - storyDate;
          return {
            ...story,
            difference
          };
        } else {
          return null; 
        }
      } else {
        return null; 
      }
    })
    .filter(story => story !== null) 
    .sort((a, b) => a.difference - b.difference) 
    .slice(0, 3); 

    const recentStories = getRecentTVStories.map((recentStory) => (
        <div className="recently-broadcast-stories" key={recentStory.id}>
            <p className="recent-story-title"><b>{recentStory.title}</b></p>
            <div className="recent-story-image">
                <img alt="story_image" src={recentStory.imgURL} />
            </div>
            <p className="recent-date-of-broadcast">
            Originally broadcast: {recentStory.firstEpBroadcast == recentStory.lastEpBroadcast ? recentStory.firstEpBroadcast : recentStory.firstEpBroadcast + ' - ' + recentStory.lastEpBroadcast}
            </p>
            <NavLink to={`/stories/${recentStory.id}`}>
                <b>Read More...</b>
            </NavLink>
        </div>
    ));


    const reviewedStories = userStories
    .filter(reviewedStory => reviewedStory.type === 'REVIEW') 
    .sort((a, b) => new Date(b.creationOfReviewDateTime) - new Date(a.creationOfReviewDateTime)) 
    .slice(0, 3) 
    .map(reviewedStory => ( 
      <div className="home-page-review" key={reviewedStory.id}>
        <p className="home-story-title"><b>{reviewedStory.story.title}</b></p>
        <p className="home-story-username">Reviewed by {reviewedStory.user.display_name}</p>
        <div className="home-story-image">
          <img alt="story_image" src={reviewedStory.story.imgURL}></img>
        </div>
        <p className="home-date-of-review">{new Date(reviewedStory.creationOfReviewDateTime).toLocaleString()}</p>
        <NavLink to={`/reviews/${reviewedStory.id}`}>
          <b>Read Review...</b>
        </NavLink>
      </div>
    ));

    const getRecentSpinOffStories = stories
    .map(story => {
        if (story.media !== "TV" && story.media !== "All") {
        const [day, month, year] = story.lastEpBroadcast.split('/');
        const storyDate = new Date(year, month - 1, day); 

        if (storyDate < todayWithoutTime) {
          const difference = todayWithoutTime - storyDate;
          return {
            ...story,
            difference
          };
        } else {
          return null; 
        }
      } else {
        return null; 
      }
    })
    .filter(story => story !== null) 
    .sort((a, b) => a.difference - b.difference) 
    .slice(0, 3); 

    const recentReleases = getRecentSpinOffStories.map((recentRelease) => (
        <div className="recent-spin-off-stories" key={recentRelease.id}>
            <p className="recent-release-title"><b>{recentRelease.title}</b></p>
            <div className="recent-release-image">
                <img alt="story_image" src={recentRelease.imgURL} />
            </div>
            <p className="date-of-release">
            Released: {recentRelease.firstEpBroadcast == recentRelease.lastEpBroadcast ? recentRelease.firstEpBroadcast : recentRelease.firstEpBroadcast + ' - ' + recentRelease.lastEpBroadcast}
            </p>
            <NavLink to={`/stories/${recentRelease.id}`}>
                <b>Read More...</b>
            </NavLink>
        </div>
    ));

    return ( 
        <PageLayout>
            <section className="greeting">
                {isAuthenticated && (
                    <p>Hello {user.given_name}</p>
                )}
            </section>

            <section className="recently-broadcast">
                <h3>Recently Broadcast</h3>
                <div className="home-recent-stories">
                {recentStories}
                </div>
            </section>

            <section className="recently-reviewed">
                <h3>Recently Reviewed</h3>
                <div className="home-reviewed-stories">
                {reviewedStories}
                </div>
            </section>

            <section className="recently-released">
                <h3>Recently Released</h3>
                <div className="home-released-stories">
                {recentReleases}
                </div>
            </section>
        </PageLayout>
     );
}
 
export default HomePage;