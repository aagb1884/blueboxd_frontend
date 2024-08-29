const TVSeriesFilter = ({filterBySeries, setFilterBySeries}) => {
    return ( 
        <div className="tv-series-filter">

            <select
                    value={filterBySeries}
                    onChange={(e) => {
                    setFilterBySeries(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by TV Series">`
                <option value='All'>Filter By Series (TV)</option>
                <option value='Season 1'>Season 1</option>
                <option value='Season 2'>Season 2</option>
                <option value='Season 3'>Season 3</option>
                <option value='Season 4'>Season 4</option>
                <option value='Season 5'>Season 5</option>
                <option value='Season 6'>Season 6</option>
                <option value='Season 7'>Season 7</option>
                <option value='Season 8'>Season 8</option>
                <option value='Season 9'>Season 9</option>
                <option value='Season 10'>Season 10</option>
                <option value='Season 11'>Season 11</option>
                <option value='Season 12'>Season 12</option>
                <option value='Season 13'>Season 13</option>
                <option value='Season 14'>Season 14</option>
                <option value='Season 15'>Season 15</option>
                <option value='Season 16'>Season 16</option>
                <option value='Season 17'>Season 17</option>
                <option value='Season 18'>Season 18</option>
                <option value='Season 19'>Season 19</option>
                <option value='Season 20'>Season 20</option>
                <option value='Season 21'>Season 21</option>
                <option value='Season 22'>Season 22</option>
                <option value='Season 23'>The Trial of a Time Lord/Season 23</option>
                <option value='Season 24'>Season 24</option>
                <option value='Season 25'>Season 25</option>
                <option value='Season 26'>Season 26</option>
                <option value='The TV Movie'>The TV Movie</option>
                <option value='Series 1'>Series 1</option>
                <option value='Series 2'>Series 2</option>
                <option value='Series 3'>Series 3</option>
                <option value='Series 4'>Series 4</option>
                <option value='2008 - 2010 Specials'>2008 - 2010 Specials</option>
                <option value='Series 5'>Series 5</option>
                <option value='Series 6'>Series 6</option>
                <option value='Series 7'>Series 7</option>
                <option value='Fiftieth Anniversary Specials'>50th Anniversary Specials</option>
                <option value='Series 8'>Series 8</option>
                <option value='Series 9'>Series 9</option>
                <option value='Series 10'>Series 10</option>
                <option value='Series 11'>Series 11</option>
                <option value='Series 12'>Series 12</option>
                <option value='Flux/Series 13'>Flux/Series 13</option>
                <option value='2022 Specials'>2022 Specials</option>
                <option value='Sixtieth Anniversary Specials'>Sixtieth Anniversary Specials</option>
                <option value='Season 1 (2024)'>Season 1 (2024)</option>
                <option value='Season 2 (2025)'>Season 2 (2025)</option>
               
            </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default TVSeriesFilter;