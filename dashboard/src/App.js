import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
// import SignIn from './Components/SignIn/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddCar from './Components/AddCar/AddCar';
import EditCar from './Components/EditCar/EditCar';

function App(props) { 
  const [carList, setCarList] = useState([]);
  return (
    <div className="App">
      {/* <Route path="/" exact>
        <h1 className="welcome">Welcome, Please Sign In</h1>
        <SignIn /> 
      </Route> */}
      <Route exact path="/"component={Dashboard} carList={carList} setCarList={setCarList} />
      <Route path="/add">
        <AddCar carList={carList} setCarList={setCarList} />
      </Route>
      <PrivateRoute path="/edit/:id" component={EditCar} carList={carList} setCarList={setCarList} />
    </div>
  );
}

export default App;
