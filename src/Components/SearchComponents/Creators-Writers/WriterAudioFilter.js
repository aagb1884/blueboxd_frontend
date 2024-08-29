const WriterAudioFilter = ({filterByWriterAudio, setFilterByWriterAudio}) => {
    return ( 
        <div className="writer-filter">
            

        <select
                    value={filterByWriterAudio}
                    onChange={(e) => {
                    setFilterByWriterAudio(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Writer">`
                <option value='All'>Filter By Writer (Audio)</option>
                <option value='Guy Adams Writer'>Guy Adams</option>
                <option value='Simon Barnard Writer'>Simon Barnard</option>
                <option value='Alan Barnes Writer'>Alan Barnes</option>
                <option value='Jonathan Barnes Writer'>Jonathan Barnes</option>
                <option value='Nick Briggs Writer'>Nick Briggs</option>
                <option value='Chris Chapman Writer'>Chris Chapman</option>
                <option value='Stephen Cole Writer'>Stephen Cole</option>
                <option value='John Dorney Writer'>John Dorney</option>
                <option value='Nigel Fairs Writer'>Nigel Fairs</option>
                <option value='Matt Fitton Writer'>Matt Fitton</option>
                <option value='Tim Foley Writer'>Tim Foley</option>
                <option value='Nev Fountain Writer'>Nev Fountain</option>
                <option value='Roy Gill Writer'>Roy Gill</option>
                <option value='James Goss Writer'>James Goss</option>
                <option value='Simon Guerrier Writer'>Simon Guerrier</option>
                <option value='Scott Handcock Writer'>Scott Handcock</option>
                <option value='Lizzie Hopley Writer'>Lizzie Hopley</option>
                <option value='James Kettle Writer'>James Kettle</option>
                <option value='Andy Lane Writer'>Andy Lane</option>
                <option value='Joseph Lidster Writer'>Joseph Lidster</option>
                <option value='David Llewellyn Writer'>David Llewellyn</option>
                <option value='Steve Lyons Writer'>Steve Lyons</option>
                <option value='Paul Magrs Writer'>Paul Magrs</option>
                <option value='Una McCormack Writer'>Una McCormack</option>
                <option value='Lisa McMullin Writer'>Lisa McMullin</option>
                <option value='Roland Moore Writer'>Roland Moore</option>
                <option value='Lou Morgan Writer'>Lou Morgan</option>
                <option value='Paul Morris Writer'>Paul Morris</option>
                <option value='Jonathan Morris Writer'>Jonathan Morris</option>
                <option value='Lisbeth Myles Writer'>Lisbeth Myles</option>
                <option value='Marc Platt Writer'>Marc Platt</option>
                <option value='Ian Potter Writer'>Ian Potter</option>
                <option value='Jacqueline Rayner Writer'>Jacqueline Rayner</option>
                <option value='Julian Richards Writer'>Julian Richards</option>
                <option value='Justin Richards Writer'>Justin Richards</option>
                <option value='Eddie Robson Writer'>Eddie Robson</option>
                <option value='Gary Russell Writer'>Gary Russell</option>
                <option value='Cavan Scott Writer'>Cavan Scott</option>
                <option value='Alfie Shaw Writer'>Alfie Shaw</option>
                <option value='Rob Shearman Writer'>Rob Shearman</option>
                <option value='Andrew Smith Writer'>Andrew Smith</option>
                <option value='Matthew Sweet Writer'>Matthew Sweet</option>
                <option value='Robert Valentine Writer'>Robert Valentine</option>
                <option value='Mark Wright Writer'>Mark Wright</option>
                </select>
                <span className="focus"></span>
        </div>
     );
}
export default WriterAudioFilter;