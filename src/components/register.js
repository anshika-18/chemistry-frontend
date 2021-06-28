import React, { Component } from 'react'
import './css/login.css'
import axios from 'axios'

export default class register extends Component {
    
    validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
    
    state={
        name:"",
        email:"",
        password:""
    }

    handleChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:5000/api/auth/register',user)
            .then(user=>{
                console.log(user.data)

                localStorage.setItem('token',user.data.token)
                
                this.props.setAuthenticated(true);
                this.props.setName(user.data.user.name);
                this.props.setEmail(user.data.user.email);

                this.props.history.push('/')
            })
            .catch(err=>{
                console.log(err.response.data)
                window.alert(err.response.data.msg)
            })
        
    }

    render() {
       // console.log(this.state)
        return (
            <section className="section">
            <div className="box-a">
                <div className="form-a">
                    <h2>Register</h2>
                    <form>
                        <div className="inputbox-a">
                            <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handleChange(e)}  placeholder="name"></input>
                            <i class="fas fa-user"></i>

                        </div>
                        <div className="inputbox-a">
                            <input type="text" name="email" value={this.state.email} onChange={(e)=>this.handleChange(e)}  placeholder="email"></input>
                            <i class="fas fa-user"></i>

                        </div>
                        <div className="inputbox-a">
                            <input type="password" name="password" value={this.state.password} onChange={(e)=>this.handleChange(e)} placeholder="password"></input>
                            <i class="fas fa-lock"></i>

                        </div>
                        <div className="inputbox-a">
                            <input type="submit" value="Register" onClick={(e)=>this.onSubmit(e)}></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        )
    }
}
