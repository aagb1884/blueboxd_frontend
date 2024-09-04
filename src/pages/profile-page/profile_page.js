import PageLayout from "../../Components/Navigation/page_layout";
import { useAuth0 } from "@auth0/auth0-react";
import React, {useState, useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import { baseUsersURL, updateUser } from "../../Services/user_services";
import './profile.css'
import { PageLoader } from "../../Components/Navigation/page_loader";

const ProfilePage = ({setLoggedInUser, setLoading, setError, isLoading, loggedInUser, deleteUserStoryByID, fetchData}) => {
  const [selectedProfile, setSelectedProfile] = useState(null)  
  const [isWatchlistVisible, setIsWatchListVisible] = useState(false);
  const [areReviewsVisible, setAreReviewsVisible] = useState(false);
  const [areFollowersVisible, setAreFollowersVisible] = useState(false);
  const [visibleReviewIds, setVisibleReviewIds] = useState([]);
  // const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { id } = useParams();   

  const toggleWatchlistVisibility = () => {
    setIsWatchListVisible(!isWatchlistVisible);
  }; 
  const toggleReviewsVisibility = () => {
    setAreReviewsVisible(!areReviewsVisible);
  }; 
  const toggleFollowersVisibility = () => {
    setAreFollowersVisible(!areFollowersVisible);
  }; 
  const toggleIndividualReviewVisibility = (reviewId) => {
    setVisibleReviewIds((prevVisibleReviewIds) =>
      prevVisibleReviewIds.includes(reviewId)
        ? prevVisibleReviewIds.filter((id) => id !== reviewId)
        : [...prevVisibleReviewIds, reviewId]
    );
  };

  

  const getSelectedProfile = async (id) => {
    try {
      const response = await fetch(`${baseUsersURL}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setSelectedProfile(data);
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    if (id) {
      getSelectedProfile(id);
    }
  }, [id]);

   if (!selectedProfile) {
      return <PageLoader />;
    }

    const watchlistStoriesData = selectedProfile.userStories
    ?.filter(watchlistStory => watchlistStory.type === 'WATCHLIST')
    .sort((a, b) => a.story.id - b.story.id) || [];
  
  const displayWatchlistStories = watchlistStoriesData.length === 0 
    ? <p>No stories in watchlist.</p> 
    : watchlistStoriesData.map(watchlistStory => (
      <div className="watchlist" key={watchlistStory.story.id}>
        <p className="story-title">
          <NavLink to={`/stories/${watchlistStory.story.id}`} >
            {watchlistStory.story.title}
          </NavLink>
        </p>
        <button type="button" id="remove-from-watchlist" onClick={() => deleteUserStoryByID(watchlistStory.id)}>Remove</button>
      </div>
    ));

    const reviewedStoriesData = selectedProfile.userStories
    .filter(reviewedStory => reviewedStory.type === "REVIEW") || [];

    const displayReviewedStories = reviewedStoriesData.length === 0 
    ? <p>No stories reviewed yet.</p>
    : reviewedStoriesData.map(reviewedStory => (
      <div className="profile-review" key = {reviewedStory.id}>
        <ul>
             <div className="header-and-toggle">
                <div>
                <li className="story-title">{reviewedStory.story.title}</li>
                <li className="date-of-review">{new Date(reviewedStory.creationOfReviewDateTime).toLocaleString()}</li>
                <li className="rating">{reviewedStory.rating}/10</li>
                </div>
                  <img id="visible-toggle" 
                  alt="toggle-view-button" 
                 title={visibleReviewIds.includes(reviewedStory.id) ? "Hide" : "Expand"}   
                  src={visibleReviewIds.includes(reviewedStory.id) ? "../images/arrow_up.png" : "../images/arrow_down.png"}
                  onClick={() => toggleIndividualReviewVisibility(reviewedStory.id)}/>
                 </div>
                 { visibleReviewIds.includes(reviewedStory.id) && (
                  <div>
                 
                 <li className="review-text"><div dangerouslySetInnerHTML={{__html: `${reviewedStory.review}` }} /></li>
                 </div>
                )}
                </ul>
      </div>
    ))

    const followUser = async () => {
      try {

        const isAlreadyFollowing = loggedInUser.following.some(user => user.id === selectedProfile.id);
        
        if (isAlreadyFollowing) {
          alert("You are already following this user");
          return;
        }
        const updatedFollowing = [...loggedInUser.following, selectedProfile];
        const updatedUser = { ...loggedInUser, following: updatedFollowing };
        const response = await updateUser(loggedInUser.id, updatedUser);
        if (response.ok) {
          const data = await response.json();
          setLoggedInUser(data);
          alert("User added to follow list.");
        } else {
          throw new Error('Failed to update user');
        }
      } catch (error) {
        console.error('Failed to follow user', error);
      }
    };

    const followersData = selectedProfile.followers?.map((follower) => (
      <div className="follower" key={follower.id}>
        <ul>
          <li className="follower-name">{follower.display_name}</li>
        </ul>
      </div>
    ));

    const unfollowUser = async (userId) => {
      try {
        const updatedFollowing = loggedInUser.following.filter(user => user.id !== userId);
        const updatedUser = { ...loggedInUser, following: updatedFollowing };
        const response = await updateUser(loggedInUser.id, updatedUser);
        if (response.ok) {
          const data = await response.json();
          setLoggedInUser(data);
          alert("User removed from follow list.");
        } else {
          throw new Error('Failed to update user');
        }
      } catch (error) {
        console.error("Failed to unfollow user", error);
      }
    };
   
    return ( 
        <PageLayout>
       <div className="content-layout">
        <h1 id="page-title" className="content__title">
        {selectedProfile.firstname} {selectedProfile.lastname}'s Profile
        </h1>
        <div className="content__body">
          <p id="page-description">
            {/* <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span> */}
          </p>
          
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={selectedProfile.userImgURL ? selectedProfile.userImgURL : '../images/default-image-url.png'}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                
                <span className="profile__description">Username: {selectedProfile.display_name}</span>
                {isAuthenticated && (
                <span className="profile__description">Location: {selectedProfile.location}</span>
                )}
                <span className="profile__description">Biography: {selectedProfile.userBio}</span>
                {isAuthenticated && (
                <span className="profile__description">{selectedProfile.userWebsite === null ? "" : <a href={selectedProfile.userWebsite}>Website</a>}</span>
                )}
              </div>
              {isAuthenticated && (
              <div>
                {loggedInUser.id === selectedProfile.id ? null : (
                  <button type="button" id="follow-user" onClick={followUser}>Follow {selectedProfile.display_name}</button>
                )}
              </div>
              )}
            </div>
            {/* <div className="profile__details">
              <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              />
            </div> */}
     <section className="profile-components-container">
     {isAuthenticated && (
      <div className="user-following-container">
              <div className="header-and-toggle">
              <h3>{selectedProfile.firstname} is following</h3>
              <img id="visible-toggle" 
              alt="toggle-view-button" 
              title={areFollowersVisible ? "Hide" : "Expand"}   
              src={areFollowersVisible ? "../images/arrow_up.png" : "../images/arrow_down.png"}
              onClick={toggleFollowersVisibility}/>
              </div>
              <div className="following-users">
              {selectedProfile.following.length === 0 ? (
                <p>{selectedProfile.firstname} isn't following anyone.</p>
              ) : (
                
                selectedProfile.following.map((followingUser) => (
                
                  <div className="following" key={followingUser.id}>
                      {areFollowersVisible && (
                    <ul>
                      <li className="user-name"><NavLink to={`/profile/${followingUser.id}`}>{followingUser.display_name}</NavLink></li>
                      <li><button type="button" id="remove-from-follow-list" onClick={() => unfollowUser(followingUser.id)}>Unfollow</button></li>
                    </ul>
                    )}
                  </div>
                ))
              )}
              </div>
            </div>
            )}

            <div className="user-watchlist-container">
              <div className="header-and-toggle">
            <h3>{selectedProfile.firstname}'s Watchlist </h3>
            <img id="visible-toggle" 
            alt="toggle-view-button" 
            title={isWatchlistVisible ? "Hide" : "Expand"}   
            src={isWatchlistVisible ? "../images/arrow_up.png" : "../images/arrow_down.png"}
            onClick={toggleWatchlistVisibility}/>
              </div>
              {isWatchlistVisible && (
              <div className="watchlist-stories">
                {displayWatchlistStories}
              </div>
            )}
            <div className="user-reviews-container">
              <div className="header-and-toggle">
            <h3>{selectedProfile.firstname}'s Reviews</h3>
            <img id="visible-toggle" 
            alt="toggle-view-button" 
            title={areReviewsVisible ? "Hide" : "Expand"}   
            src={areReviewsVisible ? "../images/arrow_up.png" : "../images/arrow_down.png"}
            onClick={toggleReviewsVisibility}/>
              </div>
              <div className="user-reviews">
            {areReviewsVisible && (
              <div className="reviewed-stories">
            {displayReviewedStories}
              </div>
            )}
            </div>
            </div>
            
            </div>
            </section> 
          </div>
        </div>
      </div>
        </PageLayout>
     );
}
 
export default ProfilePage;