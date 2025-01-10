import "./style.css";

const labels = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

function detailView({ stats }) {
  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  return (
    <>
      {!stats ? (
        ""
      ) : (
        <>
          {/* <div className="overlay"> */}
          <div
            className={`-card-view  w-[350px] border-solid border-4 border-[#d9ff00] fixed z-10 left-[40%] justify-items-center type-${stats?.types[0]?.type?.name} `}
          >
            <h1 className="static right-0 w-full p-5 flex justify-between">
              <div className="-name">{capitalizeFirstLetter(stats?.name)}</div>{" "}
              {(() => {
                if (stats?.id <= 9) {
                  return <div className="-status">#00{stats?.id}</div>;
                }
                if (stats.id >= 10 && stats?.id <= 99) {
                  return <div className="-status">#0{stats?.id}</div>;
                } else {
                  return <div className="-status">#{stats?.id}</div>;
                }

                return null;
              })()}
            </h1>
            <div className=" -card-bg h-[270px] w-[320px] border-solid border-4 rounded-xl border-[#d9ff00] justify-items-center bg-[#fff] content-center">
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
              <div className="base-stat">
                <div className="grid grid-cols- gap-1 mb-1 px-3">
                  {stats.stats.map((poke, i) => (
                    <div
                      className="-container-bar grid grid-cols-[25%_85%]"
                      key={i}
                    >
                      <div className="text-xs bg-white text-[#111]">
                        {labels[i]}
                      </div>

                      {(() => {
                        if (poke?.base_stat >= 50) {
                          return (
                            <div
                              className={`-skill-bar max-w-[88.5%] bg-[#45f5b4] `}
                              style={{ width: `${poke.base_stat}%` }}
                            >
                              <div className="text-xs">{poke.base_stat}</div>
                            </div>
                          );
                        }
                        if (poke?.base_stat <= 50) {
                          return (
                            <div
                              className={`-skill-bar max-w-[88.5%] bg-[#fd6868] `}
                              style={{ width: `${poke.base_stat}%` }}
                            >
                              <div className="text-xs">{poke.base_stat}</div>
                            </div>
                          );
                        }

                        return null;
                      })()}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </>
      )}
    </>
  );
}
export default detailView;
