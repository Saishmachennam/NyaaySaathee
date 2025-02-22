import React from "react";
import { Link } from "react-router-dom";
import './officialPageHeader.css'

const OfficialsPageHeader=()=>{
    return(
        <div className="page-header">
            <button className="header-button"><Link to="/acts" className="header-text">Acts</Link></button>
            <button className="header-button"><Link to="/judgements" className="header-text">Judgements</Link></button>
            <button className="header-button"><Link to="/notaryportal" className="header-text">Notary Portal</Link></button>
            <button className="header-button"><Link to="/timetable" className="header-text">Personal Timetable</Link></button>
        </div>
    )
}

export default OfficialsPageHeader