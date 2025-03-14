export default function ChromeExtension() {
    return (
        // Chrome Extension
        <div id="chrome-extension" className="py-36 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Google Chrome Extension
                        </h2>
                        <p className="mt-3 max-w-md text-lg text-gray-500">
                            Our Chrome extension makes it easy to collect professional profile data from various platforms.
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <span className="text-gray-600">One-click data extraction from professional profiles</span>
                            </li>
                            <li className="flex">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <span className="text-gray-600">Automatically format and organize contact information</span>
                            </li>
                            <li className="flex">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <span className="text-gray-600">Direct integration with your CRM system</span>
                            </li>
                            <li className="flex">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <span className="text-gray-600">Batch processing for multiple profiles</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <a href="https://forms.gle/FH4UR1gS8yhiDVwZ9" target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                <i className="fab fa-chrome mr-2"></i> Add to Chrome
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                        {/* Google Chrome Extension Feature Graphic */}
                        <div className="w-full bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl shadow-lg p-6 border border-gray-200">
                            {/* Header */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="flex items-center mb-4">
                                    {/* Chrome Logo */}
                                    <svg className="h-10 w-10 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <line x1="21.17" y1="8" x2="12" y2="8"></line>
                                        <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                                        <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                                    </svg>
                                    <h2 className="text-2xl font-bold text-gray-800">Chrome Extension</h2>
                                </div>
                                <p className="text-gray-600 text-center max-w-md">Enhance your browsing experience with our powerful Chrome extension</p>
                            </div>

                            {/* Feature Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                {/* Feature 1 */}
                                <div className="bg-white p-4 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
                                    <div className="bg-purple-100 p-3 rounded-full mb-3">
                                        <svg className="h-6 w-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                            <path d="M2 17l10 5 10-5"></path>
                                            <path d="M2 12l10 5 10-5"></path>
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-gray-800 mb-1">Easy Integration</h3>
                                    <p className="text-sm text-gray-600">Seamlessly integrates with your existing Chrome workflow</p>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white p-4 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
                                    <div className="bg-yellow-100 p-3 rounded-full mb-3">
                                        <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-gray-800 mb-1">Lightning Fast</h3>
                                    <p className="text-sm text-gray-600">Optimized performance with minimal browser impact</p>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white p-4 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
                                    <div className="bg-green-100 p-3 rounded-full mb-3">
                                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="2" y1="12" x2="22" y2="12"></line>
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-gray-800 mb-1">Global Access</h3>
                                    <p className="text-sm text-gray-600">Works anywhere you use Chrome, syncs across devices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
