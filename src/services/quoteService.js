// URL : https://zenquotes.io/api/random

import axios from "axios";

async function getQuote() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = "https://zenquotes.io/api/random";
  const { data } = await axios.get(proxy + url);
  return data;
}

export default getQuote;
