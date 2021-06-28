import Sidebar from './sidebar'
import React,{Component} from 'react'

class SrollToTopMount extends Component
{
    componentDidMount()
    {
        window.scrollTo(0,0)
    }
    render(){
        return null
    }
}

class Class11 extends Component
{
    render()
    {
        return(
            <div>
                <SrollToTopMount></SrollToTopMount>
                <Sidebar />
            </div>
        )
    }
}
export default Class11;