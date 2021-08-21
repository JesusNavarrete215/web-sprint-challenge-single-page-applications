import React, { useState } from "react";

const initialFormValues = {
  size: "",
  sauce: "",
  topping1: "",
  topping2: "",
  special: "",
};

export default function Form() {
  const [formValues, setFormValues] = useState(initialFormValues);
  return (
    <div>
      <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" />
      <div>
        <label>
          Choose Size
          <select>
            <option>12"</option>
            <option>14"</option>
            <option>16"</option>
          </select>
        </label>

        <label>
          Choose Sauce
          <select>
            <option value="Marinara">Marinara</option>
            <option value="Alfredo">Alfredo</option>
            <option value="Honey BBQ">Honey BBQ</option>
          </select>
        </label>

        <label>
          Choose Topping
          <select>
            <option value="Beef">Beef</option>
            <option value="Beef">Pepperoni</option>
            <option value="Beef">Bacon</option>
          </select>
        </label>

        <label>
          Choose Topping
          <select>
            <option value="Pineapple">Pineapple</option>
            <option value="Hot Buffalo">Hot Buffalo</option>
            <option value="Jalapeno">Jalapeno</option>
          </select>
        </label>

        <label>
          Special
          <input name="special" value={formValues.special} type="text" />
        </label>

        <button>Create My Pizza!</button>
      </div>
    </div>
  );
}
