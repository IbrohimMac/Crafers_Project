import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import i2 from "/img1.svg";
import "../../sass/details/details.css";
import "../../sass/header/header.css";
import { MdAddCircleOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
const Details = () => {
  const [craf, setCraf] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/craf/${id}`)
      .then((res) => res.json())
      .then((data) => setCraf(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

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
            <AiFillMessage />
            <p>Xabarlar </p>
          </div>
          <div className="head-mini3">
            <MdContacts />
            <p>Hisobingiz</p>
          </div>
          <div className="head-mini3">
            <Link to="/admin">
              <ImExit />
              <p>Ro`yhatdan o`tish</p>
            </Link>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="deta-fir">
          <div className="deta-firMini">
            <Link className="link" to="/">
              <button>
                <FaArrowLeft className="detaIcon" />
                Orqaga qaytish
              </button>
            </Link>
            <img className="detaImg" src={craf.img} alt="" />
          </div>
          <div className="detaCraf">
            <h1>{craf.name}</h1>
            <h1>{craf.lastName}</h1>
            <button className="detaBut">Цена: Договорная</button>
          </div>
        </div>
        <div className="detaButs">
          <Link to="#">
            <button className="detaBut2">Xabar yuborish</button>
          </Link>
          <Link to="#">
            <button className="detaBut2">Telefon qilish</button>
          </Link>
        </div>
        <div className="deta-second">
          <button className="detaButSec">Опис</button>
          <div className="deta-sec-mini">
            <div className="minin1">
              <h3>Генерал на полі</h3>
              <p className="miniP">
                Генерал на полі. Досходовий гербіцид для боротьби з однорічними
                дводольними та деякими злаковими бур’янами в посівах ріпаку та
                інших культур.
              </p>
              <p className="miniP2">
                Діюча речовина: Кломазон, 480 г/л Препаративна форма: Концентрат
                емульсії Норма використання: 0,2-0,6 л/га Клас токсичності: 2.
                Термін зберігання: 2 роки.
              </p>
            </div>
            <div className="minin2">
              <h3>Характеристики</h3>
              <p className="miniP3">
                Системний препарат потрапляє до рослини через гіпокотиль
                (підсім´ядольне колінце) та кореневу систему і рухається по
                ксилемі до листків; <br />* Проникаючи в рослину, припиняє
                процес утворення хлорофілу і каротину, тим самим зупиняє процес
                фотосинтезу; <br /> * Знищує бур’яни та створює умови озимому
                ріпаку для доброго росту і розвитку в осінній період, усуваючи
                конкуренцію рослин за світло, вологу та поживні речовини на
                самих ранніх етапах органогенезу; <br />* Добре зв´язується у
                грунті та слабо промивається;
                <br />* Для комплексного захисту ріпаку зазвичай;
                <br />* Використовується у бакових сумішах із д.р. метазахлор та
                пропізохлор;
                <br />* В країнах Східної Європи (Чехія, Словаччина, Польща)
                використання Комманд® на посівах ріпаку є обов’язковим елементом
                в технології його вирощування;
                <br />* Широко використовується більше, ніж в 100 країнах світу
                на посівах ріпаку, сої, тютюну, перцю, моркви, картоплі,
                баштанних, бавовни та інших культур.
              </p>
            </div>
            <div className="minin3">
              <h3>Рекомендації:</h3>
              <p className="miniP4">
                Для досягнення максимального ефекту потрібен якісний обробіток
                ґрунту: відсутність грудок, вирівняна поверхня поля, відсутність
                рослинних решток; Обприскування ґрунту проводиться впродовж двох
                днів, а найкраще відразу ж після посіву; За недостачі ґрунтової
                вологи після обприскування рекомендується провести коткування
                ґрунту кільчасто- шпоровими котками; Норма витрати залежить від
                вмісту гумусу в ґрунті, на малогумусних ґрунтах її можна дещо
                знизити; Може виникнути побіління першої пари листочків ріпаку,
                проте в подальшому воно зникає, а рослини мають більш розвинену
                кореневу систему, краще витримують низькі температури; За
                потреби пересіву через 30-60 днів після обробки ріпак та сою
                можна сіяти після поверхневого обробітку ґрунту на глибину 8-10
                см, для всіх інших культур рекомендується провести глибоку
                оранку; Обов´язковою вимогою під час внесення препарату є
                забезпечення суцільного покриття поверхні поля.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;
