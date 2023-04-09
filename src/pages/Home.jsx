import { useState } from "react";
import {
  HiHashtag
} from "react-icons/hi";
import NavbarSidebarLayout from "../layout/NavBar-SideBar";

export default function Home() {
  // define a state to keep track of the active tab
  const [activeTab, setActiveTab] = useState('top');
  const [activeTabTag, setActiveTabTag] = useState('toptag');

  // handle click event on a tab button
  const handleTabClick = (tabId) => {
    // update the active tab state
    setActiveTab(tabId);

    // show the corresponding tab content and hide the other tab contents
    const tabs = document.querySelectorAll('[role="tabpanel"]');
    tabs.forEach(tab => {
      if (tab.id === tabId) {
        tab.classList.remove('hidden');
      } else {
        tab.classList.add('hidden');
      }
    });
  }

  // handle click event on a tab button
  const handleTabTagClick = (tabtagId) => {
    // update the active tab state
    setActiveTabTag(tabtagId);

    // show the corresponding tab content and hide the other tab contents
    const tabtags = document.querySelectorAll('[role="tabtagpanel"]');
    tabtags.forEach(tabtag => {
      if (tabtag.id === tabtagId) {
        tabtag.classList.remove('hidden');
      } else {
        tabtag.classList.add('hidden');
      }
    });
  }


return (
    <NavbarSidebarLayout>
      <div className="px-4 pt-2">
          {/* Top idea*/}
          <div className="grid w-full gap-4 xl:grid-cols-2 2xl:grid-cols-3">
         
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Featured Ideas</h3>

              {/* DON'T DEVELOP */}
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select tab</label>
                <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option>Top Ideas</option>
                  <option>Popular Ideas</option>
                  <option>Latest Ideas</option>
                </select>
              </div>

              {/* three tab idea */}
              <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li className="w-full">
                  <button onClick={() => handleTabClick('top')} id="top-tab" data-tabs-target="#top" type="button" role="tab" aria-controls="top" aria-selected={activeTab==='top'} className={activeTab==='top'? "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" : "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"}>Top Ideas</button>
                </li>
                <li className="w-full">
                  <button onClick={() => handleTabClick('popular')} id="popular-tab" data-tabs-target="#popular" type="button" role="tab" aria-controls="popular" aria-selected={activeTab==='popular'} className={activeTab==='popular'? "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" : "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"}>Popular Ideas</button>
                </li>
                <li className="w-full">
                  <button onClick={() => handleTabClick('latest')} id="latest-tab" data-tabs-target="#latest" type="button" role="tab" aria-controls="latest" aria-selected={activeTab==='latest'} className={activeTab==='latest'? "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" : "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"}>Latest Ideas</button>
                </li>
              </ul>

              <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                <div className={activeTab === 'top'? 'pt-4':'hidden pt-4'} id="top" role="tabpanel" aria-labelledby="top-tab">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 1
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              
                              Ten nguoi dang
                              <span className="ml-2 text-gray-500">moc Created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          Luot like/ tha tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 1
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              
                              Ten nguoi dang
                              <span className="ml-2 text-gray-500">moc Created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          Luot like/ tha tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 2
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                             
                              Ten nguoi dang
                              <span className="ml-2 text-gray-500">moc Created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          luot like/tha tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/watch.png" alt="watch image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 3
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                             
                              Ten nguoi dung
                              <span className="ml-2 text-gray-500">created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          luot like/ tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/ipad.png" alt="ipad image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              
                              Nguoi dang
                              <span className="ml-2 text-gray-500">createdAt</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          luong like
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Titlr 5
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
                              </svg>
                              dlda
                              <span className="ml-2 text-gray-500">meomeo</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                         tim
                        </div>
                      </div>
                    </li>               
                  </ul>
                </div>

                <div className={activeTab === 'popular'? 'pt-4':'hidden pt-4'} id="popular" role="tabpanel" aria-labelledby="popular-tab">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $3320
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 1
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              
                              Ten nguoi dang
                              <span className="ml-2 text-gray-500">moc Created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          Luot like/ tha tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $2467
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/michael-gough.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $2235
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/thomas-lean.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $1842
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $1044
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className={activeTab === 'latest'? 'pt-4':'hidden pt-4'} id="latest" role="tabpanel" aria-labelledby="latest-tab">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $3320
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 1
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              
                              Ten nguoi dang
                              <span className="ml-2 text-gray-500">moc Created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          Luot like/ tha tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $2467
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/michael-gough.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $2235
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/thomas-lean.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $1842
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $1044
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>



            {/*Top tag */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Featured Tags</h3>

              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select tab</label>
                <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option>Top Tags</option>
                  <option>Latest Tags</option>
                </select>
              </div>

              <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li className="w-full">
                  <button onClick={() => handleTabTagClick('toptag')} id="toptag-tab" data-tabs-target="#toptag" type="button" role="tabtag" aria-controls="toptag" aria-selected={activeTabTag==='toptag'} className={activeTabTag==='toptag'? "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" : "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"}>Top Tags</button>
                </li>
                <li className="w-full">
                  <button onClick={() => handleTabTagClick('latesttag')} id="latesttag-tab" data-tabs-target="#latesttag" type="button" role="tabtag" aria-controls="latesttag" aria-selected={activeTabTag==='latesttag'} className={activeTabTag==='latesttag'? "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" : "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"}>Latest Tags</button>
                </li>
              </ul>


              <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                <div className={activeTabTag === 'toptag'? 'pt-4':'hidden pt-4'} id="toptag" role="tabtagpanel" aria-labelledby="toptag-tab">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 1
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              
                              Ten nguoi dang
                              <span className="ml-2 text-gray-500">moc Created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          Luot like/ tha tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 2
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                             
                              Ten nguoi dang
                              <span className="ml-2 text-gray-500">moc Created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          luot like/tha tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/watch.png" alt="watch image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title 3
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                             
                              Ten nguoi dung
                              <span className="ml-2 text-gray-500">created At</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          luot like/ tim
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/ipad.png" alt="ipad image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Title
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              
                              Nguoi dang
                              <span className="ml-2 text-gray-500">createdAt</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          luong like
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">
                              Idea Titlr 5
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
                              </svg>
                              dlda
                              <span className="ml-2 text-gray-500">meomeo</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                         tim
                        </div>
                      </div>
                    </li>               
                  </ul>
                </div>

                <div className={activeTabTag === 'latesttag'? 'pt-4':'hidden pt-4'} id="latesttag" role="tabtagpanel" aria-labelledby="latesttag-tab">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $3320
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $2467
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/michael-gough.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $2235
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/thomas-lean.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $1842
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $1044
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                <div>
                </div>
                <div className="flex-shrink-0">
                  <a href="/tag" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                    Read more...
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

      
          {/* Idea */}
          <div className="grid w-full grid-cols-1 my-4 ">

            <div style={{ display: 'flex', alignItems: 'center' }} className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 14.1907C24 12.7352 23.7409 11.3397 23.2659 10.0486C22.9412 13.8526 20.9132 15.8065 18.7941 14.8966C16.8092 14.0439 18.1468 10.7199 18.2456 9.13377C18.4122 6.44506 18.2372 3.36742 13.3532 0.808594C15.3826 4.69095 13.5882 7.10295 11.7064 7.24977C9.61835 7.41283 7.70612 5.45542 8.412 2.27895C6.12635 3.96318 6.06 6.79801 6.76518 8.63189C7.50071 10.5434 6.73553 12.1317 4.94188 12.3081C2.93718 12.5058 1.82329 10.1615 2.85035 6.42601C1.07294 8.51895 0 11.2295 0 14.1907C0 20.8182 5.37247 26.1907 12 26.1907C18.6275 26.1907 24 20.8182 24 14.1907Z" fill="#F4900C" />
                <path d="M19.3349 17.7211C19.4393 19.8981 17.5271 20.7515 16.4979 20.3393C15.0113 19.7442 15.4102 18.7221 15.0276 16.6044C14.645 14.4868 13.1746 13.0164 10.9984 12.3691C12.5866 16.8395 10.1182 18.487 8.82428 18.7814C7.50287 19.0821 6.17511 18.7807 6.02334 15.9529C4.4817 17.4875 3.52734 19.6108 3.52734 21.9571C3.52734 22.2169 3.54358 22.4724 3.56617 22.7266C5.73323 24.8682 8.70993 26.1924 11.9979 26.1924C15.2859 26.1924 18.2626 24.8682 20.4297 22.7266C20.4523 22.4724 20.4685 22.2169 20.4685 21.9571C20.4685 20.4134 20.0563 18.967 19.3349 17.7211Z" fill="#FFCC4D" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> TODAY'S IDEA</h3>
            </div>


            

      
            <div className="my-1"></div>
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              
              {/* One short idea */}
              <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit text-left">
                <article className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {/* Avatar user */}
                      <p className="inline-flex items-center mr-3 text-md font-semibold text-gray-900 dark:text-white"><img className="w-8 h-8 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie avatar" />Bonnie Green</p>
                      {/* Created At */}
                      <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                    </div>                    
                  </div>

                    {/* Subject tag/ tag name */}
                  <div className="flex items-center justify-start flex-1 text-md text-green-500 font-semibold dark:text-green-500">
                    <HiHashtag size='1.3rem'/> Tag name
                  </div>

                  {/* Title of idea */}
                  <p className="mb-3 text-gray-900 font-semibold dark:text-white">Title of idea</p>

                
                  {/* Short content */}
                  <p className="mb-2 text-gray-900 dark:text-white text-justify">
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.                     Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month....
                  </p>
                  
                  {/* Call id */}
                  <a href="/viewidea" className="inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500">
                    Read more ...
                  </a>
               
                  
                </article>
              </form>

            </div>



            <div className="my-1"></div>
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              
              {/* One short idea */}
              <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit text-left">
                <article className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {/* Avatar user */}
                      <p className="inline-flex items-center mr-3 text-md font-semibold text-gray-900 dark:text-white"><img className="w-8 h-8 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie avatar" />Bonnie Green</p>
                      {/* Created At */}
                      <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                    </div>                    
                  </div>

                    {/* Subject tag/ tag name */}
                  <div className="flex items-center justify-start flex-1 text-md text-green-500 font-semibold dark:text-green-500">
                    <HiHashtag size='1.3rem'/> Tag name
                  </div>

                  {/* Title of idea */}
                  <p className="mb-3 text-gray-900 font-semibold dark:text-white">Title of idea</p>

                
                  {/* Short content */}
                  <p className="mb-2 text-gray-900 dark:text-white text-justify">
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.                     Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                    Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                  </p>

                  {/* Call id */}
                  <a href="/viewidea" className="inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500">
                    Read more ...
                  </a>
               
                  
                </article>
              </form>

            </div>
          </div>
        </div>
    </NavbarSidebarLayout>
);
};