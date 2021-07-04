import React, { useEffect, useState } from "react";
import "./temp1.css";
export const Temp1 = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  const [country, setCountry] = useState(null);
  const [name1, setName1] = useState("");
  useEffect(() => {
    const gettemp = async function () {
      if (search) {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c30bdedeeb747d8a16adecb6c7f575b1`
        );
        const res2 = await res.json();
        // console.log(res2);
        if (res2.cod == "404") setCity(null);
        else setCity(res2);
      }
    };
    gettemp();

    if (city) {
      const getcountry = async function () {
        const res = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${city.sys.country}`
        );
        const res2 = await res.json();
        setCountry(res2);
      };
      getcountry();
    }
  }, [search]);

  console.log(country);
  return (
    <div>
      <h1>Weather App</h1>

      <div className="container">
        <input
          type="search"
          className="inp"
          value={search}
          placeholder="Type a city name"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {!city ? (
          <p>No Data</p>
        ) : (
          <>
            <div className="box cityName">
              {search.toUpperCase()}, {country.name}
            </div>
            <div className="box currtemp">
              {" "}
              Actual :{city.main.temp.toFixed(0)}°C
            </div>
            <div className="box realfeel">
              Feels Like :{city.main.feels_like.toFixed(0)}°C
            </div>
          </>
        )}
      </div>
    </div>
  );
};
