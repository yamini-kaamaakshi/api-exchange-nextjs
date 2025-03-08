const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Connect Your Recruitment Tools
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
                        API Exchange helps you collect professional profile data and seamlessly integrate with your
                        favorite CRM systems.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#chrome-extension"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                        >
                            Get Chrome Extension
                        </a>
                    </div>
                </div>

                <div className="mt-10 lg:mt-0 lg:w-1/2">
                    <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl bg-white">

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;