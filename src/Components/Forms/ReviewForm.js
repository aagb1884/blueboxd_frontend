const ReviewForm = () => {


    const [bookId, setBookId] = useState("");
    const [status, setStatus] = useState("");
    const [startedReading, setStartedReading] = useState("");
    const [finishedReading, setFinishedReading] = useState("");
    const [childRating, setChildRating] = useState(0);
    const [adultRating, setAdultRating] = useState(0);
    const [review, setReview] = useState("");
  
    const handleBookChange = (e) => {
      setBookId(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
      };
  
      const handleStartedReadingChange = (e) => {
        setStartedReading(e.target.value);
      };
  
      const handleFinishedReadingChange = (e) => {
        setFinishedReading(e.target.value);
      };
  
      const handleChildRatingChange = (e) => {
        setChildRating(parseInt(e.target.value));
      };
      const handleAdultRatingChange = (e) => {
        setAdultRating(parseInt(e.target.value));
      };
  
      const handleReviewChange = (e) => {
        setReview(e.target.value);
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        
        addUserStory({
                story: {id: storyID},
                user: {id:3},
                // this will need changed when there is more than one user
                type: "WATCHLIST",
                rating: null,    
                reviewPrivate: false,
                creationOfReviewDateTime: new Date().toISOString()
            })
        });
        setBookId("");
        setStatus("");
        setStartedReading("");
        setFinishedReading("");
        setChildRating(0);
        setAdultRating(0);
        setReview("");
        fetchData()    
      };

    function addReview() {
        
    }

    return ( 
        <form onSubmit={handleSubmit}>

        </form
     );
}
 
export default ReviewForm;