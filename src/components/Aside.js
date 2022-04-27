import React from "react";
import { Link } from "react-scroll/modules";
import { doughnutsData } from "./doughnutsData";

function Aside() {
  return (
    <div className="fixed hidden md:flex flex-col top-1/2 -mt-[110px] ml-16 w-22 gap-y-2">
      {doughnutsData.map((item) => {
        return (
          <Link
            activeClass="active"
            to={item.id}
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="p-1 rounded-full border-2 border-transparent transition ease-in-out cursor-pointer bg-white hover:border-2 hover:scale-105 hover:border-dark-pink"
          >
            <img src={require(`${item.img}`)} alt="doughnut" width="60rem" />
          </Link>
        );
      })}
    </div>
  );
}

export default Aside;
