import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Card from "./components/cardContent/card";
import Heading from "./components/headContent/heading";
import DetailPoke from "./components/detailContent/detailView";

const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [error, setError] = useState("");

  let abortController = new AbortController();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setError("");
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url, {
        signal: abortController.signal,
      });

      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    try {
      pokeFun();
    } catch (error) {
      setError("Something went wrong !!", error());
    } finally {
      return () => abortController.abort();
    }
  }, [url]);
  // console.log(pokeDex);
  // console.log(pokeDex);

  return (
    <div className=" p-5 ">
      <div>
        <Heading />
        {!pokeDex ? (
          ""
        ) : (
          <>
            <DetailPoke stats={pokeDex} />
            <div onClick={() => setPokeDex("")} className="overlay" />,
          </>
        )}

        <div className="btn-group">
          {prevUrl ? (
            <button
              className="button"
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              ❮ Previous
            </button>
          ) : (
            <button className="button">❮ Previous</button>
          )}

          {nextUrl && (
            <button
              className="button"
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next ❯
            </button>
          )}
        </div>
        <Card
          pokemon={pokeData}
          loading={loading}
          infoPokemon={(poke) => setPokeDex(poke)}
          onClick={() => setShowModal(true)}
        />
      </div>
    </div>
  );
};

export default App;
