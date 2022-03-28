import React, { useEffect, useState} from "react";
import ProjectComponent from "../components/project";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
//import { SegmentedControl } from "segmented-control";
//import SegmentedControl from "../components/SegmentedControl";
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  //const [selected, setSelected] = useState([]);
  const projectsCollectionRef = collection(db, "projects");
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getProjects();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-gray-100 dark:bg-gray-900 dark:border-b border-b-gray-800">
        <div className="flex flex-col items-center text-center py-10  max-w-md xl:max-w-2xl mx-auto space-y-5">
          <h2 className="text-2xl" style={{ fontFamily: "Montserrat" }}>
            Porfolio
          </h2>
          <span>
            Welcome to my online portfolio. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm
            taking on freelance work at the moment. Want some help building your
            software?
          </span>
          <button className="bg-secondaryColor px-4 py-2 rounded-md font-bold text-white">
            Hire me
          </button>
        </div>
      </div>
      <div className=" max-w-sm mx-auto my-5">
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto pt-5  gap-4">
        {projects.map((project) => (
          <ProjectComponent data={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
