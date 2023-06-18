import React, { useState } from "react";
import "../styles/record-form.css";

const RecordForm = () => {
  const [bandName, setBandName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [onTour, setOnTour] = useState(false);

  const HandleInputChange = (event) => {
    setBandName(event.target.value);
  };

  return (
    <form className="record-form">
      <div className="record-form__title">Add New Record Form</div>
      <label>
        Band name:
        <input
          type="text"
          value={bandName}
          onChange={HandleInputChange}
          name="bandName"
          placeholder="Enter band name"
        />
      </label>

      <label>
        Album name:
        <input type="text" value={albumName} placeholder="Enter album name" />
      </label>

      <label>
        Genre:
        <select value={genre}>
          <option>Alternative Rock</option>
          <option>Stoner Rock</option>
          <option>Indie Rock</option>
        </select>
      </label>

      <label>
        Description:
        <textarea type="text" value={description} />
      </label>

      <label>
        Are they on tour?
        <input type="checkbox" value={onTour} />
      </label>

      <button className="record-form__submit" type="submit">
        Submit record
      </button>
    </form>
  );
};

export default RecordForm;
