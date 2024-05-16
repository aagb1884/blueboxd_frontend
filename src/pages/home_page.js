import PageLayout from "../Components/page_layout";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();

    return ( 
        <PageLayout>
            <section>
                <h1>Home Page</h1>
                {isAuthenticated && (
                    <p>Hello {user.given_name}</p>
                )}
            </section>
        </PageLayout>
     );
}
 
export default HomePage;