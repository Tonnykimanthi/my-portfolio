import Link from "next/link";
import Image from "next/image";
// Constants
import { projectsList } from "../constants/projectsList";
// Icons
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="grid grid-cols-3 gap-5 text-light max-lg:grid-cols-2 max-sm:grid-cols-1">
      {projectsList.map((project, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-lg bg-dark shadow shadow-primary/50 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/50"
        >
          <div className="h-52">
            <Image
              src={project.imgURL}
              alt={`${project.name} thumbnail`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-2">
            <Link
              href={project.linkURL}
              target="_blank"
              className="group/link flex w-fit items-center gap-x-1.5 text-lg font-medium text-accent"
            >
              <h3>{project.name}</h3>
              <FaArrowRight className="transition group-hover/link:translate-x-1" />
            </Link>
            <p>
              <span className="font-medium">Stack:</span> {project.stack}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
