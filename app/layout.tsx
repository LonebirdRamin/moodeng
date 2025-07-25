import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-providers";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Mail, Phone, Printer } from "lucide-react";
import QRLine from "@/public/qr-line.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INGREDIENT FLAVORS CO.,LTD",
  description: "Formula Consultant and supply food ingredients",
};

const navbar: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "/#about",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Product",
    href: "/product",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Contact",
    href: "/contact",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="fixed h-16 w-full z-90 flex justify-center bg-transparent backdrop-blur-sm border-b border-solid border-black/[.08] dark:border-white/[.145]">
              <div className="fixed left-0 z-50 top-0 mx-4 my-2">
                <Link href="/#top">
                  <Image
                    src="/idf-logo.png"
                    alt="Logo"
                    width={100}
                    height={20}
                    className="h-12 w-auto grayscale brightness-400 contrast-200"
                  ></Image>
                </Link>
              </div>
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {navbar.map((page) => (
                    <NavigationMenuItem key={page.title}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={page.href}>{page.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
      <footer className="bg-slate-900">
        <div className="grid grid-cols-3 w-full py-4 px-20 text-sm gap-4">
          <div className="flex flex-col text-white h-fit gap-2 justify-center items-center">
            <h1 className="font-bold text-center">
              Ingredient Flavors Co., Ltd.
            </h1>
            <p className="leading-6 text-center">
              450/32. Anamai Ngamchareon Road, <br /> Takham, Bangkhunthian
              <br />
              Bangkok, 10150, Thailand
            </p>
          </div>
          <div className="flex flex-col text-white h-fit gap-2 justify-center items-center">
            <h1 className="text-md font-bold text-center">Contact Us</h1>
            <span className="flex flex-row items-center gap-2">
              <Phone className="inline" size={12} />
              <p className="text-sm">062-452-5642</p>
            </span>
            <span className="flex flex-row items-center gap-2">
              <Printer className="inline" size={12} />
              <p className="text-sm">02-116-9247</p>
            </span>
            <span className="flex flex-row items-center gap-2">
              <Mail className="inline" size={12} />
              <p className="text-sm">idf2558@gmail.com</p>
            </span>
          </div>
          <div className="flex flex-col text-white h-fit gap-2 justify-center items-center">
            <h1 className="text-md font-bold text-center">
              Line Direct Message
            </h1>
            <Image src={QRLine} alt="Line QR Code" height={100} width={100} />
          </div>
        </div>
        <div className="flex justify-center items-center bg-black/20 text-white py-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Querian. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
