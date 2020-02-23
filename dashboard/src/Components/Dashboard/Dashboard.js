import React, {useState, useEffect} from 'react'
import './Dashboard.scss';
import {server} from '../../axios';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import AddCar from '../AddCar/AddCar';

function Dashboard(props) {
  const [cars, setCars] = useState([]);
  const history = useHistory();
  const {carList, setCarList} = props;
    useEffect(() => {
      server.get('/cars')
        .then((res) => { 
          setCars(res.data)
          setCarList(res.data)
        })  
        .catch((err) => console.log(err));
    }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/add" >Add Car</Link>
      <button onClick={() => {localStorage.clear(); history.push('/');}}>Sign Out</button>
      <div className="information">
        <p>Number of Cars in Inventory: {cars.length}</p>
        <p>MSRP Of Inventory: ${cars.reduce((accumulator, item) => {
          return accumulator + Number(item.price)
        }, 0).toLocaleString("USD")}</p>
      </div>
      <div className="curentInventory">
        {cars.map(car => {
          return <p key={car._id} >{car.year}, {car.make}, {car.model}, {car.miles}, {car.color}, {car.vin} 
          <button>Delete</button> <button>Edit</button> </p>
        })}
      </div>
    </div>
  )
}

export default Dashboard;