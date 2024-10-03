import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Navbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { Cards } from './components/Cards';
import { Spinner } from './components/Spinner';
import {filterData, cardSrc} from './Data';
import { toast } from 'react-toastify';
//Toast container is added in index.js. We have to add this container.
import 'react-toastify/dist/ReactToastify.css';

  function App(){
    const [currFilter, setFilter] = useState("All");
    function filterHandler(passed){
      console.log("We came in this function.");
      setFilter(passed);
      console.log(currFilter);
    }
    const [body, setBody] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchData(){
      setLoading(true);
      try{
        let response = await fetch(cardSrc);
        let output = await response.json();
        // console.log("Output is",output);
        setBody(output);
      }catch(err){
        toast.error("Couldn't load data");
      }
      setLoading(false);
    }
    useEffect(() => {
      fetchData();
    }, [])
    
    return (
      <div className='flex flex-col items-center justify-center'>
          <div className='bg-bgDark py-4 text-white w-full flex justify-center items-center text-xl
          font-bold'>
            <Navbar></Navbar>
          </div>
          <div className='bg-bgDark2'>
            <div>
              <Filter filterData={filterData} filterHandler = {filterHandler}></Filter>
            </div>
            <div>
              {
                loading ? (<Spinner></Spinner> ) : (<Cards courses={body} currFilter={currFilter}></Cards>)
              }
            </div>
          </div>
      </div>
    );
  }


export default App;
