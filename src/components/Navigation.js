import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and Navigation Links */}
                    <div className="flex items-center gap-12">
                        {/* Logo */}
                        <Link href="/" passHref legacyBehavior>
                            <a className="flex items-center gap-x-3">
                                <Image
                                    src="/favicon.io/images/apix_blue.png"
                                    alt="API Exchange Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                                <span className="text-blue-600 font-bold text-xl tracking-tight">API Exchange</span>
                            </a>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:space-x-10">
                            <Link
                                href="#features"
                                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                            >
                                Features
                            </Link>
                            <Link
                                href="#integrations"
                                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                            >
                                Integrations
                            </Link>
                            <Link
                                href="#pricing"
                                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                            >
                                Pricing
                            </Link>
                        </div>

                    </div>
                    {/* Action Buttons */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://forms.gle/FH4UR1gS8yhiDVwZ9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md shadow-sm transition-colors flex items-center group"
                        >
                            <span>Get Started</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-expanded="false"
                            aria-label="Open main menu"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                </div>


            </div>
        </nav>
    );
};

// Ensures SSR for the page that includes Navbar
export async function getServerSideProps() {
    return {
        props: {}, // Ensures the page is server-rendered
    };
}

export default Navbar;
