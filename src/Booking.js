import React from 'react'
const Booking = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{ height: "500px" }} src="https://cdn.pixabay.com/photo/2016/10/04/15/55/night-market-1714683_960_720.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="row justify-content-center py-5">
                <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 class="display-3 text-white animated slideInDown">Booking
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">

                      <li class="breadcrumb-item text-white active" aria-current="page">Booking</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-5" >
          <div class="text-center">
            <h2 class="section-title bg-white text-center text-primary px-3">PROCESS
            </h2>
            <h1 class="mb-5">3 Easy Steps</h1>
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

export default Booking;