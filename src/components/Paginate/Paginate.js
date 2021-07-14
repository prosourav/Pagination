import { Button } from 'bootstrap';
import React, {useState} from 'react';
import { useEffect } from 'react';

const Paginate = ({showPerpage,onPaginationChange,total}) => {
   const [counter, setCounter] = useState(1);
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
         if(counter===Math.ceil(total / showPerpage)){
            setCounter(counter);
         }else{
            setCounter(counter + 1);
         }
      }
   }
   return (
      <div className='d-flex justify-content-between'>
     
     <button className='btn btn-primary' onClick={()=>onButtonClick('prev')}>Previous</button>
     <button className='btn btn-primary' onClick={()=>onButtonClick('next')}>Next</button>

      </div>
   );
};

export default Paginate;