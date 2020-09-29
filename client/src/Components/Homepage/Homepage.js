import React, { useEffect } from 'react';
import './Homepage.css';

function Homepage(){
    useEffect(() => {document.getElementsByTagName('video')[0].volume = 0},[])
    return(
        <div className="home-container">
            <div className="home-video-container">
                <video width="100%" height="100%" src="https://res.cloudinary.com/duiexwi8t/video/upload/v1601366162/Jazan/jazan_fhkluc.mp4" autoPlay loop/>
            </div>
            <div className="home-content-container">
            </div>
        </div>
    )
}

export default Homepage;