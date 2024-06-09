import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../sass/home/home.css";
import "../../sass/header/header.css";
import { MdAddCircleOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { ImExit } from "react-icons/im";
import i1 from "../../../public/crafers-main.png";
import i2 from "/img1.svg";

const Home = () => {
  const [craf, setCraf] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/craf")
      .then((res) => res.json())
      .then((data) => setCraf(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const [search, setSearch] = useState("");
  const filteredCraf = craf.filter((craf) =>
    craf.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header>
        <div className="container">
          <div className="head-big">
            <Link to="/">
              <img src={i2} alt="" />
            </Link>
            <form className="head-form1">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Nimani qidiryapsiz?"
              />
              <button type="submit">Qidiruv</button>
            </form>
            <button className="head-but">
              <MdAddCircleOutline className="head-icon" />
              E'lon berish
            </button>
          </div>
        </div>
        <div className="head-big2">
          <div className="head-mini1">
            <a href="#">
              <FaPhoneAlt />
              <p> +998 90 948 76 54</p>
            </a>
          </div>
          <div className="head-mini2">
            <a href="#">
              <AiFillMessage />
              <p>Xabarlar </p>
            </a>
          </div>
          <div className="head-mini3">
            <a href="#">
              <MdContacts />
              <p>Hisobingiz</p>
            </a>
          </div>
          <div className="head-mini3">
            <Link to="/admin">
              <ImExit />
              <p>Ro`yhatdan o`tish</p>
            </Link>
          </div>
        </div>
      </header>
      <home>
        <div className="container">
          <div className="home-all">
            <img className="homeImg" src={i1} alt="" />
            <h1 className="homeH">E`lonlar</h1>
            <div className="data-list">
              {Array.isArray(craf) ? (
                craf
                  .filter(
                    (craf) =>
                      craf.lastName
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      craf.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((craf) => (
                    <div className="data-craf">
                      <Link className="link" to={`/details/${craf.id}`}>
                        <img src={craf.img} alt="" />
                        <h3>{craf.name}</h3>
                        <h4>{craf.price}</h4>
                        <h3>{craf.lastName}</h3>
                      </Link>
                    </div>
                  ))
              ) : (
                <p>Loading data...</p>
              )}
            </div>
          </div>
        </div>
      </home>
    </div>
  );
};

export default Home;
