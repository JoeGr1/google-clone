import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "JG- google Clone",
  description: "Learn Next 13 2.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Footer />
    </html>
  );
}
