import React from "react";
import { doughnutsData } from "./doughnutsData";

function Aside() {
  return (
    <div className="fixed flex flex-col top-1/2 -mt-[110px] ml-16 w-22 gap-y-2">
      <a
        href=""
        className="p-1 rounded-full border-2 border-transparent transition ease-in-out bg-white hover:border-2 hover:scale-105 hover:border-dark-pink"
      >
        <img
          src={require("./images/doughnut1.png")}
          alt="doughnut1"
          width="60rem"
        />
      </a>

      <a
        href=""
        className="p-1 rounded-full border-2 border-transparent transition ease-in-out bg-white hover:border-2 hover:scale-105 hover:border-dark-pink"
      >
        <img
          src={require("./images/doughnut2.png")}
          alt="doughnut2"
          width="60rem"
        />
      </a>
      <a
        href=""
        className="p-1 rounded-full border-2 border-transparent transition ease-in-out bg-white hover:border-2 hover:scale-105 hover:border-dark-pink"
      >
        <img
          src={require("./images/doughnut3.png")}
          alt="doughnut3"
          width="60rem"
        />
      </a>
    </div>
  );
}

export default Aside;
