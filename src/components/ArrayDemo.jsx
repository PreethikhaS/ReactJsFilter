import React from "react";

export function ArrayDemo() {
  const names = ["Laptop", "Mobile", "Bottle", "Key", "Glass"];
  return (

    <div>
    <h1>ArrayDemo</h1>
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}
