import PageLayout from "../../Components/Navigation/page_layout"
import { useState } from "react";
import ReviewSearchResults from "./review-search-results";

const ReviewPage = ({reviews}) => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
      };

    const clearSearch = () => {
        setSearchTerm('');
    };

    const toLowerCaseSafe = (str) => (str ? str.toLowerCase() : '');

    let filteredReviews = reviews.filter(r => r.type === 'REVIEW')

    if (searchTerm.length > 0) {
    filteredReviews = reviews.filter((review) => {
        const searchTermLower = toLowerCaseSafe(searchTerm);

        return(
            toLowerCaseSafe(review.story.keywords).includes(searchTermLower) ||
            toLowerCaseSafe(review.story.title).includes(searchTermLower) ||
            toLowerCaseSafe(review.user.display_name).includes(searchTermLower) 
        )
    })}


    return ( 
       <PageLayout>
        <section>
            <h1>Reviews</h1>
            <section className="search-page">
         <h4>Search for specific reviews.</h4>
            <p>Results will appear as you type.</p>
            <div className='search-function'>
               <input  id="search" 
                placeholder="Search..." 
                onChange={handleSearch}
                type="text"
                name="searchTerm"
                value={searchTerm}/>
                <button onClick={clearSearch}>
                    Clear Search
                </button>
                </div>
               
                
                <div className='stories-search-results'>
               <ReviewSearchResults
                filteredReviews={filteredReviews}
               />
              
               </div>
        </section>
               
        </section>
        </PageLayout>
     );
}
 
export default ReviewPage;