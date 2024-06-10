import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../sass/home/home.css";
import "../../sass/header/header.css";
import { MdAddCircleOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { ImExit } from "react-icons/im";
import i1 from "../../../public/img1.svg";
import i2 from "../../../public/crafers-main.png";
// import i3 from "../../../public/crafers_logo.png";
import Carousel from "better-react-carousel";
const Home = () => {
  const [craf, setCraf] = useState([]);
  const navigate = useNavigate();

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
              <img src={i1} alt="" />
            </Link>
            <form className="head-form1">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Nimani qidiryapsiz?"
              />
              <button type="submit">Qidiruv</button>
            </form>
            <button
              className="head-but"
              onClick={() => navigate("/AddProduct")}
            >
              <MdAddCircleOutline className="head-icon" />
              E'lon berish
            </button>
          </div>
        </div>
        <div className="head-big2">
          <div className="head-mini1">
            <a href="#">
              <div className="headMinLink">
                <FaPhoneAlt />
                <p> +998 90 948 76 54</p>
              </div>
            </a>
          </div>
          <div className="head-mini2">
            <a href="#">
              <div className="headMinLink">
                <AiFillMessage />
                <p>Xabarlar </p>
              </div>
            </a>
          </div>
          <div className="head-mini3">
            <a href="#">
              <div className="headMinLink">
                <MdContacts />
                <p>Hisobingiz</p>
              </div>
            </a>
          </div>
          <div className="head-mini3">
            <Link to="/admin">
              <div className="headMinLink">
                <ImExit className="headMinP" style={{ marginTop: 2 }} />
                <p className="headMinP">Ro`yhatdan o`tish</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <home>
        <div className="container">
          <div className="home-all">
            <Carousel cols={2} rows={1} gap={10} loop>
              <Carousel.Item>
                <img
                  style={{ width: "1000px" }}
                  className="homeImg"
                  src={i2}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                {/* <img className="homeImg" src={i2} alt="" /> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "1000px", height: "339px" }}
                  className="homeImg"
                  src={i2}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                {/* anything you want to show in the grid */}
              </Carousel.Item>
              {/* ... */}
            </Carousel>

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
                    <div className="data-craf" key={craf.id}>
                      <Link className="link" to={`/details/${craf.id}`}>
                        <img src={craf.img} alt="" />
                        <h3>{craf.name}</h3>
                        <h4>{craf.price} $</h4>
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
