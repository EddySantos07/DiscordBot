import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [Servers, updatedServers] = useState([]);

  useEffect(() => {
    axios
      .get("/bot/guild/members")
      .then((data) => {
        console.log(data, "guild memebers");
        updatedServers(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="DashBoard">
        
      </div>
    </>
  );
};

export default Dashboard;
