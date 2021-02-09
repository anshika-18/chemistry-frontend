import './css/Home.css'
import Corusal from './Corusal'
import Important from './important'
import Footer from './footer'
import Check from './check'
function Home(){
    return(
        <div className="main-home">
            <div className="title">Chemistry</div>
            <Check ></Check>
            <h1 className="a">Quick Links</h1>
            <div className="a"><Corusal className="corusal"/></div>
            <Important />
            <Footer />
        </div>
    )
}
export default Home;