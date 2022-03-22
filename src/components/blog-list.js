import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import parse from "html-react-parser";
const BlogList = (props) => {
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }
  return (
    <div className="blog" key={props.id}>
      <img
        src={props.data.imageUrl}
        className="aspect-square object-cover w-32 rounded-sm"
      />
      <div className="flex flex-col items-start">
        <Link
          style={{ fontFamily: "Montserrat" }}
          to={{
            pathname:
              "/blog/" + convertToSlug(props.data.title) + "-" + props.data.id,
            state: props.data,
          }}
          state={props.data}
          className="font-bold text-lg hover:underline text-black dark:text-white hover:text-emerald-400 dark:hover:text-emerald-400"
        >
          {props.data.title.length > 60
            ? props.data.title.substring(0, 60) + "..."
            : props.data.title}
        </Link>
        <div
          className="flex flex-row mb-1 text-xs text-gray-400"
          style={{ fontFamily: "Poppins" }}
        >
          <span>{moment(props.data.createdAt).startOf("day").fromNow()}</span>
          <span className="ml-2">• 5 min read</span>
          <span className="ml-2">• 8 Comments</span>
        </div>
        <span className="text-sm" style={{ fontFamily: "Poppins" }}>
          {props.data.content.length > 200
            ? parse(props.data.content.substring(0, 200))
            : parse(props.data.content)}
          ...
        </span>
        <Link
          style={{ fontFamily: "Poppins" }}
          to={{
            pathname:
              "/blog/" + convertToSlug(props.data.title) + "-" + props.data.id,
            state: props.data,
          }}
          state={props.data}
          className="text-base text-emerald-500 hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogList;

/* 
<div className="blog" key={props.id}>
      <img
        src={props.data.imageUrl}
        className="aspect-square object-cover w-32 rounded-sm"
      />
      <div className="flex flex-col items-start ml-10">
        <Link
          style={{ fontFamily: "Montserrat" }}
          to={{
            pathname: "/blog/" + convertToSlug(props.data.title)+"-"+props.data.id,
            state: props.data,
          }}
          state={props.data}
          className="font-bold text-lg hover:underline text-black dark:text-white hover:text-emerald-400 dark:hover:text-emerald-400"
        >
          {props.data.title.length > 60
            ? props.data.title.substring(0, 60) + "..."
            : props.data.title}
        </Link>
        <div
          className="flex flex-row mb-1 text-xs text-gray-400"
          style={{ fontFamily: "Poppins" }}
        >
          <span>{moment(props.data.createdAt).startOf("day").fromNow()}</span>
          <span className="ml-2">• 5 min read</span>
          <span className="ml-2">• 8 Comments</span>
        </div>
        <span className="text-sm" style={{ fontFamily: "Poppins" }}>
          {props.data.content.length > 200
            ? parse(props.data.content.substring(0, 200))
            :parse( props.data.content)}...
        </span>
        <Link
          style={{ fontFamily: "Poppins" }}
          to={{
            pathname: "/blog/" + convertToSlug(props.data.title)+"-"+props.data.id,
            state: props.data,
          }}
          state={props.data}
          className="text-base text-emerald-500 hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
*/
