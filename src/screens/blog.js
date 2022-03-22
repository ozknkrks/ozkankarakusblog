import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import BlogList from "../components/blog-list";
import SearchBox from "../components/search-box";
import { Helmet } from "react-helmet";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


const Home = () => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [count, setCount] = useState(1);
  
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getPosts();
    //setCount(new Date().toDateString());
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Özkan Karakuş | Blog</title>
        <link rel="canonical" href="ozkankarakus.com" />
        <meta name="description" content="Nested component" />
      </Helmet>
      <SearchBox posts={posts} />

      {/* Blog List */}
      <section className="flex-1 py-10  max-w-md lg:max-w-2xl mx-auto space-y-8 min-h-screen">
        {posts.slice(0, count).map((post) => (
          <BlogList data={post} />
        ))}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          style={{ fontFamily: "Poppins" }}
          className="w-full py-2 text-white rounded-md bg-emerald-400"
        >
          <span>Daha fazla yükle (+1)</span>
        </button>
      </section>
    </>
  );
};

export default Home;
