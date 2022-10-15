import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const _Venue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(true);
  const [schedule, setSchedule] = useState(true);  
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://sis.materdeicollege.com/api/venues/` + id)
      .then (res => {
        if(!res.ok)
        throw Error('Could not fetch the data');
       return res.json();
    })
      .then((data) => {
        const {
          venue
        } = data;
        setVenue(venue);
        setSchedule(data.schedules);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
    })
    }, 1000)
  }, [id]);

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header bg-info">
            <p className="text-center mt-2"><h6>{venue.building} Building</h6></p>
            </div>
            <div className="card-body" id="bodyy">
              <div>
              <p><span id="titlee"> ID: </span>{isPending && (<i class="fa fa-spinner" aria-hidden="true"></i>)}{error && (<i class="fa fa-times" aria-hidden="true"></i>)}{venue.id}</p>
              <p><span id="titlee">Name: </span>{isPending && (<i class="fa fa-spinner" aria-hidden="true"></i>)}{error && (<i class="fa fa-times" aria-hidden="true"></i>)}{venue.name}</p>
              <p><span id="titlee">Building: </span>{isPending && (<i class="fa fa-spinner" aria-hidden="true"></i>)}{error && (<i class="fa fa-times" aria-hidden="true"></i>)}{venue.building}</p>
              <p><span id="titlee">Capacity: </span>{isPending && (<i class="fa fa-spinner" aria-hidden="true"></i>)}{error && (<i class="fa fa-times" aria-hidden="true"></i>)}{venue.capacity}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
        {schedule && (
          <div className="card" id="card">
          <h1 className="text-center mt-2">
          {schedule ? "Schedules" : "No Schedule Found"}
            </h1>
            <hr />
          <div className="card-body" style={{ height: "75vh", overflow: "auto" }}>
          <table id="sched-table" className="table table-striped table-hover table-bordered">
            <thead className="bg-info">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Course No.</th>
                <th scope="col">Description</th>
                <th scope="col">Schedule</th>
                <th scope="col">Size</th>
                <th scope="col">Teacher</th>
              </tr>
            </thead>
            <tbody>
            {error && (
           <tr><td colSpan="6"> <i class="fa fa-times" aria-hidden="true" id="unavailable"><h2>{error}</h2></i> </td></tr>
            )}
            {isPending && (
           <tr><td colSpan="6"> <i class="fa fa-spinner" aria-hidden="true" id="loading"><h2>Loading...</h2></i> </td></tr>
            )}
              {Object.keys(schedule)?.map((sched, index) => {
                return (
                    <tr key={index}>
                      <td>{schedule[sched].id}</td>
                      <td>{schedule[sched].course_no}</td>
                      <td>{schedule[sched].description}</td>
                      <td>{schedule[sched].schedule}</td>
                      <td>{schedule[sched].size}</td>
                      <td>{schedule[sched].teacher}</td>
                    </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          </div>
        )}
        </div>
      </div>
      <Link to="/venues" className="btn btn-sm btn-primary mt-1 float-end">
        Back
      </Link>
    </div>
  );
};

export default _Venue;