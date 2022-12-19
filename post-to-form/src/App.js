import React from 'react'
import Form from './Form'
import Table from './Table'
//import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <div>      
        <Router>
          <Routes>
            <Route exact path='/' element={<Form/>}/>
            <Route path = '/table' element={<Table/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
