import React, { useState } from "react";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./index.css";

function Navbar() {
  const [active, setActive] = useState(3);
  function handleClick(index) {
    setActive(index == active ? null : index);
  }

  return (
    <div className="nav-wrapper">
      <div className="logo_name">
        <InsertInvitationIcon />
        <h3>Loyiha nomi</h3>
      </div>
      <div className="nav-direction">
        <div
          onClick={() => handleClick(0)}
          className={`nav-item ${active == 0 ? "nav-item-active" : ""}`}
        >
          <img src="../../../menu.png" alt="menu" />
          <p>Asosiy</p>
        </div>
        <div
          onClick={() => handleClick(1)}
          className={`nav-item ${active == 1 ? "nav-item-active" : ""}`}
        >
          <img src="../../../userNav.png" alt="user" />
          <p>Mijozlar bazasi</p>
        </div>
        <div
          onClick={() => handleClick(2)}
          className={`nav-item ${active == 2 ? "nav-item-active" : ""}`}
        >
          <img src="../../../trackling.png" alt="user" />
          <p>Tracking loyihalari</p>
        </div>
        <div
          onClick={() => handleClick(3)}
          className={`nav-item ${active == 3 ? "nav-item-active" : ""}`}
        >
          <img src="../../../shablon.png" alt="user" />
          <p>Sharh olish loyihalari</p>
        </div>
        <div
          onClick={() => handleClick(4)}
          className={`nav-item ${active == 4 ? "nav-item-active" : ""}`}
        >
          <img src="../../../redirect.png" alt="user" />
          <p>Redirect loyihalari</p>
        </div>
      </div>
      <div className="user-info">
        <img src="../../../Profile.png" alt="user" />

        <p>Austin Robertson</p>
        <span>
          <KeyboardArrowDownRoundedIcon />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
