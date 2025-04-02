import React from "react";

const Hero = () => {
  return (
    <section className="mt-5 mt-md-0 " style={{ height: "calc(100vh - 96px)" }}>
      <div className="row h-100">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-5 pb-5">
          <div className="hero-content">
            <h4 className="text-4xl fw-semibold ">
              Welcome to MediCare+ Clinic
            </h4>
            <h1 className="mt-2 display-3 fw-bold py-3">Best Specialists</h1>
            <p className="pb-3">
              We are on the leading edge of cancer care. Providing the full
              continuum of cancer treatments and supportive care services in a
              single convenient location.
            </p>
            <button className="mt-6 px-4 py-3 rounded-5 bg-primary border-0 text-white rounded-lg">
              Book an Appointment
            </button>
          </div>
        </div>
        <div className="col-12 rounded-4 overflow-hidden col-md-6 d-flex align-items-center justify-content-center">
          <div>
             <img
            src="https://images.unsplash.com/photo-1742766330337-1127275cd9b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hospital"
            className="img-fluid rounded-4 h-100"
            
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
