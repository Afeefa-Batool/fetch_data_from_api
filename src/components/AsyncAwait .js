import React, { useEffect, useState } from 'react'

const AsyncAwait  = () => {

    const [users, setUsers] = useState([])

    const fetchData = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products")
      const data = await response.json()
      setUsers(data)
    }
  
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <div>
      <h1  className="text-center ">Let's learn API's using AsyncAwait</h1>
   {/* card 1 */}
<section style={{backgroundColor: '#eee'}}>
  <div className="container py-5">
    <div className="row">
    {users.map(user => (
            // <li key={user.id}>{user.name}</li>
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 mt-3">
            <div className="card">
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today's Combo Offer</p>
                <div className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style={{width: 35, height: 35}}>
                  <p className="text-white mb-0 small">x4</p>
                </div>
              </div>
              <img src={user.images} className="card-img-top" alt="Laptop" />
              <div className="card-body">
                {/* <div className="d-flex justify-content-between">
                  <p className="small"><a href="#!" className="text-muted">{user.title}</a></p>
                  <p className="small text-danger"><s>{user.price}</s></p>
                </div> */}
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{user.title}</h5>
                  <h5 className="text-dark mb-0">{user.price}</h5>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">{user.categories}</p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}


    </div>
  </div>
</section>

    </div>
  )
}

export default AsyncAwait 
