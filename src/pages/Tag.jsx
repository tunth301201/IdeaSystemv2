import React, { useState, useEffect } from 'react';
import {
  HiHashtag,
  HiPlusCircle
} from "react-icons/hi";
import NavbarSidebarLayout from "../layout/NavBar-SideBar";
import { getTags } from '../api/apiService';
import { Link } from 'react-router-dom';

export default function Tag() {

  const [tags, setTags] = useState([]);
  useEffect(() => {
    getTags().then(res => {
      setTags(res.data);
    });
  }, []);

return (
    <NavbarSidebarLayout>
      <div className="relative w-full h-full overfloe-y-auto">
       <div className="px-4 pt-2 sm:ml-64">
       <div className="grid w-full grid-cols-1 ">
        {tags.map(t => (

        <>
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              
          {/* Chat */}
          
          <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit text-left mb-0">
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
                    {t.user_name}
                  </p>
                  {/* Created At */}
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                      {" "}
                      {t.createdAt}
                    </time>
                  </p>
                </div>

                <Link to={`/createIdea/${t._id}`} class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                  <HiPlusCircle size='1.7rem'/>
                </Link>
              </div>

              {/* Subject tag/ tag name */}
              <div className="flex items-center justify-start flex-1 text-md text-green-500 font-semibold dark:text-green-500">
                <HiHashtag size='1.3rem'/> {t.subject}
              </div>


              {/* content */}
              <p className="mb-2 text-gray-900 dark:text-white text-justify">
                {t.description}
              </p>
              <p className="mb-3 text-gray-900 dark:text-white">Looking forward to it! Thanks.</p>

              <div className='flex items-center justify-between'>

            
                  <p className="text-md text-green-500 font-semibold dark:text-green-500">
                      <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                        {" "}
                        Start Date: {t.start_dateOfTag}
                      </time>
                    </p>

              
                  <p className="text-md text-green-500 font-semibold dark:text-green-500">
                      <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                        {" "}
                        End Date: {t.end_dateOfTag}
                      </time>
                    </p>
            

                
                  <p className="text-md text-green-500 font-semibold dark:text-green-500">
                      <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                        {" "}
                        End Date for Discussion: {t.end_dateOfIdea}
                      </time>
                    </p>
             
              
              </div>

            </article>
          </form>

        </div>

        <div className="my-1"></div>
        </>
        ))}
        
          </div>
       </div>
       </div>
    </NavbarSidebarLayout>
);
};