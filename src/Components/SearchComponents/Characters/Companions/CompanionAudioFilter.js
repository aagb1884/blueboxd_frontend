const CompanionAudioFilter = ({filterByCompanion, setFilterByCompanion}) => {
    return ( 
        <div className="companion-filter">
            

        <select
                    value={filterByCompanion}
                    onChange={(e) => {
                    setFilterByCompanion(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Companion">`
                <option value='All'>Filter By Companion (Audio)</option>
                <option value='Jeremy AUDIO'>Jeremy Fitzoliver</option>
                <option value='Charley AUDIO'>Charley</option>
                <option value='Evelyn AUDIO'>Eveyln</option>
                <option value='Erimem AUDIO'>Erimem</option>
                <option value='Hector AUDIO'>Hex</option>
                <option value="C'rizz AUDIO">C'rizz</option>
                <option value='Elizabeth AUDIO'>Klein</option>
                <option value='Philippa AUDIO'>Flip</option>
                <option value='Liv AUDIO'>Liv Chenka</option>
                <option value='Constance AUDIO'>Constance</option>
                <option value='Amy AUDIO'>Amy</option>
                <option value='Thomas AUDIO'>Thomas Brewster</option>
                <option value='Sally AUDIO'>Sally Morgan</option>
                <option value='Will AUDIO'>Will Arrowsmith</option>
                <option value='Hannah AUDIO'>Hannah Bartholomew</option>
                <option value='Mags AUDIO'>Mags</option>
                <option value='Marcipor AUDIO'>Marc</option>
                <option value='Joe AUDIO'>Joe</option>
                <option value='Lucie AUDIO'>Lucie Miller</option>
                <option value='Tamsin AUDIO'>Tamsin Drew</option>
                <option value='Molly AUDIO'>Molly O'Sullivan</option>
                <option value='Helen AUDIO'>Helen Sinclair</option>
               
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default CompanionAudioFilter;