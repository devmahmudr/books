import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BooksSingle = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({
    isFatched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`http://13.48.147.57/book/genreId/10`)
      .then((res) => {
        setInfo({
          isFatched: true,
          data: res,
          err: false,
        });
      })
      .catch((err) => {
        setInfo({
          isFatched: true,
          data: false,
          err: err,
        });
      });
  }, [id]);
  console.log(info);
  return (
    <div>
      {info.isFatched && info.data ? (
        <div className="single-card">
         <p className="text-black">hello</p>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Page not found</h1>
      )}
    </div>
  );
};

export default BooksSingle;
