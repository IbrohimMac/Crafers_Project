import React from "react";
import i1 from "../../../public/img1.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../../sass/footer/footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="allFoot">
        <div className="foot-big1">
          <img src={i1} alt="" />
          <p>Equip.uz da endi bepul e`lon berish imkonyati </p>
        </div>
        <div className="foot-big2">
          <h2>Sayt haqida</h2>
          <p>Biz haqimizda </p>
          <p>Foydalanish shartlari</p>
        </div>
        <div className="foot-big3">
          <h2>Hizmatlar</h2>
          <p>Profil ochish</p>
          <p>Profilga kirish</p>
        </div>
        <div className="foot-big4">
          <h2>Kantakt</h2>
          <div className="foot-big-4">
            <a href="#">
              <FaPhoneAlt className="footIcon" />
              <div className="foot-mini4">
                <p>+998 90 948 76 54</p>
                <p className="footMiniP">Telegram orqali bog`lanish</p>
              </div>
            </a>
          </div>
          <div className="footBig4">
            <a href="#">
              <MdEmail className="footIcon2" />
              <div className="foot-mini4">
                <p>equip@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;