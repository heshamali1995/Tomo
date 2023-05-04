import React from "react";

const MainButton = ({ context, image }) => {
  return (
    <button className="main-btn bg-active text-white rounded-lg cursor-pointer">
      <img src={image} />
      {context}
    </button>
  );
};

export default MainButton;
