import React from "react";

const SkillCard = (props) => {
  return (
    <div className="flex flex-col space-y-1 ">
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png"
        className="w-7 h-7 object-cover"
      />
      <span className="" style={{ fontFamily: "Montserrat" }}>
        {props.skill}
      </span>
      <span className="text-sm">
        {props.description}
      </span>
    </div>
  );
};

export default SkillCard;
