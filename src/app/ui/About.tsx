import Link from "next/link";

// Images
import MyImage from "../../../public/my-image.jpg";

// Icons
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const About = () => {
  return (
    <section className="mt-10 flex flex-col items-center font-medium">
      <div className="h-40 w-40 overflow-hidden rounded-full max-sm:h-28 max-sm:w-28">
        <Image
          src={MyImage}
          alt="My Picture"
          className="size-full object-cover"
        />
      </div>
      <p className="mt-2 rounded-full bg-primary text-white uppercase px-4 py-2">Tonny Kimanthi</p>
      <p className="max-w-lg text-center text-3xl max-sm:text-2xl">
        Bulding Websites, from Frontend to Backend.
      </p>
      <div className="mt-2 space-x-2">
        <Link href="https://www.linkedin.com/in/tonnykimanthi/" target="_blank">
          <button className="rounded-full border border-dark bg-dark p-2 text-light transition hover:bg-transparent hover:text-dark">
            <FaLinkedinIn className="size-6" />
          </button>
        </Link>
        <Link href="https://github.com/Tonnykimanthi" target="_blank">
          <button className="rounded-full border border-dark bg-dark p-2 text-light transition hover:bg-transparent hover:text-dark">
            <FaGithub className="size-6" />
          </button>
        </Link>
        <Link href="https://x.com/TonyKm_" target="_blank">
          <button className="rounded-full border border-dark bg-dark p-2 text-light transition hover:bg-transparent hover:text-dark">
            <FaXTwitter className="size-6" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
