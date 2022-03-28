import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import parse from "html-react-parser";
import striptags from "striptags";
import { decode } from "html-entities";
const BlogList = (props) => {
  function convertToSlug(str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "åàáãäâèéëêìıíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaaeeeeiiiioooouuuunc------";

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-") // collapse dashes
      .replace(/^-+/, "") // trim - from start of text
      .replace(/-+$/, ""); // trim - from end of text

    return str;
  }
  {
    /*
function convertToSlug(Text){
return Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
*/
  }

  return (
    <div className="blog" key={props.id}>
      <img
        alt="blog"
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
          className="font-bold text-lg hover:underline text-black dark:text-white hover:text-siteColor dark:hover:text-siteColor"
        >
          {props.data.title.length > 60
            ? props.data.title.substring(0, 60) + "..."
            : props.data.title}
        </Link>
        <div
          className="flex flex-row items-center mb-1 text-xs text-gray-400"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="flex flex-row items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{moment(props.data.createdDate).fromNow()}</span>
          </div>
          <span className="ml-2">• 5 min read</span>
          <span className="ml-2">• 8 Comments</span>
        </div>
        <span className="text-sm" style={{ fontFamily: "Poppins" }}>
          {props.data.content.length > 200
            ? decode(striptags(props.data.content.substring(0, 200)))
            : decode(striptags(props.data.content))}
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
          className="text-base text-secondaryColor hover:underline"
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
          className="font-bold text-lg hover:underline text-black dark:text-white hover:text-siteColor dark:hover:text-siteColor"
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
          className="text-base text-secondaryColor hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
*/
