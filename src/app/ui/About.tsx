import Link from "next/link";

// Icons
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <section className="mt-10 flex flex-col items-center font-medium">
      <div className="h-32 w-32 overflow-hidden rounded-full max-sm:w-28 max-sm:h-28">
        <img
          className="size-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="My photo"
        />
      </div>
      <p className="mt-2 rounded-full bg-white px-4 py-2">Tonny Kimanthi</p>
      <p className="max-w-lg text-center text-3xl max-sm:text-2xl">
        Bulding Websites, from Frontend to Backend.
      </p>
      <div className="mt-2 space-x-2">
        <Link href="#">
          <button className="rounded-full border border-dark bg-dark p-2 text-light transition hover:bg-transparent hover:text-dark">
            <FaLinkedinIn className="size-6" />
          </button>
        </Link>
        <Link href="#">
          <button className="rounded-full border border-dark bg-dark p-2 text-light transition hover:bg-transparent hover:text-dark">
            <FaGithub className="size-6" />
          </button>
        </Link>
        <Link href="#">
          <button className="rounded-full border border-dark bg-dark p-2 text-light transition hover:bg-transparent hover:text-dark">
            <FaXTwitter className="size-6" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
