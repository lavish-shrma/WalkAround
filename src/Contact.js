import React from 'react'
const Contact = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{ height: "500px" }} src="https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_960_720.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="row justify-content-center py-5">
                <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 class="display-3 text-white animated slideInDown">Contact Us</h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><a href="https://www.free-css.com/free-css-templates">Home</a></li>
                      <li class="breadcrumb-item"><a href="https://www.free-css.com/free-css-templates">Pages</a></li>
                      <li class="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
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
            <h2 class="section-title bg-white text-center text-primary px-3">CONTACT US</h2>
            <h1 class="mb-5">Contact For Any Query</h1>
          </div>
        </div>
      </div>


      <div className='container'>
        <div class="row g-4 mt-3">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationame: "fadeInUp" }}>
            <h5>Get In Touch</h5>
            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
            <div class="d-flex align-items-center mb-4">
              <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}></div>
              <div class="ms-3">
                <h5 class="text-primary">Office</h5>
                <p class="mb-0">123 Street, New York, USA</p>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}></div>
              <div class="ms-3">
                <h5 class="text-primary">Mobile</h5>
                <p class="mb-0">+012 345 67890</p>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}></div>
              <div class="ms-3">
                <h5 class="text-primary">Email</h5>
                <p class="mb-0">mail@domain.com</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible", animationdelay: "0.3s", animationname: "fadeInUp" }}>
            <iframe class="position-relative rounded w-100 h-100" src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" style={{ minheight: "300px", border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: "visible", animationdelay: "0.3s", animationname: "fadeInUp" }}>
            <form action="#" method="post">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="name" placeholder="Your Name" />
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="email" class="form-control" id="email" placeholder="Your Email" />
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="subject" placeholder="Subject" />
                    <label for="subject">Subject</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                </div>
              </div>
            </form>
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

export default Contact;