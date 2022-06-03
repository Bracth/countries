import client from "../../api/client";
const countriesBaseUrl = "/v2";

export const getCountries = async () => {
  const url = `${countriesBaseUrl}/all`;
  return await client.get(url);
};

export const fetchCountrieByName = async (countrieName) => {
  const url = `${countriesBaseUrl}/name/${countrieName}`;
  return await client.get(url);
};
