import client from "../api/client";
const countriesBaseUrl = "/v2/all";

export const getCountries = async () => {
  const url = countriesBaseUrl;
  return await client.get(url);
};
