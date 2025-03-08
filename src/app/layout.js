import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: "API Exchange - Connect Your Tools",
    description: "API Exchange helps you collect professional profile data and seamlessly integrate with your favorite CRM systems.",
    icons: {
        icon: "https://cdn.apiexchange.site/apix_black.png",
    },
    openGraph: {
        title: "API Exchange - Connect Your Tools",
        description: "API Exchange helps you collect professional profile data and seamlessly integrate with your favorite CRM systems.",
        images: "https://cdn.apiexchange.site/apix_black.png",
        url: "https://apiexchange.site",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "API Exchange",
        description: "Connecting your recruitment tools for a seamless workflow.",
        images: "https://cdn.apiexchange.site/apix_black.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html className="scroll-smooth" lang="en">
        <body>
        {children}
        <Footer />
        </body>
        </html>
    );
}