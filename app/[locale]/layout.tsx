import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-providers";
import { routing } from "@/i18n/routing";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import LocaleSwitcher from "@/components/localeSwitcher";

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


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;4

  const t = await getTranslations('NavBar');

  const navbar: { title: string; href: string; description: string }[] = [
    {
      title: t('nav.about'),
      href: "/#about",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: t('nav.product'),
      href: "/product",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: t('nav.contact'),
      href: "/contact",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ];

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
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
            <div className="fixed right-0 z-50 mx-4 my-4">
              <LocaleSwitcher currentLocale={locale}/>
            </div>
          </div>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
