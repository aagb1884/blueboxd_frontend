const CompanionComicsFilter = ({filterByCompanion, setFilterByCompanion}) => {
    return ( 
        <div className="companion-filter">
            

        <select
                    value={filterByCompanion}
                    onChange={(e) => {
                    setFilterByCompanion(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Companion">`
                <option value='All'>Filter By Companion (Comics)</option>
                <option value='Frobisher COMIC'>Frobisher</option>
                <option value='Isabelle COMIC'>Izzy</option>
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default CompanionComicsFilter;
