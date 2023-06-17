import React from "react";
import "../styles/record-form.css";

const RecordForm = () => {
  return (
    <form className="record-form">
      <div className="record-form__title">Add New Record Form</div>
      <label>
        Band name:
        <input type="text" placeholder="Enter band name" />
      </label>

      <label>
        Album name:
        <input type="text" placeholder="Enter album name" />
      </label>

      <label>
        Genre:
        <select>
          <option>Alternative Rock</option>
          <option>Stoner Rock</option>
          <option>Indie Rock</option>
        </select>
      </label>

      <label>
        Description:
        <textarea type="text" />
      </label>

      <label>
        Are they on tour?
        <input type="checkbox" />
      </label>

      <button className="record-form__submit" type="submit">
        Submit record
      </button>
    </form>
  );
};

export default RecordForm;
