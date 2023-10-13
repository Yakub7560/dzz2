import { React, useState } from 'react';

// function DarkMode() {


//       const [isChecked, setIsChecked] = useState(false);
//       const [textBackgroundColor, setTextBackgroundColor] = useState("white");

//       const handleChange = (event) => {
//          setIsChecked(event.target.checked);
//          setTextBackgroundColor(isChecked ? "white" : "red");
//       };

//       return (
//          <div>
//             <input
//                type="checkbox"
//                checked={isChecked}
//                onChange={handleChange}
//             />
//             <p style={{ backgroundColor: textBackgroundColor }}>This text will have a green background when the checkbox is checked.</p>
//          </div>
//       );
//    }





// function DarkMode() {

//    const [isChecked, setIsChecked] = useState(false);
//    const [textbackground, setBackGround] = useState("white");
//    const [textiscolor, setColor] = useState("black");

//    const handleChange = (event) => {
//       setIsChecked(event.target.checked);
//       setBackGround(isChecked ? "white" : "black");
//       setColor(isChecked ? "black" : "white");
//    }

//    return (
//       <div>
//          <input type='checkbox' checked={setIsChecked} onChange={handleChange} />
//          <p style={{ backgroundColor: textbackground, color: textiscolor}}>lorem ipsum</p>


//       </div>
//    )
// }



const DarkMode = () => {
   const [isChecked, setIsChecked] = useState(false);
   const [textBackground, setTextBackgroundColor] = useState("white");
   const [textColor, setTextColor] = useState("black");

   const handleChange = (event) => {
      setIsChecked(event.target.checked);
      setTextBackgroundColor(isChecked ? "white" : "black");
      setTextColor(isChecked ? "black" : "white");
   };

   return (
      <div className='darkmode__container'
         style={{ backgroundColor: textBackground, color: textColor }}>
         <h3>Render Props!</h3>
         <div>
            I was build with a two class components. A wrapper that handles state and state changing functions, and build a child that uses that functionality.
         </div>
         <input type="checkbox" checked={isChecked} onChange={handleChange} />
         <span>
            Dark Mode
         </span>
      </div>
   );
};

export default DarkMode;