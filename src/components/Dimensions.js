import { useEffect, useState } from 'react';

function Dimensions(props){
    console.log("We passed",props);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
  // useEffect(() => {
  //   const handleResize = () => {
  //     const newHeight = window.innerHeight;
  //     if ((newHeight < 400 && newHeight !== height) || (newHeight > 600 && newHeight !== height) ) {
  //       setHeight(newHeight);
  //       setWidth(window.innerWidth);
  //     }
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [height]);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  })
  return (
    <div className='w-full'>
      <div id='data' className='flex flex-col p-6 gap-6 w-full'>
        <h1 className='text-4xl'>Height and width generator:</h1>
        <div id="content" className='w-1/2 flex flex-col gap-4'>
          <div className="height flex items-center gap-5 justify-end">
            <p>Width:</p>
            <p className='bg-slate-300 p-3 rounded w-16'>{width}</p>
          </div>
          <div className="width flex items-center gap-5 justify-end">
            <p>Height:</p>
            <p className='bg-slate-300 p-3 rounded w-16'>{height}</p>
          </div>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Dimensions;