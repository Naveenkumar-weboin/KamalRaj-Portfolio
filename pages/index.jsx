import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
import BooBlack from "@/public/boo-black.svg";
import BooWhite from "@/public/boo-white.svg";
import Link from "next/link";
import ResumeButton from "@/components/ResumeButton";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Pranjal Shikhar %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Kamal Raj-Portfolio</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-between items-center mt-20">
                    <div>
                        <Image
                          src={currentTheme === "dark" ? Avatar_White : Avatar_Black}
                          alt="pranjal"
                          width="80"
                          height="80"
                        />
                        <div className="flex flex-col ml-4">
                          <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                            <span className="font-semibold">KAMAL RAJ</span>
                            <span>
                              <Image
                                src={currentTheme === "dark" ? BooWhite : BooBlack}
                                alt="boo"
                                width="25"
                                height="25"
                              />
                            </span>
                          </h2>
                          <h3>
                            <Link
                              href={"#"}
                              target="_blank"
                              className="text-[#717171bb] flex items-center"
                            >
                              <p>@Kamal</p>
                              <BsArrowUpRight className="stroke-1 h-3" />
                            </Link>
                          </h3>
                        </div>
                    </div>
            <ResumeButton/>
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
          <p className="sm:leading-6 md:leading-6 lg:leading-8">
              A Proficient Full Stack Developer with expertise in backend programming, API integration, and database management.
              Proficient in technologies like Django, ReactJS, NextJS, and PostgreSQL, focused on building scalable, secure, and efficient web solutions.
          </p>
          <p className="sm:leading-6 md:leading-6 lg:leading-8">
              Experienced in creating seamless front-end and back-end interactions, delivering high-quality outcomes within tight deadlines.
              Certified in programming and digital marketing, with a strong track record of designing innovative projects that prioritize user experience
              and cybersecurity best practices.
          </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
