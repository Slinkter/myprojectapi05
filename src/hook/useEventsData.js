import { useEffect, useState } from "react";

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const fetchEvents = async (params) => {
    //
    const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
    const API_KEY = "RUMlldV5z0lh0xli5AJAgYWF13TePTL7";
    const isParams = params?.length ? params : "";
    //
    try {
      const API_URL = `${BASE_URL}?apikey=${API_KEY}&countryCode=MX${isParams}`;
      console.log(API_URL);
      const res = await fetch(API_URL);
      const data = await res.json();
      //
      setData(data);
      setIsError("");
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const values = {
    events: data?._embedded?.events || [],
    pageCount: data?.page || {},
    isLoading,
    isError,
    fetchEvents,
  };

  return values;
};

export default useEventsData;
