import Head from 'next/head';

export default function TermsOfService() {
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
                    <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
                </div>
            </div>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-gray-500">Last updated: March 6, 2025</p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
                            <p>
                                Welcome to API Exchange. These Terms of Service ("Terms") govern your access to and use
                                of the API Exchange
                                platform, services, and website (collectively, the "Services"). By accessing or using
                                our Services, you
                                agree to be bound by these Terms. If you do not agree to these Terms, you may not access
                                or use the
                                Services.
                            </p>
                            <p>
                                Please read these Terms carefully. They contain important information about your legal
                                rights, remedies,
                                and obligations.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">2. Definitions</h2>
                            <ul className="list-disc pl-6 mb-4">
                                <li>
                                    <strong>"API Exchange"</strong> (or "we," "our," or "us") refers to the company
                                    operating the API
                                    Exchange platform.
                                </li>
                                <li>
                                    <strong>"User"</strong> (or "you" or "your") refers to any individual or entity that
                                    accesses or uses
                                    our Services.
                                </li>
                                <li>
                                    <strong>"Content"</strong> refers to any information, data, text, software,
                                    graphics, messages, or other
                                    materials that are uploaded, transmitted, or displayed through our Services.
                                </li>
                                <li>
                                    <strong>"API"</strong> refers to Application Programming Interface, which is a set
                                    of protocols and tools
                                    for building software applications.
                                </li>
                            </ul>

                            <h2 className="text-xl font-semibold mt-8 mb-4">3. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these Terms at any time. If we make changes, we will
                                provide notice by
                                posting the updated Terms on our website and updating the "Last updated" date. Your
                                continued use of the
                                Services after the updated Terms are posted constitutes your acceptance of the modified
                                Terms.
                            </p>
                            <p>
                                For material changes to these Terms, we will make reasonable efforts to provide
                                additional notice, such as
                                an email to the email address associated with your account.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">4. Eligibility</h2>
                            <p>
                                To use our Services, you must be at least 18 years old and have the legal capacity to
                                enter into a binding
                                contract. If you are using the Services on behalf of an organization, you represent and
                                warrant that you
                                have the authority to bind that organization to these Terms.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">5. Account Registration</h2>
                            <p>
                                To access certain features of our Services, you may need to register for an account.
                                When you register,
                                you must provide accurate and complete information. You are responsible for maintaining
                                the security of
                                your account credentials and for all activities that occur under your account.
                            </p>
                            <p>You agree to:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Keep your password secure and confidential</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                                <li>Not share your account with anyone else</li>
                                <li>Not create more than one account unless explicitly permitted</li>
                            </ul>
                            <p>
                                We reserve the right to disable your account if we determine, in our sole discretion,
                                that you have
                                violated these Terms.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">6. API Usage</h2>
                            <p>Our platform provides access to various APIs. When using these APIs, you agree to:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Comply with any rate limits, usage restrictions, and documentation</li>
                                <li>Not attempt to bypass any security measures or access limits</li>
                                <li>Not use the APIs in a way that could harm our Services, other users, or third
                                    parties
                                </li>
                                <li>Not use the APIs for any illegal purposes or in violation of any applicable laws
                                </li>
                                <li>Respect the intellectual property rights of API Exchange and third-party API
                                    providers
                                </li>
                            </ul>
                            <p>
                                We reserve the right to modify, suspend, or discontinue any API at any time, with or
                                without notice.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">7. Subscription and Payment</h2>
                            <p>Some features of our Services require a paid subscription. By subscribing to a paid plan,
                                you agree to the following:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>You will be charged according to the pricing and billing terms displayed at the time
                                    of purchase
                                </li>
                                <li>Subscriptions automatically renew unless canceled before the renewal date</li>
                                <li>You authorize us to store your payment information and charge you according to your
                                    subscription plan
                                </li>
                                <li>Prices and features are subject to change, but we will provide notice of significant
                                    changes
                                </li>
                                <li>Refunds are provided according to our Refund Policy</li>
                            </ul>

                            <h2 className="text-xl font-semibold mt-8 mb-4">8. User Content</h2>
                            <p>
                                Users may be able to submit, upload, or transmit content through our Services. You
                                retain ownership of any
                                intellectual property rights you hold in that content.
                            </p>
                            <p>
                                By submitting content to our Services, you grant API Exchange a worldwide,
                                non-exclusive, royalty-free
                                license to use, reproduce, modify, adapt, publish, translate, and distribute such
                                content in connection
                                with providing and promoting the Services.
                            </p>
                            <p>You are solely responsible for all content you submit and warrant that:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>You own or have the necessary rights to the content</li>
                                <li>The content does not infringe on the rights of any third party</li>
                                <li>The content complies with these Terms and all applicable laws</li>
                            </ul>
                            <p>
                                We reserve the right to remove any content that violates these Terms or that we
                                determine is inappropriate,
                                in our sole discretion.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">9. Intellectual Property</h2>
                            <p>
                                The Services, including all content, features, and functionality, are owned by API
                                Exchange, its licensors,
                                or other providers and are protected by copyright, trademark, patent, and other
                                intellectual property laws.
                            </p>
                            <p>
                                These Terms do not grant you any right, title, or interest in the Services or our
                                intellectual property.
                                You may not copy, modify, distribute, sell, or lease any part of our Services without
                                our explicit
                                permission.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">10. Prohibited Activities</h2>
                            <p>You agree not to engage in any of the following prohibited activities:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Violating any applicable laws or regulations</li>
                                <li>Impersonating another person or entity</li>
                                <li>Collecting or harvesting user data without permission</li>
                                <li>Attempting to gain unauthorized access to any part of the Services</li>
                                <li>Using the Services to transmit malware, viruses, or other harmful code</li>
                                <li>Interfering with or disrupting the Services or servers or networks connected to the
                                    Services
                                </li>
                                <li>Using the Services to send unsolicited communications or advertisements</li>
                                <li>Engaging in any activity that could damage, disable, or impair the Services</li>
                            </ul>

                            <h2 className="text-xl font-semibold mt-8 mb-4">11. Third-Party Services</h2>
                            <p>
                                Our Services may include links to third-party websites, services, or content that are
                                not owned or
                                controlled by API Exchange. We do not endorse or assume any responsibility for any
                                third-party services or
                                content.
                            </p>
                            <p>
                                Your use of third-party services may be subject to separate terms and conditions. It is
                                your responsibility
                                to review and understand those terms.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">12. Disclaimer of Warranties</h2>
                            <p>
                                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                                EITHER EXPRESS OR
                                IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, API EXCHANGE DISCLAIMS ALL WARRANTIES,
                                INCLUDING ANY
                                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                                NON-INFRINGEMENT.
                            </p>
                            <p>
                                WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT
                                DEFECTS WILL BE
                                CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF
                                VIRUSES OR OTHER
                                HARMFUL COMPONENTS.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">13. Limitation of Liability</h2>
                            <p>
                                TO THE FULLEST EXTENT PERMITTED BY LAW, API EXCHANGE SHALL NOT BE LIABLE FOR ANY
                                INDIRECT, INCIDENTAL,
                                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF
                                PROFITS, DATA, USE,
                                GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR
                                INABILITY TO ACCESS OR
                                USE THE SERVICES; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (III)
                                ANY CONTENT
                                OBTAINED FROM THE SERVICES; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR
                                TRANSMISSIONS OR
                                CONTENT.
                            </p>
                            <p>
                                IN NO EVENT SHALL API EXCHANGE'S TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU HAVE PAID
                                TO API EXCHANGE IN
                                THE LAST 12 MONTHS OR, IF YOU HAVE NOT PAID API EXCHANGE, $100.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">14. Indemnification</h2>
                            <p>
                                You agree to indemnify, defend, and hold harmless API Exchange and its officers,
                                directors, employees,
                                agents, and affiliates from and against any and all claims, damages, obligations,
                                losses, liabilities,
                                costs, or debt, and expenses (including but not limited to attorney's fees) arising
                                from: (i) your use of
                                and access to the Services; (ii) your violation of any term of these Terms; (iii) your
                                violation of any
                                third-party right, including without limitation any copyright, property, or privacy
                                right; or (iv) any
                                claim that your content caused damage to a third party.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">15. Termination</h2>
                            <p>
                                We may terminate or suspend your account and access to the Services at any time, without
                                prior notice or
                                liability, for any reason whatsoever, including without limitation if you breach these
                                Terms.
                            </p>
                            <p>
                                Upon termination, your right to use the Services will immediately cease. All provisions
                                of these Terms which
                                by their nature should survive termination shall survive termination, including, without
                                limitation,
                                ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">16. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the State
                                of California,
                                without regard to its conflict of laws principles. Any disputes arising out of or
                                relating to these Terms or
                                the Services shall be subject to the exclusive jurisdiction of the state and federal
                                courts located in San
                                Francisco County, California.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">17. Severability</h2>
                            <p>
                                If any provision of these Terms is found to be unenforceable or invalid, that provision
                                will be limited or
                                eliminated to the minimum extent necessary so that the Terms will otherwise remain in
                                full force and effect
                                and enforceable.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">18. Waiver</h2>
                            <p>
                                The failure of API Exchange to enforce any right or provision of these Terms will not be
                                considered a waiver
                                of those rights. The waiver of any such right or provision will be effective only if in
                                writing and signed
                                by a duly authorized representative of API Exchange. Except as expressly set forth in
                                these Terms, the
                                exercise by either party of any of its remedies under these Terms will be without
                                prejudice to its other
                                remedies.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">19. Assignment</h2>
                            <p>
                                You may not assign or transfer these Terms, by operation of law or otherwise, without
                                API Exchange's prior
                                written consent. Any attempt by you to assign or transfer these Terms without such
                                consent will be null and
                                of no effect. API Exchange may assign or transfer these Terms, at its sole discretion,
                                without restriction.
                                Subject to the foregoing, these Terms will bind and inure to the benefit of the parties,
                                their successors
                                and permitted assigns.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">20. Entire Agreement</h2>
                            <p>
                                These Terms, together with the Privacy Policy and any other agreements expressly
                                incorporated by reference
                                herein, constitute the entire agreement between you and API Exchange concerning the
                                Services. These Terms
                                supersede all prior or contemporaneous communications, whether electronic, oral, or
                                written, between you
                                and API Exchange regarding the Services.
                            </p>

                            <h2 className="text-xl font-semibold mt-8 mb-4">21. Contact Information</h2>
                            <p>If you have any questions about these Terms, please contact us at:</p>
                            <p className="mb-6">
                                API Exchange<br/>
                                Email: support@apiexchange.site<br/>
                                Address: Suite 100, San Francisco, CA 94105, USA
                            </p>
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
