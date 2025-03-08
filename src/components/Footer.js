import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">API Exchange LLC</h3>
                        <p className="text-gray-300">
                            Connecting your recruitment tools for a seamless workflow.
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <a href="https://x.com/apiexchangesite" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><Link href="#chrome-extension" className="text-gray-300 hover:text-white">Chrome Extension</Link></li>
                            <li><Link href="#integrations" className="text-gray-300 hover:text-white">CRM Integrations</Link></li>
                            <li><Link href="#pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Privacy</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/tos" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <p className="text-gray-300 text-center">© 2025 API Exchange. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;