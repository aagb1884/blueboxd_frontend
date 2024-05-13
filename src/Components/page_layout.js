import Header from "./Header";

const PageLayout = ({children}) => {
    return ( 
        <div className="page-layout">
            <Header />
            <div className="page-layout__content">{children}</div>

        </div>
     );
}
 
export default PageLayout;