const WriterTVFilter = ({filterByWriterTV, setFilterByWriterTV}) => {
    return ( 
        <div className="writer-filter">
            

        <select
                    value={filterByWriterTV}
                    onChange={(e) => {
                    setFilterByWriterTV(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Writer">`
                <option value='All'>Filter By Writer (TV)</option>
                <option value='Ben Aaronovitch Writer'>Ben Aaronovitch</option>
                <option value='Douglas Adams Writer'>Douglas Adams</option>
                <option value='Bob Baker Writer'>Bob Baker</option>
                <option value='Pip and Jane Baker Writer'>Pip & Jane Baker</option>
                <option value='Christopher H. Bidmead Writer'>Christopher H. Bidmead</option>
                <option value='Johnny Byrne Writer'>Johnny Byrne</option>
                <option value='Chris Chibnall Writer'>Chris Chibnall</option>
                <option value='Paul Cornell Writer'>Paul Cornell</option>
                <option value='Russell T. Davies Writer'>Russell T. Davies</option>
                <option value='Gerry Davis Writer'>Gerry Davis</option>
                <option value='Terrance Dicks Writer'>Terrance Dicks</option>
                <option value='Terence Dudley Writer'>Terence Dudley</option>
                <option value='David Fisher Writer'>David Fisher</option>
                <option value='Mark Gatiss Writer'>Mark Gatiss</option>
                <option value='Peter Grimwade Writer'>Peter Grimwade</option>
                <option value='Mervyn Haisman Writer'>Mervyn Haisman</option>
                <option value='Peter Harness Writer'>Peter Harness</option>
                <option value='Brian Hayles Writer'>Brian Hayles</option>
                <option value='Robert Holmes Writer'>Robert Holmes</option>
                <option value='Malcolm Hulke Writer'>Malcolm Hulke</option>
                <option value='Henry Lincoln Writer'>Henry Lincoln</option>
                <option value='John Lucarotti Writer'>John Lucarotti</option>
                <option value='Louis Marks Writer'>Louis Marks</option>
                <option value='Dave Martin Writer'>Dave Martin</option>
                <option value='Jamie Mathieson Writer'>Jamie Mathieson</option>
                <option value='Steven Moffat Writer'>Steven Moffat</option>
                <option value='Terry Nation Writer'>Terry Nation</option>
                <option value='Kit Pedler Writer'>Kit Pedler</option>
                <option value='Gareth Roberts Writer'>Gareth Roberts</option>
                <option value='Eric Saward Writer'>Eric Saward</option>
                <option value='Robert Sloman Writer'>Robert Sloman</option>
                <option value='Dennis Spooner Writer'>Dennis Spooner</option>
                <option value='David Whitaker Writer'>David Whitaker</option>
                <option value='Toby Whithouse Writer'>Toby Whithouse</option>
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default WriterTVFilter;
