import React, { useState } from "react";
import "../styles/record-form.css";

const RecordForm = () => {
  const [formData, setFormData] = useState({
    bandName: "",
    albumName: "",
    genre: "",
    description: "",
    onTour: false,
  });

  const HandleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  return (
    <form className="record-form">
      <div className="record-form__title">Add New Record Form</div>
      <label>
        Band name:
        <input
          type="text"
          value={formData.bandName}
          onChange={HandleInputChange}
          name="bandName"
          placeholder="Enter band name"
        />
      </label>

      <label>
        Album name:
        <input
          type="text"
          value={formData.albumName}
          onChange={HandleInputChange}
          name="albumName"
          placeholder="Enter album name"
        />
      </label>

      <label>
        Genre:
        <select
          value={formData.genre}
          onChange={HandleInputChange}
          name="genre"
        >
          <option>Alternative Rock</option>
          <option>Stoner Rock</option>
          <option>Indie Rock</option>
        </select>
      </label>

      <label>
        Description:
        <textarea
          type="text"
          value={formData.description}
          onChange={HandleInputChange}
          name="description"
        />
      </label>

      <label>
        Are they on tour?
        <input
          type="checkbox"
          value={formData.onTour}
          onChange={HandleInputChange}
          name="onTour"
        />
      </label>

      <button className="record-form__submit" type="submit">
        Submit record
      </button>
    </form>
  );
};

export default RecordForm;
