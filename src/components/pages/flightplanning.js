import React from 'react';
import Apitest from './apitest';
import './flightplanning.css';

function FlightPlanning() {
  return (
    <div className="container-fluid">
    <h1>Mass and balance</h1>

      {/* Here we will have a image of the mass and balance sheet */}
      <div class="container">
        <img id="mass" class="responsive" src="/mass.png" />
      </div>


    </div>

  );
}

export default FlightPlanning;