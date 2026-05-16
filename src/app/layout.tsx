import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turk Sarayi - The Turkish Palace of Hyderabad",
  description: "Authentic Turkish Grills, Mandi & Desserts · Tolichowki, Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col selection:bg-secondary/30 selection:text-secondary">
        {children}
      </body>
    </html>
  );
}
