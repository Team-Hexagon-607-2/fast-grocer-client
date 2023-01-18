/****
 *author: md atiqul islam
 *This is mobile navbar full container
 *mobile left bar icon here and other searchBar and rightBar icon here
 *
 */

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineWechat } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsQuestionCircleFill } from "react-icons/bs";
import MobileSearch from "./MobileSearch";
import MobileRightbar from "./MobileRightbar";
import { AiFillHome, AiOutlineShop, AiFillContacts } from "react-icons/ai";
import { MdContactPage, MdPointOfSale } from "react-icons/md";
import { ImBlogger } from "react-icons/im";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-row overflow-hidden">
      {/* Left Drawer for mobile */}
      <div>
        <div className="drawer-content mt-4 ml-5 flex flex-row  justify-around ">
          {/* left drawer icon here */}
          <div className="mt-1" onClick={() => setToggle((prev) => !prev)}>
            <AiOutlineMenu size={32} color="black" />
          </div>
          {/* mobile search bar */}
          <div>
            <MobileSearch />
          </div>
          {/* mobile right 3 dots sidebar */}
          <div>
            <MobileRightbar />
          </div>
        </div>

        {/* full left sidebar content here */}
      </div>
      {toggle && (
        <div
          className={`transition slide-right duration-700 transform absolute top-0 h-[100vh] rounded-br-[15px]  w-9/12 opacity-100 bg-[#FCFFF6] backdrop-blur-lg z-10
            p-6 sm:hidden  ${toggle ? "left-[-100px]" : "-left-full"} `}
        >
          <div className="slide-top">
            <div
              onClick={() => setToggle((prev) => !prev)}
              className="flex  mb-10 items-center justify-end"
            >
              <AiOutlineClose size={40} color="black" />
            </div>
            <div className="mr-10 flex flex-col  gap-10 ">
              <Link
                onClick={() => setToggle((prev) => !prev)}
                to="/"
                className="flex gap-2   cursor-pointer items-center"
              >
                <AiFillHome size={28} color="92B137" /> Home
              </Link>
              <div className="flex gap-2   cursor-pointer items-center">
                <div className="dropdown ">
                  <label
                    tabIndex={0}
                    className="flex gap-1 cursor-pointer items-center justify-center"
                  >
                    <AiOutlineShop size={28} color="92B137" /> Category{" "}
                    <RiArrowDownSLine />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Winter Collection</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                onClick={() => setToggle((prev) => !prev)}
                to="/"
                className="flex gap-2   cursor-pointer items-center"
              >
                <MdContactPage size={28} color="92B137" /> Pages
                <RiArrowDownSLine />
              </Link>
              <Link
                onClick={() => setToggle((prev) => !prev)}
                to="/"
                className="flex gap-2   cursor-pointer items-center"
              >
                <ImBlogger size={24} color="92B137" /> Blog
              </Link>
              <Link
                onClick={() => setToggle((prev) => !prev)}
                to="/"
                className="flex gap-2   cursor-pointer items-center"
              >
                <p>
                  <MdPointOfSale size={28} color="92B137" />{" "}
                </p>
                <p>On Sale</p>
              </Link>
              <Link
                onClick={() => setToggle((prev) => !prev)}
                to="/"
                className="flex gap-2   cursor-pointer items-center"
              >
                <p>
                  <FaBookReader size={28} color="92B137" />{" "}
                </p>
                <p>About Us</p>
              </Link>
              <Link
                onClick={() => setToggle((prev) => !prev)}
                to="/"
                className="flex gap-2   cursor-pointer items-center"
              >
                <p>
                  <AiFillContacts size={28} color="92B137" />{" "}
                </p>
                <p>Contact</p>
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[60px] border-t-[1px] bg-white shadow-2xl">
              <div className="flex flex-row items-center justify-center gap-10 mt-4 ">
                <div className="flex items-center justify-center gap-1 ">
                  <BsQuestionCircleFill color="#FD6C87" size={20} />
                  <p className="text-sm text-black">Help</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                  <AiOutlineWechat color="#FD6C87" size={28} />

                  <p className="text-sm text-black"> File a complaint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;

//close menu
// <label htmlFor="my-drawer" className="">
// <AiOutlineClose size={35} color="black" />
// </label>
{
  /* <div className="drawer-side z ">
            <label
              htmlFor="my-drawer"
              className="drawer-overlay overflow-y-auto "
            ></label>
            <ul className="menu  w-80 bg-white text-black ">
              <div className="flex flex-row justify-between ">
                <div>
                  <div className="flex flex-col p-4 ml-5 mt-5  gap-9 md:text-md font-bold text-black pt-[50px]">
                    <div>
                      <div className="dropdown ">
                        <Link to="/" onClick={(prev) => setToggle(!prev)}>
                          <label
                            tabIndex={0}
                            className="flex gap-1  cursor-pointer items-center justify-center"
                          >
                            <AiFillHome size={28} color="92B137" /> Home
                          </label>
                        </Link>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <div className="dropdown ">
                        <label
                          tabIndex={0}
                          className="flex gap-1 cursor-pointer items-center justify-center"
                        >
                          <AiOutlineShop size={28} color="92B137" /> Shop{" "}
                          <RiArrowDownSLine />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <a>Item 1</a>
                          </li>
                          <li>
                            <a>Item 2</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="dropdown ">
                        <label
                          tabIndex={0}
                          className="flex gap-1 items-center cursor-pointer justify-center"
                        >
                          <MdContactPage size={28} color="92B137" /> Pages
                          <RiArrowDownSLine />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <a>Item 1</a>
                          </li>
                          <li>
                            <a>Item 2</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="dropdown ">
                        <label
                          tabIndex={0}
                          className="gap-2 cursor-pointer flex items-center justify-center"
                        >
                          <ImBlogger size={24} color="92B137" /> Blog
                          <RiArrowDownSLine />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <a>Item 1</a>
                          </li>
                          <li>
                            <a>Item 2</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="gap-1 mr-2 cursor-pointer flex items-center justify-center">
                      <p>
                        <MdPointOfSale size={28} color="92B137" />{" "}
                      </p>
                      <p>On Sale</p>
                    </div>
                    <div className="gap-2  cursor-pointer flex items-center justify-center">
                      <p>
                        <FaBookReader size={28} color="92B137" />{" "}
                      </p>
                      <p>About Us</p>
                    </div>
                    <div className="gap-2 mr-2 cursor-pointer flex items-center justify-center">
                      <p>
                        <AiFillContacts size={28} color="92B137" />{" "}
                      </p>
                      <p>Contact</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <label htmlFor="my-drawer" className="">
                    <AiOutlineClose size={40} color="black" />
                  </label>
                </div>
              </div>

            </ul>
          </div>
        </div>
      </div> */
}
