import Head from 'next/head';

export default function Privacy() {
    return (
        <div className="bg-gray-50 text-gray-800">
            <Head>
                <title>API Exchange - Terms of Service</title>
                <meta name="description"
                      content="API Exchange helps you collect professional profile data and seamlessly integrate with your favorite CRM systems."/>
                <link rel="icon" href="https://cdn.apiexchange.site/apix_black.png"/>
                <meta property="og:title" content="API Exchange - Connect Your Tools"/>
                <meta property="og:description"
                      content="API Exchange helps you collect professional profile data and seamlessly integrate with your favorite CRM systems."/>
                <meta property="og:image" content="https://cdn.apiexchange.site/apix_black.png"/>
                <meta property="og:url" content="https://apiexchange.site"/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="API Exchange"/>
                <meta name="twitter:description" content="Connecting your recruitment tools for a seamless workflow."/>
                <meta name="twitter:image" content="https://cdn.apiexchange.site/apix_black.png"/>
            </Head>

            <Nav/>

            {/*-- Page Header*/}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                </div>
            </div>
            {/*-- Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="prose max-w-none">
                                <p className="text-gray-500">Last updated: March 6, 2024</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
                                <p>Welcome to API Exchange ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our API Exchange platform and related services.</p>
                                <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our platform.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                                <h3 className="text-lg font-medium mt-6 mb-3">2.1 Personal Data</h3>
                                <p>We may collect personal information that you voluntarily provide when using our platform, including but not limited to:</p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>Contact information (such as name, email address, phone number, and company name)</li>
                                    <li>Account credentials (username and password)</li>
                                    <li>Billing information (such as credit card details and billing address)</li>
                                    <li>Profile information (such as job title and profile picture)</li>
                                    <li>Communications and correspondence with us</li>
                                </ul>

                                <h3 className="text-lg font-medium mt-6 mb-3">2.2 Usage Data</h3>
                                <p>We may also collect information about how you use our platform, including:</p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>API usage and performance metrics</li>
                                    <li>Log data (such as IP address, browser type, pages visited, time and date of visit)</li>
                                    <li>Device information (such as device type, operating system)</li>
                                    <li>Analytics data related to your interactions with our platform</li>
                                </ul>

                                <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
                                <p>We use the information we collect for various purposes, including to:</p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>Provide, maintain, and improve our platform and services</li>
                                    <li>Process transactions and manage your account</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Send administrative information, such as updates, security alerts, and support messages</li>
                                    <li>Send marketing communications (with your consent where required by law)</li>
                                    <li>Monitor and analyze usage trends and preferences</li>
                                    <li>Detect, prevent, and address technical issues, fraud, and security breaches</li>
                                    <li>Comply with legal obligations</li>
                                </ul>

                                <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
                                <p>We may share your information with:</p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>Service providers who perform services on our behalf (such as hosting, payment processing, and analytics)</li>
                                    <li>Business partners with whom we offer co-branded services or joint marketing activities (with your consent where required)</li>
                                    <li>Third-party integrations you choose to enable through our platform</li>
                                    <li>Legal authorities when required by law, to protect our rights, or to protect the rights of our users</li>
                                </ul>
                                <p>We do not sell your personal information to third parties.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
                                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Retention</h2>
                                <p>We retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">7. Your Data Protection Rights</h2>
                                <p>Depending on your location, you may have certain rights regarding your personal data, which may include:</p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>Access to your personal data</li>
                                    <li>Correction of inaccurate or incomplete data</li>
                                    <li>Deletion of your personal data</li>
                                    <li>Restriction of processing of your personal data</li>
                                    <li>Data portability</li>
                                    <li>Objection to processing of your personal data</li>
                                    <li>Withdrawal of consent</li>
                                </ul>
                                <p>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">8. Cookies and Similar Technologies</h2>
                                <p>We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
                                <p>Our platform is not intended for children under the age of 16. We do not knowingly collect personal data from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">10. International Data Transfers</h2>
                                <p>Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from those in your country. We have implemented appropriate safeguards to protect your personal data when transferred internationally.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">11. Changes to This Privacy Policy</h2>
                                <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.</p>

                                <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact Us</h2>
                                <p>If you have any questions about this privacy policy or our data practices, please contact us at:</p>
                                <p className="mb-6">
                                    API Exchange<br/>
                                    Email: support@apiexchange.site<br/>
                                    Address: Suite 100, San Francisco, CA 94105, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function Nav() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 font-bold text-xl flex">
                <img src="https://cdn.apiexchange.site/apix_blue.png" alt="Logo" className="w-6 h-6 mr-2" />
                API Exchange
              </span>
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <a href="/#features" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Features</a>
                            <a href="/#integrations" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Integrations</a>
                            <a href="/#pricing" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Pricing</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href="https://forms.gle/FH4UR1gS8yhiDVwZ9" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Get Started
                        </a>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
