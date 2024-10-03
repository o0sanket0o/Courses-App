import React, { useState } from 'react'
import { FcLike } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";
export const Card = (props) => {
    const [likedArr, likedArrHandler] = useState([]);
    const cards = props.cards;
    function likeFunction(event, id){
        if(likedArr.includes(id)){
            let cpArr = [];
            // event.target.innerHTML = `<FcLike />`;
            for(let i = 0; i < likedArr.length; ++i){
                if(likedArr[i] !== id) cpArr.push(likedArr[i]);
            }
            likedArrHandler(cpArr);
            toast.info("Unliked the course");
        }else{
            let cpArray = [...likedArr, id];
            toast.success("Liked a course");
            likedArrHandler(cpArray);
        }
        console.log("Array becomes",likedArr);
    }
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
        {
            cards.map((card) => {
                // console.log(card);
                return (
                    <div key={card.id} className='w-[24rem] bg-bgDark bg-opacity-80 relative cursor-pointer rounded overflow-hidden text-white'>
                        <div className='relative'>
                            <img src={card.image.url} alt={card.imageurl} />
                                <button onClick={(e) => likeFunction(e, card.id)}
                                className="absolute right-3 bottom-2 text-2xl p-1 bg-white rounded-full"
                                aria-label={likedArr.includes(card.id) ? "Unlike" : "Like"} >
                                {likedArr.includes(card.id) ? <FcLike /> : <FcLikePlaceholder />}
                            </button>
                        </div>
                        {/* <div>{card.id}</div> */}
                        <div className='p-2 flex flex-col gap-2'>
                            <div className='font-bold'>{card.title}</div>
                            <div>{card.description}</div>
                            <div>{card.alt}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
