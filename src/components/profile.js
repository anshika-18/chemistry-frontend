import React,{Component} from 'react';
import {Line,Doughnut} from 'react-chartjs-2';
import './css/profile.css'

export default class Profile extends Component {
    state = {
        labels: [],
        datasets: [
          {
            label: 'Score',
            fill: true,
            backgroundColor:['rgba(75,192,192,1)',	'rgb(0, 255, 128)','rgb(191, 0, 255)','rgb(255, 0, 255)','rgb(161, 195, 227)','rgb(191, 255, 0)','aqua','lawngreen'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: []
          }
        ]
  }
      
      componentDidMount()
      {
        if(this.props.passed.marks)
        {
          let arr=[]
          let y=[]
          let x=this.props.passed.marks
          //console.log(x.length)
          for(let i=0;i<x.length;i++)
          {
            arr.push("quiz " +x[i].quizNumber)
            y.push(x[i].score)
          }
          //this.setState({labels:arr})
          this.state.datasets[0].data=y
          this.setState({labels:arr,datasets:this.state.datasets},()=>{
            
          })
          console.log(this.state.datasets)
        }
        
      }

      componentDidUpdate(prevProps)
      {
        if(this.props.passed.marks!==prevProps.passed.marks)
        {
          let arr=[]
          let y=[]
          let x=this.props.passed.marks
          //console.log(x.length)
          for(let i=0;i<x.length;i++)
          {
            arr.push("quiz " +x[i].quizNumber)
            y.push(x[i].score)
          }
          //this.setState({labels:arr})
          this.state.datasets[0].data=y
          this.setState({labels:arr,datasets:this.state.datasets},()=>{
            
          })
          console.log(this.state.datasets)
        }
        
       // console.log(this.props)
      }
    
    
  render() {
    console.log(this.state)
    return (
      <div >
        {this.props.passed.isAuthenticated
        ?
        <div>
          <div>
            <div className="profile-header">
              <div className="profile-logo">{this.props.passed.name.substring(0,1)}</div>
              <div className="profile-name">{this.props.passed.name}</div>
            </div>
              <div className="profile-main-outer">
                <div style={{width:"30vw"}}>
                <Doughnut data={this.state} />
                </div>
                <div className="profile-main">
                  <span className="profile-heading">Name:</span ><span className="profile-value">{this.props.passed.name}</span>
                  <span className="profile-heading">Email:</span ><span className="profile-value">{this.props.passed.email}</span>
                  <span className="profile-heading">Date Of Birth:</span ><span className="profile-value">____________</span>
                </div>
              </div>
          </div>
          <div style={{fontSize:"40px", fontWeight:"600",fontFamily:"fantasy",letterSpacing:"2px"}}>Your Progress</div>
        <div className="graph">
          <Line
          data={this.state}
          options={{
            scales:{
              y:
                {
                    beginAtZero:true,
                    min:0
                }
            }
          }}
        />
        </div>
        <div>
    </div>
        </div>
        :
        <div>Loading</div>
        }
      </div>
    );
  }
}