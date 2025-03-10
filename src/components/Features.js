import React from "react";

// Define features data as a fallback for SSR
const defaultFeatures = [
    { icon: "fas fa-puzzle-piece", title: "Chrome Extension", description: "Extract valuable profile data from professional platforms with our easy-to-use Chrome extension." },
    { icon: "fas fa-exchange-alt", title: "CRM Integration", description: "Connect directly with Bullhorn, JobAdder, Recruitly, and other popular CRM systems." },
    { icon: "fas fa-robot", title: "Automation", description: "Automate your workflow with custom triggers and actions based on extracted data." },
    { icon: "fas fa-chart-line", title: "Analytics", description: "Gain insights from your recruitment data with comprehensive analytics dashboards." },
    { icon: "fas fa-shield-alt", title: "Secure Data", description: "Your data is encrypted and securely stored according to industry best practices." },
    { icon: "fas fa-headset", title: "Priority Support", description: "Get help when you need it with our dedicated customer support team." }
];

export async function getServerSideProps() {
    return {
        props: {
            features: defaultFeatures
        }
    };
}

export default function Features({ features = defaultFeatures }) {
    return (
        <div id="features" className="py-36 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Powerful Tools for Recruiters</p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Everything you need to streamline your recruiting workflow.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i className={`${feature.icon} text-2xl`}></i>
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">{feature.title}</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
