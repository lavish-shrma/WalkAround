import React, { useEffect } from 'react'
import "./About.css"
import AOS from 'aos';
import "aos/dist/aos.css"



const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://giffiles.alphacoders.com/518/51815.gif" class="d-block w-100" alt="..." height={400} width={550} />
            <div className="carousel-caption d-none d-md-block">
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">


                      <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div className="row mt-5" >
          <div data-aos="flip-right" className="col-lg-6 " >
            <img style={{ height: "500px", width: "550px" }} src="https://cdn.pixabay.com/photo/2016/03/15/04/11/towards-the-garden-1256872__340.jpg" class="rounded-0" alt="..." /></div>
          <div className="col-6 rounded-0" >
            <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
            <h1 className="mb-4">Welcome to <span class="text-primary">WalkAround</span></h1>

            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>

            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

            <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>First Class Flights</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>Handpicked Hotels</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>5 Star Accommodations</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>Latest Model Vehicles</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>150 Premium City Tours</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i><img style={{ height: "30Px", width: "20px" }} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg" /></i>24/7 Service</p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="#">Read More</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5" >
          <div className="text-center">
            <h2 className="section-title bg-white text-center text-primary px-3">Travel Guide</h2>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
        </div>
      </div>



      <div data-aos="fade-up"
        data-aos-anchor-placement="top-center" className="container">
        <div className="row text-center mt-5" >
          <div className="col-lg-3">
            <img src="https://th.bing.com/th/id/OIP.lsMdn8FQPBdCu756f63MaQHaEU?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded-circle" alt="..." height="200px" width="200PX" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, alias!</p> <button type="button" class="btn btn-primary btn-lg">Large button</button>
          </div>

          <div className="col-lg-3">
            <img src="https://th.bing.com/th/id/OIP.dXt4oQpAh2gmEKfDIBsUxwHaFy?w=236&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded-circle" alt="..." height="200px" width="200PX" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates sapiente. Quas laborum voluptates quod quasi in amet cupiditate officiis!</p><button type="button" class="btn btn-primary btn-lg">Large button</button>
          </div>
          <div className="col-lg-3">
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg" class="rounded-circle" alt="..." height="200px" width="200PX" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates sapiente. Quas laborum voluptates quod quasi in amet cupiditate officiis!</p><button type="button" class="btn btn-primary btn-lg">Large button</button>
          </div>

          <div className="col-lg-3">
            <img src="https://th.bing.com/th/id/OIP.AsauOHsH82_CzmFHN3yW2AHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded-circle" alt="..." height="200px" width="200PX" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates sapiente. Quas laborum voluptates quod quasi in amet cupiditate officiis!</p><button type="button" class="btn btn-primary btn-lg">Large button</button>
          </div>
        </div>
      </div>



      <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          <div data-aos="fade-up"
            data-aos-duration="3000" className="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} className="card h-100">
              <img src="https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small></div>
            </div>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} className="card h-100">
              <img src="https://cdn.pixabay.com/photo/2019/09/24/11/35/punta-bianca-beach-4501076__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small></div>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000" className="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} className="card h-100">
              <img src="https://cdn.pixabay.com/photo/2017/08/29/12/07/adult-2693054__340.jpg" class="card-img-top" alt="..." />
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small></div>
            </div>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="col-lg-3">
            <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} className="card h-100">
              <img src="https://cdn.pixabay.com/photo/2020/08/12/19/28/great-wall-of-china-5483516__340.jpg" class="card-img-top" alt="..." height="200px" width="200PX" />
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small></div>
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
  );
};

export default About;