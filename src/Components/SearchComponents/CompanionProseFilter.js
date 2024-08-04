const CompanionProseFilter = ({filterByCompanion, setFilterByCompanion}) => {
    return ( 
        <div className="companion-filter">
            

        <select
                    value={filterByCompanion}
                    onChange={(e) => {
                    setFilterByCompanion(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Companion">`
                <option value='All'>Filter By Companion (Books)</option>
                <option value='Bernice PROSE'>Bernice Summerfield</option>
                <option value='Roz PROSE'>Roz</option>
                <option value='Chris PROSE'>Chris</option>
                <option value='Grant PROSE'>Grant Markham</option>
                <option value='Fitzgerald PROSE'>Fitz</option>
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default CompanionProseFilter;