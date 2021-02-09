import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
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
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
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
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

