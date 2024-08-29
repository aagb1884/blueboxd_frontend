const ProseSeriesFilter = ({filterBySeries, setFilterBySeries}) => {
    return ( 
        <div className="prose-series-filter">

            <select
                    value={filterBySeries}
                    onChange={(e) => {
                    setFilterBySeries(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Book Series">`
                <option value='All'>Filter By Series (Prose)</option>
                <option value='Target Books'>Target Books</option>
                <option value='The New Adventures'>New Adventures</option>
                <option value='The Missing Adventures'>Missing Adventures</option>
                <option value='Eighth Doctor Adventures'>Eighth Doctor Adventure</option>
                <option value='Past Doctor Adventures'>Past Doctor Adventures</option>
                <option value='Telos Novellas'>Telos Novellas</option>
                <option value='New Series Adventures'>New Series Adventures</option>
                   
            </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default ProseSeriesFilter;