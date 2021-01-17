import axios from "axios";

export const getQuotes = async () => {
  const response = await axios.get("https://type.fit/api/quotes");
  console.log(response);
  return response;
};
