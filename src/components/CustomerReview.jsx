import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomerReview() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((response) => {
        setReviewData(response?.data?.data || []);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
      });
  }, []);

  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrow custom-prev">
      ◀️
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrow custom-next">
      ▶️
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="customer-review-container">
      <h1 className="text-blue mb-4">What Our Customers Say</h1>
      <div className="slider-wrapper" style={{ height: "300px" }}>
        <Slider {...settings}>
          {reviewData && reviewData.length > 0 ? (
            reviewData.map((review, index) => (
              <div
                key={index}
                className="review-card "
                style={{ height: "100%" }}
              >
                <div className="card-review">
                  <blockquote className="blockquote">
                    <p className="mb-0">{review.Reviews}</p>
                    <footer className="blockquote-footer d-flex align-items-center">
                      <img
                        src="/images/Oval.png"
                        alt={review.Name}
                        className="review-avatar"
                      />
                      <p className="ms-3 fw-bold">{review.Name}</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))
          ) : (
            <div>No reviews available.</div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default CustomerReview;
