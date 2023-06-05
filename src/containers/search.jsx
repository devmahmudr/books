import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
  const [search, setSearch] = useState({
    isFatched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get("http://13.48.147.57/book/search")
      .then((res) => {
        setSearch({
          isFatched: true,
          data: res,
          err: false,
        });
      })
      .catch((err) => {
        setSearch({
          isFatched: true,
          data: {},
          err: err,
        });
      });
  }, [search]);
  console.log(search);
  return <div>
    <h1>this is search</h1>
  </div>;
};

export default Search;



