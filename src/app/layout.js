import "./globals.css";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

export const metadata = {
  title: "AgriGrid | Sustainable Farming",
  description: "Empowering Sustainable Agriculture Through Innovation",
  icons: {
    icon: "/logo.png",   // default favicon
    shortcut: "/logo.png",
    apple: "/logo.png",  // for iOS homescreen
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
