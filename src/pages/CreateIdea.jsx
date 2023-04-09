import React, { useState } from 'react';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import {
    HiHashtag,
    HiTag,
    HiGlobe,
    HiKey
} from "react-icons/hi";
import NavbarSidebarLayout from "../layout/NavBar-SideBar";

export default function CreateIdea() {
    const [files, setFiles] = useState([]);

  function handleFileUpload(e) {
    const file = e.target.files[0];
    setFiles([...files, {
      name: file.name,
      type: file.type,
      size: file.size
    }]);
  }

  const [isGlobal, setIsGlobal] = useState(true);

  const handleClick = () => {
    setIsGlobal(!isGlobal);
  };
  

return (
    <NavbarSidebarLayout>
       <div className="px-4 pt-2 ">
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


                        {/* De global icon o day */}
                     
                        <button id="globalButton"  onClick={handleClick} class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                            {isGlobal ? <HiGlobe size="1.3rem" /> : <HiKey size="1.3rem" />}
                        </button>

                              
                      
                    </div>
                  </div>


                  {/* Subject tag/ tag name */}
                  <div className="flex items-center justify-start flex-1 text-md text-green-500 font-semibold dark:text-green-500 mb-6">
                    <HiTag size='1.3rem'/> De tag name do day luon
                  </div>

                   {/* Title of idea */}
                   <p className="mb-3 text-gray-900 font-semibold dark:text-white">Title of idea</p>


                    <textarea
                    id="chat"
                    rows={1}
                    className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    
                    data-gramm="false"
                    wt-ignore-input="true"
                    defaultValue={""}
                    />


                <p className="mb-2 text-gray-900 dark:text-white text-justify">
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.                     Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month....
                  </p>



                     {/* Content of idea */}
                   <p className="mb-3 text-gray-900 font-semibold dark:text-white mt-6">Content of idea</p>


                    <textarea
                    id="chat"
                    rows={10}
                    className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

                    data-gramm="false"
                    wt-ignore-input="true"
                    defaultValue={""}
                    />


                    <div class="flex items-center justify-center mt-5">
                        <label class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14 3a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h8zm-1.41 2L10 9.41 7.41 7.01 6 8.42l3 3 3-3-1.41-1.41zM6 14v2h8v-2H6z"/></svg>
                            <span class="mt-2 text-base leading-normal" onClick={() => document.querySelector('input[type=file]')}>Select file</span>
                            <input type='file' class="hidden" onChange={handleFileUpload}/>
                        </label>
                    </div>


                
                  <div className="items-center space-x-4 flex">
                    {/* Hien thi mang file upload len */}
                    {/* Item */}

                    {files.map((file, index) => (

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
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{file.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{file.type}, {file.size} MB</p>
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
                    
                    ))};
                  </div>


                  <div class="flex items-center mt-5">
                    <input type="checkbox" className="form-checkbox h-5 w-5 bg-primary-800" checked />
                    <label for="agree-terms" class="ml-2 block text-gray-700 dark:text-gray-400 text-sm">
                        Agree with Terms and Conditions
                    </label>
                </div>
                  

                  <div class="h-0 flex justify-center items-center border border-gray-300 rounded-lg mb-8 mt-10"></div>


                <div className='flex items-center justify-center mt-5'>
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        <span className="text-base leading-normal">Post</span>
                    </button>
                </div>
                 
                    
                
                  </article>
                    
                   
              </form>




            </div>
          </div>
       </div>
    </NavbarSidebarLayout>
);
};