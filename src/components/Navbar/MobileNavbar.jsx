/****
 *author: md atiqul islam
 *This is mobile navbar full container
 *mobile left bar icon here and other searchBar and rightBar icon here
 *
 */

import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineWechat } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsQuestionCircleFill } from "react-icons/bs";
import MobileSearch from "./MobileSearch";
import MobileRightbar from "./MobileRightbar";

const MobileNavbar = () => {
  return (
    <div className="flex flex-row">
      {/* Left Drawer for mobile */}
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content mt-4 ml-5 flex flex-row  justify-around ">
            {/* left drawer icon here */}
            <label htmlFor="my-drawer" className="mt-1">
              <AiOutlineMenu size={32} color="black" />
            </label>
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

          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay  "></label>
            <ul className="menu  w-80 bg-white text-base-content h-[100vh] ">
              <div className="flex flex-row justify-between ">
                <div>
                  <div className="flex flex-col p-4 ml-5 -mt-4 gap-5 md:text-md font-bold text-black pt-[50px]">
                    <div>
                      <div className="dropdown ">
                        <label
                          tabIndex={0}
                          className="flex  cursor-pointer items-center justify-center"
                        >
                          Home <RiArrowDownSLine />
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
                      {" "}
                      <div className="dropdown ">
                        <label
                          tabIndex={0}
                          className="flex cursor-pointer items-center justify-center"
                        >
                          Shop <RiArrowDownSLine />
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
                          className="flex items-center cursor-pointer justify-center"
                        >
                          Pages <RiArrowDownSLine />
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
                          className="cursor-pointer flex items-center justify-center"
                        >
                          Blog
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
                    <div>On Sale</div>
                    <div>About Us</div>
                    <div>Contact</div>
                  </div>
                </div>
                <div className="p-4">
                  <label htmlFor="my-drawer" className="">
                    <AiOutlineClose size={40} color="black" />
                  </label>
                </div>
              </div>

              <div className="absolute bottom-0  w-full h-[60px] border-t-[1px] bg-white shadow-2xl">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

//close menu
// <label htmlFor="my-drawer" className="">
// <AiOutlineClose size={35} color="black" />
// </label>
