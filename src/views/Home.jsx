import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useEventsResults from "../state/events-results";
import { da } from "date-fns/locale";
import Navbar from "../components/Navbar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const containerRef = useRef();
  const fetchMyEventsRef = useRef();
  const { data, error, isLoading, fetchEvent } = useEventsResults();
  //
  const events = useMemo(
    () => data?._embedded?.events || [],
    [data?._embedded?.events]
  );
  const pageCount = useMemo(() => data?.page || {}, [data?.page]);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvent(`&keyword=${term}`);
  };

  const handlePageClick = useCallback(
    ({ selected }) => {
      fetchEvent(`&keyword=${searchTerm}&page=${selected}`);
    },
    [searchTerm, fetchEvent]
  );

  fetchMyEventsRef.current = fetchEvent;
  useEffect(() => {
    fetchMyEventsRef.current();
  }, []);

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
    </>
  );
};

export default Home;
