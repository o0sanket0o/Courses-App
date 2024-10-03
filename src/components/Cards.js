import React from 'react'
import { Card } from './Card'
import { useState } from 'react';

export const Cards = (props) => {
    // console.log("Cards component got this as parameter", props.courses.data);
    let arrofData = [];
    let allCourses = props.courses.data;
    let currFilter = props.currFilter;
    // console.log("Curr filter in cards is",currFilter);
      // Iterate over the values of allCourses
      if(currFilter === 'All'){
        Object.entries(allCourses).forEach(([key, value]) => {
          value.forEach((curr) => {
            arrofData.push(curr);
          })
        })
      }else{
        Object.entries(allCourses).forEach(([key, value]) => {
          if(key == currFilter){
            value.forEach((curr) => {
              arrofData.push(curr);
            })
          }
        })
      }
      // console.log("Array of data becomes", arrofData);
  return (
    <div>
        <div className='w-[100vw] min-h-[100vh]'>
            <Card cards={arrofData}></Card>
        </div>
    </div>
  )
}
