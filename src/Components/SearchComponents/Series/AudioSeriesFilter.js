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
            <option value='BBC Audio'>BBC Audio</option>
            <option value='Target Audiobooks'>Target Audiobooks</option>
            <option value='The Nest Cottage Chronicles'>The Nest Cottage Chronicles</option>
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
            <option value='The War Doctor (Big Finish)'>The War Doctor (Big Finish)</option>
            <option value='Novel Adaptations (Big Finish)'>Novel Adaptations (Big Finish)</option>
            <option value='Audio Novels'>Audio Novels (Big Finish)</option>
            <option value='The Early Adventures (Big Finish)'>The Early Adventures (Big Finish)</option>
            <option value='Lost Stories (Big Finish)'>Lost Stories (Big Finish)</option>
            <option value='Companion Chronicles (Big Finish)'>Companion Chronicles (Big Finish)</option>
            <option value='Unbound (Big Finish)'>Unbound (Big Finish)</option>
            <option value='Philip Hinchcliffe Presents (Big Finish)'>Philip Hinchcliffe Presents (Big Finish)</option>
            <option value='Short Trips'>Short Trips (Big Finish)</option>
            <option value='Once and Future (Big Finish)'>Once and Future (Big Finish)</option>
            <option value='Destiny of the Doctor'>Destiny of the Doctor</option>
               
        </select>
            <span className="focus"></span>
    </div>
     );
}
 
export default AudioSeriesFilter;


