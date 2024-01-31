import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find Your Duo",
  description: "contact: viniciusdandrade01@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
