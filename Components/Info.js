import React from 'react'

export default function Info(){
    return (
        <>
          <div className = "info-container">
            <img className ="profile-img" src="../profile_square.png" />
            <h1 className="name">Run Qi(Jack) Li</h1>
            <p className="title">Frontend Developer</p>
            <a className="website" href="keeponflowing.com">keeponflowing.com</a>
            <div className="btn-container">
                <button className="btn-primary"><i class="fa-solid fa-envelope"></i> &nbsp;Email</button>
                <button className="btn-primary linkedin"><i class="fa-brands fa-linkedin"></i>     &nbsp;LinkedIn</button>
            </div>
          </div>  
        </>
    )
}