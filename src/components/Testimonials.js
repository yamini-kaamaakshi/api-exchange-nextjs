import Image from "next/image"

export default  function  Testimonials(){
    return(
        <div className="bg-white py-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">What Our
                        Customers Say</p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    src="https://i.pravatar.cc/100?img=32"
                                    className="h-12 w-12 rounded-full"
                                    alt="Sarah Johnson"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold">Sarah Johnson</h4>
                                <p className="text-gray-400">Senior Recruiter, TechHire</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-600">API Exchange has revolutionized our recruitment process. We've
                                cut our data entry time by 70% and improved our candidate engagement significantly.</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    src="https://i.pravatar.cc/100?img=68"
                                    className="h-12 w-12 rounded-full"
                                    alt="Michael Chen"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold">Michael Chen</h4>
                                <p className="text-gray-400">Talent Acquisition, GlobalHR</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-600">The Chrome extension is incredibly easy to use. Our team was up
                                and running within minutes, and the integration with our CRM is seamless.</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    src="https://i.pravatar.cc/100?img=44"
                                    className="h-12 w-12 rounded-full"
                                    alt="Jessica Williams"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold">Jessica Williams</h4>
                                <p className="text-gray-400">Recruitment Director, StaffPro</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-600">The analytics dashboard gives us invaluable insights into our
                                recruitment funnel. We can now make data-driven decisions that improve our hiring
                                outcomes.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}