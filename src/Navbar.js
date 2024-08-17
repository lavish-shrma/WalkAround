import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <h1 className="text-primary m-0"><i class="fa fa-map-marker-alt me-3"></i>WalkAround</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/packages">Packages</Link>
              </li>


              <li className="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </Link>
                <ul class="dropdown-menu">
                  <li><Link className="dropdown-item" to="/destination">Destination</Link></li>
                  <li><Link className="dropdown-item" to="/booking">Booking</Link></li>
                  <li><Link className="dropdown-item" to="/travel ">Travel Guides</Link></li>
                  <li><Link className="dropdown-item" to="/testimonial">Testimonial</Link></li>
                  <li><Link className="dropdown-item" to="/page">404 Page</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-primary rounded-pill py-2 px-4" to="/register">Register</Link>
              </li>




            </ul>
          </div>
        </div>
      </nav>

      {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg" className="d-block w-100" alt="..." height={550} />
          </div>
          <div className="carousel-item">
            <img src="https://i.natgeofe.com/k/8dc7401d-fac9-43c5-a6d4-d056401f7779/kuala-lumpur.jpg?wp=1&w=1084.125&h=721.875" className="d-block w-100" alt="..." height={550} />
          </div>
          <div className="carousel-item">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Jakarta-Skyline-from-Bund_20190127152918.jpg" className="d-block w-100" alt="..." height={550} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

    </>
  )
}

export default Navbar;