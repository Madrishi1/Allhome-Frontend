import React from 'react';
import Button from '../Button.js';
import Header from '../Header.tsx';
import { Link } from 'react-router-dom';

type LoginProps = {
  title: string;
};

const Login: React.FC<LoginProps> = ({ title }) => {
    return (
        <div className="min-h-screen bg-[#111111A1] text-white ">
          <Header title={""} />
          <div className="bg-[#323031] text-white py-3 h-18">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">alHome</h1>
            </div>
          </div>
          <main className="py-12 ">
            <div className="max-w-4xl space-x-16 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className='mt-8 '>
                <h2 className="text-4xl font-bold mb-6">Alhome - largest Home retail shop in the world.</h2>
                <p className="mb-4">
                  Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit vestibulum risus, ac tincidunt diam lectus
                  id magna. Praesent maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui aliquet, non
                  ultricies nibh elementum. Nulla ac nulla dolor.
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
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
                      className="text-green-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Feature 1
                  </li>
                  <li className="flex items-center">
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
                      className="text-green-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Feature 2
                  </li>
                  <li className="flex items-center">
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
                      className="text-green-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Feature 3
                  </li>
                  <li className="flex items-center">
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
                      className="text-green-500 mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Feature 4
                  </li>
                </ul>
              </div>
              <div className=" bg-white rounded-lg shadow-lg p-6 mt-10">
              <div dir="ltr" data-orientation="horizontal">
                <div className="flex space-x-1 border-b">
                  <div className="w-full py-2.5 text-center font-medium text-gray-600 border-b-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-blue-500">
                    Sign In
                  </div>
                  <div className="w-full py-2.5 text-center font-medium text-gray-600 border-b-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-blue-500">
                    <Link to ="/Register">Register</Link>
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-y-4 mt-4">
                    <div className="flex flex-col">
                      <span className='text-sm mb-2 font-bold text-[#323031]'>Email Address / Phone Number</span>
                      <input
                        type="text"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Email Address / Phone Number"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className='text-sm mb-2 font-bold mt- text-[#323031]'>Password</span>
                      <input
                        type="password"
                        className="flex h-10 w-full  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <Button name="Process"/>
                    </div>
                    </form>
                  </div>
            </div>
            </div>
            </div>
            </div>
          </main>
        </div>
    );
}

export default Login;