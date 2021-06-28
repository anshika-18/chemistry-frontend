import React, { Component } from 'react'
import {quizData} from './quiz-data'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class QuizLayout extends Component {

    state={
        score:0,
        selectedValue:[]
    }

    handleChange=(e)=>{
        
        let temp=[...this.state.selectedValue]
        temp[e.target.name]=e.target.value
        this.setState({selectedValue:temp})
    }

    onSubmit=(e)=>{
        
        let len=quizData[this.props.match.params.id.substring(4)-1].questions.length
        var count=0;
        //console.log(this.state.score)
        for(var i=1;i<=len;i++)
        {
            if(this.state.selectedValue[i]===quizData[this.props.match.params.id.substring(4)-1].questions[i-1].answer)
            {
                count++;
            }
        }
        //console.log(count)
        this.setState({score:count},()=>{

            console.log(this.state.score)

            const obj={
                email:this.props.passed.email,
                quizNumber:this.props.match.params.id.substring(4),
                score:this.state.score
            }

            //console.log(this.props.passed.email)
            //console.log(this.props.match.params.id.substring(4))
            
            axios.post('https://chemistry-anshika-backend.herokuapp.com/api/result/marks',obj)
                .then(user=>{
                    console.log(user)
                    this.props.history.push('/quiz')
                })
                .catch(err=>{
                    console.log(err.response.data)
                })

            //window.alert("Your score is : "+this.state.score)

        })
    }

   

    render() {
        return (
            <div>
                {this.props.passed.isAuthenticated
                ?
                <div>
                {quizData[this.props.match.params.id.substring(4)-1].name}
                {quizData[this.props.match.params.id.substring(4)-1].questions.map((x)=>{
                    return(
                        <div className="container mt-sm-5 my-1">
                            <div className="question ml-sm-5 pl-sm-5 pt-2">
                                <div className="py-2 h5"><b>Q. {x.ques}</b></div>
                                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                    <label className="options">{x.option1}
                                    <input type="radio" value="1" name={x.no}  onChange={(e)=>this.handleChange(e)}></input>
                                    <span className="checkmark"></span> </label>
                                    <label className="options">{x.option2}
                                    <input type="radio" value="2" name={x.no} onChange={(e)=>this.handleChange(e)} ></input>
                                    <span className="checkmark"></span> </label>
                                    <label className="options">{x.option3}
                                    <input type="radio" value="3" name={x.no} onChange={(e)=>this.handleChange(e)}></input>
                                    <span className="checkmark"></span> </label>
                                    <label className="options">{x.option4}
                                    <input type="radio" value="4" name={x.no} onChange={(e)=>this.handleChange(e)}></input>
                                    <span className="checkmark"></span> </label>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <Button variant="info" style={{marginBottom:'2rem'}} onClick={(e)=>this.onSubmit(e)}>Submit</Button>
            </div>
                :
                <div>Please Login to Attempt Quiz</div>
                }
            </div>
        )
    }
}
