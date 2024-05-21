import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURLstories } from "../Services/story_services";
import PageLayout from "../Components/page_layout";

const StoryDetailPage = ({setError, setLoading, user, stories}) => {   
   const [selectedStory, setSelectedStory] = useState([]);
   const { id } = useParams(); 

   const getSelectedStory = async (id) => {
      try {
        const response = await fetch(baseURLstories + '/' + id);
        if (!response.ok) {
          throw new Error('Failed to fetch story');
        }
        const data = await response.json();
        setSelectedStory(data);
      } catch (err) {
         console.log(err)
         setError(err)
       } finally {
         setLoading(false)
       }
    };

    useEffect(() => {
      getSelectedStory(id);
    }, [id]); 

   //  useEffect(() => {
   //    if (!user) return;
   //    fetchSelectedStoryData();
   //  }, [user]); 


 console.log(selectedStory)

    return ( 
        <PageLayout>
        <h1>{selectedStory.title}</h1>
        <p>Story ID: {id}</p>
        
        </PageLayout>
     );
}
 
export default StoryDetailPage;