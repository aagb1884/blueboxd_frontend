import { useState } from "react";

const AddCompanion = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [primaryEra, setPrimaryEra] = useState("");
    const [mainActor, setMainActor] = useState("");
    const [bio, setBio] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    }
    const handlePrimaryEraChange = (e) => {
        setPrimaryEra(e.target.value);
    }
    const handleMainActorChange = (e) => {
        setMainActor(e.target.value);
    }
    const handleBioChange = (e) => {
        setBio(e.target.value);
    }


    const handleCompanionSubmit = async (e) => {
        e.preventDefault();

        const newCompanion = {
            firstName: firstName,
            lastName: lastName,
            nickname: nickname,
            primaryEra: primaryEra,
            mainActor: mainActor,
            bio: bio,
        };

        try {
            const savedCompanion = await addCompanion(newCompanion);
            setFirstName("");
            setLastName("");
            setNickname("");
            setPrimaryEra("");
            setMainActor("");
            setBio("");
            // fetchData("")
        } catch (error) {
            console.error("Error adding companion:", error)
        }
    }

    return ( 

        <form className="new-companion-form" onSubmit={handleCompanionSubmit}>
            <h2>Add New Companion</h2>
            <p>Required fields marked with *</p>
            <div>
                    <label htmlFor="new-companion-firstname">First Name*:</label>
                    <br/>
                    <input
                    type="text"
                    placeholder="Add first name"
                    id="new-companion-firstname"
                    name="new-companion-firstname"
                    required
                    value={firstName}
                    onChange={handleFirstNameChange}
                        />
            </div>
            <div>
                    <label htmlFor="new-companion-lastname">Last Name:</label>
                    <br/>
                    <input
                    type="text"
                    placeholder="Add last name"
                    id="new-companion-lastname"
                    name="new-companion-latname"
                    value={lastName}
                    onChange={handleLastNameChange}
                        />
            </div>
            <div>
                    <label htmlFor="new-companion-nickname">Nickname:</label>
                    <br/>
                    <input
                    type="text"
                    placeholder="Nickname"
                    id="new-companion-nickname"
                    name="new-companion-nickname"
                    value={nickname}
                    onChange={handleNicknameChange}
                        />
            </div>
            <div>
                    <label htmlFor="new-companion-primary-era">Primary Era*:</label>
                    <aside>The years this companion regularly appeared in stories (put start year only if companion is current).</aside>
                    <input
                    type="text"
                    placeholder="e.g. 2010 - 2014"
                    id="new-companion-primary-era"
                    name="new-companion-primary-era"
                    required
                    value={primaryEra}
                    onChange={handlePrimaryEraChange}
                        />
            </div>
            <div>
                    <label htmlFor="new-companion-main-actor">Main Actor</label>
                    <aside>The main actor to play this companion, if applicable.</aside>
                    <input
                    type="text"
                    placeholder="Firstname"
                    id="new-companion-main-actor"
                    name="new-companion-main-actor"
                    value={mainActor}
                    onChange={handleMainActorChange}
                        />
            </div>
            <div>
                    <label htmlFor="new-companion-bio">Bio*:</label>
                    <br/>
                    <input
                    type="text"
                    placeholder="Short bio"
                    id="new-companion-bio"
                    name="new-companion-bio"
                    required
                    value={bio}
                    onChange={handleBioChange}
                        />
            </div>
            <br />
                <div className="form-button">
                <button type="submit">Add Story</button>
                <input type="reset" value="Reset"></input>
                </div>
        </form>
     );
}
 
export default AddCompanion;


      