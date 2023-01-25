import React from 'react'

export default function Info(){
    return (
        <div className = "info-container">
          <img className ="profile-img" src="../profile_square.png" />
          <h1 className="name">Run Qi(Jack) Li</h1>
          <p className="title">Frontend Developer</p>
          <a className="website"  target="_blank" href="https://www.keeponflowing.com">keeponflowing.com</a>
          <div className="btn-container">

              <a href="#" target="_blank" className="btn-primary email">
                <i class="fa-solid fa-envelope"></i> &nbsp;Email
              </a>

              <a herf="https://www.linkedin.com/in/jackli921/" className="btn-primary linkedin">
                <i class="fa-brands fa-linkedin"></i> &nbsp;LinkedIn
             </a>

          </div>
        </div>  
    )
}