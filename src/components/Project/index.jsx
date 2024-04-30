import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimeLine from "../Timeline";
import './index.css'

function Project() {
  return (
    <div className="project-class">
      <div className="input-title">
        <label htmlFor="title">Loyiha nomi</label>
        <input type="text" id="title" placeholder="Loyiha nomi" />
      </div>
      <div className="input-group">
        <div className="time-input">
          <label htmlFor="time">
            <input type="checkbox" />
            <span>Boshlanish vaqti</span>
          </label>
          <div className="time-div-class">
            <input type="text" id="time" placeholder="Boshlanish vaqti" />
            <AccessTimeIcon />
          </div>
        </div>
        <div className="select-time">
          <label htmlFor="select">
            <input type="checkbox" />
            <span>Boshlanish vaqti</span>
          </label>
          <select name="select" id="select">
            <option disabled selected value="">
              O'sha zahoti
            </option>
          </select>
        </div>
      </div>
      <TimeLine />
    </div>
  );
}

export default Project;
