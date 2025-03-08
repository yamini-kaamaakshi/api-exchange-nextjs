'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Integrations() {
    return (
        <section id="integrations" className="py-36 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Integrations</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                        Connect with Your Favorite CRMs
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        API Exchange seamlessly integrates with the tools you already use.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {/* Bullhorn*/}
                    <div
                        className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 h-full">
                        <div className="flex items-center justify-center h-full">
                            <Image className="h-12 object-contain"  width={250}
                                   height={50}
                                 src="https://vectorlogoseek.com/wp-content/uploads/2018/11/bullhorn-inc-vector-logo.png"
                                 alt="Bullhorn"/>
                        </div>
                        <p className="mt-3 text-sm font-medium text-gray-700">Bullhorn</p>
                    </div>

                    {/*JobAdder */}
                    <div
                        className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 h-full">
                        <div className="flex items-center justify-center h-full">
                            <Image className="h-12 object-contain"  width={250}
                                   height={50}
                                 src="https://jobadder.com/wp-content/uploads/2021/11/Blue.svg" alt="JobAdder"/>
                        </div>
                        <p className="mt-3 text-sm font-medium text-gray-700">JobAdder</p>
                    </div>

                    {/* Recruitly */}
                    <div
                        className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 h-full">
                        <div className="flex items-center justify-center h-full">
                            <Image className="h-12 object-contain"  width={250}
                                   height={50}
                                 src="https://recruitly.io/wp-content/uploads/2020/10/logo-2.png" alt="Recruitly"/>
                        </div>
                        <p className="mt-3 text-sm font-medium text-gray-700">Recruitly</p>
                    </div>

                    {/* HubSpot*/}
                    <div
                        className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 h-full">
                        <div className="flex items-center justify-center h-full">
                            <Image className="h-12 object-contain"  width={250}
                                   height={50}
                                 src="https://victorycto.com/wp-content/uploads/2023/04/2560px-HubSpot_Logo.png"
                                 alt="Zoho"/>
                        </div>
                        <p className="mt-3 text-sm font-medium text-gray-700">HubSpot</p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-500">
                        Don't see your CRM?{' '}
                        <Link href="https://forms.gle/FH4UR1gS8yhiDVwZ9" target="_blank"
                              className="text-blue-600 hover:text-blue-500">
                            Contact us
                        </Link>{' '}
                        to request an integration.
                    </p>
                </div>
            </div>
        </section>
    );
}
