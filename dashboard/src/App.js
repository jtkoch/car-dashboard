import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import SignIn from './Components/SignIn/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddCar from './Components/AddCar/AddCar';

function App() { 
  const [carList, setCarList] = useState([]);
  return (
    <div className="App">
      <Route path="/" exact>
        <SignIn />
      </Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard} carList={carList} setCarList={setCarList} /> 
      <PrivateRoute exact path="/add" component={AddCar} />     
    </div>
  );
}

export default App;
