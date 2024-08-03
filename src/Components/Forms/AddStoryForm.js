import PageLayout from "../Navigation/page_layout";
import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const AddStory = ({fetchData, addStory, doctorData, companionData}) => {
    const [title, setTitle] = useState("");
    const [storyCastAndCrew, setStoryCastAndCrew] = useState([]);
    const [media, setMedia] = useState(" ");
    const [firstEpBroadcast, setFirstEpBroadcast] = useState("");
    const [lastEpBroadcast, setLastEpBroadcast] = useState("");
    const [releases, setReleases] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [companions, setCompanions] = useState([]);
    const [imgURL, setImgURL] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [keywords, setKeywords] = useState("");
    const [series, setSeries] = useState("");
    const [storyNumber, setStoryNumber] = useState(0);
    const [noOfEpisodes, setNoOfEpisodes] = useState(0);
    const [productionCode, setProductionCode] = useState("");
    const [wikiLink, setWikiLink] = useState("");
    const [companionSearchTerm, setCompanionSearchTerm] = useState("");
    
    const [alert, setAlert] = useState({ type: '', message: '' });
    const navigate = useNavigate();
    const location = useLocation();

    const formats = [
        { label: 'Choose Media Type', value: "" },
        { label: 'Audio', value: "Audio" },
        { label: 'TV', value: "TV" },
        { label: 'Film', value: "Film" },
        { label: 'Prose', value: "Prose" },
        { label: 'Comic', value: "Comic" },
        { label: 'Webcast', value: "Webcast" },
        { label: 'Other', value: "Other" }
      ];

      function reset() {
        setTitle('');
        setMedia('');
        setFirstEpBroadcast('');
        setLastEpBroadcast('');
        setReleases('');
        setDoctors([]);
        setCompanions([]);
        setImgURL('');
        setSynopsis('');
        setKeywords('');
        setSeries('');
        setStoryNumber(0);
        setNoOfEpisodes(0);
        setProductionCode('');
        setWikiLink('');
        setCompanionSearchTerm('');
      }

      const onCompanionSearchChange = (e) => {
        e.preventDefault();
        setCompanionSearchTerm(e.target.value);
      }

      function clearSearch() {
        setCompanionSearchTerm('')
      }

      const addCompanionToStory = (newCompanion) => {
        setCompanions([...companions, newCompanion])
      }

      const removeCompanion = (index) => {
        const updatedCompanions = companions.filter((_, i) => i !== index);
        setCompanions(updatedCompanions);
    };


    const storyCompanionInfo = companions.map((companion, index) => (
        <li key={index}>
            <span>{companion.nickname ? companion.nickname : `${companion.firstName} ${companion.lastName}`}</span>
            <button type="button" id="remove-companion" onClick={() => removeCompanion(index)}>Remove</button>
        </li>
    ));

      const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };

      const handleMediaChange = (e) => {
        setMedia(e.target.value);
      };
  
      const handleFirstEpBroadcastChange = (e) => {
        setFirstEpBroadcast(e.target.value);
      };     
      
      const handleLastEpBroadcastChange = (e) => {
        setLastEpBroadcast(e.target.value);
      };    

      const handleReleasesChange = (e) => {
        setReleases(e.target.value);
      };

      const handleDoctorChange = (doctor) => {
        setDoctors((prevDoctors) => {
            if (prevDoctors.some((dr) => dr.id === doctor.id)) {
                return prevDoctors.filter((dr) => dr.id !== doctor.id);
            } else {
                return [...prevDoctors, doctor];
            }
        });
    };

      const handleImgURLChange = (e) => {
        setImgURL(e.target.value);
      };     

      const handleSynopsisChange = (e) => {
        setSynopsis(e.target.value);
      };

      const handleKeywordsChange = (e) => {
        setKeywords(e.target.value);
      };
  
      const handleSeriesChange = (e) => {
        setSeries(e.target.value);
      };     

      const handleStoryNumberChange = (e) => {
        setStoryNumber(e.target.value);
      };     

      const handleNoOfEpisodesChange = (e) => {
        setNoOfEpisodes(e.target.value);
      };

      const handleProductionCodeChange = (e) => {
        setProductionCode(e.target.value);
      };
  
      const handleWikiLinkChange = (e) => {
        setWikiLink(e.target.value);
      };     
    
      const handleStorySubmit = async (e) => {
        e.preventDefault();

        if (!title || !media ) {
          setAlert({ type: 'error', message: 'Required fields not completed' });
          return;
        }
        
        const newStory = {
            title: title,
            castAndCrew: storyCastAndCrew,
            media: media,
            firstEpBroadcast: firstEpBroadcast,
            lastEpBroadcast: lastEpBroadcast,
            releases: releases,
            doctors: doctors,
            companions: companions,
            imgURL: imgURL,
            synopsis: synopsis,
            keywords: keywords,
            series: series,
            storyNumber: storyNumber,
            noOfEpisodes: noOfEpisodes,
            productionCode: productionCode,
            wikiLink: wikiLink
        };
        
            try {
                const savedStory = await addStory(newStory);
                setTitle("");
                setStoryCastAndCrew([]);
                setMedia("");
                setFirstEpBroadcast("");
                setLastEpBroadcast("");
                setReleases("");
                setDoctors([]);
                setCompanions([]);
                setImgURL("");
                setSynopsis("");
                setKeywords("");
                setSeries("");
                setStoryNumber(0);
                setNoOfEpisodes(0);
                setProductionCode("");
                setWikiLink("");
                fetchData();
                setAlert({ type: 'success', message: 'Story added successfully! Redirecting...' });
                setTimeout(() => {
                  navigate(`/stories/${newStory.id}`);
                }, 5000); 
              } catch (error) {
                console.error("Error adding story:", error);
                setAlert({ type: "error", message: "Failed to add story." });
              }
            };
      console.log(title);

    return ( 
        <PageLayout>

            <form className="new-story-form">
                <h2>Add A Story</h2>
                <p>Please read <NavLink to="/about">our guidance </NavLink>before submitting new stories.</p>
                <p>Required fields underlined.</p>
                <p>Don't worry about 100% accuracy. All stories added are subject to fact checks and editing.</p>
                <br />
                <div className="title-format">
                <div className="new-story-title-container">
                    <label htmlFor="new-story-title"><u>Title:</u> </label>
                    <input
                    type="text"
                    placeholder="Story Title (Format)"
                    id="new-story-title"
                    name="new-story-title"
                    value={title}
                    onChange={handleTitleChange}
                        />
                </div>
                <div className="new-story-format-container">
                    <label htmlFor="format-selector"><u>Format:</u> </label> <select 
                    id="format-selector"
                    name="format-selector"
                    value={media}
                    onChange={handleMediaChange}
                    >
                    {formats.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                    </select>         
                 </div>
                 </div>

                 <div>
                <br/>
                    <label htmlFor="releases">Releases: </label>
                    <input
                    type="text"
                    id="releases"
                    name="releases"
                    placeholder="e.g. Novelisation(1994)..."
                    value={releases}
                    onChange={handleReleasesChange}
                        />
                
                 </div>

                <div>
                    <br />
                    <p><b>Broadcast/Publication Dates</b></p>
                    <aside>For stories where all parts are released on the same date (eg. a single episode story, a novel, or Big Finish story) please use same date for 'First Part Broadcast' and 'Last Part Broadcast'.</aside>
                    <label htmlFor="first-ep-broadcast"><u>First Part Broadcast/Released:</u></label>
                    <br/>
                    <input
                    type="date"
                    id="first-ep-broadcast"
                    name="first-ep-broadcast"
                    value={firstEpBroadcast}
                    onChange={handleFirstEpBroadcastChange}
                        />
                </div>
                <div>
                    <label htmlFor="last-ep-broadcast"><u>Last Part Broadcast/Released:</u></label>
                    <br/>
                    <input
                    type="date"
                    id="last-ep-broadcast"
                    name="last-ep-broadcast"
                    value={lastEpBroadcast}
                    onChange={handleLastEpBroadcastChange}
                        />
                </div>
                <br />
          <p><b>Doctors</b></p>
          <aside>Select as many Doctors as appear in the story</aside>
          <div className="doctors-checkbox">
            {doctorData.map((dr) => (
                <label htmlFor={`doctor-${dr.id}`} key={dr.id} className="doctor-label">
                    <input
                        type="checkbox"
                        id={`doctor-${dr.id}`}
                        name="doctors"
                        value={dr.id}
                        onChange={() => handleDoctorChange(dr)}
                    />
                    {dr.name}
                </label>
            ))}
          </div>
<br />
        <div className="companion-search-container">
          <br />
          <label htmlFor="companion-search">Companion Search</label>
          <aside>Search by name. Results will appear below. Click on a name to add it.</aside>
          <input
            type="text"
            id="companion-search"
            name="companion-search"
            placeholder="Search Companions"
            value={companionSearchTerm}
            onChange={onCompanionSearchChange}
          />

            <div className="dropdown">
            {companionSearchTerm && companionData.filter(companion => {
                const searchTerm = companionSearchTerm.toLowerCase();
                const firstname = companion.firstName.toLowerCase();
                const lastname = companion.lastName.toLowerCase();
                const nickname = companion.nickname.toLowerCase();

                return searchTerm && firstname.startsWith(searchTerm) || 
                lastname.startsWith(searchTerm) || 
                nickname.startsWith(searchTerm)
                }).slice(0, 10)
                .map((companion) => (<div 
                    key={companion.id}
                    onClick={() => addCompanionToStory(companion)}
                    className="dropdown-row">
                    {companion.nickname ? companion.nickname : `${companion.firstName} ${companion.lastName}`}
              </div>))}
            </div>
            <button onClick={clearSearch}>Clear Search</button>
            {storyCompanionInfo}
            <aside>Can't find the companion you're looking for? <NavLink
                        className="frontpage-job"
                        to="/add_companion"
                        state={{ previousLocation: location }}
                        > Add a new companion here.
                        </NavLink> 
                        </aside>
                        </div>

                <div>
                <br/>
                    <label htmlFor="imgURL">Image:</label>
                    <aside>An image from the story, title card or cover.</aside>
                    <input
                    type="text"
                    id="imgURL"
                    name="imgURL"
                    placeholder="Enter Image URL"
                    value={imgURL}
                    onChange={handleImgURLChange}
                        />
                </div>
                <div>
                <br/>
                    <label htmlFor="synopsis">Synopsis:</label>
                    <aside>200 Character Limit</aside>
                    <input
                    type="text"
                    id="synopsis"
                    name="synopsis"
                    maxLength="200"
                    placeholder="Spoiler free summary"
                    value={synopsis}
                    onChange={handleSynopsisChange}
                        />
                    <br/>
                </div>
                <div>
                <br/>
                    <label htmlFor="keywords">Keywords:</label>
                    <aside>Comma separated. These will not appear on the story page but will help you find stories using the search function.</aside>
                    <input
                    type="text"
                    id="keywords"
                    name="keywords"
                    placeholder="e.g. Daleks, Shakespeare"
                    value={keywords}
                    onChange={handleKeywordsChange}
                        />
                </div>
                <div>
                <br/>
                    <label htmlFor="series">Series/Range:</label>
                    <br/>
                    <input
                    type="text"
                    id="series"
                    name="series"
                    placeholder="Series"
                    value={series}
                    onChange={handleSeriesChange}
                        />
                </div>
                <div>
                <br/>
                    <label htmlFor="story-number">Story Number:</label>
                    <aside>What number story in its range/series is it? (e.g. 'Boom' is Story 3 in Season 1 (2024)).</aside>
                    <input
                    type="number"
                    id="story-number"
                    name="story-number"
                    value={storyNumber}
                    onChange={handleStoryNumberChange}
                        />
                </div>
                <div>
                <br/>
                    <label htmlFor="no-of-episodes">Number of Episodes:</label>
                    <br/>
                    <input
                    type="number"
                    id="no-of-episodes"
                    name="no-of-episodes"
                    value={noOfEpisodes}
                    onChange={handleNoOfEpisodesChange}
                        />
                </div>
                <div>
                <br/>
                    <label htmlFor="production-code">Production Code:</label>
                    <br/>
                    <input
                    type="text"
                    id="production-code"
                    name="production-code"
                    placeholder="e.g. AAA"
                    value={productionCode}
                    onChange={handleProductionCodeChange}
                        />
                </div>
                <div>
                <br/>
                    <label htmlFor="wiki-link">TARDIS Wiki Link:</label>
                    <aside>If there is one, please enter a link to the story article from <a href="https://tardis.wiki/wiki/Doctor_Who_Wiki">TARDIS Wiki</a></aside>
                    <input
                    type="text"
                    id="wiki-link"
                    name="wiki-link"
                    placeholder="Link to TARDIS Wiki"
                    value={wikiLink}
                    onChange={handleWikiLinkChange}
                        />
                </div>
                {alert.message && (
          <div className={`alert ${alert.type}`}>
            {alert.message}
          </div>
        )}
                <br />
                <div className="companion-form-button">
                <button type="submit" onClick={handleStorySubmit}>Add Story</button>
                <input type="reset" value="Reset" onClick={reset}></input>
                </div>
            </form>

        </PageLayout>
     );
}
 
export default AddStory;