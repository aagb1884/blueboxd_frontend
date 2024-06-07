import PageLayout from "../Components/page_layout";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavLink } from "react-router-dom";
import './profile.css'

const ProfilePage = (loggedInUser, userData, userStories, loading, error) => {
    const { user } = useAuth0();

    if (!user) {
      return null;
    }

    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    if (error) {
      return <p>There was an error loading the stories.</p>;
    }

    // console.log(loggedInUser.userStories);

    const watchlistStoriesData = loggedInUser.userStories
  .filter(watchlistStory => watchlistStory.type === 'WATCHLIST') 
  .sort((a, b) => a.story.id - b.story.id) 
  .map(watchlistStory => (
    <div className="watchlist" key={watchlistStory.story.id}>
      <p className="story-title">
        <NavLink to={`/stories/${watchlistStory.story.id}`} >
          {watchlistStory.story.title}
        </NavLink>
      </p>
    </div>
  ));

    const reviewedStoriesData = loggedInUser.userStories.map((reviewedStory) => {
      const {story, type, rating, review} = reviewedStory
      if (reviewedStory.type === 'REVIEW') {
        return (
      
              <div className="review">
              <ul>
              <li key = {reviewedStory.id}/>
                <li className="story-title">{reviewedStory.story.title}</li>
                <li className="rating">{reviewedStory.rating}/10</li>
                <li className="review-text">{reviewedStory.review}</li>
                <li className="date-of-review">{new Date(reviewedStory.creationOfReviewDateTime).toLocaleString()}</li>
            </ul>
            </div>
          
        )
    }})
   

    return ( 
        <PageLayout>
       <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.display_name}</span>
                <span className="profile__description">{user.location}</span>
                {/* <span className="profile__description">{user.userImgURL}</span> */}
                <span className="profile__description">{loggedInUser.userBio}</span>
                <span className="profile__description">{user.userWebsite}</span>
                {/* <span className="profile__description">{user.userStories}</span> */}
              </div>
            </div>
            {/* <div className="profile__details">
              <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              />
            </div> */}
            <div className="user-watchlist-container">
            <h3>{user.given_name}'s Watchlist</h3>
              <div className="watchlist-stories">
                {watchlistStoriesData}
              </div>
            </div>
            <div className="user-reviews-container">
            <h3>{user.given_name}'s Reviews</h3>
            {reviewedStoriesData}
            </div>
          </div>
        </div>
      </div>
        </PageLayout>
     );
}
 
export default ProfilePage;