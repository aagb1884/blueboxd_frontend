import PageLayout from "../Navigation/page_layout";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AddStory = ({fetchData, addStory}) => {
    const [title, setTitle] = useState("");
    const [media, setMedia] = useState("");
    const [firstEpBroadcast, setFirstEpBroadcast] = useState("");
    const [lastEpBroadcast, setLastEpBroadcast] = useState("");
    const [releases, setReleases] = useState("");
    const [doctors, setDoctors] = useState("");
    const [companions, setCompanions] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [keywords, setKeywords] = useState("");
    const [series, setSeries] = useState("");
    const [storyNumber, setStoryNumber] = useState(0);
    const [noOfEpisodes, setNoOfEpisodes] = useState(0);
    const [productionCode, setProductionCode] = useState("");
    const [wikiLink, setWikiLink] = useState("");
    const navigate = useNavigate();

    const formats = [
        { label: 'Audio', value: "AUDIO" },
        { label: 'TV', value: "TV" },
        { label: 'Film', value: "FILM" },
        { label: 'Prose', value: "PROSE" },
        { label: 'Comic', value: "COMIC" },
        { label: 'Other', value: "OTHER" }
      ];

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

      const handleDoctorsChange = (e) => {
        setDoctors(e.target.value);
      };
  
      const handleCompanionChange = (e) => {
        setCompanions(e.target.value);
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


    
      const handleSubmit = async (e) => {
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

    return ( 
        <PageLayout>

            <form className="new-story-form" onSubmit={handleSubmit}>
                <h2>Add A Story</h2>
                <p>Please read <NavLink to="/about">our guidance </NavLink>before submitting new stories.</p>
                <div>
                    <label htmlFor="new-story-title">Title:</label>
                    <br/>
                    <input
                    type="text"
                    placeholder="Story Title (Format)"
                    id="new-story-title"
                    name="new-story-title"
                    value={title}
                    onChange={handleTitleChange}
                        />
                </div>
                <div>
                    <label htmlFor="format-selector">Format:</label> <select 
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
                
                <div>
                <aside>If this is NOT a multi-part story released across different dates, please use same date for 'First Broadcast' and 'Last Broadcast'.</aside>
                    <label htmlFor="first-ep-broadcast">First Broadcast/Released</label>
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
                    <label htmlFor="last-ep-broadcast">Last Broadcast</label>
                    <br/>
                    <input
                    type="date"
                    id="last-ep-broadcast"
                    name="last-ep-broadcast"
                    value={lastEpBroadcast}
                    onChange={handleLastEpBroadcastChange}
                        />
                </div>
                <div>
                    <label htmlFor="releases">Releases</label>
                    <br/>
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
                    <label htmlFor="doctors">Doctors</label>
                    <br/>
                    <input
                    type="text"
                    id="doctors"
                    name="doctors"
                    value={doctors}
                    onChange={handleDoctorsChange}
                        />
                </div>
                <div>
                    <label htmlFor="companions">Companions</label>
                    <br/>
                    <input
                    type="text"
                    id="companions"
                    name="companions"
                    value={companions}
                    onChange={handleCompanionChange}
                        />
                </div>
                <div>
                    <label htmlFor="imgURL">Image:</label>
                    <br/>
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
                </div>
                <div>
                    <label htmlFor="synopsis">Keywords:</label>
                    <br/>
                    <input
                    type="text"
                    id="synopsis"
                    name="synopsis"
                    placeholder="e.g. Daleks, Shakespeare"
                    value={keywords}
                    onChange={handleKeywordsChange}
                        />
                </div>
                <div>
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
                    <aside>What number story in its range/series is it?</aside>
                    <label htmlFor="synopsis">Story Number:</label>
                    <br/>
                    <input
                    type="number"
                    id="synopsis"
                    name="synopsis"
                    value={storyNumber}
                    onChange={handleStoryNumberChange}
                        />
                </div>
                <div>
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
                    <aside>If there is one, please enter a link to the story article from <a href="https://tardis.wiki/wiki/Doctor_Who_Wiki">TARDIS Wiki</a></aside>
                    <label htmlFor="synopsis">TARDIS Wiki Link:</label>
                    <br/>
                    <input
                    type="text"
                    id="synopsis"
                    name="synopsis"
                    placeholder="Link to TARDIS Wiki"
                    value={wikiLink}
                    onChange={handleWikiLinkChange}
                        />
                </div>
                <div className="form-button">
                <button type="submit">Add Story</button>
                </div>
            </form>

        </PageLayout>
     );
}
 
export default AddStory;