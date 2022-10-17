import React, { useEffect, useState } from "react";

export function FilterDemo() {
  const [names, setNames] = useState([
    "Laptop",
    "Mobile",
    "Bottle",
    "Key",
    "Glass",
  ]);
  const [filteredArray, setFilteredArray] = useState([
    "Laptop",
    "Mobile",
    "Bottle",
    "Key",
    "Glass",
  ]);

  const [search, setSearch] = useState("");

  //this below method is not a correct way to filter
  //   const handleFilter = (e) =>{
  //     setSearch(e.target.value);
  //     let filteredData = names.filter((name)=> name.includes(search));
  //     setFilteredArray([...filteredData]);
  //   }

  //useEffect, takes two parameters, function and an array
  //By default useEffect gets called,If props,state changes or Ui renders 
  //Since i have used search array, useEffect is called only if search changes
  useEffect(() => {
    let filteredData = names.filter((name) => name.includes(search));
    setFilteredArray([...filteredData]);
  },[search]);
  return (
    <div>
      <h1>FilterDemo</h1>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <p>{search}</p> */}
      {filteredArray.map((value) => (
        <p>{value}</p>
      ))}
    </div>
  );
}
