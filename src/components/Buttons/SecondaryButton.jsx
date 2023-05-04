import React from "react";

const SecondaryButton = ({ context, image }) => {
  return (
    <button className="scd-btn bg-white text-active rounded-lg border border-active border-solid cursor-pointer">
      <img src={image} alt={`${image && "icon"}`} />
      {context}
    </button>
  );
};

export default SecondaryButton;
