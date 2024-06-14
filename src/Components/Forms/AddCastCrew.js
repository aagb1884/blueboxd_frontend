import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AddCastCrew = ({fetchData, people, addCastAndCrew, addPeople}) => {
    //person state
    const [personName, setPersonName] = useState('');
    const [personInfo, setPersonInfo] = useState('');
    const [personSearchTerm, setPersonSearchTerm] = useState("");
    // castcrew state
    const [storyPerson, setStoryPerson] = useState(null);
    const [role, setRole] = useState('');
    const [category, setCategory] = useState('');
    const [story, setStory] = useState(null);

    // alert state
    const [alert, setAlert] = useState({ type: '', message: '' });

    const location = useLocation();
    const { storyInfo, castAndCrew } = location.state || {}

    const navigate = useNavigate();

    //add person functions

    const handlePersonNameChange = (e) => {
        setPersonName(e.target.value);
    }
    
    const handlePersonInfoChange = (e) => {
        setPersonInfo(e.target.value);
    }

    const handlePersonSubmit = async (e) => {
        e.preventDefault();

        const newPerson = {
            name: personName,
            info: personInfo
        };

        try {
            const savedPerson = await addPeople(newPerson);
            setPersonName('');
            setPersonInfo('');
            fetchData();
            setAlert({ type: 'success', message: 'Person added successfully!' });
        } catch (error) {
            console.error('Error adding person:', error);
            setAlert({ type: 'error', message: 'Failed to add person.' });
        }
    }

    // add cast crew functions

    const categories = [
        { label: 'Select Cast or Crew', value: ''},
        { label: 'Cast', value: "Cast" },
        { label: 'Crew', value: "Crew" }
      ];

      const addPersonToStory = (newPerson) => {
        setStoryPerson(newPerson);
      }

      const removePerson = (index) => {
        setStoryPerson(null);
    };

    const onPeopleSearchChange = (e) => {
        e.preventDefault();
        setPersonSearchTerm(e.target.value);
      }

      function clearSearch() {
        setPersonSearchTerm('')
      }

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleCastCrewSubmit = async (e) => {
        e.preventDefault();

        if (!storyPerson) {
            setAlert({ type: 'error', message: 'No person selected' });
            return;
          }

        const newCastAndCrew = {
            person: storyPerson,
            role: role,
            category: category,
            story: storyInfo
        };

        try {
            const savedCastAndCrew = await addCastAndCrew(newCastAndCrew);
            setStoryPerson(null);
            setRole('');
            setCategory('');
            setStory(null);
            fetchData();
            setAlert({ type: 'success', message: 'Cast/Crew member added successfully!' });
        } catch (error) {
            console.error('Error adding Cast and Crew:', error);
            setAlert({ type: 'error', message: 'Failed to add Cast/Crew member.' });
        }
    }

    const peopleInfo = storyPerson ? (
        <li>
          <span>{storyPerson.name}</span>
          <button type="button" id="remove-person" onClick={removePerson}>Remove</button>
        </li>
      ) : null;

    const filteredPeople = people.filter((person) => {
        const searchTerm = personSearchTerm.toLowerCase();
        return person.name.toLowerCase().includes(searchTerm);
      });
    

    return ( 
        
        <div
        className="modal-wrapper"
        onClick={() => navigate('/add_story')}
        >
            <div
            className="modal"
            onClick={e => e.stopPropagation()}
            >
        <h2>Add Production Crew</h2>

        {alert.message && (
          <div className={`alert ${alert.type}`}>
            {alert.message}
            </div>
        )}
        
       <div>
          <br />
          <form className="new-cast-crew-form" onSubmit={handleCastCrewSubmit}>
          <div className="companion-search-container">
          <label htmlFor="companion-search">Person Search</label>
          <aside>Search by first name. Results will appear below. Click on a name to add it.</aside>
          <input
            type="text"
            id="person-search"
            name="person-search"
            placeholder="Search Cast/Crew Names"
            value={personSearchTerm}
            onChange={onPeopleSearchChange}
          />

            <div className="dropdown">
            {personSearchTerm && filteredPeople.slice(0, 5).map((person) => 
            (<div 
                    key={person.id}
                    onClick={() => addPersonToStory(person)}
                    className="dropdown-row">
                        {person.name}
                                    </div>))}         
            </div>
            </div>
            
            <button onClick={clearSearch}>Clear Search</button>
            <ul>
            {peopleInfo}
            </ul>
                   
            <div>
                    <label htmlFor="new-cast-crew-role">Role:</label>
                    <br/>
                    <input
                    type="text"
                    placeholder="e.g. Producer, Rose Tyler"
                    id="new-cast-crew-role"
                    name="new-cast-crew-role"
                    value={role}
                    onChange={handleRoleChange}
                        />
            </div>
            <div className="new-cast-crew-category">
                    <label htmlFor="cast-crew-selector"><u>Cast/Crew:</u> </label> <select 
                    id="cast-crew-selector"
                    name="cast-crew-selector"
                    value={category}
                    onChange={handleCategoryChange}
                    >
                    {categories.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                    </select>         
                 </div>
                 <div className="new-cast-crew-form-button">
                <button type="submit">Add Cast/Crew Member to Story</button>
                </div>
            </form>
            <br />
            <aside>Can't find the person you're looking for?</aside>
                        
            <form className="new-person-form" onSubmit={handlePersonSubmit}>
                    <p>Add them here (Required fields underlined):</p>
                    <div>
                        <label htmlFor="new-person-name"><u>Name:</u></label>
                            <br />
                            <input
                            type="text"
                            placeholder="Add full name"
                            id="new-person-name"
                            name="new-person-name"
                            required 
                            value={personName}
                            onChange={handlePersonNameChange}
                            />
                    </div>
                    <div>
                        <label htmlFor="new-person-info"><u>Info:</u></label>
                            <aside>Short biographical information relating to person's work on Doctor Who.</aside>
                            <input
                            type="text"
                            placeholder="e.g. Writer, Producer"
                            id="new-person-info"
                            name="new-person-info"
                            required 
                            value={personInfo}
                            onChange={handlePersonInfoChange}
                            />
                    </div>
                    <div className="new-person-form-button">
                <button type="submit">Add New Person to Search</button>
                </div>
            </form>

            </div>

            
        </div>
    </div>
    
     );
}
 
export default AddCastCrew;