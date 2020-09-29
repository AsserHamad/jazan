import React, { useEffect } from 'react';
import './OurTeam.css';

function OurTeam(){

    const teams = [{
        name: 'Oloum Al Omran',
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601375799/Jazan/Consortium%20logos/Oloum_wxe0jp.jpg'
    },{
        name: 'LSH',
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601373610/Jazan/Consortium%20logos/LSH_owoft9.jpg'
    },{
        name: 'Urban Collaborative',
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601373611/Jazan/Consortium%20logos/UC_vfz5y8.jpg'
    },{
        name: 'GRMC',
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601373610/Jazan/Consortium%20logos/grmc_vh6pfe.jpg'
    },{
        name: 'PADECO',
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601373611/Jazan/Consortium%20logos/PADECO_w9zjgt.jpg'
    },{
        name: 'Ai + Architecture',
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601373610/Jazan/Consortium%20logos/Ai_dfyyh3.jpg'
    },{
        name: 'NDG',
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601373610/Jazan/Consortium%20logos/NDG_bvi0zo.jpg'
    }]
    const govt = [{
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601365461/Jazan/Government%20logos/2030_gray1_sxbltl.png'
    },{
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601365461/Jazan/Government%20logos/saudi_logo_prz14e.png'
    },{
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601365460/Jazan/Government%20logos/saudi_2_logo_g8awci.png'
    },{
        icon: 'https://res.cloudinary.com/duiexwi8t/image/upload/v1601365460/Jazan/Government%20logos/%D8%A7%D9%94%D9%85%D8%A7%D9%86%D8%A9_%D9%85%D9%86%D8%B7%D9%82%D8%A9_%D8%AC%D8%A7%D8%B2%D8%A7%D9%86_wingh4.png'
    }]

    return <div className="our-team-container">
        <div className="our-team-text">
            “A distinguished team of highly specialized consulting firms gathered their efforts to achieve the
            aimed MISSION & to settle the anticipated VISIONS for Jazan Region and Jizan City”
        </div>
        <div className="our-team-title">
            The Consortium
        </div>
        <div className="our-team-logos">
            {teams.map(member => {
                return (
                <div className="our-team-member">
                    <img src={member.icon} />
                </div>
                )
            })}
        </div>
        <div className="our-team-title">
            Developers Partners
        </div>
        <div className="our-team-govt-logos">
            {govt.map(member => {
                return (
                <div className="our-team-govt-member">
                    <img src={member.icon} />
                </div>
                )
            })}
        </div>
    </div>
}

export default OurTeam;