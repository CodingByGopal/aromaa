import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import Header from "@/components/header";
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="body"
        className={`${josefinSans.className}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className=" md:mt-20 mt-16">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
