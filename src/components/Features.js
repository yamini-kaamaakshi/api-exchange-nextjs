export default function Features(){
    return (
        <div id="features" className="py-36 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Powerful Tools for Recruiters</p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Everything you need to streamline your recruiting workflow.</p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i className="fas fa-puzzle-piece text-2xl"></i>
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Chrome Extension</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">Extract valuable profile data from professional platforms with our easy-to-use Chrome extension.</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i className="fas fa-exchange-alt text-2xl"></i>
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">CRM Integration</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">Connect directly with Bullhorn, JobAdder, Recruitly, and other popular CRM systems.</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i className="fas fa-robot text-2xl"></i>
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Automation</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">Automate your workflow with custom triggers and actions based on extracted data.</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i className="fas fa-chart-line text-2xl"></i>
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Analytics</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">Gain insights from your recruitment data with comprehensive analytics dashboards.</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i className="fas fa-shield-alt text-2xl"></i>
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Secure Data</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">Your data is encrypted and securely stored according to industry best practices.</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i className="fas fa-headset text-2xl"></i>
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Priority Support</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">Get help when you need it with our dedicated customer support team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

