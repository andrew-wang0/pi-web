import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr Capybara",
  description: "Messages from Mr Capybara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
