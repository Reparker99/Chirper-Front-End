import React, { useState } from "react";
import { GiAbstract116 } from "react-icons/gi";
import { GiAllSeeingEye } from "react-icons/gi";
import ChirpIt from "./components/Chirp";
import { chirpData } from "./components/Chirp";


const App = (props) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(3);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };
  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let time = new Date();
    let newChirp = {userName: username, message: message, timeStamp: time};
    chirpData.push(newChirp);
    console.log(chirpData);
    <ChirpIt userName={username} message={message} timeStamp={time} />
    setCount(count + 1);
  };

  return (
    <>
      <div className="container m-3 px-3">
        <div className="row justify-content-between">
          <form className="border col-4 h-25 shadow rounded bg-white" onSubmit={handleSubmit}>
            <div className="input-group my-4">
              <span className="input-group-text">
                <GiAbstract116 />
              </span>
              <input
                id="inputUsername"
                value={username}
                onChange={handleUsernameChange}
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="input-group my-3">
              <span className="input-group-text">
                <GiAllSeeingEye />
              </span>
              <textarea
                value={message}
                onChange={handleMessageChange}
                className="form-control"
                placeholder="Your thoughts..."
              />
            </div>
            <button type="submit" className="mb-3 btn btn-primary">
              Chirp It
            </button>
          </form>
          <div className="col-7">
          <ChirpIt />
        
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
