import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Homepage from './page/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const searchParams = {
  category: 'paintings',
  page: 1,
  page_size: 1,
};

function App() {
  const [vaData, setVaData] = useState(null);
  const [moreData, setMoreData] = useState(null);
  const [category, setCategory] = useState('paintings');
  const [classification, setClassification] = useState('paintings');
  const [categoryChangeCounter, setCategoryChangeCounter] = useState(0);
  let randomNumberLimit;

  function getRandomCategory() {
    const categories = ['paintings', 'sculpture', 'metalwork', 'furniture', 'glass', 'ceramics', 'textiles', 'fashion', 'jewellery', 'photography', 'prints', 'drawings', 'books', 'architecture', 'musical instruments', 'neal,gareth' ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  function handleCategoryChange(category) {
    if (category === 'random') {
      category = getRandomCategory();
    }
    setCategory(category);
    category === 'neal,gareth' ? setClassification('furniture') : setClassification(category);
    setCategoryChangeCounter(prevCounter => prevCounter + 1);
    // console.log('category', category)
  }
  
  function randomNumber(randomNumberLimit) {
    return (Math.floor(Math.random() * randomNumberLimit) + 1);
  }

  searchParams.category = category;
  category === 'neal,gareth' ? randomNumberLimit = 2 : randomNumberLimit = 1000;
  // console.log('random number limit', randomNumberLimit)
  searchParams.page = randomNumber(randomNumberLimit);
  // console.log('page:', searchParams.page, ' category:', searchParams.category)

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

  function fetchIIIFData(record) {
    const iiifPresentationUrl = record._images._iiif_presentation_url;

    return axios.get(iiifPresentationUrl)
      .then(response => {
        // Process the IIIF data here
        const iiifData = response.data;
        // console.log(iiifData);
        // You can do further processing with the IIIF data as needed
        return iiifData;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  useEffect(() => {
    setMoreData(null);
    fetchData(searchParams)
      .then(data => {
        

        if (data.records[0]._images._iiif_presentation_url) {
        // Fetch IIIF data for each record
        const promises = data.records.map(record => fetchIIIFData(record));
        Promise.all(promises)
          .then(iiifDataArray => {
            // You can now access the fetched IIIF data here
            // console.log('extra data', iiifDataArray[0]);
            // Further processing with the fetched IIIF data
            setMoreData(iiifDataArray);
          })
          .catch(error => {
            console.log('Error fetching IIIF data:', error);
          });
        }
        setVaData(data.records);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
    // eslint-disable-next-line
  }, [searchParams, categoryChangeCounter]);

  return (
    <>
      <div className="App">
      <div className="main-body">
      <div className="nav-container"> 
        <Navbar handleCategoryChange={handleCategoryChange} />
      </div>
      <Homepage vaData={vaData} moreData={moreData} category={category} classification={classification} />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
