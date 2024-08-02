const MediaFilter = ({filterByMedia, setFilterByMedia}) => {
    return ( 
        <div className="media-filter">
             <select
                    value={filterByMedia}
                    onChange={(e) => {
                    setFilterByMedia(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Format">`
                <option value='All'>Filter By Format</option>
                <option value='TV'>TV</option>
                <option value='Film'>Film</option>
                <option value='Audio'>Audio</option>
                <option value='Prose'>Prose</option>
                <option value='Comic'>Comic</option>
                <option value='Webcast'>Webcast</option>
                <option value='Other'>Other</option>
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default MediaFilter;