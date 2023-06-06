import { useState } from "react";

const Content = () => {
  const [fname, setFname] = useState("Akash");
  const [lname, setLname] = useState("Roy");
  const [cities, setCities] = useState([
    "krakow",
    "Gdansk",
    "warsaw",
    "Wroclaw",
    "Gydnia",
  ]);
  const [name, sertName] = useState(" ");

  const addNewCity = (e) => {
    cities.push(e.target.value);
    console.log("Updated City LisT:  ", cities);
  };

  const fullName = () => {
    return fname + " " + lname;
  };
  const handleClick = (e) => {
    setFname(e.target.value);
    setLname(e.target.value);
  };

  const ifEmailExists = (e) => {
    var result = localStorage.getItem(e.target.value);
    if (result === null) {
      localStorage.setItem(e.target.value, "customer");
    }
    console.log(result);
  };

  const getState = () => {
    let value = 43;

    return [value];
  };

  return (
    <main>
      <input type="text" placeholder="First Name" onKeyUp={handleClick} />
      <input type="text" placeholder="Last Name" />
      <br />
      <input type="text" placeholder="Email " />

      <h4 style={{ color: "blue" }}> Welcome {fullName()} </h4>
      <span>
        <button onClick={ifEmailExists}> Verify Email</button>
      </span>
      <div>
        <input type="text" placeholder="New City name" />
        <button onClick={addNewCity}> Add</button>
        <ul>
          {cities.map((city) => {
            <li key={city}> {city}</li>;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Content;
