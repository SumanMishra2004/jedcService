import {
  AlignLeft,
  ChevronLeft,
  ChevronRight,
  FacebookIcon,
  Instagram,
  MailCheckIcon,
  SearchIcon,
  User,
  X,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import "./SmNavbar.css"; // Import the CSS file for animations
import { Button } from "../ui/button";

function SmNavbar() {
  const [isClicked, setIsClicked] = useState(false);

  const ClickEvent = () => {
    setIsClicked(!isClicked);
  };

  const closeModal = () => {
    setIsClicked(false);
  };
  const [isAboutClicked, setIsAboutClicked] = useState(false);

  const AboutClickEvent = () => {
    console.log("clicked");

    setIsAboutClicked(!isAboutClicked);
  };

  const AboutcloseModal = () => {
    setIsAboutClicked(false);
  };

  return (
    <div className="w-full h-20 flex bg-white backdrop-filter backdrop-blur-sm bg-opacity-50  text-black items-center justify-between p-3">
      <div className="flex h-full w-auto gap-6 items-center">
        <AlignLeft onClick={ClickEvent} />
        <div className="logoArea h-full w-[8rem] bg-red-400">a</div>
      </div>
      <div className="flex h-full w-auto gap-6 items-center">
        <SearchIcon />
        <User />
      </div>
      {isClicked && (
        <div className="fixed top-0 left-0 w-full h-full flex z-[111]">
          <div className="bg-black/80 backdrop-filter backdrop-blur-sm bg-opacity-20 w-full h-full p-4 slide-in-left">
            <X
              onClick={closeModal}
              className="cursor-pointer text-white absolute right-3 top-2 size-7"
            />
            <nav>
              <ul className="flex flex-col items-center gap-6 text-2xl text-white mt-7">
                <li
                  className=" flex flex-row gap-2 items-center justify-center"
                  onClick={AboutClickEvent}
                >
                  About Us <ChevronRight />
                </li>
                <li>Journals</li>
                <li>Articles</li>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="w-full shadow-xl text-xl text-black border border-black"
                >
                  Publish an Article
                </Button>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="w-full shadow-xl text-xl text-black border border-black underline"
                >
                  <SearchIcon /> Search an Article
                </Button>
                <Button
                  variant={"destructive"}
                  size={"lg"}
                  className="w-full shadow-xl text-xl "
                >
                  Sign In
                </Button>
              </ul>
            </nav>
          </div>
        </div>
      )}
      {isAboutClicked && (
        <div className="fixed top-0 left-0 w-full h-full flex z-[999]  overflow-y-scroll">
          <div className="bg-black/80 backdrop-filter backdrop-blur-sm bg-opacity-20 w-full h-fit min-h-screen py-9  p-4 slide-in-left">
            <ChevronLeft
              onClick={AboutcloseModal}
              className="cursor-pointer text-white absolute left-3 top-2 size-7"
            />
            <AboutNavbar />
            <div className="absolute top-2 right-3 flex gap-6 justify-center items-center h-fit w-fit">
              <MailCheckIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <FacebookIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <Instagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <XIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SmNavbar;

const AboutNavbar = () => {
  return (
    <nav className="h-fit w-full">
      <div className="flex md:flex-row flex-col justify-around items-start pl-7 gap-6 text-2xl text-white mt-7">
        <div className="flex flex-col gap-7 text-base">
          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              Who are we
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Our Mission
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Our Vision
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Our Team
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              News and Announcement
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Call for Papers
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Upcoming Conference{" "}
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Award and Recognitions
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                New Members
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              Policies and Guideline
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Editorial Policies
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Submission Guidelines
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Reviewer Guidelines
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-base">
          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              Publishing Model
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                How we publish
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Templates
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Open access
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Fee policy
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Peer review
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Research Topics
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-200 hover:text-white text-2xl underline transition-all delay-100 cursor-pointer">
              Get in Touch
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Be a Sponser
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Contact Us
              </p>
              <p className=" text-gray-200 hover:text-white transition-all delay-100 cursor-pointer">
                Social media and mail
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
/*


*/