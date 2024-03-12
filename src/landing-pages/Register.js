import React from 'react';
import Button from '../Button';

function Register() {
    return (
        <div class="min-h-screen bg-[#F4F7FA] text-white ">
          <div class="bg-[#323031] text-white py-2 border h-13 border-[#645f5fa1]">
            <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h1 class="text-sm ">Welcome to ollcome</h1>
                <div class="flex items-center space-x-4">
                  <span class="text-sm">Eng</span>
                  <span class="text-sm">SAR</span>
                </div>
            </div>
          </div>

          <div class="bg-[#323031] text-white py-3 h-18">
            <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
              <h1 class="text-2xl font-bold">alHome</h1>
            </div>
          </div>
          <main class="py-12 h-lvh  bg-[#111111A1]">
            <div class="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className=' w-[] '>
                <h2 class="text-4xl font-bold mb-6">Alhome - largest Home retail shop in the world.</h2>
                <p class="mb-4">
                  Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit vestibulum risus, ac tincidunt diam lectus
                  id magna. Praesent maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui aliquet, non
                  ultricies nibh elementum. Nulla ac nulla dolor.
                </p>
                <ul class="list-none space-y-2">
                  <li class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-green-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Feature 1
                  </li>
                  <li class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-green-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Feature 2
                  </li>
                  <li class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-green-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Feature 3
                  </li>
                  <li class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-green-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Feature 4
                  </li>
                </ul>
              </div>
              <div class="w-[424px]  bg-white rounded-lg shadow-lg p-6 ml-[136px]">
              <div dir="ltr" data-orientation="horizontal">
                <div class="flex space-x-1 border-b">
                  <div class="w-full py-2.5 text-center font-medium text-gray-600 border-b-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-blue-500">
                    Sign In
                  </div>
                  <div class="w-full py-2.5 text-center font-medium text-gray-600 border-b-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-blue-500">
                    Register
                  </div>
                </div>
                <div>
                  <div>
                    <form class="space-y-4 mt-4">
                    <div class="flex flex-col">
                      <span className='text-sm mb-2 font-bold text-[#323031]'>Nmae</span>
                      <input
                        type="text"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        
                      />
                    </div>
                    <div class="flex flex-col">
                      <span className='text-sm mb-2 font-bold text-[#323031]'>Email Address </span>
                      <input
                        type="text"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      />
                    </div>
                    <div class="flex flex-col">
                      <span className='text-sm mb-2 font-bold text-[#323031]'>Phone Number</span>
                      <input
                        type="text"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      />
                    </div>


                    <div class="flex flex-col">
                      <span className='text-sm mb-2 font-bold mt- text-[#323031]'>Password</span>
                      <input
                        type="password"
                        class="flex h-10 w-full  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="8+ Charecter"
                      />
                    </div>
                    <div class="flex flex-col">
                      <span className='text-sm mb-2 font-bold mt- text-[#323031]'>Confirm Password</span>
                      <input
                        type="password"
                        class="flex h-10 w-full  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        
                      />
                    </div>
                    <div class="flex flex-col">
                    <Button name="Process"/>
                    
                    <label for="terms" class="ml-2 text-sm text-gray-600">
                        Do you agree to Alhome's Terms of Condition and Privacy Policy.
                    </label>
                    </div>
                    </form>
                  </div>
            </div>
            </div>
            </div>
            </div>
          </main>
          <footer class="py-1 h-auto bg-[#111111A1]" >

          </footer>
        </div>
    );
}

export default Register;