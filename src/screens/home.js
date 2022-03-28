import React, { useEffect, useState } from "react";
import SkillCard from "../components/skill-card";
import ProjectComponent from "../components/project";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Home = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const projectsCollectionRef = collection(db, "projects");
  const skillsCollectionRef = collection(db, "skills");
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getProjects();
    const getSkills = async () => {
      const data = await getDocs(skillsCollectionRef);
      setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getSkills();
  }, []);
  return (
    <div className="min-h-screen w-full">
      <div className="pt-5 px-5 border-b-2 border-b-gray-100 dark:border-b-gray-800 w-full bg-gray-100 dark:bg-transparent">
        <div className="flex flex-col py-10 md:flex-row md:space-x-4 space-y-5 md:space-y-0 justify-between items-start md:items-center max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl   mx-auto">
          <div className="flex flex-col items-start justify-center space-y-2">
            <span
              className="text-gray-800 dark:text-white font-bold text-4xl"
              style={{ fontFamily: "Montserrat" }}
            >
              Özkan Karakuş
            </span>
            <span
              className="font-thin text-2xl"
              style={{ fontFamily: "Poppins" }}
            >
              Senior Software Developer
            </span>
            <span style={{ fontFamily: "Poppins" }}>
              I'm a software engineer specialised in frontend and backend
              development for complex scalable web apps. I write about software
              development on my blog. Want to know how I may help your project?
              Check out my project portfolio and online resume.
            </span>
            <div
              className="flex flex-row items-center space-x-5"
              style={{ fontFamily: "Poppins" }}
            >
              <button className="bg-secondaryColor  text-white py-2 px-5 rounded-md font-semibold">
                Portföy indir
              </button>
              <button className="bg-gray-600 dark:bg-gray-800 transition-colors delay-200 text-white py-2 px-5 rounded-md font-bold">
                CV indir
              </button>
            </div>
          </div>
          <img
            alt="profile"
            src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/profile-lg.jpg"
            className="aspect-square h-52 object-cover rounded-sm"
          />
        </div>
      </div>

      {/*What i do */}
      <div className="border-b-2 border-b-gray-100 dark:border-b-gray-800 py-10">
        <div className="max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl  mx-auto space-y-5">
          <div className="flex flex-col justify-center space-y-5 mx-auto">
            <span
              className="text-2xl border-l-4 font-bold rounded-tl-sm rounded-bl-sm border-l-siteColor pl-3"
              style={{ fontFamily: "Poppins" }}
            >
              Ben kimim?
            </span>
            <span
              style={{ fontFamily: "Poppins" }}
              className=" text-gray-500 dark:text-gray-400"
            >
              I have more than 10 years' experience building software for
              clients all over the world. Below is a quick overview of my main
              technical skill sets and technologies I use. Want to find out more
              about my experience? Check out my online resume and project
              portfolio.{" "}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {skills.map((skill) => (
              <SkillCard data={skill} />
            ))}
          </div>
        </div>
      </div>

      {/*featured projects */}
      <div className="py-10">
        <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl ">
          <h2
            className="mb-8 text-2xl font-bold border-l-4 rounded-tl-sm rounded-bl-sm border-l-siteColor pl-3"
            style={{ fontFamily: "Poppins" }}
          >
            Öne Çıkan Projeler
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {projects.slice(0, 2).map((project) => (
              <ProjectComponent data={project} />
            ))}
          </div>
          <Link
            to={{
              pathname: "/portfolio/",
            }}
            className=" bg-secondaryColor text-white px-4 py-2  mt-4 rounded-md flex w-28 items-center justify-center mx-auto text-xs font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            Tümünü gör
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
