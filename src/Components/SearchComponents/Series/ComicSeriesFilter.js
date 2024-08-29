const ComicSeriesFilter = ({filterBySeries, setFilterBySeries}) => {
    return ( 
        <div className="comic-series-filter">

        <select
                value={filterBySeries}
                onChange={(e) => {
                setFilterBySeries(e.target.value);
                }}
            className="custom-select"
            aria-label="Filter Stories by Comic Series">`
            <option value='All'>Filter By Series (Comics)</option>
            <option value='Doctor Who Magazine Comics'>Doctor Who Magazine Comics</option>
            <option value='IDW Comics'>IDW Comics</option>
            <option value='Titan Comics'>Titan Comics</option>
            <option value='BBC Comic Books'>BBC Comic Books</option>
               
        </select>
            <span className="focus"></span>
    </div>
     );
}
 
export default ComicSeriesFilter;