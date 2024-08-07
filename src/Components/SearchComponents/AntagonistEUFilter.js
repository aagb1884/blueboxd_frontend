const AntagonistEUFilter = ({filterByAntagonistEU, setFilterByAntagonistEU}) => {
    return ( 
        <div className="antagonist-filter">

            <select
                    value={filterByAntagonistEU}
                    onChange={(e) => {
                    setFilterByAntagonistEU(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Antagonist">`
                <option value='All'>Filter By Antagonist (All other media)</option>
                <option value='The Eleven AUDIO'>The Eleven</option>
                <option value='The Eminence AUDIO'>The Eminence</option>
                <option value='Nimrod AUDIO'>Nimrod</option>
                <option value='The Dalek Time Controller AUDIO'>The Dalek Time Controller</option>
                <option value='Faction Paradox PROSE'>Faction Paradox</option>
                <option value='Sabbath PROSE'>Sabbath</option>
                <option value='The Threshold COMICS'>The Threshold</option>
                <option value='Josiah W. Dogbolter COMICS'>Josiah W. Dogbolter</option>
               
            </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default AntagonistEUFilter;