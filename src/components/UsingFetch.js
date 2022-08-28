import React, { useEffect, useState } from "react";

const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
            <h1  className="text-center ">Let's learn API's using UsingFetch</h1>

      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
       
       <div className="container">
          <div className="row">

            {users.map((user) => (
              // <>
              //   <li>{user.name}</li>
              //   <li>{user.email}</li>

              //   <li>{user.id}</li>
              // </>
              <div className="col-lg-4 mt-4">
              <div className="card " style={{ width: "18rem" }}>
                <div className="card-body text-center">
                <img src={user.avatar} className="card-img-top" alt="Laptop" />

                  {/* <h5 className="card-title">{user.avatar}</h5> */}
                  <p className="card-text">{user.email}</p>
                  <p className="card-text">{user.name}</p>
                  <h4 className="card-text">{user.role}</h4>


                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default UsingFetch;
