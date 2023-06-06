import React from "react";
import Statistics from "./Statistics";
export function Team() {
  const teams = ["India", "Australia", "Pakistan"];
  const stats = [
    { name: "Virat kohli", strikerate: "85" },
    { name: "Rohit Sharma ", strikerate: "90" },
    { name: "SuryaKumar Yadav", strikerate: " 150" },
  ];

  return (
    <div className="App">
      {teams.map((name, key) => {
        return <h3>Team : {name}</h3>;
      })}
      <br />
      <div>
        {stats.map((stat, key) => {
          console.log(stat.name, stat.strikerate);
          return <Statistics name={stat.name} strikerate={stat.strikerate} />;
        })}
      </div>
    </div>
  );
}

export default Team;
