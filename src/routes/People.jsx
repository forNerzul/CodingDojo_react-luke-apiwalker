import { useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getHomeworld } from "../api";
import ShowPeople from "../components/ShowPeople";
const People = () => {
  const { id } = useParams();

  const [dataState, setDataState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStates = async () => {
    try {
      const data = await getData("people", id);

      const homeworld = await getHomeworld(data.homeworld);

      setDataState({ ...data, homeworld: homeworld.name });
    } catch (error) {
      setDataState(null);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchStates();

  if (isLoading) return <h1>Loading...</h1>;
  else if (!dataState)
    return (
      <div>
        <p>Estos no son los droides que está buscando</p>
        <img
          src="https://i.ytimg.com/vi/yK48g9mCqrk/maxresdefault.jpg"
          alt="ObiWan tu amigo"
        />
      </div>
    );
  else return <ShowPeople dataState={dataState} />;
};
export default People;
