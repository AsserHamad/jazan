import React, { useEffect } from 'react';
import './Homepage.css';
import OurTeam from './OurTeam/OurTeam';

function Homepage(){
    useEffect(() => {document.getElementsByTagName('video')[0].volume = 0.2},[])
    return(
        <div className="home-container">
            <div className="home-video-container">
                <video width="100%" height="100%" src="https://res.cloudinary.com/duiexwi8t/video/upload/v1601375792/Jazan/jazan-v3_rmudgy.mp4" autoPlay loop muted/>
                <div className="home-video-text">
                    {/* <div className="home-video-text-specifics">
                        A Glimpse of <span className="home-text-jazan">Jazan</span><br />
                        Exploring Opporunities...<br />
                        <span className="home-video-text-strategy">The Strategic Plan For JAZAN Region & JAZAN City</span>
                    </div> */}
                </div>
            </div>
            <div className="home-content-container">
                <OurTeam />
            </div>
        </div>
    )
}

export default Homepage;