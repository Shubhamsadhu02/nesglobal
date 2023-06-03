import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Partials/Header'

export default function Errorpagenotfound() {
  return (
    <>
    <Header showNav={true} isWhite={true} />
    <section className="error">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="./images/login/404error.png" alt="" style={{mixBlendMode: "luminosity"}} />
          </div>
          <div className="col-lg-6">
            <div className="error-para1">
              <h4>Page Not Found</h4>
            </div>
            <div className="error-para2 mt-3">
              <h1>Page Not Found</h1>
            </div>
            <div className="error-para3 mt-2">
              <p>We can't find the page you're looking for.</p>
            </div>
            <div className="backToHome mt-3">
              <Link to={"/"}><button type='submit'>Back to home</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

