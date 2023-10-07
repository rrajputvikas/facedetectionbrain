import React from "react";
import "./FaceDetection.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="position-absolute mt-0 m-3">
        <img
          id="inputImage"
          className="rounded-bottom border border-5 border-warning border-top-0 img-adjust"
          src={imageUrl}
          alt=""
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div> 
  );
};

export default FaceRecognition;
