import Features from "@/components/Features";
import ChromeExtension from "@/components/ChromeExtension";
import Navbar from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Features/>
            <ChromeExtension />
            <Integrations />
            <Pricing />
            <Testimonials/>
        </>

    );
}
