import axios from 'axios';

export const getData = async (category, id) => { 

      const {data} = await axios.get(`https://swapi.dev/api/${category}/${id}`)

      return data

    
  }

export const getHomeworld = async (homeworld) => {
    const {data} = await axios.get(homeworld);
    return data;
}