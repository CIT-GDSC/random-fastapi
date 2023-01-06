import axios from 'axios';

const loadUrl = "https://bayut.p.rapidapi.com"


export const fetchApi= async (url) => {
    const response = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'dae7246909msh4979a69348a89a1p1b5df7jsne874660aef4e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
}