const RecurringCharacterFilterTV = ({filterByRecurringCharacter, setFilterByRecurringCharacter}) => {    
    
    return ( 
        <div className="recurringCharacter-filter">

        <select
                value={filterByRecurringCharacter}
                onChange={(e) => {
                setFilterByRecurringCharacter(e.target.value);
                }}
            className="custom-select"
            aria-label="Filter Stories by Recurring Character">`
            <option value='All'>Filter By Recurring Character (TV)</option>
            <option value='Madame Vastra TV'>Madame Vastra</option>
            <option value='Jenny Flint TV'>Jenny Flint</option>
            <option value='Strax TV'>Strax</option>
            <option value='Ashildr/Me TV'>Ashildr/Me</option>
            <option value='Harriet Jones TV'>Harriet Jones</option>
            <option value='Kate Lethbridge-Stewart TV'>Kate Lethbridge-Stewart</option>
            <option value='Petronella Osgood TV'>Petronella Osgood</option>
            <option value='Danny Pink TV'>Danny Pink</option>
            <option value='River Song TV'>River Song</option>
            <option value='Jackie Tyler TV'>Jackie Tyler</option>
            <option value='Pete Tyler TV'>Pete Tyler</option>
            <option value='Shirley Anne Bingham TV'>Shirley Anne Bingham</option>
            <option value='Queen Elizabeth I TV'>Queen Elizabeth I </option>
            <option value='Sylvia Noble TV'>Sylvia Noble</option>
            <option value='Brian Williams TV'>Brian Williams</option>
            <option value="Grace O'Brien TV">Grace O'Brien</option>
            <option value='The White Guardian TV'>The White Guardian</option>
            <option value='Dorium Maldovar TV'>Dorium Maldovar</option>
            <option value='Alpha Centauri TV'>Alpha Centauri</option>
            <option value='Jenny TV'>Jenny</option>
            <option value='The General TV'>The General</option>
            <option value='Borusa TV'>Borusa</option>
            <option value='Trinity Wells TV'>Trinity Wells</option>
            <option value='Rassilon TV'>Rassilon</option>
           
        </select>
            <span className="focus"></span>
    </div>
 );
}
 
export default RecurringCharacterFilterTV;