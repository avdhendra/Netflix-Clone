import React, { Component, useState, useEffect } from "react";
import axios from "../axios";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  //A snippet of code which runs based on a specific condition
  async function fetchData() {
    const request = await axios.get(fetchUrl);
    console.log(request);
   
    return request;
  }
  useEffect(() => {
   
    fetchData();
  }, [fetchUrl]); //[] run once when the row loads and dont run again
  //[movies] it run evertime when the movies is changing
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};
export default Row;
//when we export as default we can called it what ever we want but if
//default export is used once in the file and we need to destructing the component if we export it without default
