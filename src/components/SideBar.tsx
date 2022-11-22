import { FC } from "react";
import Logo2 from "../assets/logo@2x.png";
import icon1 from "../assets/1icon.jpg";
import icon2 from "../assets/2icon.jpg";
import icon3 from "../assets/3icon.jpg";
import icon4 from "../assets/4icon.jpg";
import icon5 from "../assets/5icon.jpg";
import { useEffect, useState } from "react";

const SideBar: FC = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="vh-100 w-36 bg-blue3">
      <div className={`d-flex h-100 w-36 flex-column`}>
        <div className="d-flex align-items-center pt-4 ps-4 pb-4 flex-column ">
          <div className="w-100 h-100 rounded-start ps-4 pt-2 pb-2 mb-10 bg-blue4 mb-4">
            <img src={Logo2} className="w-20 h-20" />
          </div>
        </div>
        <div className="mb-15"></div>
        <div className={`d-flex align-items-center justify-content-center flex-column opacity${
              active ? "active" : "" } transitionRight ${active ? "active" : ""}`}>
          <div className={`mb-4`}>
            <a href="/configuracion">
              <img src={icon1} className="h-16 w-18 mb-10" />
            </a>
          </div>
          <div className="mb-4">
            <a href="/docentes">
              <img src={icon2} className="w-16 h-14 mb-10" />
            </a>
          </div>
          <div className="mb-4">
            <a href="/tipocalificacion">
              <img src={icon3} className="w-16 h-14 mb-10" />
            </a>
          </div>
          <div className="mb-4">
            <a href="">
              <img src={icon4} className="w-14 h-14 mb-10" />
            </a>
          </div>
          <div className="mb-4">
            <a href="">
              <img src={icon5} className="w-14 h-14" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
