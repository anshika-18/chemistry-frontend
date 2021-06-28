import Sidebar2 from './sidebar2'
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

class Class12 extends Component
{
    render()
    {
        return(
            <div>
                <SrollToTopMount></SrollToTopMount>
                <Sidebar2 />
            </div>
        )
    }
}
export default Class12;