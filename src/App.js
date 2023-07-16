import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import Artifact from './components/Artifact';
// import Navbar from './components/Navbar';
import Homepage from './page/Homepage';
import Navbar from './components/Navbar';

const searchParams = {
  category: 'paintings',
  page: 1,
  page_size: 5,
};

function App() {
  const [vaData, setvaData] = useState(null);
  const [category, setCategory] = useState('paintings');
  const [categoryChangeCounter, setCategoryChangeCounter] = useState(0);

  function getRandomCategory() {
    const categories = ['paintings', 'sculpture', 'metalwork', 'furniture', 'glass', 'ceramics', 'textiles', 'fashion', 'jewellery', 'photography', 'prints', 'drawings', 'books', 'architecture', 'musical instruments' ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  function handleCategoryChange(category) {
    if (category === 'random') {
      category = getRandomCategory();
    }
    setCategory(category);
    setCategoryChangeCounter(prevCounter => prevCounter + 1);
    console.log('category', category)
  }
  
  function randomNumber() {
    return Math.floor(Math.random() * 1000);
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
  }, [searchParams, categoryChangeCounter]);

  return (
    <div className="App">
      <Navbar handleCategoryChange={handleCategoryChange} />
      <Homepage vaData={vaData} />
    </div>
  );
}

export default App;
