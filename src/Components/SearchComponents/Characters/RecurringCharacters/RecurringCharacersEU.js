const RecurringCharacterFilterEU = ({filterByRecurringCharacter, setFilterByRecurringCharacter}) => {    
    
    return ( 
        <div className="recurringCharacter-filter">

        <select
                value={filterByRecurringCharacter}
                onChange={(e) => {
                setFilterByRecurringCharacter(e.target.value);
                }}
            className="custom-select"
            aria-label="Filter Stories by Recurring Character">`
            <option value='All'>Filter By Recurring Character (Extended Universe)</option>     
            <option value='Madame Vastra TV'>Madame Vastra</option>
            <option value='Jenny Flint TV'>Jenny Flint</option>
            <option value='Strax TV'>Strax</option>
            <option value='Henry Gordon Jago AUDIO'>Jago</option>
            <option value='George Litefoot AUDIO'>Litefoot</option>
            <option value='Kate Lethbridge-Stewart TV'>Kate Lethbridge-Stewart</option>
            <option value='Petronella Osgood TV'>Petronella Osgood</option>          
            <option value='Andy Davidson TV'>PC Andy</option>
            <option value='Alex Campbell AUDIO'>Alex Campbell</option>
            <option value='Alpha Centauri TV'>Alpha Centauri</option>
            <option value='Cardinal Ollistra AUDIO'>Ollistra</option>
            <option value='Dorium Maldovar TV'>Dorium Maldovar</option>
            <option value='The General TV'>The General</option>
            <option value='Jackie Tyler TV'>Jackie Tyler</option>         
            <option value='Jenny TV'>Jenny (Doctor's Daughter)</option>          
            <option value='Narvin AUDIO'>Narvin</option>
            <option value='Rassilon TV'>Rassilon</option>
            <option value='River Song TV'>River Song</option> 
            <option value='The White Guardian TV'>The White Guardian</option>
        </select>
            <span className="focus"></span>
    </div>
 );
}
 
export default RecurringCharacterFilterEU;