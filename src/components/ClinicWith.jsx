import React from "react";

function ClinicWith() {
  return (
    <div className="mt-5 row">
      <div className="col-12 col-md-6 d-flex align-items-center">
        <div className="mt-5 mb-5 mb-md-0">
          <h1 className="text-blue">Clinic With Innovative</h1>
          <p className="my-4">
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </p>
          <button className="px-5 py-3 rounded-5 btn btn-primary">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-5 mt-md-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="col-12 ">
              <div className="cart-2 rounded-4 m-4 position-relative">
                <div className="position-absolute cart-img">
                  <img src="/images/doctor-woman.png" alt="" className="" />
                </div>
                <p className="text-center position-absolute bottom-0 w-100 fw-semibold">
                  Qualified Doctors
                </p>
              </div>
            </div>
            <div className="col-12">
              <div
                className="cart-2 ms-3 rounded-4  position-relative"
                style={{ marginTop: "120px" }}
              >
                <div className="position-absolute cart-img">
                  <img
                    src="/images/doctor-woman copy 2.png"
                    alt=""
                    className=""
                  />
                </div>
                <p className="text-center position-absolute bottom-0 w-100 fw-semibold">
                  Emergency Care
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className="cart-2 ms-3 rounded-4  position-relative"
              style={{ marginTop: "120px" }}
            >
              <div className="position-absolute cart-img">
                <img src="/images/doctor-woman copy.png" alt="" className="" />
              </div>
              <p className="text-center position-absolute bottom-0 w-100 fw-semibold">
                24 Hours Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicWith;
