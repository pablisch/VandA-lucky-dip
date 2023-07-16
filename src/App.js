import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import Artifact from './components/Artifact';
// import Navbar from './components/Navbar';
import Homepage from './page/Homepage';

const searchParams = {
  category: 'paintings',
  page: 1,
  page_size: 5,
};

function App() {
  const [vaData, setvaData] = useState(null);
  const [category, setCategory] = useState('paintings');

  
  function randomNumber() {
    return Math.floor(Math.random() * 2000);
  }

  searchParams.page = randomNumber();
  searchParams.category = category;

  function fetchData(searchParams) {
    const apiUrl = `https://api.vam.ac.uk/v2/objects/search?q=${searchParams.category}&images=1&page=${searchParams.page}&page_size=${searchParams.page_size}`;

    return axios.get(apiUrl)
      .then(response => {
        // Process the API response here
        return response.data;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }


  randomNumber();
  console.log('random number', randomNumber());

  useEffect(() => {
    fetchData(searchParams)
      .then(data => {
        setvaData(data.records);
        // console.log(data.records)
        // console.log(vaData)
      });
    // eslint-disable-next-line
  }, [searchParams]);

  return (
    <div className="App">
      <Homepage vaData={vaData} />
    </div>
  );
}

export default App;
