import React,{Component} from 'react'
import './App.css';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Class11 from './components/class11'
import Chapter11 from './components/chapter11'
import Syllabus from './components/syllabus'
import Periodic from './components/periodic-table'
import Class12 from './components/class12'
import Chapter12 from './components/chapter12'
import Syllabus12 from './components/syllabus12'
import Contact from './components/contact'
import Blog from './components/blog'
import Login from './components/login'
import Register from './components/register'
import Quiz from './components/quiz'
import QuizLayout from './components/QuizLayout'
import Footer from './components/footer'
import Profile from './components/profile'

class App extends Component {
  
  state={
    isAuthenticated:false,
    name:'',
    email:'',
    marks:null
  }

  callback=()=>{
    const config={
      headers:{
        'x-auth-token':localStorage.getItem('token')
      }
    }
  
    axios.get('http://localhost:5000/api/auth/getUser',config)
         .then(user=>{
            console.log(user)
            
            this.setState({isAuthenticated:true,email:user.data.email,name:user.data.name})
            const confi={
              headers:{
                "email":user.data.email
              }
             }

            axios.get('http://localhost:5000/api/result/getscore',confi)
                .then((user)=>{
                    console.log(user.data.marks)
                    this.setState({marks:user.data.marks})
                })
                .catch(err=>console.log(err.response.data))

        })
        .catch(err=>{
          console.log(err)
        })
  }

  setName=(name)=>{
      this.setState({name:name})
  }

  setEmail=(email)=>{
    this.setState({email:email})
  }

  setAuthenticated=(value)=>{
    this.setState({isAuthenticated:value})
  }

  setMarks=(value)=>{
    this.setState({marks:value})
  }

  componentDidMount()
  {
    const config={
      headers:{
        'x-auth-token':localStorage.getItem('token')
      }
    }
  
    axios.get('http://localhost:5000/api/auth/getUser',config)
         .then(user=>{
            console.log(user)
            
            this.setState({isAuthenticated:true,email:user.data.email,name:user.data.name})
            const confi={
              headers:{
                "email":user.data.email
              }
             }

            axios.get('http://localhost:5000/api/result/getscore',confi)
                .then((user)=>{
                    console.log(user.data.marks)
                    this.setState({marks:user.data.marks})
                })
                .catch(err=>console.log(err.response.data))

        })
        .catch(err=>{
          console.log(err)
        })
  }

  render()
  {
    //console.log(this.state)
    return (

      <div className="App">
        
        <BrowserRouter>
        <Navbar   passed={this.state} setName={this.setName} setEmail={this.setEmail} setMarks={this.setMarks} setAuthenticated={this.setAuthenticated}/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/class11" exact component={Class11}></Route>
          <Route path="/class11/:name/:id" component={Chapter11}></Route>
          <Route path="/class12" exact component={Class12}></Route>
          <Route path="/class12/:name/:id" component={Chapter12}></Route>
          <Route path="/syllabus11" component={Syllabus}></Route>
          <Route path="/syllabus12" component={Syllabus12}></Route>
          <Route path="/periodic-table" component={Periodic}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/login" render={(props)=><Login {...props} callback={this.callback} setName={this.setName} setEmail={this.setEmail} setAuthenticated={this.setAuthenticated}></Login>}></Route>
          <Route path="/register" render={(props)=><Register {...props} setName={this.setName} setEmail={this.setEmail} setAuthenticated={this.setAuthenticated} ></Register>}></Route>
          <Route path="/quiz" exact render={(props)=><Quiz {...props} passed={this.state}></Quiz>}></Route>
          <Route path="/quiz/:id" render={(props)=><QuizLayout {...props} passed={this.state}></QuizLayout>}></Route>
          <Route path="/profile" render={(props)=><Profile {...props} passed={this.state}></Profile>}></Route>
          
        </Switch>
        <Footer />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
