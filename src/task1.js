import { React, useState } from 'react';


function Counter() {
   const [count, setCounter] = useState(0);

   const increment = () => {
      setCounter(prevcount => prevcount + 1);
   }
   const increment10 = () => {
      setCounter(prevcount => prevcount + 10);
   }

   const decrement = () => {
      setCounter(prevcount => prevcount - 1);
   }
   const decrement10 = () => {
      setCounter(prevcount => prevcount - 10);
   }
   return (
      <div>
         <h3>Задание 1</h3>
         <p className='voda'>Вода {count}</p>
         <button onClick={increment10}>+10</button>
         <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
         <button onClick={decrement10}>-10</button>
      </div>
   )
}

export default Counter;