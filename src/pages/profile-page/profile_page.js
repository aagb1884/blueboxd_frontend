import PageLayout from "../../Components/Navigation/page_layout";
import { useAuth0 } from "@auth0/auth0-react";
import React, {useState, useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import { baseUsersURL, updateUser } from "../../Services/user_services";
import './profile.css'

const ProfilePage = ({setLoggedInUser, setLoading, setError, isLoading, loggedInUser, deleteUserStoryByID}) => {
  const [selectedProfile, setSelectedProfile] = useState(null)  
  const { user } = useAuth0();
  const { id } = useParams(); 

  const getSelectedProfile = async (id) => {
    try {
      const response = await fetch(`${baseUsersURL}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const data = await response.json();
      setSelectedProfile(data);
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getSelectedProfile(id);
  }, [id]); 

  useEffect(() => {
    if (isLoading) return;
    getSelectedProfile();
  }, [isLoading]);

    if (!selectedProfile || !loggedInUser) {
      return <h2>Loading...</h2>;
    }

    const watchlistStoriesData = selectedProfile.userStories
    .filter(watchlistStory => watchlistStory.type === 'WATCHLIST')
    .sort((a, b) => a.story.id - b.story.id);
  
  const displayWatchlistStories = watchlistStoriesData.length === 0 
    ? <p>No stories in watchlist.</p> 
    : watchlistStoriesData.map(watchlistStory => (
      <div className="watchlist" key={watchlistStory.story.id}>
        <p className="story-title">
          <NavLink to={`/stories/${watchlistStory.story.id}`} >
            {watchlistStory.story.title}
          </NavLink>
        </p>
        {loggedInUser.id === selectedProfile.id ? null :
        <button type="button" id="remove-from-watchlist" onClick={() => deleteUserStoryByID(watchlistStory.id)}>Remove</button>}
      </div>
    ));

    const reviewedStoriesData = selectedProfile.userStories
    .filter(reviewedStory => reviewedStory.type === "REVIEW")

    const displayReviewedStories = reviewedStoriesData.length === 0 
    ? <p>No stories reviewed yet.</p>
    : reviewedStoriesData.map(reviewedStory => (
      <div className="review">
        <ul>
        <li key = {reviewedStory.id}/>
                 <li className="story-title">{reviewedStory.story.title}</li>
                 <li className="rating">{reviewedStory.rating}/10</li>
                 <li className="review-text">{reviewedStory.review}</li>
                 <li className="date-of-review">{new Date(reviewedStory.creationOfReviewDateTime).toLocaleString()}</li>
        </ul>
      </div>
    ))

    const followUser = async () => {
      try {
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
   
    console.log(followersData);
    return ( 
        <PageLayout>
       <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
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
                <h2 className="profile__title">{selectedProfile.firstname} {selectedProfile.lastname}</h2>
                <span className="profile__description">Username: {selectedProfile.display_name}</span>
                <span className="profile__description">Location: {selectedProfile.location}</span>
                {/* <span className="profile__description">{user.userImgURL}</span> */}
                <span className="profile__description">Biography: {selectedProfile.userBio}</span>
                <span className="profile__description">{selectedProfile.userWebsite === null ? "" : <a href={selectedProfile.userWebsite}>Website</a>}</span>
              </div>
              <div>
                {loggedInUser.id === selectedProfile.id ? null : (
                  <button type="button" id="follow-user" onClick={followUser}>Follow {selectedProfile.display_name}</button>
                )}
              </div>
            </div>
            {/* <div className="profile__details">
              <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              />
            </div> */}
      
      <div className="user-following-container">
              <h3>{selectedProfile.firstname} is following:</h3>
              <div className="following-users">
              {selectedProfile.following.length === 0 ? (
                <p>{selectedProfile.firstname} isn't following anyone.</p>
              ) : (
                selectedProfile.following.map((followingUser) => (
                  <div className="following" key={followingUser.id}>
                    <ul>
                      <li className="story-title"><NavLink to={`/profile/${followingUser.id}`}>{followingUser.display_name}</NavLink></li>
                      <li><button type="button" id="remove-from-follow-list">Unfollow</button></li>
                    </ul>
                  </div>
                ))
              )}
              </div>
            </div>
            <div className="user-watchlist-container">
            <h3>{selectedProfile.firstname}'s Watchlist</h3>
              <div className="watchlist-stories">
                {displayWatchlistStories}
              </div>
            </div>
            <div className="user-reviews-container">
            <h3>{selectedProfile.firstname}'s Reviews</h3>
            {displayReviewedStories}
            </div>
          </div>
        </div>
      </div>
        </PageLayout>
     );
}
 
export default ProfilePage;