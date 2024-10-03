import React from 'react'
import { useState } from 'react';
export const Filter = (props) => {
  // let setFilter = props.setFilter;
  // let currFilter = props.currFilter;
  // setFilter(currFilter);
  const filterData = props.filterData;
  function call(event){
    props.filterHandler(event.target.innerText)
  }
  return (
    <div className='flex gap-4 my-4 text-white items-center justify-center'>
        {filterData?.map(function(currFilter){
            return (
                <button onClick={call} className='bg-bgDark px-4 py-2 hover:bg-opacity-50 rounded border-white border-2' 
                key={currFilter.id}>{currFilter.title}</button>
            )
        })}
    </div>
  )
}
