import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JG- google Clone",
  description: "Learn Next 13 2.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
