import React from "react";
import Moment from "react-moment";
import "moment-timezone";

let chirpData = [
    {userName: 'FloralRogue', message: 'Chirp 1', timeStamp: '2021-08-10 01:23'},
    {userName: 'HellfireMafia', message: 'Chirp 2', timeStamp: '2021-08-11 04:49'},
    {userName: 'AvengingAngel', message: 'Chirp 3', timeStamp: '2021-08-11 10:30'}
  ];

const ChirpIt = props => {
      
    return (
        <div>
        {chirpData.map((val, index) => (
        <div key={`chirp-${index}`}>
    <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">@{val.userName}</h5>
              <p className="card-text p-3">{val.message}</p>
              <Moment format="YYYY/MM/DD hh:mm" fromNow className="card-text text-muted">{val.timeStamp}</Moment>
            </div>
          </div>
          </div>
        ))}
        </div>
    );
}

export default ChirpIt;
export {chirpData};