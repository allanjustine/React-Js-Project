import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const Venue = () => {
  const [data, setVenues] = useState(true);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      setTimeout(() => {
        fetch("https://sis.materdeicollege.com/api/venues")
        .then (res => {
          if(!res.ok)
          throw Error('Could not fetch the data');
         return res.json();
      })
      .then((res) => {
        const { venues } = res;
        setVenues(venues);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
    })
      }, 1000)
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card" id="card">
          <h2 className="text-center mt-3">MDC Venues</h2>
                <hr />
                <Link to={`/venues`}><div className='btn btn-primary btn-sm float-end m-2'>Add Venue</div></Link>
              <div className="card-body shadow" style={{ height: "75vh", overflow: "auto" }}>
                  <table className="table table-striped table-hover table-bordered">
                    <thead className='bg-info'>
                      <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Building</th>
                          <th scope="col">Capacity</th>
                          <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isPending && (<tr><td colSpan="6"> <i class="fa fa-spinner" aria-hidden="true" id="loading"><h2>Loading...</h2></i></td></tr>)}
                      {error && (<tr><td colSpan="6"> <i class="fa fa-times" aria-hidden="true" id="unavailable"><h2>{ error }</h2></i></td></tr>)}
                      {Object.keys(data)?.map((venue) => {
                      return (
                      <tr key={venue}>
                        <td>{data[venue].id}</td>
                        <td>{data[venue].name}</td>
                        <td>{data[venue].building}</td>
                        <td>{data[venue].capacity}</td>
                        <td>
                          <Link className="view" to={`/venues/${data[venue].id}`}><FaEye /></Link>
                        </td>
                      </tr>
                      );
                      })}
                    </tbody>
                  </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;