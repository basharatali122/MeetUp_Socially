import React from 'react'
import { AiFillDelete } from "react-icons/ai";
const Home = () => {
  return (
     <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
        
          <span
            className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
           
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">body</p>
        
          <span  className="badge text-bg-primary hashtag">
            mapspan
          </span>
       
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by 50 people.
        </div>
      </div>
    </div>
  )
}

export default Home