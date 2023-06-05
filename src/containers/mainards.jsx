import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Maincard from "../components/maincard/maincard";

const Mainards = () => {
  const [dt, setDt] = useState({
    isFatched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get("http://13.48.147.57/book/book/")
      .then((res) => {
        setDt({
          isFatched: true,
          data: res.data,
          err: false,
        });
      })
      .catch((err) => {
        setDt({
          isFatched: true,
          data: {},
          err: err,
        });
      });
  }, []);
  // console.log(dt);
  return (
    <div>
      {dt.isFatched && dt.data ? (
        <div className="flex justify-between flex-wrap">
          {dt.data.map((val, i) => [
            <Maincard
              id={val.genre_id}
              key={i}
              title={val.title}
              autor={val.description}
              image={val.image}
            />,
          ])}
        </div>
      ) : (
        "err"
      )}
    </div>
  );
};

export default Mainards;
