import React, { useState } from "react";

export default function Form() {
  return (
    <div>
      <h2>Build Your Own Pizza</h2>
      <div>
        <h2>Choice of Size</h2>
        <h3>Required/.</h3>
      </div>
      <div>
        <select>
          <option value="">Select</option>
          <option value="twelve">12"</option>
          <option value="fourteen">14"</option>
          <option value="sixteen">16"</option>
        </select>
      </div>
      <div>
        <h3>Choice of Sauce</h3>
        <h4>Required.</h4>
        <label>
          Original Read
          <input type="checkbox" name="original red" />
        </label>
        <label>
          Garlic Ranch
          <input type="checkbox" name="garlic Ranch" />
        </label>
        <label>
          BBQ Sauce
          <input type="checkbox" name="bbq sauce" />
        </label>
        <label>
          Spinach Alfredo
          <input type="checkbox" name="spinach alfredo" />
        </label>
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
