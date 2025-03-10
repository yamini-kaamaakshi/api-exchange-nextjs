import Image from "next/image";

// Define testimonials data
const testimonialsData = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Senior Recruiter, TechHire",
        avatarUrl: "https://i.pravatar.cc/100?img=32",
        content: "API Exchange has revolutionized our recruitment process. We've cut our data entry time by 70% and improved our candidate engagement significantly."
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Talent Acquisition, GlobalHR",
        avatarUrl: "https://i.pravatar.cc/100?img=68",
        content: "The Chrome extension is incredibly easy to use. Our team was up and running within minutes, and the integration with our CRM is seamless."
    },
    {
        id: 3,
        name: "Jessica Williams",
        role: "Recruitment Director, StaffPro",
        avatarUrl: "https://i.pravatar.cc/100?img=44",
        content: "The analytics dashboard gives us invaluable insights into our recruitment funnel. We can now make data-driven decisions that improve our hiring outcomes."
    }
];

// For Pages Router: This function runs on every request
export async function getServerSideProps() {
    return {
            props: {
                testimonialsData
            }
        };
    }

export default function Testimonials({ testimonials = testimonialsData, error = null }) {
    return (
        <div className="bg-white py-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                        Testimonials
                    </h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                        What Our Customers Say
                    </p>
                </div>

                {error && (
                    <div className="mt-8 text-center text-red-500">
                        {error}
                    </div>
                )}

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={testimonial.avatarUrl}
                                        className="h-12 w-12 rounded-full"
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                                    <p className="text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-600">{testimonial.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}