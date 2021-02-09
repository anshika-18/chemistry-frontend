import React from 'react'
import {chapters11} from './data.js'
import './css/chapter.css'
export default function Chapter11 (props)
{    
        console.log("hel")
        return(
            <div class="outer">
                <div><h1>UNIT- {props.match.params.id}</h1></div>
                
            <div><h1>{props.match.params.name}</h1></div>
            <div className="grid-box">
                
                {chapters11[props.match.params.id].link11.map(l=>{
                    return(
                        <div>
                        <h3>{l.topic}</h3>
                    <iframe title={l.link1} width="500" height="300" src={l.link1} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   </div>
                    )
                })} 
                <div className="hk-experiment">hi anshu</div>
            </div>
            </div>
        )
}