import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();

  const [json, setJson] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/getAll", {
        headers: {
          auth: `${JSON.parse(localStorage.getItem("auth"))}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setJson(res.data);
      })
      .catch((err) => {
        toast.error(err.res.data);

      });
  }, []);

  return (
    <div>
      <p>{JSON.stringify(json)}</p>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
       LOGOUT
      </button>
   
    </div>
  );
}

export default Home;
