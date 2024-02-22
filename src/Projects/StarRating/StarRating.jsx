import React, { useState } from 'react';
import {FaStar} from "react-icons/fa"
import './StarRating.css'

const StarRating = ({noOfstars}) => {
    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)

    const handleClick = (index)=>{ 
        setRating(index)
    }
    const onMouseEnter = (index)=>{
        setHover(index)
    }
    const onMouseLeave = ()=>{
       setHover(rating)
    }

   
   
    return (
        <div className='star-rating'>
            {[...Array(noOfstars)].map((_,index)=>{
                index++
                return <FaStar
                className={index<=(hover || rating) ? "on" : "off"}
                key={index}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>onMouseEnter(index)}
                onMouseLeave={()=>onMouseLeave()}
                size={40}
                />
                
                
            })}
           
        </div>
    );
}

export default StarRating;
