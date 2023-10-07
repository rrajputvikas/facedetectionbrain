import React from "react";
import { Tilt } from "react-tilt";
import Brain from './brain.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className="m-5 mt-0 mb-2">
      <Tilt
        className="Logo rounded-3 shadow-lg"
        options={{
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          max: 45,
        }}
        style={{ height: 150, width: 150 }}
      >
        <div className="p-4">
            <img src={Brain} alt="BrainImage" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
