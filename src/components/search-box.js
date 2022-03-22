import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
//import { collection, getDocs } from "firebase/firestore";
//import { db } from "../firebase";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import parse from "html-react-parser";
import AnimationData from "../lotties/searching.json";
const SearchBox = (props) => {
  const [searchInput, setSearchInput] = useState("");
  //const [posts, setPosts] = useState([]);
  //const postsCollectionRef = collection(db, "posts");
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className=" w-full text-center max-w-md mx-auto lg:max-w-2xl flex flex-col space-y-4 py-10  items-center justify-center">
      <span className="font-bold text-3xl text-black dark:text-white">
        DevBlog - A Blog Web Site Made For Developers
      </span>
      <span className="text-gray-500" style={{ fontFamily: "Poppins" }}>
        Welcome to my blog. Subscribe and get my latest blog post in your inbox.
      </span>
      <div className="flex flex-row">
        <input
          className="rounded-md px-3 h-10 w-96  outline-none bg-gray-50 focus:ring-1 focus:ring-inherit focus:ring-emerald-400 dark:bg-gray-800"
          placeholder="Bir arama yap"
          style={{ fontFamily: "Poppins" }}
          onClick={openModal}
          onChange={openModal}
        />
        <button
          className="h-10 bg-emerald-500 px-5 text-white rounded-md ml-2"
          style={{ fontFamily: "Poppins" }}
        >
          Ara
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl px-6 py-2 my-8 overflow-hidden text-left align-top transition-all transform bg-white shadow-xl rounded-2xl ">
                <div className="flex flex-row items-center justify-center border-b-2 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 stroke-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    value={searchInput}
                    onChange={(x) => setSearchInput(x.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Search"
                    className="mt-1 h-7 flex-1 appearance-none focus:outline-none focus:shadow-outline px-3 text-sm placeholder:text-gray-300  text-black ring-0 focus:ring-0 border-0 ring-offset-0  block w-full rounded-md"
                  />
                  {searchInput.length > 0 ? (
                    <button
                      onClick={() => {
                        setSearchInput("");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 stroke-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  ) : null}
                </div>
                <div className="py-3">
                  <span
                    className="text-black font-bold"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Arama Sonuçları
                  </span>
                </div>
                <div className="space-y-2">
                  {searchInput.length > 0 &&
                  props.posts.filter((x) =>
                    x.title.toLowerCase().includes(searchInput.toLowerCase())
                  ).length > 0 ? (
                    props.posts
                      .filter((x) =>
                        x.title
                          .toLowerCase()
                          .includes(searchInput.toLowerCase())
                      )
                      .slice(0, 10)
                      .map((post) => (
                        <div className="flex flex-row ">
                          <img
                            alt="post image"
                            src={post.imageUrl}
                            className="w-16 h-16 rounded-md object-cover"
                          />
                          <div className="flex flex-col flex-1 px-3 text-sm">
                            <Link
                              to={{
                                pathname:
                                  "/blog/" +
                                  convertToSlug(post.title) +
                                  "-" +
                                  post.id,
                              }}
                              state={post}
                              className="text-black font-bold hover:text-emerald-400"
                              style={{ fontFamily: "Poppins" }}
                            >
                              {post.title.length > 45
                                ? post.title.substring(0, 45) + "..."
                                : post.title}
                            </Link>
                            <span className="text-black">
                              {post.content.length > 90
                                ? parse(post.content.substring(0, 90))
                                : parse(post.content)}
                            </span>
                          </div>
                        </div>
                      ))
                  ) : (
                    <Lottie options={defaultOptions} height={100} width={100} />
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default SearchBox;
{
  /*
<Lottie options={defaultOptions} height={200} width={200} />
 */
}
