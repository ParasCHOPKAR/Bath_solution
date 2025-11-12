import "./globals.css";
import "./page.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons"; // ✅ Import FloatingButtons

export const metadata = {
  title: "Bath Solution",
  description: "Modern bathroom designs, fittings, and accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <FloatingButtons /> {/* ✅ Floating WhatsApp & Phone Buttons */}
        <Footer/> {/* ✅ Footer at the bottom */}
      </body>
    </html>
  );
}
