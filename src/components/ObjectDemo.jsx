import React, { useState } from "react";

export function ObjectDemo() {
  //   const [fName, setFName] = useState("");
  //   const [lName, setlName] = useState("");

  //for more values in usestate
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    age: "",
  });
  //while accessing them inside person.fname, person.lname etc has to be used inside the value attribute of input tag
  //also in below onChange spreadoperator is used to keep the previous values and then adding new values along
  return (
    <div>
      <h1>ObjectDemo</h1>
      <div>
        {/* here in react we dont use for in label */}
        <label>
          Enter your first name:
          <input
            type="text"
            id="fname"
            // value={fName}
            value={person.fName}
            // onChange={(e) => setFName(e.target.value)}

            onChange={(e) => setPerson({ ...person, fname: e.target.value })}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Enter your last name:
          <input
            type="text"
            id="lname"
            // value={lName}
            value={person.lName}
            // onChange={(e) => setlName(e.target.value)}

            onChange={(e) => setPerson({ ...person, lname: e.target.value })}
          ></input>
        </label>
      </div>
      <h1>
        {person.fname}
        {person.lname}
      </h1>
    </div>
  );
}
