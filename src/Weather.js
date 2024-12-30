import React from "react";
import Weatherimg from './images/weatherBg.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faWater } from "@fortawesome/free-solid-svg-icons";

function Weather(props) {
  return (
    <div>
      
      <div className="w-full h-screen relative">
        <img src={Weatherimg} className="h-full w-full object-cover" alt="Weather Background" />
        <div className="w-full h-screen bg-black bg-opacity-30 absolute top-0"></div>

   
        <div className="w-[90%] md:w-[60%] lg:w-[50%] bg-black bg-opacity-70 rounded-xl absolute top-20 left-1/2 transform -translate-x-1/2 p-6">
         
          <div className="flex justify-center mb-6">
            <input
              id="myinp"
              type="search"
              placeholder="Enter Your City"
              className="w-[80%] md:w-[70%] p-3 rounded-lg shadow-lg text-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              className="bg-blue-700 rounded-lg text-white p-2 mx-2 w-36"
              onClick={() => {
                let inpValue = document.getElementById("myinp").value;
                props.inpValue(inpValue);
              }}
            >
              Search
            </button>
          </div>

     
          {props.data.message === "city not found" ? (
            <div className="text-red-500 text-xl text-center">
              City not found. Please try again.
            </div>
          ) : (
            <>
             
              <div className="flex flex-col items-center ">
               <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} className="animate-pulse" alt="weatherImag"></img>
               <p className="text-lg md:text-xl text-yellow-300 font-bold">{props.data.weather[0].description}</p>
                <p className="text-6xl md:text-7xl text-white font-bold">
                  {Math.floor(props.data.main.temp)}°C
                </p>
                <p className="text-xl md:text-2xl text-gray-300 mt-2">{props.data.name}</p>
              </div>

              <div className="flex justify-between mt-8 text-white">
            
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faWater} className="fa-3x  text-blue-400" />
                  <div>
                    <p className="text-md font-bold md:text-2xl">{props.data.main.humidity}%</p>
                    <p className="text-sm md:text-lg text-gray-300">Humidity</p>
                  </div>
                </div>

            
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faWind} className="fa-3x text-green-400" />
                  <div>
                    <p className="text-sm font-bold md:text-2xl">{props.data.wind.speed} km/hr</p>
                    <p className="text-sm md:text-lg text-gray-300">Wind Speed</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
