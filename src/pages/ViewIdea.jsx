import React, { useState } from 'react';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import {
    HiHashtag
} from "react-icons/hi";
import NavbarSidebarLayout from "../layout/NavBar-SideBar";

export default function ViewIdea() {

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setIsDisliked(false);
    };

    const handleDislikeClick = () => {
        setIsDisliked(!isDisliked);
        setIsLiked(false);
    };

return (
    <NavbarSidebarLayout>
       <div className="px-4 pt-2 sm:ml-64">
       <div className="grid w-full grid-cols-1 ">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              

              {/* Chat */}
              <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit text-left">
                <article className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                         {/* Avatar user */}
                      <p className="inline-flex items-center mr-3 text-md font-semibold text-gray-900 dark:text-white">
                        <img
                          className="w-8 h-8 mr-2 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese avatar"
                        />
                        Jese Leos
                      </p>
                      {/* Created At */}
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                          {" "}
                          01/03/2023 4:15 PM
                        </time>
                      </p>
                    </div>
                  </div>

                  {/* Subject tag/ tag name */}
                  <div className="flex items-center justify-start flex-1 text-md text-green-500 font-semibold dark:text-green-500">
                    <HiHashtag size='1.3rem'/> Tag name
                  </div>

                  {/* Title of idea */}
                  <p className="mb-3 text-gray-900 font-semibold dark:text-white">Title of idea</p>


                  {/* content */}
                  <p className="mb-2 text-gray-900 dark:text-white text-justify">
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.                     Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month....
                  </p>
                  <p className="mb-3 text-gray-900 dark:text-white">Looking forward to it! Thanks.</p>


                  <div className="items-center space-x-4 flex">
                    {/* Item */}
                    <div className="flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-primary-100 dark:bg-primary-900">
                        <svg
                          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                      </div>
                      <div className="mr-4">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">flowbite_offer_345"</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">PDF, 2.3 MB</p>
                      </div>
                      <div className="flex items-center ml-auto">
                        <button type="button" className="p-2 rounded hover:bg-gray-100">
                          <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                            />
                          </svg>
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>

                    {/* Item */}
                    <div className="flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 bg-teal-100 rounded-lg dark:bg-teal-900">
                        <svg
                          className="w-5 h-5 text-teal-600 lg:w-6 lg:h-6 dark:text-teal-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <div className="mr-4">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">bergside_pitch"</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">PPTX, 10.1 MB</p>
                      </div>
                      <div className="flex items-center ml-auto">
                        <button type="button" className="p-2 rounded hover:bg-gray-100">
                          <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                            />
                          </svg>
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>

                  </div>

                  <div className="flex justify-end items-center mb-2 space-x-2">
                    <button type="button" onClick={handleDislikeClick} className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                       
                       {isDisliked ? <AiFillDislike size="2rem" style={{ color: "red" }} /> : <AiOutlineDislike size="2rem" />}
                      <span className="text-md font-medium text-gray-500 dark:text-gray-400 ml-1">14</span>
                    </button>

                    <button type="button" onClick={handleLikeClick} className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                    {isLiked ? <AiFillLike size="2rem" style={{ color: "blue" }} /> : <AiOutlineLike size="2rem" />}
                      <span className="text-md font-medium text-gray-500 dark:text-gray-400 ml-1">8</span>
                    </button>
                  </div>

                  <div class="h-0 flex justify-center items-center border border-gray-300 rounded-lg mb-8"></div>


                    {/* Comment */}
                    <article className="pl-12 mb-5 my-1 pb-3">
                    <footer className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                          <img
                            className="w-6 h-6 mr-2 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            alt="Joseph avatar"
                          />
                          Joseph McFallen
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                            {" "}
                            01/03/2023 4:15 PM
                          </time>
                        </p>
                      </div>

                      {/* Neu cmt do la cua minh thi cho nhan xoa */}

                <button id="dropdownComment4Button" aria-expanded="false" data-dropdown-toggle="dropdownComment4" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                    <span class="sr-only">Comment settings</span>
                </button>

                <div id="dropdownComment4" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-30 dark:bg-gray-700 dark:divide-gray-600 block" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(834px, -3987.5px, 0px)'}} data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                        </li>
                    </ul>
                </div>



                    </footer>
                    <p className="mb-2 text-gray-900 dark:text-white">
                      Hello{" "}
                      <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">
                        @jeseleos
                      </a>{" "}
                      I need some informations about flowbite react version.
                    </p>
                  </article>
                    
                    {/* Comment */}
                    <article className="pl-12 mb-5 my-1 pb-3">
                    <footer className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                          <img
                            className="w-6 h-6 mr-2 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            alt="Joseph avatar"
                          />
                          Joseph McFallen
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                            {" "}
                            01/03/2023 4:15 PM
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p className="mb-2 text-gray-900 dark:text-white">
                      Hello{" "}
                      <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">
                        @jeseleos
                      </a>{" "}
                      I need some informations about flowbite react version.
                    </p>
                  </article>


                    {/* Comment */}
                  <article className="pl-12 mb-5 my-1">
                    <footer className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                          <img
                            className="w-6 h-6 mr-2 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            alt="Joseph avatar"
                          />
                          Joseph McFallen
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                            {" "}
                            01/03/2023 4:15 PM
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p className="mb-2 text-gray-900 dark:text-white">
                      Hello{" "}
                      <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">
                        @jeseleos
                      </a>{" "}
                      I need some informations about flowbite react version.
                    </p>
                  </article>
                    
                    {/* Reply */}
                  <article className="pl-20 mb-5">
                    <footer className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                          <img
                            className="w-6 h-6 mr-2 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Jese avatar"
                          />
                          Jese Leos
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                            {" "}
                            01/03/2023 4:15 PM
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p className="mb-4 text-gray-900 dark:text-white">
                      Hi{" "}
                      <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">
                        @josephh
                      </a>{" "}
                      Sure, just let me know whean you are available and we can speak.
                    </p>
                    <label htmlFor="chat" className="sr-only">
                      Your message
                    </label>
                    <div className="flex items-center mb-5">
                      <textarea
                        id="chat"
                        rows={1}
                        className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Reply ..."
                        data-gramm="false"
                        wt-ignore-input="true"
                        defaultValue={""}
                      />
                      <button
                        type="submit"
                        className="inline-flex justify-center p-2 rounded-lg cursor-pointer text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600">
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 rotate-90"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        <span className="sr-only">Send message</span>
                      </button>
                    </div>
                    <a href="/home" className="inline-flex items-center text-xs font-medium cursor-pointer hover:underline text-primary-700 sm:text-sm dark:text-primary-500">
                      Hide away
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        />
                      </svg>
                    </a>
                  </article>


                </article>
              </form>




            </div>
          </div>
       </div>
    </NavbarSidebarLayout>
);
};