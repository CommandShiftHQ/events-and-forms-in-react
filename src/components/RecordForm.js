import React, { useState } from "react";
import "../styles/record-form.css";

const RecordForm = ({ addNewRecord }) => {
  const [formData, setFormData] = useState({
    bandName: "",
    albumName: "",
    genre: "Alternative Rock",
    description: "",
    onTour: false,
  });

  const HandleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewRecord(formData);
  };

  return (
    <form className="record-form" onSubmit={handleSubmit}>
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
          <option value="Alternative Rock">Alternative Rock</option>
          <option value="Stoner Rock">Stoner Rock</option>
          <option value="Indie Rock">Indie Rock</option>
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
