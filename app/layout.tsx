import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { appConfig } from "@/lib/app-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${appConfig.appName} | ${appConfig.storeName}`,
    template: `%s | ${appConfig.appName}`,
  },
  description: appConfig.description,
  applicationName: appConfig.appName,
  icons: {
    icon: appConfig.iconPath,
    apple: appConfig.iconPath,
  },
  openGraph: {
    title: `${appConfig.appName} | ${appConfig.storeName}`,
    description: appConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: appConfig.primaryColor,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
