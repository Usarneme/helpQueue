import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Signin from './pages/Signin'
import Kanban from './pages/Kanban'

// Components
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login'>
            <Signin />
          </Route>
          <Route path='/tickets'>
            <Kanban />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
