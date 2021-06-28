import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/quiz.css'
import {quizData} from './quiz-data'

export default class quiz extends Component {

    render() {
        return (
            <div>
                Welcome to Our Quiz Section..!!
                {this.props.passed.isAuthenticated
                ?
                <div>
                <div className="outer-chapters">
                {quizData.map(x=>{
                    return(
                        <div className="inner-chapters"><Link to={{pathname:'/quiz/'+x.id}} className="chapter">{x.name}</Link></div>
                    )
                })}
                </div>
                <div><b>**Important -- If you try multiple Attempts for same quiz, Score at first attempt will be recorded**</b></div>
                </div>
                :
                <div>Please Login to Attempt Quiz</div> 
                }
                
            </div>
        )
    }
}
