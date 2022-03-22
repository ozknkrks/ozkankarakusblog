import React from "react";

const project = (props) => {
  return (
    <div className="flex flex-row items-start bg-gray-50 dark:bg-gray-800">
      <img
        src={props.data.image}
        className="h-48 object-cover aspect-square"
      />
      <div className="flex flex-col py-3 px-7 ">
        <a
          href="https://play.google.com/store/apps/dev?id=7980318860505770777&gl=TR"
          target={"_blank"}
          className="link"
          style={{ fontFamily: "Montserrat" }}
        >
          {props.data.title}
        </a>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {props.data.content}
        </span>
      </div>
    </div>
  );
};

export default project;
