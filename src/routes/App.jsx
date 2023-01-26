// https://swapi.dev/api/ this is the API we are going to use
import ShowPlanets from "../components/ShowPlanets";
import ShowPeople from "../components/ShowPeople";
import ShowFilms from "../components/ShowFilms";
import ShowSpecies from "../components/ShowSpecies";
import ShowVehicles from "../components/ShowVehicles";
import ShowStarships from "../components/ShowStarships";

import { getData, getHomeworld } from "../api";

import { useState } from "react";
function App() {
  const [dataState, setDataState] = useState(null);
  const [categoryState, setCategoryState] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const id = e.target.id.value;
    await fechStates(category, id);
    setCategoryState(category);
  };

  const fechStates = async (category, id) => {
    try {
      setIsLoading(true);
      const state = (await getData(category, id)) ?? null;

      if (category === "people") {
        const homeworld = await getHomeworld(state.homeworld);
        setDataState({ ...state, homeworld: homeworld.name });
      } else setDataState(state);
    } catch (error) {
      setDataState(null);
      console.log("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const cards = {
    people: <ShowPeople dataState={dataState} />,
    planets: <ShowPlanets dataState={dataState} />,
    films: <ShowFilms dataState={dataState} />,
    species: <ShowSpecies dataState={dataState} />,
    vehicles: <ShowVehicles dataState={dataState} />,
    starships: <ShowStarships dataState={dataState} />,
  };

  function cardToShow() {
    if (!categoryState) return;
    if (isLoading) return <p>Loading...</p>;
    if (!dataState)
      return (
        <div>
          <p>Estos no son los droides que está buscando</p>
          <img
            src="https://i.ytimg.com/vi/yK48g9mCqrk/maxresdefault.jpg"
            alt="ObiWan tu amigo"
          />
        </div>
      );
    return cards[categoryState];
  }

  return (
    <div className="container">
      <h1>Star Wars API</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search for:
          <select id="category">
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
            <option value="vehicles">Vehicles</option>
            <option value="starships">Starships</option>
          </select>
        </label>
        <label>
          ID:
          <input type="text" id="id" />
        </label>
        <button type="submit">Search</button>
      </form>

      {cardToShow()}
    </div>
  );
}

export default App;
