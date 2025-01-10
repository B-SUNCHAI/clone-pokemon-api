import React from "react";
import "./style.css";

const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <div className=" justify-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          pokemon.map((item) => (
            <div
              className={`card type-${item?.types[0]?.type?.name} `}
              key={item.id}
              onClick={() => infoPokemon(item)}
            >
              <div className="self-start p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                  <div className="absolute top-5 right-10 font-[2.5rem] text-[#ffffff]">
                    {(() => {
                      if (item.id <= 9) {
                        return <div>#00{item.id}</div>;
                      }
                      if (item.id >= 10 && item.id <= 99) {
                        return <div>#0{item.id}</div>;
                      } else {
                        return <div>#{item.id}</div>;
                      }

                      return null;
                    })()}
                    {/* {item.id} */}
                  </div>

                  <div className="mb-5 text-white text-3xl">{item?.name}</div>
                  <div className="text-white text-xl font-light">
                    {item?.types[0]?.type?.name}{" "}
                  </div>
                  <div className="text-white text-xl font-light">
                    {item?.types[1]?.type?.name}{" "}
                  </div>
                </h5>
              </div>
              <div className="m-auto max-w-[50%] justify-items-center">
                <img
                  className=" h-[160px]"
                  src={item?.sprites?.other?.dream_world?.front_default}
                  alt=""
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Card;
