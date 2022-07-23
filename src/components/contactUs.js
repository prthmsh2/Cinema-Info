import { Link } from "react-router-dom";
import hero from "./hero.js.js"
import React from "react";

function ContactUs (){
    return(
        <>
            <hero text="contact kyu karna hai "/>
            <h2 className="mt-5 ml-5 contact-statement"> Contact Us on Below Google Form Link</h2>
            {/* <Link to="../https://forms.gle/2md7PD13kugCZt2z7" className="Google-form-link" >GForm Link</Link> */}
            <Link to={{ pathname: "https://forms.gle/2md7PD13kugCZt2z7" }} target="_blank" className="Google-form-link">GForm Link</Link>
            <h3 className="Or-copy-this-link-in-Another-Tab">Or copy this link in Another Tab: https://forms.gle/2md7PD13kugCZt2z7 </h3>
        </>
    )
}
export default ContactUs; 