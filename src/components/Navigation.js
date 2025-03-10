import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="group flex items-center">
                            <Image
                                src="/images/apix_blue.png"
                                alt="API Exchange Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8 mr-3 group-hover:scale-105 transition-transform"
                            />
                            <span className="text-blue-600 font-bold text-xl tracking-tight group-hover:text-blue-700 transition-colors">API Exchange</span>
                        </Link>

                        <div className="hidden md:flex md:space-x-10">
                            <Link href="#features" className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Features</Link>
                            <Link href="#integrations" className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Integrations</Link>
                            <Link href="#pricing" className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Pricing</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="https://forms.gle/FH4UR1gS8yhiDVwZ9" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md shadow-sm transition-colors flex items-center group">
                            <span>Get Started</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>

                        <details className="md:hidden">
                            <summary className="rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 list-none cursor-pointer">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </summary>
                            <div className="md:hidden bg-white border-b border-gray-200 absolute left-0 right-0" id="mobile-menu">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600">Features</Link>
                                    <Link href="#integrations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600">Integrations</Link>
                                    <Link href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600">Pricing</Link>
                                    <Link href="https://forms.gle/FH4UR1gS8yhiDVwZ9" target="_blank" className="block w-full text-center my-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">Get Started</Link>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </nav>
    );
}