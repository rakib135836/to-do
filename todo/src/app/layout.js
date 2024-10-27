import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
