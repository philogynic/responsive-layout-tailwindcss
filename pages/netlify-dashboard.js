export default function netlifyDashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex-none bg-gray-800 text-gray-100 pb-32">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto p-2">
          <div className="flex flex-row justify-between p-2 items-center border-b border-gray-500">
            <div className="flex flex-col md:flex-row md:space-x-2">
              <div className="bg-blue-200 w-8 h-8"></div>
              <div className="text-xl font-semibold">philogynic's team</div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
              <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
              <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-row text-gray-400 flex-wrap p-2">
            <a className="text-gray-100 mr-4 p-2 rounded-lg bg-gray-500">
              Team overview
            </a>
            <a className="mr-4 p-2 rounded-lg">Sites</a>
            <a className="mr-4 p-2 rounded-lg">Builds</a>
            <a className="mr-4 p-2 rounded-lg">Plugins</a>
            <a className="mr-4 p-2 rounded-lg">Domains</a>
            <a className="mr-4 p-2 rounded-lg">Members</a>
            <a className="mr-4 p-2 rounded-lg">Audit log</a>
            <a className="mr-4 p-2 rounded-lg">Billing</a>
            <a className="mr-4 p-2 rounded-lg">Team settings</a>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-200 text-gray-800">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-gray-100 w-full p-2 rounded-xl p-4 shadow-md">
            <div className="flex items-center pt-2">
              <div className="text-xl font-semibold">philogynic's team</div>
              <div className="ml-2 bg-gray-600 text-gray-100 font-semibold px-1 rounded-md">
                Starter
              </div>
            </div>
            <div>Current billing period (Feb 1 to Mar 1)</div>
            <div className="mt-4">
              Welcome back!
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:flex">
                <div className="flex-1 bg-gray-200 rounded-xl p-2 border-t-8 border-gray-300">
                  Bandwitdh used
                  <div className="text-lg">0KB/100 GB</div>
                </div>
                <div className="flex-1 bg-gray-200 rounded-xl p-2 border-t-8 border-gray-300">
                  Build minutes used
                  <div className="text-lg">0/300</div>
                </div>
                <div className="flex-1 bg-gray-200 rounded-xl p-2 border-t-8 border-gray-300">
                  Concurrent builds
                  <div className="text-lg">0/1</div>
                </div>
                <div className="flex-1 bg-gray-200 rounded-xl p-2 border-t-8 border-gray-200">
                  Members
                  <div className="text-lg">1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2">
            <div className="bg-gray-100 lg:w-3/5 p-2 rounded-xl p-4 shadow-md mt-4">
              <div className="p-2 flex flex-col lg:flex-row lg:items-center justify-between border-b-2 border-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="text-xl font-semibold">Sites</div>
                  <div>
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 py-2 px-4 bg-green-700 text-gray-100 font-semibold rounded-lg text-center">
                  New site from Git
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-2 items-center">
                  <div className="bg-gray-400 w-20 h-14 rounded-md"></div>
                  <div className="text-gray-600 text-lg font-semibold">
                    wizardly-snyder-2a57a0
                  </div>
                </div>
                <div>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 lg:w-2/5 rounded-xl p-4 shadow-md mt-4">
              <div className="p-2 flex flex-col lg:flex-row lg:items-center justify-between border-b-2 border-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="text-xl font-semibold">Build</div>
                  <div>
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="p-2 flex items-center justify-between">
                  <div>
                    <div>
                      wizardly-snyder-2a57a0{" "}
                      <span className="bg-green-200 p-0.5 rounded-md font-semibold">
                        Completed
                      </span>{" "}
                    </div>
                    <div>production: main@cee1051</div>
                  </div>
                  <div>
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-2 flex items-center justify-between bg-gray-200">
                  <div>
                    <div>
                      wizardly-snyder-2a57a0{" "}
                      <span className="bg-green-200 p-0.5 rounded-md font-semibold">
                        Completed
                      </span>{" "}
                    </div>
                    <div>production: main@cee1051</div>
                  </div>
                  <div>
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-2 flex items-center justify-between">
                  <div>
                    <div>
                      wizardly-snyder-2a57a0{" "}
                      <span className="bg-green-200 p-0.5 rounded-md font-semibold">
                        Completed
                      </span>{" "}
                    </div>
                    <div>production: main@cee1051</div>
                  </div>
                  <div>
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded-xl p-4 shadow-md mt-4">
            <div className="p-2 flex flex-col lg:flex-row lg:items-center justify-between border-b-2 border-gray-300">
              <div className="flex items-center space-x-2">
                <div className="text-xl font-semibold">Members</div>
                <div>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded-lg text-center">
                Add members
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
                <div className="flex flex-col text-gray-800 text-lg">
                  <div className="font-semibold font-lg">philogynic</div>
                  <div className="text-sm">bimogame161@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-800 text-gray-100 ">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="flex flex-row text-gray-400 flex-wrap">
            <a className="mr-4 p-2 rounded-lg">Docs</a>
            <a className="mr-4 p-2 rounded-lg">Pricing</a>
            <a className="mr-4 p-2 rounded-lg">Support</a>
            <a className="mr-4 p-2 rounded-lg">News</a>
            <a className="mr-4 p-2 rounded-lg">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
}
