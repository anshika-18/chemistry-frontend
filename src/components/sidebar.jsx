import React from 'react'
import './css/chapters-home.css'
import { chapters11 } from './data'
import { Link } from 'react-router-dom'

export default function Sidebar(){
    console.log("helooooo")
        return (
            
            <div className="menu-bars">
                <div className="outer-chapters">
                {chapters11.map(chap=>{
                    return(
                        <div className="inner-chapters"><Link to={{pathname:"/class11/"+chap.name+"/"+chap.id,state:{linkclass12:chap.link11 }}} className="chapter">{chap.name}</Link></div>
                       )
                })}
            </div>
        </div>
        )
}