const CompanionFilter = ({filterByCompanion, setFilterByCompanion}) => {
    return ( 
        <div className="companion-filter">
            

        <select
                    value={filterByCompanion}
                    onChange={(e) => {
                    setFilterByCompanion(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Companion">`
                <option value='All'>Filter By Companion</option>
                <option value='Susan TV'>Susan</option>
                <option value='Ian TV'>Ian</option>
                <option value='Barbara TV'>Barbara</option>
                <option value='Vicki TV'>Vicki</option>
                <option value='Steven TV'>Steven</option>
                <option value='Dorothea TV'>Dodo</option>
                <option value='Ben TV'>Ben</option>
                <option value='Polly TV'>Polly</option>
                <option value='Jamie TV'>Jamie</option>
                <option value='Victoria TV'>Victoria</option>
                <option value='Zoe TV'>Zoe</option>
                <option value='Brigadier Alastair Gordon TV'>The Brigadier</option>
                <option value='Liz TV'>Liz</option>
                <option value='Jo TV'>Jo</option>
                <option value='Sarah Jane TV'>Sarah Jane</option>
                <option value='Harry TV'>Harry</option>
                <option value='Leela TV'>Leela</option>
                <option value='K9 TV'>K9</option>
                <option value='Romana TV'>Romana</option>
                <option value='Adric TV'>Adric</option>
                <option value='Tegan TV'>Tegan</option>
                <option value='Nyssa TV'>Nyssa</option>
                <option value='Vislor TV'>Turlough</option>
                <option value='Peri TV'>Peri</option>
                <option value='Mel TV'>Mel</option>
                <option value='Dorothy TV'>Ace</option>
                <option value='Rose TV'>Rose</option>
                <option value='Jack TV'>Captain Jack</option>
                <option value='Martha TV'>Martha</option>
                <option value='Donna TV'>Donna</option>
                <option value='Amy TV'>Amy</option>
                <option value='Rory TV'>Rory</option>
                <option value='Clara TV'>Clara</option>
                <option value='Bill TV'>Bll</option>
                <option value='Nardole TV'>Nardole</option>
                <option value="Graham TV">Graham</option>
                <option value='Yasmin TV'>Yaz</option>
                <option value='Ryan TV'>Ryan</option>
                <option value='Dan TV'>Dan</option>
                <option value='Ruby TV'>Ruby</option>
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default CompanionFilter;