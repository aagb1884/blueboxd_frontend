import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCastCrew = ({fetchData, people, addCastAndCrew, addPeople}) => {
    //person state
    const [personName, setPersonName] = useState('');
    const [personInfo, setPersonInfo] = useState('');
    const [personSearchTerm, setPersonSearchTerm] = useState("");
    // castcrew state
    const [storyPeople, setStoryPeople] = useState([]);
    const [role, setRole] = useState('');
    const [category, setCategory] = useState('');
    const [story, setStory] = useState('');

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
            fetchData()
        } catch (error) {
            console.error('Error adding person:', error)
        }
    }

    // add cast crew functions

    const categories = [
        { label: 'Cast', value: "CAST" },
        { label: 'Crew', value: "CREW" }
      ];

      const addPersonToStory = (newPerson) => {
        setStoryPeople([...storyPeople, newPerson])
      }

      const removePerson = (index) => {
        const updatedPeople = storyPeople.filter((_, i) => i !== index);
        setStoryPeople(updatedPeople);
    };

      const peopleInfo = people.map((person, index) => (
        <li key={index}>
            <span>{person.name}</span>
            <button type="button" id="remove-person" onClick={() => removePerson(index)}>Remove</button>
        </li>
    ));


    const onPeopleSearchChange = (e) => {
        e.preventDefault();
        setPersonSearchTerm(e.target.value);
      }

      function clearSearch() {
        setPersonSearchTerm('')
      }

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


        <div className="companion-search-container">
          <br />
          <label htmlFor="companion-search">Person Search</label>
          <aside>Search by first name. Results will appear below. Click on a name to add it.</aside>
          <input
            type="text"
            id="person-search"
            name="person-search"
            placeholder="Search Crew Names"
            value={personSearchTerm}
            onChange={onPeopleSearchChange}
          />

            <div className="dropdown">
            {personSearchTerm && people.filter(person => {
                const searchTerm = personSearchTerm.toLowerCase();
                const name = person.name.toLowerCase();
                

                return searchTerm && name.startsWith(searchTerm)})
                .slice(0, 10)
                .map((person) => (<div 
                    key={person.id}
                    onClick={() => addPersonToStory(person)}
                    className="dropdown-row">
                        {person.name}
                                    </div>))}         
            </div>
            
            <button onClick={clearSearch}>Clear Search</button>
            {/* {peopleInfo} */}
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
                        <label htmlFor="new-person-iinfo"><u>Info:</u></label>
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
                <button type="submit">Add New Cast/Crew Member</button>
                <input type="reset" value="Reset"></input>
                </div>
            </form>

            </div>

            
        </div>
    </div>
    
     );
}
 
export default AddCastCrew;