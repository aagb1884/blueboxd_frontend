import { NavLink } from "react-router-dom";
import PageLayout from "../Components/Navigation/page_layout";

const AboutPage = () => {
    return ( 
        <PageLayout>
            <section className="about">
            <h1>About blueboxd</h1>
            <h2>What it is and how it works</h2>
            <p>This is a website where you can review Doctor Who stories. These reviews can be a simple rating out of ten, one line of text, or a whole essay. That's up to you.</p>
            <p>We have an increasingly large list of stories, <NavLink to="/add_story">which users can add to</NavLink> if they can't find the one they want.</p>
            <p>You can also maintain a list of stories you want to watch/listen to/read.</p>
            <p>You can follow other users if you want to read their reviews.</p>
            <br />
            <h2>What it is not</h2>
            <p>There is some data connected to each story to help with searches, but we're not planning on expanding on this. This is not an encyclopedia or Wiki.</p>
            <p>You cannot comment on other user's reviews or message another user. Not on here anyway.</p>
            <h2>Some admin</h2>
            <p>Multi-part stories are counted as one story in most cases. The exceptions are longform stories such as 'The Trial of a Time Lord' and 'Flux' where there's an established division of the story into self-contained segments. In these cases users can review individual segments <i>or</i> the story as a whole. Otherwise multi-part stories are counted as one.</p>
            </section>
        </PageLayout>
     );
}
 
export default AboutPage;