import React from "react";
import "./card2.css";
import temp from "../../assets/fa.jpg";
import { Link } from "react-router-dom";
const Card2 = () => {
  return (
    <>
      <div className="cb">
        <div className="card">
          <div class="card-content">
            <div class="imge">
              <img src={temp} alt="" width="100%" />
            </div>
            <div class="name-profession">
              <span class="name">Farhan Aqeel</span>
              <span class="profession">Farhan Aqeel</span>
            </div>
            <Link class="btnpic" href="https://www.youtube.com/c/FarhanAqeel">
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
