import React from "react";
import { useState } from "react";
import "./style.css";

const labels = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

const detailView = ({ stats }) => {
  return (
    <>
      {!stats ? (
        ""
      ) : (
        <>
          {/* "-card-view w-[350px] border-solid border-2 border-indigo-600 justify-items-center" */}
          <div
            className={`-card-view w-[350px] border-solid border-4  border-[#d9ff00] justify-items-center type-${stats?.types[0]?.type?.name} `}
          >
            <h1 className="static right-0 w-full p-5 flex justify-between">
              <div>{stats?.name}</div>{" "}
              {(() => {
                if (stats?.id <= 9) {
                  return <div>#00{stats?.id}</div>;
                }
                if (stats.id >= 10 && stats?.id <= 99) {
                  return <div>#0{stats?.id}</div>;
                } else {
                  return <div>#{stats?.id}</div>;
                }

                return null;
              })()}
            </h1>
            <div className="-card-bg h-[270px] w-[320px] border-solid border-4 rounded-xl border-[#d9ff00] justify-items-center bg-[#fff] content-center">
              <div>
                <img
                  className="h-[160px] "
                  key={stats?.id}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${stats.id}.svg`}
                  alt={stats?.name}
                />
              </div>
            </div>
            <div className="bg-white m-3 p-2 rounded-xl border-4 border-[#d9ff00] w-[90%]">
              {/* <div className="abilities  p-2 ">
                <div className="grid grid-cols-2  gap-1 my-1 mx-1 ">
                  {stats.abilities.map((poke, i) => (
                    <div key={i} className="group">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="base-stat">
                <div className="grid grid-cols-1 gap-1 mb-1 px-3">
                  {stats.stats.map((poke, i) => (
                    <h3 key={i}>
                      {labels[i]}:{poke.base_stat}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default detailView;
