import Link from "next/link";

export default function Pricing() {
    return (
        <div id="pricing" className="py-36 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                        Pricing
                    </h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                        Plans for All Team Sizes
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Choose the plan that works best for your recruitment needs.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Starter Plan */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h3 className="text-2xl font-medium text-gray-900">Starter</h3>
                            <p className="mt-4 text-gray-500">
                                Perfect for individual recruiters and small teams.
                            </p>
                            <p className="mt-8">
                                <span className="text-4xl font-extrabold text-gray-900">$5</span>
                                <span className="text-base font-medium text-gray-500">/month</span>
                            </p>
                            <ul className="mt-8 space-y-4">
                                {["Chrome Extension", "1 CRM Integration", "1000 Profiles/month", "Email Support"].map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="px-6 py-4 bg-gray-50">
                            <Link href="https://forms.gle/FH4UR1gS8yhiDVwZ9" target="_blank" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Professional Plan */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500 transform scale-105">
                        <div className="px-6 py-8">
                            <h3 className="text-2xl font-medium text-gray-900">Professional</h3>
                            <p className="mt-4 text-gray-500">Ideal for growing recruitment teams.</p>
                            <p className="mt-8">
                                <span className="text-4xl font-extrabold text-gray-900">$69</span>
                                <span className="text-base font-medium text-gray-500">/month</span>
                            </p>
                            <ul className="mt-8 space-y-4">
                                {["Chrome Extension", "2 CRM Integrations", "10000 Profiles/month", "Priority Support", "Analytics Dashboard"].map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="px-6 py-4 bg-gray-50">
                            <Link href="https://forms.gle/FH4UR1gS8yhiDVwZ9" target="_blank" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h3 className="text-2xl font-medium text-gray-900">Enterprise</h3>
                            <p className="mt-4 text-gray-500">For large teams and agencies.</p>
                            <p className="mt-8">
                                <span className="text-4xl font-extrabold text-gray-900">$99</span>
                                <span className="text-base font-medium text-gray-500">/month</span>
                            </p>
                            <ul className="mt-8 space-y-4">
                                {[
                                    "Chrome Extension",
                                    "Unlimited CRM Integrations",
                                    "20000 Profiles/month",
                                    "24/7 Premium Support",
                                    "Advanced Analytics",
                                    "API Access",
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="px-6 py-4 bg-gray-50">
                            <Link href="https://forms.gle/FH4UR1gS8yhiDVwZ9" target="_blank" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};