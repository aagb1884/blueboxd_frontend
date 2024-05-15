import PageLayout from "../Components/page_layout";
import StoryItem from "./story_item";

const Story = ({stories}) => {

        const allStories = stories.map((story, index) => {
            return <StoryItem key={index} story={story} />
        })

 console.log(stories[1])

    return ( 
        <PageLayout>
        <section>
            <h2>Story Page</h2>
            <div>
                {allStories}
            </div>
        </section>
        </PageLayout>
     );
}
 
export default Story;