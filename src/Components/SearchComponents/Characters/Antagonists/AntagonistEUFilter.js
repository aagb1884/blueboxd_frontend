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
                <option value='Beep the Meep COMICS'>Beep the Meep</option>
                <option value='Cybermen TV'>Cybermen</option>
                <option value='Daleks TV'>Daleks</option>
                <option value='The Dalek Time Controller AUDIO'>The Dalek Time Controller</option>
                <option value='The Multitude AUDIO'>The Eleven/The Multitude</option>
                <option value='The Eminence AUDIO'>The Eminence</option>
                <option value='Faction Paradox PROSE'>Faction Paradox</option>
                <option value='Ice Warriors TV'>Ice Warriors</option>
                <option value='Josiah W. Dogbolter COMICS'>Josiah W. Dogbolter</option>
                <option value='The Master TV'>The Master</option>
                <option value='Morbius TV'>Morbius</option>
                <option value='Nimrod AUDIO'>Nimrod</option>
                <option value='Sabbath PROSE'>Sabbath</option>
                <option value='Sontarans TV'>Sontarans</option>
                <option value='The Threshold COMICS'>The Threshold</option>
            </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default AntagonistEUFilter;