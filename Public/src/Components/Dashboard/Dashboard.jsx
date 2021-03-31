import React, { useState, useEffect, useDebugValue } from "react";
import axios from "axios";

const Dashboard = () => {
  let [guildMembers, updatedGuildMembers] = useState([]);

  useEffect(() => {
    axios
      .get("/bot/guild/members")
      .then((data) => {
        console.log(datam, "guild memebers");
      })
      .catch((err) => {
        console.log(err);
      });

  }, [guildMembers]);

  return (
    <>
      <div> {guildMembers} </div>
      <div></div>
    </>
  );
};

export default Dashboard;
