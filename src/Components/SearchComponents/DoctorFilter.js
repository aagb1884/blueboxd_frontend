const DoctorFilter = ({filterByDoctor, setFilterByDoctor}) => {
    return ( 
        <div className="doctor-filter">

        <select
                    value={filterByDoctor}
                    onChange={(e) => {
                    setFilterByDoctor(e.target.value);
                    }}
                className="custom-select"
                aria-label="Filter Stories by Doctor">`
                <option value='All'>Filter By Doctor</option>
                <option value='First Doctor'>First Doctor (William Hartnell)</option>
                <option value='Second Doctor'>Second Doctor (Patrick Troughton)</option>
                <option value='Third Doctor'>Third Doctor (Jon Pertwee)</option>
                <option value='Fourth Doctor'>Fourth Doctor (Tom Baker)</option>
                <option value='Fifth Doctor'>Fifth Doctor (Peter Davison)</option>
                <option value='Sixth Doctor'>Sixth Doctor (Colin Baker)</option>
                <option value='Seventh Doctor'>Seventh Doctor (Sylvester McCoy)</option>
                <option value='Eighth Doctor'>Eighth Doctor (Paul McGann)</option>
                <option value='Ninth Doctor'>Ninth Doctor (Christopher Eccleston)</option>
                <option value='Tenth Doctor'>Tenth Doctor (David Tennant)</option>
                <option value='Eleventh Doctor'>Eleventh Doctor (Matt Smith)</option>
                <option value='Twelfth Doctor'>Twelfth Doctor (Peter Capaldi)</option>
                <option value='Thirteenth Doctor'>Thirteenth Doctor (Jodie Whittaker)</option>
                <option value='Fourteenth Doctor'>Fourteenth Doctor (David Tennant)</option>
                <option value='Fifteenth Doctor'>Fifteenth Doctor (Ncuti Gatwa)</option>
                <option value='Unbound Doctor'>Unbound Doctor (Various)</option>
                <option value='War Doctor'>War Doctor (John Hurt)</option>
                <option value='Fugitive Doctor'>Fugitive Doctor (Jo Martin)</option>
                <option value='No Doctor'>No Doctor</option>
                </select>
                <span className="focus"></span>
        </div>
     );
}
 
export default DoctorFilter;