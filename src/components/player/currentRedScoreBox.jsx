import React from "react";

const RedScoreBox=({score})=>{
    return(
        <div className="flexing-center col-direction red-box">
            <p>CURRENT</p>
            <h1>{score}</h1>
        </div>
    )
 }
export default RedScoreBox;