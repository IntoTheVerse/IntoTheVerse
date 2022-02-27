// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoadingScreen from './pages/LoadingScreen/LoadingScreen';
import Landing from './pages/Landing/Landing'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Switch>
        <Route exact path="/" component={LoadingScreen}></Route>
        <Route exact path="/home" component={Landing}></Route>
      </Switch>
    </Router>
  );
}

export default App;
