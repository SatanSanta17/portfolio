import "./globals.css";

export const metadata = {
  title: "Burhanuddin Chitalwala",
  description:
    "Portfolio for Burhanuddin Chitalwala highlighting projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
