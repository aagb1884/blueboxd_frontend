import PageLayout from "../Navigation/page_layout";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AddStory = ({fetchData, addStory, doctorData, companionData}) => {
    const [title, setTitle] = useState("");
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
    const navigate = useNavigate();

    const formats = [
        { label: 'Audio', value: "AUDIO" },
        { label: 'TV', value: "TV" },
        { label: 'Film', value: "FILM" },
        { label: 'Prose', value: "PROSE" },
        { label: 'Comic', value: "COMIC" },
        { label: 'Other', value: "OTHER" }
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
        
        const newStory = {
            title: title,
            format: media,
            firstEpBroadcast: firstEpBroadcast,
            lastEpBroadcast: lastEpBroadcast,
            releases: releases,
            doctors: doctors,
            companions: companions,
            imgURL: imgURL,
            synopsis: synopsis,
            keywords: keywords,
            series: series,
            noOfEpisodes: noOfEpisodes,
            productionCode: productionCode,
            wikiLink: wikiLink,
        };
        
            try {
                const savedStory = await addStory(newStory);
                setTitle("");
                setMedia("");
                setFirstEpBroadcast("");
                setLastEpBroadcast("");
                setReleases("");
                setDoctors("");
                setCompanions("");
                setImgURL("");
                setSynopsis("");
                setKeywords("");
                setSeries(0);
                setNoOfEpisodes(0);
                setProductionCode("");
                setWikiLink("");
                fetchData();
                navigate(`/stories/${newStory.id}`);
              } catch (error) {
                console.error("Error adding review:", error);
              }
      };
console.log(doctors);
console.log(companions);
    return ( 
        <PageLayout>

            <form className="new-story-form">
                <h2>Add A Story</h2>
                <p>Please read <NavLink to="/about">our guidance </NavLink>before submitting new stories.</p>
                <p>Don't worry about 100% accuracy. All stories added are subject to fact checks and editing.</p>
                <br />
                <div className="title-format">
                <div className="new-story-title-container">
                    <label htmlFor="new-story-title">Title: </label>
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
                    <label htmlFor="format-selector">Format: </label> <select 
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
                    <aside>If you are adding a single story/a multi-part story released in one go (e.g. a Big Finish story) please use same date for 'First Broadcast' and 'Last Broadcast'.</aside>
                    <label htmlFor="first-ep-broadcast">First Part Broadcast/Released:</label>
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
                    <label htmlFor="last-ep-broadcast">Last Part Broadcast/Released:</label>
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
            <label htmlFor="doctors" key={dr.id} className="doctor-label">
              <input type="checkbox"
                id="doctors"
                name="doctors"
                value={dr.name}
                onChange={(e) => setDoctors([...doctors, e.target.value])} />
              {dr.name}
            </label>
          ))
          }
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
                    <br/>
                    <input
                    type="text"
                    id="synopsis"
                    name="synopsis"
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
                    <label htmlFor="series">Series:</label>
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