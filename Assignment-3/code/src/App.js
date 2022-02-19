import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow = "<";
var rightArrow = ">";

var appointments = {
  name: "Allen Ford",
  employeeid: 1234567890,
  appointmenton: new Date().toLocaleDateString(),
  email: "person@example.com",
  phone: 9087654321,
  orderInfo: {
    status: "In Progress",
    Door: "Mark",
    Time: new Date().toLocaleTimeString()
  },
  Person: {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    title: "This is title text",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
};
function App() {
  return (
    <div className="site-container">
      <div className="order-details">
        <div className='nav'>
          <div className='nav-Container'>
            <a className='nav-arrow arrow' href="#" >{arrow}</a>
            <h1 className='nav-title'>
              {
                appointments.name
              }
            </h1>
            <span className='nav-text'>{appointments.employeeid}</span>
            <buttton className='btn nav-btn'>Print</buttton>
          </div>
        </div>
      </div>
      <div className='Container'>
        <div className='customer-info block'>
          <p className='text'>
            <span>Appointment on</span>
            {
              appointments.appointmenton
            }
          </p>
          <p className='text'>
            <span>Email</span>
            {
              appointments.email
            }
          </p>
          <p className='text'>
            <span>Phone</span>
            {
              appointments.phone
            }
          </p>
        </div>
      </div>
      <div className='order-info grid block'>
        <div className='unit one-third'>
          <p className='text text-label'>Status</p>
          <p className='text order-status'>{appointments.orderInfo.status}</p>
        </div>
        <div className='unit one-third'>
          <p className='text text-label'>Door</p>
          <p className='text order-status'>{appointments.orderInfo.Door}</p>
        </div>
        <div className='unit one-third'>
          <p className='text text-label'>Time</p>
          <p className='text order-status'>{appointments.orderInfo.Time}</p>
        </div>
      </div>
      <ul className='product-list block'>
        <li className='product'>
          <label className='img custom-checkbox'>
            <input type='checkbox' className='product-input' value=''></input>
            <span className='custom-checkbox-indicator'></span>
            <img className='avatar' src={appointments.Person.avatar} width='100' height='100' />
          </label>
        </li>
        <li>
          <a href='#' className='product-desc'>
            <div className='product-info'>
              <h3 className='product-title text'>{appointments.Person.title}</h3>
              <p className='text-help text'>
                {
                  appointments.Person.description
                }
              </p>
            </div>
          </a>
        </li>
        <li>
          <span className='product-arrow arrow'>{rightArrow}</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
