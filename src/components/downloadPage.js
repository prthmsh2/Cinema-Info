import hero from "./hero.js"
import { Link } from "react-router-dom";
import React from "react";

function DownloadPage (){
    return(
        <>
            <hero text="Below is the Download Link" />
                <h3 className="download-link">
                    {/* <Link to="https://drive.google.com/file/d/1UQJDkGITwb1DMdKZNQOMiCKZFeKOSr8w/view?usp=sharing" className="Google-form-link" target="_blank" >https://drive.google.com/file/d/1UQJDkGITwb1DMdKZNQOMiCKZFeKOSr8w/view?usp=sharing</Link> */}
                    <Link to={{ pathname: "https://drive.google.com/file/d/1UQJDkGITwb1DMdKZNQOMiCKZFeKOSr8w/view?usp=sharing" }} target="_blank" className="Google-form-link" >https://drive.google.com/file/d/1UQJDkGITwb1DMdKZNQOMiCKZFeKOSr8w/view?usp=sharing</Link>
                </h3>
            <h4 className="download-statement">
                Or Copy-Paste above Link to Download the Movie
            </h4>
        </>
    )
}
export default DownloadPage;