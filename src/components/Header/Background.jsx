import React from 'react';
import background from "../../assets/Clothing/Product_Image.png";
import "./Background.css"; // Import the CSS file for additional styling

const Background = () => {
    return (
        <div className="background-container">
            <div className="background-shape"></div>
            <img src={background} alt="background" className="background-image" />
        </div>
    )
}

export default Background;