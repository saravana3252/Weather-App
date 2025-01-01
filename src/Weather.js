import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faWater } from "@fortawesome/free-solid-svg-icons";
import bgImg from "./images/weatherBg.jpg"

function Weather(props) {

  const isMobile=window.screen.width >= 1250;

  return (
    <div
    className={`w-full h-screen relative ${
      isMobile ?  "bg-[rgb(27,7,9)]":"bg-cover bg-center"
    }`}
    style={isMobile ? {} : { backgroundImage: `url(${bgImg})` }}
  >
      <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-black bg-opacity-80 rounded-xl absolute top-20 left-1/2 transform -translate-x-1/2 p-6">
    
        <div className="flex items-center justify-center mb-6 space-x-4">
          <input
            id="myinp"
            type="search"
            placeholder="Enter Your City"
            className="w-[70%] p-3 rounded-lg shadow-lg text-lg outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            className="bg-blue-700 rounded-lg text-white p-3"
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
            {/* Main Weather Display */}
            <div className="flex flex-col items-center text-center">
              <img
                src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                className="animate-pulse w-20 h-20 md:w-32 md:h-32"
                alt="weatherImag"
              />
              <p className="text-lg md:text-xl text-yellow-300 font-bold capitalize">
                {props.data.weather[0].description}
              </p>
              <p className="text-6xl md:text-7xl text-white font-bold">
                {Math.floor(props.data.main.temp)}°C
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mt-2">
                {props.data.name}
              </p>
            </div>

       
            <div className="flex flex-col md:flex-row justify-around mt-8 text-white space-y-4 md:space-y-0">
         
              <div className="flex justify-between w-full md:w-[70%] mx-auto space-x-4">
         
                <div className="flex items-center space-x-2 lg:space-x-4">
                  <FontAwesomeIcon icon={faWater} className="fa-2x lg:fa-3x text-blue-400" />
                  <div>
                    <p className="text-md font-bold md:text-2xl">
                      {props.data.main.humidity}%
                    </p>
                    <p className="text-sm md:text-lg text-gray-300">Humidity</p>
                  </div>
                </div>

             
                <div className="flex items-center space-x-2 lg:space-x-4">
                  <FontAwesomeIcon icon={faWind} className="fa-2x lg:fa-3x text-green-400" />
                  <div>
                    <p className="text-md font-bold md:text-2xl">
                      {props.data.wind.speed} km/hr
                    </p>
                    <p className="text-sm md:text-lg text-gray-300">Wind Speed</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather;
