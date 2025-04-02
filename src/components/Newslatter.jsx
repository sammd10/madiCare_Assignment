import React from "react";

function Newslatter() {
  return (
    <div>
      <div className="subscribe-section ">
        <h2 className="display-4 fw-bold">Subscribe to Newsletter</h2>
        <p className="fs-4">
          We have a wide experience in experience design and strategy.
        </p>
        <form className="formWrapper mt-5">
          <input
            type="email"
            className="form-control subscribeInput"
            placeholder="Enter your email address"
            required
            
          />
          <button type="submit" className="btn btn-light rounded-5 me-3 subscribeButton" >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {

};

export default Newslatter;
