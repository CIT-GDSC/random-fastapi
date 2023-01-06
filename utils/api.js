import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const data  = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'dae7246909msh4979a69348a89a1p1b5df7jsne874660aef4e',

    },
  });
    
  return data;
}