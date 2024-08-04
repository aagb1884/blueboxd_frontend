const SortingFunctions = ({filteredStories, handleSort}) => {

   

    return ( 
        <div>
            <img id="visible-toggle"
        alt="toggle-view-button"
        title="Hide/Expand View"
        src="../images/3209209_arrow_direction_down_triangle_up_icon.png"
        onClick={handleSort(filteredStories.title)} />

        </div>
                                    
     );
}
 
export default SortingFunctions;