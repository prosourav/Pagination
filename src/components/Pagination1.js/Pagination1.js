import { Button } from 'bootstrap';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

const Pagination1 = ({showPerpage,onPaginationChange,total}) => {
   const [counter, setCounter] = useState(1);
   
   const numberOfButtons = Math.ceil(total / showPerpage);


   useEffect(()=>{
      const value = showPerpage * counter;
      onPaginationChange(value-showPerpage, value);
   },[counter]);

   const onButtonClick = (type) =>{
      if(type==='prev'){
         if(counter === 1){
            setCounter(1);
         }else{
            setCounter(counter -1);
         }
      }else if(type==='next'){
         if(counter===numberOfButtons){
            setCounter(counter);
         }else{
            setCounter(counter + 1);
         }
      }
   }
   return (
      <div className='d-flex justify-content-center'>
      
      <Pagination>
 
  <Pagination.Prev onClick={()=>onButtonClick('prev') }/>

 
{
   new Array(numberOfButtons).fill("")
   .map((el,index)=>(<Pagination.Item className={`${index +1 === counter ? 'active ':false}`} onClick={()=>{setCounter(index + 1)}}>{index + 1}</Pagination.Item>))
}
  <Pagination.Next onClick={()=>onButtonClick('next') }/>
 
</Pagination>
     
    
      </div>
   );
};

export default Pagination1;