import { useParams } from "react-router-dom";
import PageLayout from "../Components/page_layout";

const StoryDetailPage = ({story}) => {

    const { id } = useParams 

    //i need to use getSelectedStory
 console.log(story)
    return ( 
        <PageLayout>
        <h2>Story Detail</h2>
        <p>Story ID: {id}</p>
        {story}
        </PageLayout>
     );
}
 
export default StoryDetailPage;