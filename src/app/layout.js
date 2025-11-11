import "./globals.css";
import "./page.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // ✅ Import Footer

export const metadata = {
  title: "Bath Solution",
  description: "Modern bathroom designs, fittings, and accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* ✅ Added Footer here */}
      </body>
    </html>
  );
}
