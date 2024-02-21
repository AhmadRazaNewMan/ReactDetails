import React from 'react';

const StarRating = () => {
    const starDiv = [];
    for (let i = 0; i < 5; i++) {
        starDiv.push(<div key={i} className='star' style={{ width: "20px", height: "20px", border: "1px solid black", display: "inline-block", margin: "5px" }}></div>);
    }
    return (
        <div>
            {starDiv.map((star, index) => (
                <React.Fragment key={index}>{star}</React.Fragment>
            ))}
        </div>
    );
}

export default StarRating;
