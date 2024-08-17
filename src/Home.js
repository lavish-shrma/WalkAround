import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css"

import "./Home.css"
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>

      <div id="carouselExampleCaptions" class="carousel slide">
        <div className="carousel-indicators">
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ height: "500px" }} src="https://media.giphy.com/media/rRmOVAieVYOnS/giphy.gif" class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block" style={{ paddingTop: "200px" }}>
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 style={{ color: "black" }} className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>

                  <div className="position-relative w-75 mx-auto animated slideInDown">
                    <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                    <button type="button" className="btn btn-primary rounded-pill py-2 position-absolute top-0 end-0 mt-2 me-2" style={{ margintop: "7px;" }}>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-5" >
          <div class="col-lg-6 " >
            <img style={{ height: "400px", width: "500px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYu216mxbXdqxHtj2Rxihv3aJTJ-cWNlt2Q&s" class="rounded-0" alt="..." /></div>
          <div class="col-6 rounded-0" >
            <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
            <h1 class="mb-4">Welcome to <span class="text-primary">WalkAround</span></h1>

            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>

            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

            <div data-aos="flip-right" class="row gy-2 gx-4 mb-4">
              <div class="col-sm-6">
                <p class="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>First Class Flights</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>Handpicked Hotels</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>5 Star Accommodations</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>Latest Model Vehicles</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>150 Premium City Tours</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>24/7 Service</p>
              </div>
            </div>

            <a class="btn btn-primary py-3 px-5 mt-2">Read More</a>



          </div>
        </div>
      </div>


      <div className='container'>
        <div data-aos="fade-down-right" class="row  row-cols-4 row-cols-md-4 g-4 mt-5">
          <div class="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2017/02/19/23/10/travel-2081174__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div class="text-center p-4">
                <h5 class="mb-0">WorldWide Tours</h5>
                <small>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</small></div>
            </div>
          </div>
          <div class="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2020/03/25/18/20/insect-hotel-4968205__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div class="text-center p-4">
                <h5 class="mb-0">Hotel Reservation
                </h5>
                <small>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam

                </small></div>
            </div>
          </div>
          <div data-aos="fade-down-right" class="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2021/04/26/20/34/map-6209941__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div class="text-center p-4">
                <h5 class="mb-0">Travel Guides</h5>
                <small>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam

                </small></div>
            </div>
          </div>
          <div class="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} class="card h-100">
              <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/event-management.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div class="text-center p-4">
                <h5 class="mb-0">Event Management</h5>
                <small>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam

                </small></div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div data-aos="zoom-out-right" class="row  row-cols-4 row-cols-md-4 g-4 mt-5">
          <div class="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2017/02/19/23/10/travel-2081174__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div class="text-center p-4">
                <h5 class="mb-0">WorldWide Tours</h5>
                <small>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</small></div>
            </div>
          </div>
          <div data-aos="fade-down-right" class="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2020/03/25/18/20/insect-hotel-4968205__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div class="text-center p-4">
                <h5 class="mb-0">Hotel Reservation
                </h5>
                <small>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam

                </small></div>
            </div>
          </div>
          <div class="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2021/04/26/20/34/map-6209941__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div class="text-center p-4">
                <h5 class="mb-0">Travel Guides</h5>
                <small>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam

                </small></div>
            </div>
          </div>
          <div data-aos="zoom-out-right" class="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} class="card h-100">
              <img src="https://www.grupio.com/blog/wp-content/uploads/2023/06/the-a-z-of-event-management-heres-what-you-need-to.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div class="text-center p-4">
                <h5 class="mb-0">Event Management</h5>
                <small>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</small></div>
            </div>
          </div>
        </div>
      </div>

      <div class="cantainer bg-dark mt-5">
        <div class="row text-white {color: #fff!important;}">
          <div class="col-lg-3">
            <h4 class="text-white mb-3">Company</h4>
            <span>Contact Us</span> <br></br>
            <span>Privacy Policy</span> <br></br>
            <span>Terms &amp; Condition</span> <br></br>
            <span>FAQs &amp; Help</span> <br></br>
          </div>

          <div class="col-lg-3">
            <h4 class="text-white mb-3">Contact</h4>
            <span>123 Street, New York, USA</span> <br></br>
            <span>+012 345 67890</span> <br></br>
            <span>mail@domain.com</span> <br></br>
            <span>hello</span> <br></br>


          </div>
          <div class="col-lg-3" >
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3">Gallery</h4>
              <div class="row g-2 pt-2 " style={{ height: "100px", width: "150px" }}>
                <div class="col-4"><img class="img-fluid bg-light p-1" src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
                <div class="col-4"><img class="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/930309134/photo/tourist-woman-enjoy-with-beautiful-view-on-mountains-in-ella-sri-lanka.jpg?s=612x612&w=0&k=20&c=f5AhSDzgsHFSTb-vL-78AYKjkOqVzxu9RGocl6YFCag=" alt="" /></div>
                <div class="col-4"><img class="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1221548744/photo/a-woman-with-white-hat-walks-down-a-tropical-paradise-beach-with-palm-trees-and-turquoise-sea.jpg?s=612x612&w=0&k=20&c=-zcKEcBYzkLZqgE9ZuXXFbiXogpNL96KxyDwXq5Px-I=" alt="" /></div>
                <div class="col-4"><img class="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1125634321/photo/the-couple-greets-the-sunrise-in-the-mountains-man-and-woman-in-the-mountains-wedding-travel.jpg?s=612x612&w=0&k=20&c=jjhQC3kov9D9onL1_2Ny7Z6Vg9zr75MfcLsuWibKsJ8=" alt="" /></div>
                <div class="col-4"><img class="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1359469806/photo/beautiful-young-woman-in-winter-park-having-fun-stock-photo.jpg?s=612x612&w=0&k=20&c=JmrZYJpsY2JBreyZ9JStdCS_fxk1SKro4NphSqIPntM=" alt="" /></div>
                <div class="col-4"><img class="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1359469806/photo/beautiful-young-woman-in-winter-park-having-fun-stock-photo.jpg?s=612x612&w=0&k=20&c=JmrZYJpsY2JBreyZ9JStdCS_fxk1SKro4NphSqIPntM=" alt="" /></div>
              </div>
            </div>

          </div>
          <div class="col-lg-3">
            <h4 class="text-white mb-3">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style={{ maxwidth: "400px" }}>
              <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>


          <hr></hr>



          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">© <a class="border-bottom" href="https://www.free-css.com/free-css-templates">WalkAround</a>, All Rights Reserved. Designed By <a class="border-bottom" target="_blank" rel="nofollow noopener" href="//htmlcodex.com">HTML Codex</a></div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu"><a href="https://www.free-css.com/free-css-templates">Home</a> <a href="https://www.free-css.com/free-css-templates">Cookies</a> <a href="https://www.free-css.com/free-css-templates">Help</a> <a href="https://www.free-css.com/free-css-templates">FAQs</a></div>
            </div>
          </div>




        </div>



      </div>



    </>
  )
}

export default Home;