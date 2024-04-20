import { create } from "zustand";

const useEventsResults = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  fetchEvent: async (params) => {
    try {
      const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
      const API_KEY = "RUMlldV5z0lh0xli5AJAgYWF13TePTL7";
      const isParams = params?.length ? params : "";
      const API_URL = `${BASE_URL}?apikey=${API_KEY}&countryCode=MX${isParams}`;
      //
      await set(() => ({ isLoading: true }));
      //
      const res = await fetch(API_URL);
      const data = await res.json();
      //
      await set(() => ({ data, isLoading: false }));
    } catch (error) {
      await set(() => ({ error }));
      console.log(error);
    }
  },
}));

export default useEventsResults;
