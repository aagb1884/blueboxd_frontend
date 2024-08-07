const WriterProseFilter = ({filterByWriterProse, setFilterByWriterProse}) => {
    return ( 
        <div className="writer-filter">
            

        <select
                    value={filterByWriterProse}
                    onChange={(e) => {
                    setFilterByWriterProse(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Writer">`
                <option value='All'>Filter By Writer (Prose)</option>
                <option value='Ben Aaronovitch Writer'>Ben Aaronovitch</option>
                <option value='Stephen Cole Writer'>Stephen Cole</option>
                <option value='Jenny Colgan Writer'>Jenny Colgan</option>
                <option value='Paul Cornell Writer'>Paul Cornell</option>
                <option value='Gerry Davis Writer'>Gerry Davis</option>
                <option value='Terrance Dicks Writer'>Terrance Dicks</option>
                <option value='David Fisher Writer'>David Fisher</option>
                <option value='Mark Gatiss Writer'>Mark Gatiss</option>
                <option value='James Goss Writer'>James Goss</option>
                <option value='Malcolm Hulke Writer'>Malcolm Hulke</option>
                <option value='Andy Lane Writer'>Andy Lane</option>
                <option value='Steve Lyons Writer'>Steve Lyons</option>
                <option value='Paul Magrs Writer'>Paul Magrs</option>
                <option value='Ian Marter Writer'>Ian Marter</option>
                <option value='David A. McIntee Writer'>David A. McIntee</option>
                <option value='Una McCormack Writer'>Una McCormack</option>
                <option value='Lawrence Miles Writer'>Lawrence Miles</option>
                <option value='Jonathan Morris Writer'>Jonathan Morris</option>
                <option value='Kate Orman Writer'>Kate Orman</option>
                <option value='Lance Parkin Writer'>Lance Parkin</option>
                <option value='Jacqueline Rayner Writer'>Jacqueline Rayner</option>
                <option value='Justin Richards Writer'>Justin Richards</option>
                <option value='Gareth Roberts Writer'>Gareth Roberts</option>
                <option value='Gary Russell Writer'>Gary Russell</option>
                <option value='Mike Tucker Writer'>Mike Tucker</option>
                
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default WriterProseFilter;
