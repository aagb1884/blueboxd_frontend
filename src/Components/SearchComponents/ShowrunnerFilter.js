const ShowrunnerFilter = ({filterByShowrunnerTV, setFilterByShowrunnerTV}) => {
    return ( 
        <div className="showrunner-filter">
            

        <select
                    value={filterByShowrunnerTV}
                    onChange={(e) => {
                    setFilterByShowrunnerTV(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Showrunner">`
                <option value='All'>Filter By Script Editor/Showrunner (TV)</option>
                <option value='David Whitaker Script Editor'>David Whitaker</option>
                <option value='Dennis Spooner Script Editor'>Dennis Spooner</option>
                <option value='Donald Tosh Script Editor'>Donald Tosh</option>
                <option value='Gerry Davis Script Editor'>Gerry Davis</option>
                <option value='Gerry Davis Script Editor'>Peter Bryant</option>
                <option value='Peter Bryant Script Editor'>Victor Pemberton</option>
                <option value='Derrick Sherwin Script Editor'>Derrick Sherwin</option>
                <option value='Terrance Dicks Script Editor'>Terrance Dicks</option>
                <option value='Robert Holmes Script Editor'>Robert Holmes</option>
                <option value='Robert Holmes Script Editor'>Anthony Read</option>
                <option value='Anthony Read Script Editor'>Douglas Adams</option>
                <option value='Christopher H. Bidmead Script Editor'>Christopher H. Bidmead</option>
                <option value='Anthony Root Script Editor'>Anthony Root</option>
                <option value='Eric Saward Script Editor'>Eric Saward</option>
                <option value='Andrew Cartmel Script Editor'>Andrew Cartmel</option>
                <option value='Russell T. Davies Showrunner'>Russell T. Davies</option>
                <option value='Steven Moffat Showrunner'>Steven Moffat</option>
                <option value='Chris Chibnall Showrunner'>Chris Chibnall</option>

                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default ShowrunnerFilter;
