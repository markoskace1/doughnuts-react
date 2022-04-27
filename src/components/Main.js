import React, { useState } from "react";
import { doughnutsData } from "./doughnutsData";

function Main() {
  const [items, setItems] = useState(doughnutsData);

  const incrementCount = (index) => {
    const newItem = [...items];
    newItem[index].quantity++;
    setItems(newItem);
  };

  const decrementCount = (index) => {
    if (items[index].quantity >= 1) {
      const newItem = [...items];
      newItem[index].quantity--;
      return setItems(newItem);
    } else {
      return items[index].quantity == 1;
    }
  };

  return (
    <main>
      {items.map((doughnut, index) => {
        return (
          <section
            id={doughnut.id}
            key={doughnut.id}
            className="flex flex-col xl:flex-row container mx-auto items-center mt-24 xl:-mt-24 mb-12 xl:mb-0 justify-evenly h-screen "
          >
            <div className="w-80 xl:w-96">
              <img src={require(`${doughnut.img}`)} alt="doughnut" />
            </div>

            <div className="prose-base xl:prose-lg text-center">
              <h1 className="my-10 text-dark-pink">{doughnut.name}</h1>
              <p className="m-0">{doughnut.description}</p>
              <table className="table-fixed prose my-6 mx-auto">
                <thead>
                  <tr>
                    <th>Calories</th>
                    <th>Sugar</th>
                    <th>Fat</th>
                    <th>Sodium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{doughnut.calories}</td>
                    <td>{doughnut.sugar}</td>
                    <td>{doughnut.fat}</td>
                    <td>{doughnut.sodium}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center my-4 space-x-6 prose mx-auto">
                <div className="inline-flex space-x-6 rounded-18 text-dark-pink bg-white">
                  <div className="flex justify-center">
                    <button
                      onClick={() => decrementCount(index)}
                      disabled={doughnut.quantity == 1}
                      type="button"
                      className={
                        doughnut.quantity == 1
                          ? "w-12 rounded-l-18 bg-slate-100"
                          : "hover:bg-dark-pink hover:text-white hover:rounded-l-18 w-12"
                      }
                    >
                      -
                    </button>
                  </div>

                  <p>{doughnut.quantity}</p>
                  <div className="flex justify-center ">
                    <button
                      onClick={() => incrementCount(index)}
                      type="button"
                      className="hover:bg-dark-pink hover:text-white hover:rounded-r-18 w-12"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex-1 text-center py-2 rounded-18 cursor-pointer bg-dark-pink hover:bg-[#fc828c]">
                  <button
                    type="button"
                    className="font-light text-white text-xl"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Main;
