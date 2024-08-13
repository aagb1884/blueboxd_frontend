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
                <option value='Sharon COMIC'>Sharon</option>
                <option value='Angus COMIC'>Gus</option>
                <option value='Frobisher COMIC'>Frobisher</option>
                <option value='Peri TV'>Peri</option>
                <option value='Dorothy TV'>Ace</option>
                <option value='Isabelle COMIC'>Izzy</option>
                <option value='Fey COMIC'>Fey</option>
                <option value='Kroton COMIC'>Kroton</option>
                <option value='Destrii COMIC'>Destrii</option>
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default CompanionComicsFilter;
