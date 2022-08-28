import React, { useEffect, useState } from "react";

const ButtonClick = () => {
    const [users, setUsers] = useState([])

    const fetchData = () => {
      fetch("https://api.escuelajs.co/api/v1/categories")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  return (
    <div>
                  <h1  className="text-center ">Let's learn API's using ButtonClick</h1>
                  <div className="text-center">
                  <button className="btn btn-primary" onClick={fetchData}>Fetch Users</button>

                  </div>

                  <div className="container">
          <div className="row">

            {users.map((user) => (
       
              <div className="col-lg-4 mt-4">
              <div className="card " style={{ width: "18rem" }}>
                <div className="card-body text-center">
                <img src={user.image} className="card-img-top" alt="Laptop" />

                  {/* <h5 className="card-title">{user.avatar}</h5> */}
                  <p className="card-text">{user.id}</p>
                  <p className="card-text">{user.name}</p>


                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ButtonClick
