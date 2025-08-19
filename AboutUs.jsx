import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";



const AboutUs = () => {
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", color: "#333" }}>
        <NavBar/>
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://source.unsplash.com/1600x600/?apartment,realestate') center/cover no-repeat",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1 className="display-4 fw-bold">Welcome to TM Style Housing</h1>
        <p className="lead">Modern housing made simple, smart, and stylish.</p>
      </section>

      {/* Mission Section */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://i.pinimg.com/736x/21/14/9f/21149fc288df20a8cb4976e8666d16f8.jpg"
              alt="Mission"
              className="img-fluid rounded-4 shadow"
              style={{
                height:"500px"
                
              
              }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Our Mission</h2>
            <p>
              At TM Style Housing, we aim to revolutionize how people discover and book rental spaces in Kenya. Our platform connects you with verified housing listings in areas like Juja, Parklands, and Imaara Daima — all in just a few clicks.
            </p>
            <p>
              We believe housing should be convenient, secure, and accessible to students, families, and professionals alike.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://i.pinimg.com/736x/5b/a2/97/5ba2978e296477744242b28c710acefb.jpg"
              alt="Team"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Who We Are</h2>
            <p>
              TM Style Housing is driven by a dedicated team of developers and housing experts who understand the needs of both landlords and tenants. We're passionate about combining technology with community to make housing fair and stress-free.
            </p>
            <p>
              We're more than just listings — we're your housing partner.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h3 className="mb-4 fw-semibold">Why TM Style Housing?</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-white rounded-3 shadow h-100">
                <h4>📍 Local Focus</h4>
                <p className="text-muted">
                  Specialized in Juja, Parklands, and Imaara Daima — we know what locals need.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-white rounded-3 shadow h-100">
                <h4>🔐 Secure Listings</h4>
                <p className="text-muted">
                  All listings are verified with photos, prices, and accurate descriptions.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-white rounded-3 shadow h-100">
                <h4>📱 Easy Payments</h4>
                <p className="text-muted">
                  Seamless mobile experience with M-Pesa payment integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>

  );
};

export default AboutUs;
