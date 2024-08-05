const AntagonistTVFilter = ({filterByAntagonistTV, setFilterByAntagonistTV}) => {
    return ( 
        <div className="antagonist-filter">

            <select
                    value={filterByAntagonistTV}
                    onChange={(e) => {
                    setFilterByAntagonistTV(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Antagonist">`
                <option value='All'>Filter By Antagonist (TV)</option>
                <option value='Daleks TV'>Daleks</option>
                <option value='Cybermen TV'>Cybermen</option>
                <option value='The Master TV'>The Master</option>
                <option value='Davros TV'>Davros</option>
                <option value='Weeping Angels TV'>Weeping Angels</option>
                <option value='The Monk TV'>The Monk</option>
                <option value='The Toymaker TV'>The Toymaker</option>
                <option value='Great Intelligence TV'>The Great Intelligence</option>
                <option value='Ice Warriors TV'>Ice Warriors</option>
                <option value='Autons/Nestene Consciousness TV'>Autons/Nestene Consciousness</option>
                <option value='Silurians TV'>Silurians</option>
                <option value='Sea Devils TV'>Sea Devils</option>
                <option value='Omega TV'>Omega</option>
                <option value='Sontarans TV'>Sontarans</option>
                <option value='Zygons TV'>Zygons</option>
                <option value='Sutekh TV'>Sutekh</option>
                <option value='Morbius TV'>Morbius</option>
                <option value='The Black Guardian TV'>The Black Guardian</option>
                <option value='The Rani TV'>The Rani</option>
                <option value='The Valeyard TV'>The Valeyard</option>
                <option value='Slitheen TV'>Slitheen</option>
                <option value='Judoon TV'>Judoon</option>
                <option value='Silence TV'>The Silence</option>
               
            </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default AntagonistTVFilter;