import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                            Connect Your Recruitment Tools
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
                            API Exchange helps you collect professional profile data and seamlessly integrate with your
                            favorite CRM systems.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link href="#chrome-extension"
                                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                                Get Chrome Extension
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">


                        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl bg-white">

                            <div
                                className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-transparent rounded-md flex items-center justify-center">
                                        <Image src="/images/apix_white_trans.png" alt="Logo" width={50} height={10}
                                               className="w-6 h-6"/>
                                    </div>
                                    <h1 className="text-white font-bold text-sm">API Exchange Dashboard</h1>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div
                                        className="w-8 h-8 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    </div>
                                    <div
                                        className="w-8 h-8 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center text-white text-xs">
                                        JS
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Content*/}
                            <div className="grid grid-cols-12 gap-4 p-4">
                                {/* Metrics Section*/}
                                <div className="col-span-8 grid grid-cols-3 gap-3">
                                    {/* Metric Card 1*/}
                                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                                        <div className="text-xs text-blue-500 font-medium">Active Profiles</div>
                                        <div className="text-xl font-bold mt-1">3,742</div>
                                        <div className="flex items-center mt-1 text-xs text-green-500">
                                            <span className="mr-1">↑</span>12%
                                            <span className="text-gray-400 ml-1">vs last month</span>
                                        </div>
                                    </div>

                                    {/* Metric Card 2*/}
                                    <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                                        <div className="text-xs text-indigo-500 font-medium">API Requests</div>
                                        <div className="text-xl font-bold mt-1">128K</div>
                                        <div className="flex items-center mt-1 text-xs text-green-500">
                                            <span className="mr-1">↑</span>8%
                                            <span className="text-gray-400 ml-1">vs last month</span>
                                        </div>
                                    </div>

                                    {/* Metric Card 3*/}
                                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                                        <div className="text-xs text-purple-500 font-medium">Integrations</div>
                                        <div className="text-xl font-bold mt-1">6</div>
                                        <div className="flex items-center mt-1 text-xs text-gray-500">
                                            Active across 3 CRMs
                                        </div>
                                    </div>

                                    {/* Chart*/}
                                    <div
                                        className="col-span-3 bg-gray-50 rounded-lg p-3 border border-gray-200 h-24 flex flex-col">
                                        <div className="text-xs text-gray-500 mb-2 flex justify-between">
                                            <span>Profile Collection</span>
                                            <span className="text-blue-500">+24%</span>
                                        </div>

                                        {/* Simple Chart Bars using Tailwind*/}
                                        <div className="flex items-end flex-1 space-x-1">
                                            <div className="bg-blue-400 w-1/12 h-1/3 rounded-t"></div>
                                            <div className="bg-blue-400 w-1/12 h-2/5 rounded-t"></div>
                                            <div className="bg-blue-400 w-1/12 h-1/4 rounded-t"></div>
                                            <div className="bg-blue-400 w-1/12 h-3/5 rounded-t"></div>
                                            <div className="bg-blue-400 w-1/12 h-1/2 rounded-t"></div>
                                            <div className="bg-blue-400 w-1/12 h-2/3 rounded-t"></div>
                                            <div className="bg-blue-400 w-1/12 h-1/2 rounded-t"></div>
                                            <div className="bg-blue-500 w-1/12 h-4/5 rounded-t"></div>
                                            <div className="bg-blue-500 w-1/12 h-3/4 rounded-t"></div>
                                            <div className="bg-blue-600 w-1/12 h-full rounded-t"></div>
                                            <div className="bg-blue-700 w-1/12 h-4/5 rounded-t"></div>
                                            <div className="bg-blue-600 w-1/12 h-5/6 rounded-t"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Panel*/}
                                <div className="col-span-4 grid grid-rows-2 gap-3">
                                    {/* Connected Apps */}
                                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                        <div className="text-xs text-gray-500 mb-2">Connected CRMs</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div
                                                    className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-2">
                                                    <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                                                </div>
                                                <span className="text-xs">Bullhorn</span>
                                                <span className="ml-auto text-xs text-green-500">Active</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div
                                                    className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mr-2">
                                                    <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                                                </div>
                                                <span className="text-xs">JobAdder</span>
                                                <span className="ml-auto text-xs text-green-500">Active</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div
                                                    className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center mr-2">
                                                    <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                                                </div>
                                                <span className="text-xs">Recruitly</span>
                                                <span className="ml-auto text-xs text-green-500">Active</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/*-- Activity*/}
                                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                        <div className="text-xs text-gray-500 mb-2">Recent Activity</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center text-xs">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                                <span className="text-gray-600">42 profiles imported</span>
                                                <span className="ml-auto text-gray-400">3m</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                                <span className="text-gray-600">Bullhorn sync complete</span>
                                                <span className="ml-auto text-gray-400">12m</span>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                                                <span className="text-gray-600">Chrome ext. updated</span>
                                                <span className="ml-auto text-gray-400">1h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;