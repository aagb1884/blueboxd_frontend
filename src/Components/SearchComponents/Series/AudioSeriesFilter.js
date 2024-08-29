const AudioSeriesFilter = ({filterBySeries, setFilterBySeries}) => {
    return ( 
        <div className="audio-series-filter">

        <select
                value={filterBySeries}
                onChange={(e) => {
                setFilterBySeries(e.target.value);
                }}
            className="custom-select"
            aria-label="Filter Stories by Audio Series">`
            <option value='All'>Filter By Series (Audio)</option>
            <option value='BBC Radio'>BBC Radio</option>
            <option value='The Monthly Adventures (Big Finish)'>The Monthly Adventures (Big Finish)</option>
            <option value='The First Doctor Adventures (Big Finish)'>The First Doctor Adventures (Big Finish)</option>
            <option value='The Second Doctor Adventures (Big Finish)'>The Second Doctor Adventures (Big Finish)</option>
            <option value='The Third Doctor Adventures (Big Finish)'>The Third Doctor Adventures (Big Finish)</option>
            <option value='The Fourth Doctor Adventures (Big Finish)'>The Fourth Doctor Adventures (Big Finish)</option>
            <option value='The Fifth Doctor Adventures (Big Finish)'>The Fifth Doctor Adventures (Big Finish)</option>
            <option value='The Sixth Doctor Adventures (Big Finish)'>The Sixth Doctor Adventures (Big Finish)</option>
            <option value='The Seventh Doctor Adventures (Big Finish)'>The Seventh Doctor Adventures (Big Finish)</option>
            <option value='The Eighth Doctor Adventures (Big Finish)'>The Eighth Doctor Adventures (Big Finish)</option>
            <option value='The Ninth Doctor Adventures (Big Finish)'>The Ninth Doctor Adventures (Big Finish)</option>
            <option value='The Tenth Doctor Adventures (Big Finish)'>The Tenth Doctor Adventures (Big Finish)</option>
            <option value='Novel Adaptations (Big Finish)'>Novel Adaptations (Big Finish)</option>
            <option value='Philip Hinchcliffe Presents (Big Finish)'>Philip Hinchcliffe Presents (Big Finish)</option>
            <option value='Once and Future (Big Finish)'>Once and Future (Big Finish)</option>
            <option value='Destiny of the Doctor'>Destiny of the Doctor</option>
               
        </select>
            <span className="focus"></span>
    </div>
     );
}
 
export default AudioSeriesFilter;