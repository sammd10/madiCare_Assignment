import React from "react";

function BestSpecialist() {
  const cart = [
    {
      svg: "/images/doctor.jpg",
      name: "Dr. Awaatif Al",
      specialist: "Dental Care",
    },
    {
      svg: "/images/doctor.jpg",
      name: "Dr. Filipa Gaspar",
      specialist: "Cardiology",
    },
    {
      svg: "/images/doctor.jpg",
      name: "Dr. Sukhmeet Gorae",
      specialist: "Neurological",
    },
    {
      svg: "/images/doctor.jpg",
      name: "Dr. Siri Jakobsson",
      specialist: "Prediatrics",
    },
  ];

  return (
    <div className="mt-5 pt-5">
      <div className="text-center col-12 col-md-6 mx-auto">
        <h1 className="text-blue mb-4">We Have The Best Specialist</h1>
        <p>
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </p>
      </div>
      <div className="d-flex  flex-wrap justify-content-center gap-5  mt-5 pt-4">
        {cart.length > 0 &&
          cart.map((item, index) => (
            <div key={index} className="doctor rounded-4 m-3">
              <img src={item?.svg} alt={item?.text} />
              <div className="p-4">
                <h5 className="fw-bold text-blue mb-1 ">{item?.name}</h5>
                <p className=" text-blue mb-0">{item?.specialist}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BestSpecialist;
