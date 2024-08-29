const CreatorComicFilter = ({filterByCreativeComics, setFilterByCreativeComics}) => {
    return ( 
        <div className="writer-filter">
            

        <select
                    value={filterByCreativeComics}
                    onChange={(e) => {
                    setFilterByCreativeComics(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Writer">`
                <option value='All'>Filter By Creative (Comics)</option>
               
                <option value='Dan Abnett Writer'>Dan Abnett</option>
                <option value='Alan Barnes Writer'>Alan Barnes</option>
                <option value='Mike Collins Artist'>Mike Collins</option>
                <option value='Paul Cornell Writer'>Paul Cornell</option>
                <option value='Jamie Delano Writer'>Jamie Delano</option>
                <option value='Al Ewing Writer'>Al Ewing</option>
                <option value='Martin Geraghty Artist'>Martin Geraghty</option>
                <option value='Dave Gibbons Artist'>Dave Gibbons</option>
                <option value='Scott Gray Writer'>Scott Gray</option>
                <option value='Roger Langridge Artist'>Roger Langridge</option>
                <option value='Dan McDaid Artist'>Dan McDaid (Artist)</option>
                <option value='Dan McDaid Writer'>Dan McDaid (Writer)</option>
                <option value='Pat Mills Writer'>Pat Mills</option>
                <option value='Steve Moore Writer'>Steve Moore</option>
                <option value='Jonathan Morris Writer'>Jonathan Morris</option>
                <option value='Grant Morrison Writer'>Grant Morrison</option>
                <option value='Steve Parkhouse Writer'>Steve Parkhouse</option>
                <option value='Jacqueline Rayner Writer'>Jacqueline Rayner</option>
                <option value='John Ridgway Artist'>John Ridgway</option>
                <option value='Gareth Roberts Writer'>Gareth Roberts</option>
                <option value='John Ross Artist'>John Ross</option>
                <option value='Gary Russell Writer'>Gary Russell</option>
                <option value='Adrian Salmon Artist'>Adrian Salmon</option>
                <option value='Rachael Stott Artist'>Rachael Stott</option>
                <option value='Lee Sullivan Artist'>Lee Sullivan</option>
                <option value='John Wagner Writer'>John Wagner</option>
                
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default CreatorComicFilter;
