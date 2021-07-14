import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Account from './pages/Account'
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
          <Route path='/account'>
            <Account />
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
