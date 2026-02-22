import {useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; // For fetching with graphql

// page and layout imports
import About from "./pages/About";
import Buy from "./pages/Buy";
import CarPage from "./pages/CarPage";
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import Footer from "./components/Footer";
import Offer from "./pages/Offer";
import Sold from "./pages/Sold";
import ScrollPagesTop from "./hooks/scrollPagesTop";
import SiteHeader from "./components/SiteHeader";
import Thanks from "./pages/Thanks";
import Wallpaper from "./components/Wallpaper";

// hooks
import useFetchAll from './hooks/useFetchAll';
import mergeSort from './hooks/mergeSort';

// Styling
import './tailwind.css';

// Graphql
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});


// Fetch all cars using Strapi pagination
const apiBaseURL: string = 'https://kokpit.alfamotors.pl/api/cars?sort=date&populate=*';

// Pages with sold cars counter
let chunksQuantity = 0;

// TypeScript
interface CarAttributes {
  state: string;
  title: string;
  mileage: number;
  year: number;
  fuel: string;
  power: number;
  gallery: GalleryItem;
}

interface GalleryItem {
  data: {
      attributes: {
          formats: {
              large: {
                  url: string;
              };
              medium: {
                  url: string;
              };
              small: {
                  url: string;
              };
              thumbnail: {
                  url: string;
              };
          };
      };
      id: number;
  }[];
}

interface CarData {
  id: string;
  attributes: CarAttributes;
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Correct initialization with useState

  const fetchedObject = useFetchAll(apiBaseURL, { pageSize: 100 });

  // React useEffect hook to reactively manage isLoading based on fetched data
  useEffect(() => {
    // Update isLoading based on loading states of fetched objects
    if (fetchedObject.loading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    // Also consider updating isLoading based on error states if necessary
  }, [fetchedObject.loading, fetchedObject.error]);
  
  if (fetchedObject.error) return;
    
  // Using merge sort for setting cars in the order basing on "owners_number" attribute. It's treated as "kolejność" atttribute in the user's panel
  const sortedCars = mergeSort(fetchedObject.data);

  // Extracting offered cars
  const filteredCarsOffered = sortedCars.filter((car: CarData[]) => car[1].attributes.state !== 'sold');
  
  // Extracting sold cars 
  const filteredCarsSold = sortedCars.filter((car: CarData[]) => car[1].attributes.state === 'sold');
  
  // Splitting Sold cars into smaller arrays each containing up to 48 elements
  function splitIntoChunks(array: []) {
    const result= []
    chunksQuantity = 0;

    for (let i = 0; i < array.length; i += 48) {
      const chunk = array.slice(i, i + 48);
      result.push(chunk);
      chunksQuantity++;
    }

    return result;
  }
  const arrayOfArraysWithSoldCars = splitIntoChunks(filteredCarsSold);

  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App min-h-screen relative">
          <ScrollPagesTop />
          <SiteHeader />
          <Wallpaper />
          <Routes>
            <Route path='/about' element={<About />} /> 
            <Route path='/buy' element={<Buy />} /> 
            <Route path='/carpage/:id' element={<CarPage />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/financing' element={<Financing />} /> 
            <Route path='/' element={<Offer arrayToDisplay={filteredCarsOffered} isLoading={isLoading} />} />

            {arrayOfArraysWithSoldCars.map((array: CarData[][], index: number) => {
              return <Route path={`/sold/${index + 1}`} element={<Sold arrayToDisplay={array} isLoading={isLoading} pagesQuantity={chunksQuantity} />} />
            })}

            <Route path='/thanks' element={<Thanks />} /> 
          </Routes>
          <Footer />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
