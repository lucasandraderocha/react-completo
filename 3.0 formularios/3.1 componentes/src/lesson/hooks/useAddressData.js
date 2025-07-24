import { useEffect, useState } from "react";

const useAddressData = () => {
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);

  const fetchStates = async () => {
    let stateRes;
    let stateData;

    try {
      stateRes = await fetch("https://brasilapi.com.br/api/ibge/uf/v1");
      stateData = await stateRes.json();
    } catch (error) {
      console.log(error);
    } finally {
      setStates(stateData);
    }
  };
  const fetchCitiesByState = async uf => {
    if (!uf) return;
    let citiesData;
    let citiesRes;
    try {
      citiesRes = await fetch(
        `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`
      );
      citiesData = await citiesRes.json();
    } catch (error) {
      console.log(error);
    } finally {
      setCities(citiesData);
    }
  };
  useEffect(() => {
    fetchStates();
  }, []);
  return {
    states,
    cities,
    fetchCitiesByState,
  };
};

export default useAddressData;
