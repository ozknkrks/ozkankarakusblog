import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import parse from "html-react-parser";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
//import { CKEditor } from "@ckeditor/ckeditor5-react";

//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";

import "draft-js/dist/Draft.css";
const BlogDetails = (props) => {
  const [filtered, setFiltered] = useState([]);

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }
  const navigate = useNavigate();
  //const location = useLocation();
  //const blogDetails = location.state;
  let params = useParams();

  useEffect(() => {
    const docRef = doc(db, "posts", params.blogId);
    onSnapshot(docRef, (doc) => {
      //console.log(doc.data(),doc.id)
      setFiltered(doc.data());
      console.log(filtered);
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{filtered.title}</title>
        <link rel="canonical" href="ozkankarakus.com" />
        <meta name="description" content="Nested component" />
      </Helmet>
      <div className="min-h-screen max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-4xl  pt-10 mx-auto md-bg-blue-300">
        <div className="flex flex-row items-center justify-between mb-2">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-100 dark:bg-gray-800 w-7 h-7 flex items-center justify-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex flex-row items-center space-x-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-share-2"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bookmark"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <section
          className="text-3xl font-bold"
          style={{ fontFamily: "Montserrat" }}
        >
          {filtered.title}
        </section>
        <div
          style={{ fontFamily: "Poppins" }}
          className="flex flex-row space-x-3 text-xs pt-3 dark:text-gray-300 text-gray-500"
        >
          <div>Published {filtered.createdAt}</div>
          <div>• 5 min read • </div>
          <div>4 comments</div>
        </div>
        <section className="pt-5 pb-5" style={{ fontFamily: "Poppins" }}>
          {parse(String(filtered.content))}
        </section>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {/* yorumlar */}
          <div className="">
            <span
              className="text-xl font-bold"
              style={{ fontFamily: "Montserrat" }}
            >
              Yorum gönder
            </span>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Adınız"
              className="mt-1 outline-none dark:bg-gray-800 bg-gray-100 rounded-md py-2 px-3 block w-full shadow-sm text-sm"
            />
            <textarea
              id="about"
              name="about"
              rows={3}
              className="shadow-sm outline-none dark:bg-gray-800 py-2 px-3 bg-gray-100 mt-2 block w-full text-sm rounded-md"
              placeholder="Yorumunuz"
              defaultValue={""}
            />
            <button className="bg-emerald-500 text-white px-2   py-1 mt-2 flex mr-auto rounded-sm">
              Gönder
            </button>
          </div>
          {/* yorum gönder */}
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md space-y-3">
            <span
              className="text-xl font-bold"
              style={{ fontFamily: "Montserrat" }}
            >
              Yorumlar
            </span>
            {/* yorum component */}
            <div className="flex flex-row items-start space-x-2">
              <img
                alt="comment author profile"
                src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/08/14/440866-1854448434.jpg?itok=QD0-zZeA"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex flex-col justify-center">
                <span className="" style={{ fontFamily: "Montserrat" }}>
                  Özkan Karakuş
                </span>
                <span className="text-sm" style={{ fontFamily: "Poppins" }}>
                  Title Title Title Title Title Title Title Title Title Title
                  Title Title Title Title Title Title Title Title Title Title
                </span>
              </div>
            </div>
            {/* yorum component */}
            <div className="flex flex-row items-start space-x-2">
              <img
                alt="comment author profile"
                src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/08/14/440866-1854448434.jpg?itok=QD0-zZeA"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex flex-col justify-center">
                <span className="" style={{ fontFamily: "Montserrat" }}>
                  Özkan Karakuş
                </span>
                <span className="text-sm" style={{ fontFamily: "Poppins" }}>
                  Title Title Title Title Title Title Title Title Title Title
                  Title Title Title Title Title Title Title Title Title Title
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black"></div>
      </div>
    </>
  );
};

export default BlogDetails;

/*
<CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
*/
