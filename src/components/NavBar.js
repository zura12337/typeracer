import React, { useState } from "react";

export default function NavBar() {
  const [name, setName] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    setLoggedIn(true);
    localStorage.setItem("username", name);
  };

  return (
    <div className="justify-center text-center">
      {!loggedIn ? (
        <>
          <h4 className="primary-text">Enter Your Name</h4>
          <div className="d-flex justify-content-center">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="input"
            />
            <button
              id="name-submit"
              onClick={handleClick}
              className="btn btn-primary"
            >
              OK!
            </button>
          </div>
        </>
      ) : (
        <div>
          <h1 className={"text-center primary-text"}>
            <p className="success">Congrats</p> You Are Logged in as{" "}
            <strong>{name}</strong>
          </h1>
          <br />
          <button
            id="name-submit"
            onClick={() => setLoggedIn(false)}
            className="btn btn-primary"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
