import React, { useState } from "react";

export default function Form(props) {

    const [form, setForm] = useState({
        size: '',
        sauce: '',
        topping1: '',
        topping2: '',
        special: ''
    })

  return (
 <div>
     <img 
     src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg'/>
     <div>
         <select>
             <option>12"</option>
             <option>14"</option>
             <option>16"</option>
         </select>
         <button onChange={}>Create My Pizza!</button>
     </div>
 </div>
  );
}
