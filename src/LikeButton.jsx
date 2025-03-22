import React from 'react'
import { useState } from 'react';
function LikeButton() {
    let [isLiked,setIsLiked]=useState(false);
    function toggleLiked(){
        setIsLiked(!isLiked);
    }
    let likeStyle={color:"red"}
  return (
    <div>
      <p onClick={toggleLiked}>
        {isLiked?(<i style={likeStyle} class="fa-solid fa-heart"></i>):(<i className="fa-regular fa-heart"></i>)}
      </p>

    </div>
  )
}

export default LikeButton
