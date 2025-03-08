import Features from "@/components/Features";
import ChromeExtension from "@/components/ChromeExtension";
import Navbar from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Features/>
            <ChromeExtension />
            <Pricing />
            <Testimonials/>
        </>

    );
}
